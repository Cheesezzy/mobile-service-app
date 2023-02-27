import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";
import Animated from "react-native-reanimated";
import colors from "../../config/colors";

interface Props {
  data: any;
  scrollX: any;
  currIndex: number;
}

const Paginator = ({ data, scrollX, currIndex }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_: any, i: number) => {
        return (
          <Animated.View
            style={[
              styles.dot,
              currIndex === i && {
                width: 15,
                backgroundColor: colors.primary,
                opacity: 1,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 95,
    alignSelf: "center",
    zIndex: 100,
  },
  dot: {
    height: 4,
    width: 8,
    borderRadius: 4,
    opacity: 0.3,
    backgroundColor: colors.primary,
    marginHorizontal: 2,
  },
});
