import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";
import { ColorSpace } from "react-native-reanimated";
import colors from "../config/colors";

const Transactions = () => {
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.transactionSection}>
        <Avatar
          size={31}
          rounded
          source={require("../../assets/blankProfilePic.png")}
        />

        <View style={styles.transactionBody}>
          <Text style={styles.transactionName}>Beauty's Hairs And Nails</Text>
          <Text style={styles.transactionDate}>5, Feb 2023</Text>
        </View>
      </View>

      <Text style={styles.transactionPrice}>{"\u20A6"}4500</Text>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    margin: 1,
  },
  transactionSection: {
    flexDirection: "row",
  },
  transactionBody: {
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
  },
  transactionDate: {
    color: colors.greyMain,
    fontSize: 12,
    marginTop: 2,
  },
  transactionPrice: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
  },
});
