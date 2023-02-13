import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import HeaderTitle from "../../components/HeaderTitle";
import { doc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import {
  addCommas,
  checkRole,
  hideString,
} from "../../../api/customHooks/generalHooks";
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
          <TouchableOpacity style={styles.moneyOption}>
            <SvgXml xml={receiveMoneyIcon()} width="21" height="21" />
            <Text style={styles.moneyOptionTxt}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moneyOption}>
            <SvgXml xml={withdrawMoneyIcon()} width="21" height="21" />
            <Text style={styles.moneyOptionTxt}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.moneyOption}>
            <SvgXml xml={transferMoneyIcon()} width="21" height="21" />
            <Text style={styles.moneyOptionTxt}>Transfer</Text>
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
            Transaction History
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

        {/*<View style={styles.fundMethods}>
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
        </View>*/}
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
  moneyOption: {
    alignItems: "center",
  },
  moneyOptionTxt: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    textAlign: "center",
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
    fontSize: 18,
    fontFamily: "PrimarySemiBold",
    marginBottom: 15,
  },
  pmTxt: {
    fontFamily: "PrimaryRegular",
  },
});
