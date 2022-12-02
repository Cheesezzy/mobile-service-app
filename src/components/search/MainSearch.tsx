import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Button,
  ViewProps,
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

const MainSearch = () => {
  const [userLocation, setUserLocation] = useState<any>(null);
  const [errMsg, setErrorMsg] = useState<any>(null);
  const [initialRegion, setInitialRegion] = useState<any>(null);

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
      console.log(userLocation);
    })();
  }, []);

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
  }, []);

  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

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

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.search}></View>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={
            userLocation && {
              latitude: parseFloat(userLocation?.coords.latitude),
              longitude: parseFloat(userLocation?.coords.longitude),
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
            <GooglePlacesAutocomplete
              placeholder="Search"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: "AIzaSyDwzW1q7R5P65DD3lVDrvG5Q1gMAWFQFVo",
                language: "en",
              }}
              styles={{ borderWidth: 1, borderColor: "red" }}
            />
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
  search: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    width: "87%",
    color: colors.black,
    backgroundColor: "#d7e0f059",
    borderRadius: 20,
    borderColor: "#d7e0f0",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "center",
  },
});

export default MainSearch;
