import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";
import { ColorSpace } from "react-native-reanimated";
import colors from "../config/colors";
import { Thsnip1 } from "../../assets/svgs/svgs";
import { SvgXml } from "react-native-svg";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";
import { getDate } from "../../api/hooks/convertTimestamp";

interface Props {
  title: string;
  type: string;
  createdAt: any;
  price: string;
}

const Transactions = ({ title, createdAt, price, type }: Props) => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;
  return (
    <>
      <View style={styles.transactionContainer}>
        <View style={styles.transactionSection}>
          <View style={styles.imageContainer}>
            <SvgXml xml={Thsnip1()} width={22} height={22} />
          </View>

          <View style={styles.transactionBody}>
            <Text
              style={[
                styles.transactionName,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {title}
            </Text>
            <Text style={styles.transactionDate}>
              {createdAt && getDate(createdAt?.seconds, createdAt?.nanoseconds)}
            </Text>
          </View>
        </View>

        <Text
          style={[
            styles.transactionPrice,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          {"\u20A6"} {price}
        </Text>
      </View>
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    margin: 1,
    paddingTop: 20,
  },
  transactionSection: {
    flexDirection: "row",
  },
  transactionBody: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  imageContainer: {
    backgroundColor: "#F1F1F1",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
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
