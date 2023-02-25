import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Transactions from "../../components/Transactions";
import colors from "../../config/colors";

const TransactionHistory = () => {

    const transaction = Array(20).fill(null);

    const renderItem = () => {
      return <Transactions/>;
    };

  return (

    <>
      <View style={styles.transactionHistoryContainer}>
        <Text style={styles.heading}>Transaction history</Text>
      </View>
      <FlatList 
        data = {transaction}
        renderItem = {renderItem}
        keyExtractor = {(_, index) => index.toString()}
      />
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
