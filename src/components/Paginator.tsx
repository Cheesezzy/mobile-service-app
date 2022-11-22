import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import Animated from "react-native-reanimated";

const Paginator = ({ data, scrollX }: any) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        justifyContent: "center",
      }}
    >
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 15, 8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 8,
  },
});
