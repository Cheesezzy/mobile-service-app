import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Transactions from "../../components/Transactions";
import colors from "../../config/colors";

const TransactionHistory = () => {
  return (

    <>
      <View style={styles.transactionHistoryContainer}>
        <Text style={styles.heading}>Transaction history</Text>
      </View>
      <View>
        <Transactions />
      </View>
    </>

  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  transactionHistoryContainer: {
    marginTop: 50,
  },
  heading: {
    fontFamily: "PrimaryBold",
    textAlign: "center",
    fontSize: 24,
    color: colors.greyDark,
  }
});
