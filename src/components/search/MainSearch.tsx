import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Button,
  ViewProps,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import colors from "../../config/colors";
import * as Location from "expo-location";
import { calculateDistance, searchAndRank } from "../../../api/searchAlgo";
import { collection, doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { SvgXml } from "react-native-svg";
import { star } from "../../../assets/svgs/svgs";
import { addPoint, roundDistance } from "../../../api/hooks/generalHooks";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import { Avatar } from "@rneui/base";
import { locationIcon } from "../../../assets/icons/icons";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

interface Props {
  searchQuery: string;
  queryUntouched: string;
  searchFilled: boolean;
  setSearchFilled: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
}

const MainSearch = ({ searchQuery, queryUntouched, navigation }: Props) => {
  const [userLocation, setUserLocation] = useState<any>(null);
  const [errMsg, setErrorMsg] = useState<any>(null);
  const gpa = useRef<any>(null);
  const [user] = useAuthState(auth);

  const userSRef = collection(db, "users");
  const [users] = useCollectionData(userSRef);
  const userRef = doc(db, "users", user?.uid!);

  const [User] = useDocumentData(userRef);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      setUserLocation(location);
    })();
  }, []);

  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
  }, []);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
      }
    });

  const rSearchConStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  const businessesRef = collection(db, "businesses");
  const [businesses] = useCollectionData(businessesRef);

  let results =
    searchQuery && searchQuery.length > 0
      ? searchAndRank(searchQuery, businesses, {
          lat: parseFloat(
            User && User.searchLocation && User.searchLocation.lat
              ? User.searchLocation.lat
              : userLocation?.coords.latitude
          ),
          lng: parseFloat(
            User && User.searchLocation && User.searchLocation.lng
              ? User.searchLocation.lng
              : userLocation?.coords.longitude
          ),
        })
      : null;

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <GestureHandlerRootView>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          },
        ]}
      >
        <View style={styles.locationBtnCon}>
          <TouchableOpacity
            style={styles.locationBtn}
            onPress={() =>
              navigation.navigate("GoogleSearch", {
                locationType: "Search",
              })
            }
          >
            <Text style={styles.locationBtnTxt}>Change Location</Text>
          </TouchableOpacity>
        </View>
        {userLocation && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            initialRegion={
              userLocation && {
                latitude: parseFloat(
                  User && User.searchLocation && User.searchLocation.lat
                    ? User.searchLocation.lat
                    : userLocation?.coords.latitude
                ),
                longitude: parseFloat(
                  User && User.searchLocation && User.searchLocation.lng
                    ? User.searchLocation.lng
                    : userLocation?.coords.longitude
                ),
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }
            }
            showsUserLocation={true}
            followsUserLocation={true}
            region={
              userLocation && {
                latitude: parseFloat(
                  User && User.searchLocation && User.searchLocation.lat
                    ? User.searchLocation.lat
                    : userLocation?.coords.latitude
                ),
                longitude: parseFloat(
                  User && User.searchLocation && User.searchLocation.lng
                    ? User.searchLocation.lng
                    : userLocation?.coords.longitude
                ),
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }
            }
            loadingEnabled={false}
            //loadingIndicatorColor={colors.primary}
          >
            {results &&
              results
                .filter((business: any) => {
                  if (business.userId !== user?.uid) return business;
                })
                .map((business: any) => {
                  if (!business.location) return;
                  let coord = {
                    accuracy: 300,
                    altitude: 0,
                    altitudeAccuracy: 0,
                    heading: 0,
                    latitude: business?.location?.lat,
                    longitude: business?.location?.lng,
                    speed: 0,
                  };

                  return (
                    userLocation &&
                    business?.location && (
                      <Marker
                        key={business?.userId}
                        coordinate={coord}
                        pinColor={colors.primary}
                        image={require("../../.././assets/map/business.png")}
                        title={business?.name}
                      />
                    )
                  );
                })}
          </MapView>
        )}
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              rSearchConStyle,
              styles.searchCon,
              {
                backgroundColor: theme
                  ? colors.secondarySmoke
                  : colors.blackSmoke,
              },
            ]}
          >
            <View style={styles.line}></View>

            <View
              style={{
                height: "100%",
                width: "100%",
                padding: 10,
              }}
            >
              <ScrollView>
                {results &&
                  results
                    .sort((a: any, b: any) => {
                      return b.rating - a.rating;
                    })
                    .filter((business: any, i: number) => {
                      if (business.userId !== user?.uid && i < 4)
                        return business;
                    })

                    .map((business: any, i: number) => {
                      return (
                        <TouchableOpacity
                          style={styles.business}
                          key={business?.userId}
                          onPress={() =>
                            navigation.navigate("Profile", { business })
                          }
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
                                        User &&
                                          User.searchLocation &&
                                          User.searchLocation.lat
                                          ? User.searchLocation.lat
                                          : userLocation?.coords.latitude
                                      ),
                                      lng: parseFloat(
                                        User &&
                                          User.searchLocation &&
                                          User.searchLocation.lng
                                          ? User.searchLocation.lng
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
                {results ? (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Search Results", {
                        query: queryUntouched,
                        results,
                        userId: user?.uid,
                        userLocation,
                        userSearchLocation:
                          User && User.searchLocation
                            ? User.searchLocation
                            : null,
                      })
                    }
                  >
                    <Text style={styles.more}>See more...</Text>
                  </TouchableOpacity>
                ) : null}
              </ScrollView>
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const mapStyle = [
  {
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "red",
      },
      {
        lightness: -40,
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "red",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  map: {
    flex: 2,
  },
  searchCon: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 60,
    height: 5,
    backgroundColor: "#d7e0f085",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 2,
  },
  locationBtnCon: {
    position: "absolute",
    bottom: 10,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  locationBtn: {
    width: SCREEN_WIDTH * 0.9,
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  locationBtnTxt: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },
  business: {
    width: "95%",
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
  more: {
    alignSelf: "center",
    fontFamily: "PrimaryRegular",
    fontSize: 13,
    color: colors.primary,
    marginTop: 25,
  },
});

export default MainSearch;
