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
import { collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SvgXml } from "react-native-svg";
import { star } from "../../../assets/svgs/svgs";
import { roundDistance } from "../../../api/hooks/generalHooks";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

interface Props {
  searchQuery: string;
  searchFilled: boolean;
  setSearchFilled: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
}

const MainSearch = ({
  searchQuery,
  searchFilled,
  setSearchFilled,
  navigation,
}: Props) => {
  const [userLocation, setUserLocation] = useState<any>(null);
  const [errMsg, setErrorMsg] = useState<any>(null);
  const gpa = useRef<any>(null);

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

  const [user] = useAuthState(auth);

  const businessesRef = collection(db, "businesses");
  const [businesses] = useCollectionData(businessesRef);

  //businesses.map((location) => {});

  let results =
    searchQuery && searchQuery.length > 0
      ? searchAndRank(searchQuery, businesses, {
          lat: parseFloat(userLocation?.coords.latitude),
          lng: parseFloat(userLocation?.coords.longitude),
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
        {userLocation && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            initialRegion={
              userLocation && {
                latitude: parseFloat(userLocation?.coords?.latitude),
                longitude: parseFloat(userLocation?.coords?.longitude),
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }
            }
            showsUserLocation={true}
            followsUserLocation={true}
            region={
              userLocation && {
                latitude: parseFloat(userLocation?.coords?.latitude),
                longitude: parseFloat(userLocation?.coords?.longitude),
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }
            }
            loadingEnabled={false}
            //loadingIndicatorColor={colors.primary}
          >
            {userLocation && (
              <Marker
                coordinate={userLocation?.coords}
                image={require("../../.././assets/map/user.png")}
                title="You"
              />
            )}
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
                        key={business?.location?.lat}
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
                backgroundColor: theme ? colors.secondary : colors.blackSmoke,
              },
            ]}
          >
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.locationBtn} onPress={() => null}>
              <Text style={styles.locationBtnTxt}>Use another location</Text>
            </TouchableOpacity>
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
                            <Image
                              source={require("../../.././assets/placeholder.jpg")}
                              style={styles.img}
                            />
                          </View>
                          <View style={styles.txtCon}>
                            <Text
                              style={[
                                styles.disTxt,
                                {
                                  color: theme ? colors.darkTxt : colors.black,
                                  backgroundColor: theme
                                    ? colors.blackSmoke
                                    : colors.secondary,
                                },
                              ]}
                            >
                              {userLocation?.coords &&
                                business?.location &&
                                roundDistance(
                                  calculateDistance(
                                    {
                                      lat: parseFloat(
                                        userLocation?.coords?.latitude
                                      ),
                                      lng: parseFloat(
                                        userLocation?.coords?.longitude
                                      ),
                                    },
                                    {
                                      lat: business?.location?.lat,
                                      lng: business?.location?.lng,
                                    }
                                  )
                                )}
                              km
                            </Text>
                            <View style={styles.ratingCon}>
                              <SvgXml xml={star()} width="11.5" height="11.5" />
                              <Text style={styles.ratingTxt}>
                                {business.rating}
                              </Text>
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
                                    color: theme
                                      ? colors.black
                                      : colors.darkTxt,
                                  },
                                ]}
                              >
                                From
                              </Text>{" "}
                              ₦{business.chargeRate}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                {results ? <Text style={styles.more}>See more...</Text> : null}
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
        color: "#2776ea",
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
        color: "#2776ea",
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
    marginVertical: 15,
    borderRadius: 2,
  },
  locationBtn: {
    width: "40%",
    height: 35,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  locationBtnTxt: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: "LatoRegular",
  },
  business: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  imgCon: {
    width: "50%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  ratingCon: {
    flexDirection: "row",
  },
  txtCon: {
    width: "50%",
    padding: 15,
    borderColor: colors.grey,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  disTxt: {
    position: "absolute",
    top: 0,
    right: 0,
    fontFamily: "LatoRegular",
    fontSize: 10,
    padding: 3,
    paddingHorizontal: 5,
    borderTopRightRadius: 8,
  },
  txt: {
    fontFamily: "Lato",
    fontSize: 13,
    marginTop: 5,
  },
  ratingTxt: {
    fontFamily: "Lato",
    fontSize: 11.5,
    color: colors.primary,
    marginLeft: 5,
  },
  chargeTxt: {
    fontFamily: "Lato",
    fontSize: 12,
    marginTop: 5,
  },
  chargeTxtSm: {
    fontFamily: "Lato",
    fontSize: 11,
    color: colors.lightBlack,
    marginTop: 5,
  },
  more: {
    alignSelf: "center",
    fontFamily: "LatoRegular",
    fontSize: 13,
    color: colors.primary,
    marginTop: 25,
  },
});

export default MainSearch;
