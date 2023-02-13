import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  useValue,
} from "react-native-reanimated";

const Max_Header_Height = 200;
const Min_Header_Height = 70;
const Scroll_Distance = Max_Header_Height - Min_Header_Height;

const DynamicHeader = ({ scrollY }: any) => {
  const headerHeight = useSharedValue(60);
  const headerOpacity = useSharedValue(1);

  const headerStyles = useAnimatedStyle(() => {
    return {
      height: headerHeight.value,
      opacity: headerOpacity.value,
      transform: [
        {
          translateY: Animated.min(
            0,
            Animated.max(
              -headerHeight.value,
              scrollY.interpolate({
                inputRange: [0, headerHeight.value],
                outputRange: [0, -headerHeight.value],
              })
            )
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.header, headerStyles]}>
      <Text style={styles.headerText}>Sticky Header</Text>
    </Animated.View>
  );
};

export default DynamicHeader;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
});
