import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Transactions from "../../components/Transactions";
import colors from "../../config/colors";
import NavigationBar from "./components/NavigationBar";
import { Thsnip1 } from "../../../assets/svgs/svgs";
import { Thsnip2 } from "../../../assets/svgs/svgs";
import { ScrollView } from "react-native-gesture-handler";

const TransactionHistory = () => {

  return (

    <>
      <NavigationBar title="Transaction history" />
      <View style={styles.transactionHistoryContainer}></View>

      <ScrollView>
        <Transactions image={Thsnip1()} title="Beauty’s Hairs And Nails" date="5, feb 2023" price="4500" />
        <Transactions image={Thsnip2()} title="Wema Bank" date="5, feb 2023" price="10,000" />
        <Transactions image={Thsnip1()} title="Lucy’s Catering Service" date="5, feb 2023" price="5,500" />
        <Transactions image={Thsnip1()} title="Lucy’s Catering Service" date="5, feb 2023" price="10,500" />
        <Transactions image={Thsnip1()} title="Lucy’s Catering Service" date="5, feb 2023" price="10,500" />
        <Transactions image={Thsnip1()} title="Lucy’s Catering Service" date="5, feb 2023" price="10,500" />

      </ScrollView>

    </>

  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  transactionHistoryContainer: {
    marginTop: 0,
    marginBottom: 50,
  },
});
