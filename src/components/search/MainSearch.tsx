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
import MapView, { Marker } from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
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
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { StatusBar } from "expo-status-bar";
//import { businesses } from "../../../assets/placeholdersForBiz/placeholdersForBiz";
import { searchAndRank } from "../../../api/searchAlgo";
import {
  collection,
  collectionGroup,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import {
  useCollection,
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

const markers = [
  {
    accuracy: 300,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 4.9760008,
    longitude: 8.3305643,
    speed: 0,
  },
  {
    accuracy: 300,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 4.9757894,
    longitude: 8.3309179,
    speed: 0,
  },
  {
    accuracy: 300,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 4.9744057,
    longitude: 8.3306784,
    speed: 0,
  },
];

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

interface Props {
  searchQuery: string;
  searchFilled: boolean;
  setSearchFilled: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSearch = ({ searchQuery, setSearchFilled }: Props) => {
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
      //console.log(userLocation);
    })();
  }, []);

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
  }, []);

  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  useEffect(() => {
    while (translateY.value > SCREEN_HEIGHT) {
      setSearchFilled(true);
    }
    console.log(translateY.value, context.value, "Reached ceiling");
  }, [context.value]);

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

  console.log(businesses && businesses[0], "here");

  let results =
    searchQuery && searchQuery.length > 0
      ? searchAndRank(searchQuery, businesses, {
          lat: parseFloat(userLocation?.coords.latitude),
          lng: parseFloat(userLocation?.coords.longitude),
        })
      : null;

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <MapView
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
          region={userLocation && userLocation}
          loadingEnabled
          loadingIndicatorColor={colors.primary}
        >
          {userLocation && (
            <Marker
              coordinate={userLocation.coords}
              image={require("../../.././assets/map/user.png")}
              title="You"
            />
          )}
          {markers.map((marker) => {
            return (
              userLocation && (
                <Marker
                  key={Math.random() + marker.latitude}
                  coordinate={marker}
                  pinColor={colors.primary}
                  image={require("../../.././assets/map/business.png")}
                />
              )
            );
          })}
        </MapView>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[rSearchConStyle, styles.searchCon]}>
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
                  results.map((business: any, i: number) => {
                    if (i < 4)
                      return (
                        <View
                          style={styles.business}
                          key={business.location.lat + Math.random()}
                        >
                          <View style={styles.imgCon}>
                            <Image
                              source={require("../../.././assets/tfp.png")}
                              style={styles.img}
                            />
                          </View>
                          <View style={styles.txtCon}>
                            <Text style={styles.txt}>{business.name}</Text>
                          </View>
                        </View>
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
    backgroundColor: colors.secondary,
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
  txtCon: {
    width: "50%",
    padding: 10,
    borderColor: colors.grey,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  txt: {
    fontFamily: "Lato",
    fontSize: 13,
  },
  more: {
    alignSelf: "center",
    fontFamily: "LatoRegular",
    fontSize: 13,
    color: colors.primary,
    marginTop: 10,
  },
});

export default MainSearch;
