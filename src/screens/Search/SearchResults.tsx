import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import { calculateDistance, searchAndRank } from "../../../api/searchAlgo";
import { SvgXml } from "react-native-svg";
import { star } from "../../../assets/svgs/svgs";
import { addPoint, roundDistance } from "../../../api/hooks/generalHooks";
import { Avatar } from "@rneui/base";
import { locationIcon } from "../../../assets/icons/icons";

const SearchResults = ({ route, navigation }: any) => {
  const { query, results, userId, userLocation, userSearchLocation } =
    route.params;

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Search results for "{query}"</Text>
      {query &&
        userId &&
        userLocation &&
        results &&
        results
          .sort((a: any, b: any) => {
            return b.rating - a.rating;
          })
          .filter((business: any, i: number) => {
            if (business.userId !== userId) return business;
          })

          .map((business: any, i: number) => {
            let userProfilePic;
            return (
              <TouchableOpacity
                style={styles.business}
                key={business?.userId}
                onPress={() => navigation.navigate("Profile", { business })}
              >
                <View style={styles.imgCon}>
                  <Avatar
                    size={60}
                    rounded={false}
                    source={
                      business?.businessDP
                        ? {
                            uri: business?.businessDP,
                          }
                        : require("../../../assets/blankProfilePic.png")
                    }
                  />
                </View>
                <View style={styles.txtCon}>
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

                  <Text style={styles.disTxt}>
                    <View>
                      <SvgXml
                        style={{
                          top: 1,
                          marginRight: 2,
                        }}
                        xml={locationIcon()}
                        width="11"
                        height="11"
                      />
                    </View>
                    {userLocation?.coords &&
                      business?.location &&
                      roundDistance(
                        calculateDistance(
                          {
                            lat: parseFloat(
                              userSearchLocation
                                ? userSearchLocation.lat
                                : userLocation?.coords.latitude
                            ),
                            lng: parseFloat(
                              userSearchLocation
                                ? userSearchLocation.lng
                                : userLocation?.coords.longitude
                            ),
                          },
                          {
                            lat: business?.location?.lat,
                            lng: business?.location?.lng,
                          }
                        )
                      )}
                    km away
                  </Text>

                  <View style={styles.ratingCon}>
                    <SvgXml xml={star()} width="11.5" height="11.5" />
                    <Text style={styles.ratingTxt}>
                      {addPoint(business.rating)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.chargeTxt}>
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
              </TouchableOpacity>
            );
          })}
      <View style={{ height: 80, width: "100%" }} />
    </ScrollView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 40,
  },
  title: {
    fontFamily: "PrimarySemiBold",
    fontSize: 20,
    marginBottom: 20,
  },
  business: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },
  imgCon: {
    marginRight: 10,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  ratingCon: {
    flexDirection: "row",
  },
  txtCon: {
    width: "50%",
  },
  disTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 10.5,
    paddingRight: 5,
    color: colors.greyMain,
  },
  txt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 14,
    marginTop: 5,
  },
  ratingTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 11,
    marginLeft: 2,
  },
  chargeTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 14.5,
    color: colors.primary,
    marginTop: 5,
  },
  chargeTxtSm: {
    fontFamily: "PrimaryRegular",
    fontSize: 10,
    color: colors.greyLight,
  },
});
