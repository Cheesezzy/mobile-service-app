import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import HeaderTitle from "../components/HeaderTitle";
import { StatusBar } from "expo-status-bar";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../firebaseConfig";
import { SvgXml } from "react-native-svg";
import { star } from "../../assets/svgs/svgs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";

const CategoryScreen = ({ route, navigation }: any) => {
  const { categoryName, desc } = route.params;

  const businessesRef = collection(db, "businesses");
  const [businesses] = useCollectionData(businessesRef);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="categoryItem" profileURL="" user="" />
      <ScrollView
        style={[
          styles.container,
          [
            styles.container,
            {
              backgroundColor: theme
                ? colors.secondarySmoke
                : colors.blackSmoke,
            },
          ],
        ]}
      >
        <Text
          style={[
            styles.categoryName,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          {categoryName}
        </Text>

        <Text
          style={[
            styles.categoryDesc,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          {desc}
        </Text>

        <Text
          style={[
            styles.filter,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          Hire by
        </Text>

        <View style={styles.filterItem}>
          <Text style={styles.filterItemTxt}>Rating</Text>
        </View>

        <View style={styles.businessesCon}>
          {businesses &&
            businesses
              .sort((a: any, b: any) => {
                return b.rating - a.rating;
              })
              .filter((business) => {
                return business.category === categoryName;
              })
              .map((business: any, i: number) => {
                if (i < 51)
                  return (
                    <TouchableOpacity
                      style={styles.business}
                      key={business.location.lat + Math.random() + i.toString()}
                      onPress={() =>
                        navigation.navigate("Profile", { business })
                      }
                    >
                      <View style={styles.businessCon}>
                        <View style={styles.imgCon}>
                          <Image
                            source={require("../../assets/placeholder.jpg")}
                            style={styles.img}
                          />
                        </View>
                        <Text
                          style={[
                            styles.txt,
                            {
                              color: theme ? colors.black : colors.darkTxt,
                            },
                          ]}
                        >
                          {business.name}
                        </Text>

                        <View style={styles.ratingCon}>
                          <SvgXml xml={star()} width="11.5" height="11.5" />
                          <Text style={styles.ratingTxt}>
                            {business.rating}
                          </Text>
                        </View>

                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text
                            style={[
                              styles.chargeTxt,
                              ,
                              {
                                color: theme ? colors.black : colors.darkTxt,
                              },
                            ]}
                          >
                            <Text
                              style={[
                                styles.chargeTxtSm,
                                {
                                  color: theme ? colors.black : colors.darkTxt,
                                },
                              ]}
                            >
                              From
                            </Text>{" "}
                            ₦{business.chargeRate}
                          </Text>

                          <TouchableOpacity style={styles.negotiate}>
                            <Text style={styles.negotiateTxt}>Negotiate</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
              })}
        </View>

        <StatusBar style={theme ? "dark" : "light"} />

        <View style={{ height: 100, width: "100%" }} />
      </ScrollView>
    </>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  categoryName: {
    fontFamily: "PrimarySemiBold",
    fontSize: 20,
    marginBottom: 15,
  },
  categoryDesc: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 15,
    color: "#111",
  },
  filter: {
    flexDirection: "row",
    fontFamily: "PrimarySemiBold",
    fontSize: 15,
    marginBottom: 12,
  },
  filterItem: {
    width: 60,
    backgroundColor: colors.lightPrimary,
    padding: 5,
    paddingBottom: 6,
    borderRadius: 15,
    borderColor: colors.primary,
    borderWidth: 0.5,
    marginBottom: 15,
  },
  filterItemTxt: {
    fontFamily: "PrimaryRegular",
    textAlign: "center",
    color: colors.primary,
  },
  businessesCon: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  business: {
    flex: 1,
    borderRadius: 8,
    margin: 10,
    backgroundColor: colors.secondary,
  },
  businessCon: {
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
  },
  imgCon: {
    height: 50,
    width: 50,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  ratingCon: {
    flexDirection: "row",
  },

  txt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 13,
    marginTop: 5,
  },
  ratingTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 11.5,
    color: colors.primary,
    marginLeft: 5,
  },
  chargeTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 12,
    marginTop: 5,
  },
  chargeTxtSm: {
    fontFamily: "PrimarySemiBold",
    fontSize: 11,
    color: colors.lightBlack,
    marginTop: 5,
  },
  negotiate: {
    padding: 5,
    borderColor: colors.greyLight,
    borderWidth: 1,
    borderRadius: 5,
  },
  negotiateTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 10,
    color: colors.greyMain,
  },
});
