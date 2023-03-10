import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import HeaderTitle from "../../components/HeaderTitle";
import { doc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { hideString } from "../../../api/hooks/generalHooks";
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
import { Thsnip1 } from "../../../assets/svgs/svgs";
import { Thsnip2 } from "../../../assets/svgs/svgs";

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
      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <View style={styles.balCon}>
          <View style={styles.balValCon}>
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
              <SvgXml
                xml={withdrawMoneyIcon(colors.darkTxt)}
                width="18"
                height="18"
              />
              <Text style={[styles.moneyOptionTxt, { color: colors.darkTxt }]}>
                Withdraw
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.moneyOptionBtn}
              onPress={() => navigation.navigate("Fund")}
            >
              <SvgXml xml={receiveMoneyIcon()} width="18" height="18" />
              <Text style={[styles.moneyOptionTxt, { color: colors.black }]}>
                Fund
              </Text>
            </TouchableOpacity>
          </View>
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

          <TouchableOpacity
            onPress={() => navigation.navigate("Transaction History")}
          >
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Transactions
            image={Thsnip1()}
            title="Beauty’s Hairs And Nails"
            date="5, feb 2023"
            price="4500"
          />
          <Transactions
            image={Thsnip2()}
            title="Wema Bank"
            date="5, feb 2023"
            price="10,000"
          />
          <Transactions
            image={Thsnip1()}
            title="Lucy’s Catering Service"
            date="5, feb 2023"
            price="5,500"
          />
          <Transactions
            image={Thsnip1()}
            title="Lucy’s Catering Service"
            date="5, feb 2023"
            price="5,500"
          />
        </View>
        <View style={{ height: 80, width: "100%" }} />
        <StatusBar style={theme ? "dark" : "light"} />
      </ScrollView>
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
    backgroundColor: colors.black,
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  balValCon: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
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
    justifyContent: "space-between",
  },
  moneyOptionBtn: {
    width: "45%",
    height: 30,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  moneyOptionBtnWire: {
    width: "45%",
    height: 30,
    borderWidth: 1,
    borderColor: colors.secondary,
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
