import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Transactions from "../../components/Transactions";
import colors from "../../config/colors";
import { Thsnip1 } from "../../../assets/svgs/svgs";
import { Thsnip2 } from "../../../assets/svgs/svgs";
import { ScrollView } from "react-native-gesture-handler";
import HeaderTitle from "../../components/HeaderTitle";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import { useSelector } from "react-redux";

const TransactionHistory = () => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;
  return (
    <>
      <HeaderTitle user="" title="" profileURL="" />

      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
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
          price="10,500"
        />
        <Transactions
          image={Thsnip1()}
          title="Lucy’s Catering Service"
          date="5, feb 2023"
          price="10,500"
        />
        <Transactions
          image={Thsnip1()}
          title="Lucy’s Catering Service"
          date="5, feb 2023"
          price="10,500"
        />
        <View style={{ height: 100, width: "100%" }} />
      </ScrollView>
    </>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
