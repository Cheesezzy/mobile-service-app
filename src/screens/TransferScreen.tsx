import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { Avatar } from "@rneui/themed";
import { SvgXml } from "react-native-svg";
import { backIcon, deleteIcon } from "../../assets/icons/icons";
import { StatusBar } from "expo-status-bar";

const TransferScreen = ({ route, navigation }: any) => {
  const { business } = route.params;

  const [displayAmount, setDisplayAmount] = useState<any[]>([]);

  const handleInput = (input: any, method: string) => {
    const amount: any[] = [];

    if (method === "add") {
      amount.push(input);
      setDisplayAmount((prev: any) => [...prev, amount.join("")]);
    } else setDisplayAmount((prev: any) => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.inputDisplayTxt}>₦{displayAmount}</Text>
          ) : (
            <Text style={styles.inputDisplayPh}>Type in the amount (₦)</Text>
          )}
        </View>
        <Text style={styles.balance}>Available Balance: ₦150,000</Text>
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
          onPress={() => handleInput("", "delete")}
          style={styles.inputBtn}
        >
          <SvgXml
            xml={deleteIcon(colors.primary)}
            width="14"
            height="16"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => null}
        disabled={displayAmount.length <= 0}
        style={[
          styles.inputBtnSend,
          {
            opacity: displayAmount.length <= 0 ? 0.5 : 1,
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
    fontFamily: "Lato",
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
    fontFamily: "Lato",
    fontSize: 18,
  },
  inputDisplayPh: {
    fontFamily: "LatoRegular",
    fontSize: 15,
    opacity: 0.2,
  },
  balance: {
    fontSize: 11,
    fontFamily: "Lato",
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
    height: 58,
    width: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 58,
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 15,
    marginVertical: 5,
  },
  val: {
    fontFamily: "Lato",
    color: colors.primary,
  },
  inputBtnSend: {
    height: 50,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    marginTop: 10,
  },
  sendTxt: {
    fontFamily: "Lato",
    color: colors.secondary,
  },
});
