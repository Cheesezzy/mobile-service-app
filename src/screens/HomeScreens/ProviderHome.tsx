import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";
import { SvgXml } from "react-native-svg";
import {
  creative,
  design,
  events,
  health,
  infotech,
  knowledge,
  professional,
  shieldCheck,
  shopping,
  social,
  sport,
} from "../../../assets/svgs/svgs";
import { categories } from "../../../provider/categoryData/categories";
import { searchIcon } from "../../../assets/icons/icons";
import RecentOrder from "../../components/RecentOrder";

interface Props {
  navigation: any;
  theme: boolean;
  business: any;
}

const ProviderHome = ({ navigation, theme, business }: Props) => {
  return (
    <>
      <>
        <View style={styles.pricing}>
          <Text style={styles.pricingSmTxt}>Base Price</Text>
          <Text style={styles.pricingTxt}>
            {business && business.chargeRate && `₦${business.chargeRate}`}
          </Text>

          <TouchableOpacity style={styles.pricingBtn}>
            <Text style={styles.pricingBtnTxt}>Change price</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orderStats}>
          <View style={styles.completed}>
            <View style={styles.completedIcon}>
              <SvgXml xml={shieldCheck()} width="21" height="21" />
            </View>

            <Text style={styles.completedTxt}>Completed Orders</Text>
            <Text style={styles.completedVal}>137</Text>
          </View>
          <View style={styles.pending}>
            <View style={styles.pendingIcon}>
              <SvgXml xml={shopping()} width="21" height="21" />
            </View>

            <Text style={styles.pendingTxt}>Pending Orders</Text>
            <Text style={styles.pendingVal}>12</Text>
          </View>
        </View>

        <View style={styles.titleCon}>
          <Text style={styles.title}>Recent Orders</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
      </>

      <View style={{ height: 70, width: "100%" }}>
      <RecentOrder />
      </View>
      <View style={{ height: 70, width: "100%" }}>
      <RecentOrder />
      </View>
      <View style={{ height: 70, width: "100%" }}>
      <RecentOrder />
      </View>
    </>
  );
};

export default ProviderHome;

const styles = StyleSheet.create({
  pricing: {
    flex: 1,
    height: 120,
    backgroundColor: colors.primary,
    padding: 12,
    margin: 4,
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  pricingSmTxt: {
    fontSize: 14,
    fontFamily: "PrimaryLight",
    color: colors.secondary,
  },
  pricingTxt: {
    fontSize: 18,
    fontFamily: "PrimarySemiBold",
    color: colors.secondary,
    marginBottom: 10,
  },
  pricingBtn: {
    width: "100%",
    padding: 8,
    paddingHorizontal: 18,
    backgroundColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  pricingBtnTxt: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    color: colors.secondary,
    textAlign: "center",
  },
  orderStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 10,
  },
  completed: {
    height: 110,
    width: "48%",
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
  },
  completedIcon: {
    width: 35,
    height: 35,
    padding: 10,
    marginRight: 15,
    marginBottom: 5,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primaryXLight,
  },
  completedTxt: {
    fontFamily: "PrimaryRegular",
    marginBottom: 5,
  },
  completedVal: {
    fontFamily: "PrimarySemiBold",
    fontSize: 18,
  },
  pending: {
    height: 110,
    width: "48%",
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
  },
  pendingIcon: {
    width: 35,
    height: 35,
    padding: 10,
    marginRight: 15,
    marginBottom: 5,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.orangeXLight,
  },
  pendingTxt: {
    fontFamily: "PrimaryRegular",
    marginBottom: 5,
  },
  pendingVal: {
    fontFamily: "PrimarySemiBold",
    fontSize: 18,
  },
  titleCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
  },
  viewAll: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.greyMain,
    textDecorationLine: "underline",
  },
  title: {
    margin: 5,
    fontFamily: "PrimarySemiBold",
    fontSize: 20,
    lineHeight: 28,
  },
  bigTxt: {
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
  },
});
