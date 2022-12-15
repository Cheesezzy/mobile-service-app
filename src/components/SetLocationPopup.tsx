import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import { locationIcon } from "../../assets/icons/icons";

const SetLocationPopup = () => {
  return (
    <View style={styles.container}>
      <View>
        <SvgXml xml={locationIcon(colors.lightGrey)} width="15" height="15" />
      </View>
    </View>
  );
};

export default SetLocationPopup;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    backgroundColor: colors.secondary,
  },
});
