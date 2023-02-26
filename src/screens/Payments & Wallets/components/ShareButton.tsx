import { View, StyleSheet } from "react-native";
import React from "react";
import { ShareButon } from "../../../../assets/icons/icons";
import { SvgXml } from "react-native-svg";

export const ShareButton = () => {
  return (
    <View style={styles.contain}>
      <SvgXml xml={ShareButon()} width='100%' height={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    position: "relative",
    width: "100%",
  },
});
