import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { tickIcon } from "../../../../assets/icons/icons";
export default function CircleStatus({ text, color, outline, textColor }: any) {
  return (
    <View style={styles.circleContainer}>
      <View style={styles.statusContainer}>
        <SvgXml
          xml={tickIcon(
            `${color ? color : "#E9E7E7"}`,
            `${outline ? outline : "#838B97"}`
          )}
          width='40'
          height='40'
        />
      </View>
      <View>
        <Text
          style={[styles.text, { color: textColor ? textColor : "#838B97" }]}
        >
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  statusContainer: {
    alignContent: "center",
    alignSelf: "center",
    marginBottom: 10,
    flexDirection: "row",
  },
  text: {
    width: 80,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    height: 60,
    fontSize: 12,
    fontFamily: "PrimaryRegular",
  },
});
