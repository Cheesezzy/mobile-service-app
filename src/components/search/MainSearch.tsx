import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect } from "react";
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

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const MainSearch = () => {
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
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: 5.704,
            longitude: 5.9339,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05,
          }}
          showsUserLocation={true}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 5.704,
              longitude: 5.9339,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"Location"}
            description={"This is the location"}
          />
        </MapView>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[rSearchConStyle, styles.searchCon]}>
            <View style={styles.line}></View>
            <TextInput
              placeholder="Search for services"
              style={styles.search}
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
