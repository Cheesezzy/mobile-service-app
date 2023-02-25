import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import HeaderTitle from "../../components/HeaderTitle";
import { doc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { hideString } from "../../../api/customHooks/generalHooks";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import { StatusBar } from "expo-status-bar";
import {
  bankIcon,
  cardIcon,
  hidePassIcon,
  receiveMoneyIcon,
  showPassIcon,
  transferMoneyIcon,
  withdrawMoneyIcon,
} from "../../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import Transactions from "../../components/Transactions";


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
      <HeaderTitle title="Payments" profileURL="" user="" />
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <View style={{}}>
          <TouchableOpacity style={styles.addCard}>
            <Text style={styles.addCardTxt}>Add Card</Text>
          </TouchableOpacity>
        </View>

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
                  ? showPassIcon(colors.darkTxt)
                  : hidePassIcon(colors.darkTxt)
              }
              width="30"
              height="30"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.moneyOptions}>
          <TouchableOpacity
            style={[styles.moneyOptionBtnWire, { marginRight: 10 }]}
            onPress={() => navigation.navigate("PayStatus")}
          >
            <SvgXml xml={withdrawMoneyIcon()} width="18" height="18" />
            <Text style={[styles.moneyOptionTxt, { color: colors.primary }]}>
              Withdraw
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.moneyOptionBtn}
            onPress={() => navigation.navigate("Fund")}
          >
            <SvgXml xml={receiveMoneyIcon()} width="18" height="18" />
            <Text style={[styles.moneyOptionTxt, { color: colors.darkTxt }]}>
              Fund
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.history}>
          <Text
            style={[
              styles.pmSecTxt,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            Transaction History
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Transaction History")}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        {Array(20).fill(null).map((_, i) => (<Transactions />
        ))}
        <StatusBar style={theme ? "dark" : "light"} />
      </View>
    </>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  addCard: {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.greyMid,
    borderRadius: 5,
  },
  addCardTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
  },
  balCon: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: colors.black,
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  balVal: {
    fontSize: 23,
    fontFamily: "PrimarySemiBold",
    color: colors.darkTxt,
  },
  balTxt: {
    fontSize: 16,
    fontFamily: "PrimaryRegular",
    color: colors.darkTxt,
  },
  showHideToggle: {
    alignSelf: "center",
  },
  moneyOptions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  moneyOptionBtn: {
    width: 90,
    height: 30,
    backgroundColor: colors.black,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  moneyOptionBtnWire: {
    width: 90,
    height: 30,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  moneyOptionTxt: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    textAlign: "center",
    marginLeft: 5,
  },
  history: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAll: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    textDecorationLine: "underline",
    bottom: 1,
  },
  pmSecTxt: {
    fontSize: 18,
    fontFamily: "PrimarySemiBold",
  },
  pmTxt: {
    fontFamily: "PrimaryRegular",
  },
});
