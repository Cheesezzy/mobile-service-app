import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import HeaderTitle from "../components/HeaderTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { StatusBar } from "expo-status-bar";
import { SvgXml } from "react-native-svg";
import { hidePassIcon, showPassIcon } from "../../assets/icons/icons";
import { hideString } from "../../api/hooks/generalHooks";

const EarningsScreen = () => {
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
      <HeaderTitle user="" title="Earnings" profileURL="" />
      <ScrollView
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
                  ? showPassIcon(colors.darkTxt)
                  : hidePassIcon(colors.darkTxt)
              }
              width="30"
              height="30"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.analytics}>
          <Text
            style={[
              styles.analyticsHead,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            Analytics
          </Text>
          <View style={styles.analyticsCon}>
            <View style={[styles.analyticsItem, styles.firstStat]}>
              <Text
                style={[
                  styles.analyticsItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Earnings in December
              </Text>

              <Text
                style={[
                  styles.analyticsItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.monthlyEarnings}
              </Text>
            </View>
            <View style={styles.analyticsItem}>
              <Text
                style={[
                  styles.analyticsItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Avg. booking price
              </Text>

              <Text
                style={[
                  styles.analyticsItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.avgBookingPrice}
              </Text>
            </View>
            <View style={styles.analyticsItem}>
              <Text
                style={[
                  styles.analyticsItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Active bookings
              </Text>

              <Text
                style={[
                  styles.analyticsItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.activeBookings}
              </Text>
            </View>
            <View style={styles.analyticsItem}>
              <Text
                style={[
                  styles.analyticsItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Available for cash out
              </Text>

              <Text
                style={[
                  styles.analyticsItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{user && user.balance}
              </Text>
            </View>
            <View style={styles.analyticsItem}>
              <Text
                style={[
                  styles.analyticsItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Completed bookings
              </Text>

              <Text
                style={[
                  styles.analyticsItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.completedBookings}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.revenues}>
          <Text
            style={[
              styles.revenuesHead,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            Revenues
          </Text>
          <View style={styles.revenuesCon}>
            <View style={[styles.revenuesItem, styles.firstStat]}>
              <Text
                style={[
                  styles.revenuesItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Cancelled bookings
              </Text>

              <Text
                style={[
                  styles.revenuesItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.cancelledBookings}
              </Text>
            </View>
            <View style={styles.revenuesItem}>
              <Text
                style={[
                  styles.revenuesItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Pending clearance
              </Text>

              <Text
                style={[
                  styles.revenuesItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.pendingClearance}
              </Text>
            </View>
            <View style={styles.revenuesItem}>
              <Text
                style={[
                  styles.revenuesItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Withdrawn
              </Text>

              <Text
                style={[
                  styles.revenuesItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.withdrawn}
              </Text>
            </View>
            <View style={styles.revenuesItem}>
              <Text
                style={[
                  styles.revenuesItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Used for hiring
              </Text>

              <Text
                style={[
                  styles.revenuesItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.usedToHire}
              </Text>
            </View>
            <View style={styles.revenuesItem}>
              <Text
                style={[
                  styles.revenuesItemTxtA,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Cleared
              </Text>

              <Text
                style={[
                  styles.revenuesItemTxtB,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                ₦{business?.earnings?.cleared}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 50, width: "100%" }} />
        <StatusBar style={theme ? "dark" : "light"} />
      </ScrollView>
    </>
  );
};

export default EarningsScreen;

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
  analytics: {},
  analyticsHead: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
  },
  analyticsCon: {
    paddingVertical: 20,
  },
  analyticsItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  firstStat: {
    marginTop: 0,
  },
  analyticsItemTxtA: {
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },
  analyticsItemTxtB: {
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },

  revenues: {
    marginTop: 25,
  },
  revenuesHead: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
  },
  revenuesCon: {
    paddingVertical: 20,
  },
  revenuesItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  revenuesItemTxtA: {
    fontSize: 13,
    fontFamily: "PrimarySemiBold",
  },
  revenuesItemTxtB: {
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },
});
