import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import HeaderTitle from "../components/HeaderTitle";

const PaymentsScreen = ({ navigation }: any) => {
  return (
    <>
      <HeaderTitle title="Payments" />
      <View style={styles.container}>
        <View style={styles.balCon}>
          <Text style={styles.balTxt}>Balance</Text>
          <Text style={styles.balVal}>₦150,000</Text>
        </View>

        <View style={styles.fundMethods}>
          <Text style={styles.pmSecTxt}>Fund Wallet</Text>

          <TouchableOpacity
            style={styles.fundBank}
            onPress={() =>
              navigation.navigate("Pay", {
                method: "account_bank",
              })
            }
          >
            <Text style={styles.pmTxt}>Bank Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.fundCard}
            onPress={() =>
              navigation.navigate("Pay", {
                method: "card",
              })
            }
          >
            <Text style={styles.pmTxt}>Debit/Credit card</Text>
          </TouchableOpacity>
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
  fundMethods: {
    marginTop: 20,
  },
  fundBank: {
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  fundCard: {
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
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
