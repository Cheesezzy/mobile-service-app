import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Transactions from "../../components/Transactions";
import colors from "../../config/colors";
import NavigationBar from "./components/NavigationBar";

const TransactionHistory = () => {

  const transaction = Array(20).fill(null);

  const renderItem = () => {
    return <Transactions />;
  };

  return (

    <>
      <NavigationBar title="Transaction history" />
      <View style={styles.transactionHistoryContainer}>
      </View>
      <FlatList
        data={transaction}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </>

  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  transactionHistoryContainer: {
    marginTop: 0,
    marginBottom: 25,
  },
  heading: {
    fontFamily: "PrimaryBold",
    textAlign: "center",
    fontSize: 24,
    color: colors.greyDark,
  }
});
