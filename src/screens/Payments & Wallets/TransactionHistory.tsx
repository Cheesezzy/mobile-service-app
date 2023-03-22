import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Transactions from "../../components/Transactions";
import colors from "../../config/colors";
import { Thsnip1, waiting } from "../../../assets/svgs/svgs";
import { Thsnip2 } from "../../../assets/svgs/svgs";
import { ScrollView } from "react-native-gesture-handler";
import HeaderTitle from "../../components/HeaderTitle";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SvgXml } from "react-native-svg";

const TransactionHistory = () => {
  const [User] = useAuthState(auth);

  const transactionsRef =
    User && collection(db, "users", User?.uid, "transactionHistory");
  const [transactions, loading] = useCollectionData(transactionsRef);

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
        {transactions && transactions.length > 0
          ? transactions.map((transaction, i) => (
              <Transactions
                type={transaction.type}
                title={transaction.title}
                createdAt={transaction.createdAt}
                price={transaction.price}
              />
            ))
          : !loading && (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme
                    ? colors.secondarySmoke
                    : colors.blackSmoke,
                }}
              >
                <SvgXml xml={waiting()} width={"100%"} height={"40%"} />
                <Text
                  style={{
                    fontFamily: "LatoRegular",
                    marginTop: 10,
                    color: theme ? colors.black : colors.darkTxt,
                  }}
                >
                  You do not have any orders yet
                </Text>
              </View>
            )}

        <View style={{ height: 100, width: "100%" }} />
      </ScrollView>
    </>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  transactionsTxt: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    margin: 5,
    marginLeft: 20,
  },
});
