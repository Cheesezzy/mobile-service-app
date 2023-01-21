import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import HeaderTitle from "../components/HeaderTitle";
import { doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import {
  addCommas,
  checkRole,
  hideString,
} from "../../api/customHooks/generalHooks";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { StatusBar } from "expo-status-bar";
import {
  bankIcon,
  cardIcon,
  hidePassIcon,
  showPassIcon,
} from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";

const PaymentsScreen = ({ navigation }: any) => {
  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);

  const [user] = useDocumentData(userRef);

  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);

  const [business, loading] = useDocumentData(businessRef);

  const [balVisible, setBalVisible] = useState(false);
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="Payments" profileURL="" />
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          },
        ]}
      >
        <View style={styles.balCon}>
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.balTxt}>Balance</Text>
            <Text
              style={[
                styles.balVal,
                balVisible
                  ? {
                      marginTop: 5,
                    }
                  : null,
              ]}
            >
              {balVisible ? "*" : "₦"}
              {user && hideString(user?.balance, balVisible)}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.showHideToggle}
            onPress={() => setBalVisible(!balVisible)}
          >
            <SvgXml
              xml={
                balVisible
                  ? showPassIcon(colors.black)
                  : hidePassIcon(colors.black)
              }
              width="30"
              height="30"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.fundMethods}>
          <Text
            style={[
              styles.pmSecTxt,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            Fund Wallet
          </Text>

          <TouchableOpacity
            style={styles.fundBank}
            onPress={() =>
              navigation.navigate("Pay", {
                method: "account_bank",
              })
            }
          >
            <SvgXml
              style={styles.icon}
              xml={bankIcon("")}
              width="21"
              height="21"
            />
            <Text
              style={[
                styles.pmTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Bank Transfer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.fundCard}
            onPress={() =>
              navigation.navigate("Pay", {
                method: "card",
              })
            }
          >
            <SvgXml
              style={styles.icon}
              xml={cardIcon("")}
              width="21"
              height="21"
            />
            <Text
              style={[
                styles.pmTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Debit/Credit card
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style={theme ? "dark" : "light"} />
      </View>
    </>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 15,
  },
  balCon: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: colors.lightPrimary,
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  balVal: {
    fontSize: 23,
    fontFamily: "Lato",
    color: colors.primary,
  },
  balTxt: {
    fontSize: 16,
    fontFamily: "LatoRegular",
    color: colors.lightGrey,
  },
  showHideToggle: {
    alignSelf: "center",
  },
  fundMethods: {
    marginTop: 20,
  },
  fundBank: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  fundCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  pmSecTxt: {
    fontSize: 15,
    fontFamily: "Lato",
    marginBottom: 15,
  },
  pmTxt: {
    fontFamily: "LatoRegular",
  },
});
