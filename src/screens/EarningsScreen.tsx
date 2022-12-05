import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

const EarningsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.balCon}>
        <Text style={styles.balVal}>NGN 150,000</Text>
        <Text style={styles.balTxt}>Balance</Text>
      </View>

      <View style={styles.analytics}>
        <Text style={styles.analyticsHead}>Analytics</Text>
        <View style={styles.analyticsCon}>
          <View style={[styles.analyticsItem, styles.firstStat]}>
            <Text style={styles.analyticsItemTxtA}>Earnings in December</Text>

            <Text style={styles.analyticsItemTxtB}>NGN 10,000</Text>
          </View>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsItemTxtA}>Avg. booking price</Text>

            <Text style={styles.analyticsItemTxtB}>NGN 1000</Text>
          </View>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsItemTxtA}>Active bookings</Text>

            <Text style={styles.analyticsItemTxtB}>NGN 1000</Text>
          </View>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsItemTxtA}>Available for cash out</Text>

            <Text style={styles.analyticsItemTxtB}>NGN 100,000</Text>
          </View>
          <View style={styles.analyticsItem}>
            <Text style={styles.analyticsItemTxtA}>Completed bookings</Text>

            <Text style={styles.analyticsItemTxtB}>NGN 150,000</Text>
          </View>
        </View>
      </View>

      <View style={styles.revenues}>
        <Text style={styles.revenuesHead}>Revenues</Text>
        <View style={styles.revenuesCon}>
          <View style={[styles.revenuesItem, styles.firstStat]}>
            <Text style={styles.revenuesItemTxtA}>Cancelled bookings</Text>

            <Text style={styles.revenuesItemTxtB}>NGN 400</Text>
          </View>
          <View style={styles.revenuesItem}>
            <Text style={styles.revenuesItemTxtA}>Pending clearance</Text>

            <Text style={styles.revenuesItemTxtB}>NGN 10,000</Text>
          </View>
          <View style={styles.revenuesItem}>
            <Text style={styles.revenuesItemTxtA}>Withdraw</Text>

            <Text style={styles.revenuesItemTxtB}>NGN 500</Text>
          </View>
          <View style={styles.revenuesItem}>
            <Text style={styles.revenuesItemTxtA}>Used for hiring</Text>

            <Text style={styles.revenuesItemTxtB}>NGN 20,000</Text>
          </View>
          <View style={styles.revenuesItem}>
            <Text style={styles.revenuesItemTxtA}>Cleared</Text>

            <Text style={styles.revenuesItemTxtB}>NGN 150,000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EarningsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  balCon: {
    alignItems: "center",
    padding: 20,
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
    marginTop: 10,
  },
  analytics: {},
  analyticsHead: {
    fontFamily: "LatoRegular",
    color: colors.lightGrey,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  analyticsCon: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
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
    fontFamily: "LatoRegular",
  },
  analyticsItemTxtB: {
    fontSize: 13,
    fontFamily: "LatoRegular",
  },

  revenues: {
    marginTop: 25,
  },
  revenuesHead: {
    fontFamily: "LatoRegular",
    color: colors.lightGrey,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  revenuesCon: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  revenuesItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 20,
    marginTop: 15,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  revenuesItemTxtA: {
    fontSize: 13,
    fontFamily: "Lato",
  },
  revenuesItemTxtB: {
    fontSize: 13,
    fontFamily: "LatoRegular",
  },
});
