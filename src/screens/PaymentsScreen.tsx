import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import HeaderTitle from "../components/HeaderTitle";

const PaymentsScreen = () => {
  return (
    <>
      <HeaderTitle title="Payments" />
      <View style={styles.container}>
        <View style={styles.balCon}>
          <Text style={styles.balTxt}>Balance</Text>
          <Text style={styles.balVal}>₦150,000</Text>
        </View>

        <View style={styles.paymentMethods}>
          <Text style={styles.pmSecTxt}>Payment methods</Text>

          <View style={styles.paymentBank}>
            <Text style={styles.pmTxt}>Bank</Text>
          </View>

          <View style={styles.paymentCard}>
            <Text style={styles.pmTxt}>Debit/Credit card</Text>
          </View>
        </View>
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
    alignSelf: "center",
    justifyContent: "center",
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
    marginTop: 10,
  },
  paymentMethods: {},
  pmSecTxt: {
    fontSize: 15,
    fontFamily: "Lato",
    marginBottom: 15,
  },
  paymentBank: {
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  paymentCard: {
    padding: 15,
    paddingLeft: 0,
  },
  pmTxt: {
    fontFamily: "LatoRegular",
  },
});
