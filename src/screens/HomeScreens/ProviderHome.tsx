import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import { SvgXml } from "react-native-svg";
import RecentOrder from "../../components/RecentOrder";
import { shieldCheck, shopping } from "../../../assets/svgs/svgs";
import { useEffect } from "react";

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
          <View
            style={[
              styles.completed,
              {
                backgroundColor: theme ? colors.secondary : colors.blackSmoke,
              },
            ]}
          >
            <View style={styles.completedIcon}>
              <SvgXml xml={shieldCheck()} width="21" height="21" />
            </View>

            <Text
              style={[
                styles.completedTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Completed Orders
            </Text>
            <Text
              style={[
                styles.completedVal,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {business && business.completedBookings
                ? business.completedBookings
                : 0}
            </Text>
          </View>
          <View
            style={[
              styles.pending,
              {
                backgroundColor: theme ? colors.secondary : colors.blackSmoke,
              },
            ]}
          >
            <View style={styles.pendingIcon}>
              <SvgXml xml={shopping()} width="21" height="21" />
            </View>

            <Text
              style={[
                styles.pendingTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Pending Orders
            </Text>
            <Text
              style={[
                styles.pendingVal,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {business && business.pendingBookings
                ? business.pendingBookings
                : 0}
            </Text>
          </View>
        </View>

        <View style={styles.titleCon}>
          <Text
            style={[
              styles.title,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            Recent Orders
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Recent Order")}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
      </>

      <View style={{ width: "100%" }}>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <RecentOrder
              key={i}
              name="Ayoola Ayolola"
              minutes="32 minutes ago"
            />
          ))}
      </View>
    </>
  );
};

export default ProviderHome;

const styles = StyleSheet.create({
  pricing: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 12,
    paddingVertical: 15,
    paddingBottom: 18,
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
