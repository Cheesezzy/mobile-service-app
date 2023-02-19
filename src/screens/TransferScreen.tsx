import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../config/colors";
import { Avatar } from "@rneui/themed";
import { SvgXml } from "react-native-svg";
import { backIcon, deleteIcon } from "../../assets/icons/icons";
import { StatusBar } from "expo-status-bar";
import { doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { addCommas, checkRole } from "../../api/customHooks/generalHooks";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { transferFunds } from "../../api/database";

const buttonSize = Dimensions.get("window").width * 0.18;

const TransferScreen = ({ route, navigation }: any) => {
  const { business, businessUser } = route.params;

  const [displayAmount, setDisplayAmount] = useState("");

  const handleInput = (input: any, method: string) => {
    if (method === "add") {
      setDisplayAmount((prev) => prev + input);
    } else if (method === "delete") {
      setDisplayAmount((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    console.log(displayAmount);
  }, [displayAmount]);

  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);

  const [user] = useDocumentData(userRef);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  const handleTransfer = () => {
    console.log("clicked");
    if (
      User?.uid &&
      business.userId &&
      user &&
      user.balance &&
      businessUser.balance
    ) {
      transferFunds(
        User?.uid,
        business.userId,
        +user.balance,
        businessUser.balance,
        +displayAmount
      );
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme ? colors.secondary : colors.blackSmoke,
        },
      ]}
    >
      <View style={styles.transferTo}>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.goBack}>
            <SvgXml
              xml={backIcon(colors.secondary)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Avatar
            size={50}
            rounded
            source={{ uri: "https://picsum.photos/200" }}
          />
        </View>
        <Text style={styles.businessName}>To {business.name}</Text>
      </View>
      <View style={styles.balanceCon}>
        <View style={styles.inputDisplay}>
          {displayAmount.length > 0 ? (
            <Text
              style={[
                styles.inputDisplayTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              ₦{displayAmount}
            </Text>
          ) : (
            <Text
              style={[
                styles.inputDisplayPh,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Type in the amount, min. ₦50.00
            </Text>
          )}
        </View>
        <Text style={styles.balance}>
          Available Balance: ₦{user && addCommas(user?.balance)}
        </Text>
      </View>
      <View style={styles.inputBtnsRow}>
        <TouchableOpacity
          onPress={() => handleInput(1, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(2, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(3, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputBtnsRow}>
        <TouchableOpacity
          onPress={() => handleInput(4, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(5, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(6, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputBtnsRow}>
        <TouchableOpacity
          onPress={() => handleInput(7, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(8, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(9, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputBtnsRow}>
        <TouchableOpacity
          onPress={() => handleInput(".", "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(0, "add")}
          style={styles.inputBtn}
        >
          <Text style={styles.val}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleInput(null, "delete")}
          style={styles.inputBtn}
        >
          <SvgXml xml={deleteIcon(colors.primary)} width="14" height="16" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleTransfer}
        disabled={
          +displayAmount >= 50 && displayAmount.length > 0 ? false : true
        }
        style={[
          styles.inputBtnSend,
          {
            opacity: +displayAmount >= 50 && displayAmount.length > 0 ? 1 : 0.5,
          },
        ]}
      >
        <Text style={styles.sendTxt}>Send</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
  },
  transferTo: {
    height: "25%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 15,
    paddingTop: 50,
  },
  flex: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  goBack: {
    position: "absolute",
    left: 0,
  },

  businessName: {
    fontSize: 15,
    fontFamily: "PrimarySemiBold",
    marginTop: 10,
    color: colors.secondary,
  },
  balanceCon: {
    width: "100%",
    alignItems: "center",
  },
  inputDisplay: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.secondarySmoke,
    borderBottomWidth: 1,
  },
  inputDisplayTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 18,
  },
  inputDisplayPh: {
    fontFamily: "PrimaryRegular",
    fontSize: 13,
    opacity: 0.2,
  },
  balance: {
    fontSize: 11,
    fontFamily: "PrimarySemiBold",
    color: colors.lightBlack,
    marginTop: 10,
    marginBottom: 15,
  },
  inputBtnsRow: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  inputBtn: {
    height: buttonSize,
    width: buttonSize,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: buttonSize,
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 15,
    marginVertical: 5,
  },
  val: {
    fontFamily: "PrimarySemiBold",
    color: colors.primary,
  },
  inputBtnSend: {
    height: buttonSize - 5,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    marginTop: 10,
  },
  sendTxt: {
    fontFamily: "PrimarySemiBold",
    color: colors.secondary,
  },
});
