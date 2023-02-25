import { View, Text, StyleSheet } from "react-native";
import React from "react";

export const MessageBox = ({ message }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <View style={styles.messagePointer} />
        <Text style={styles.messageContainerText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },

  messageContainer: {
    backgroundColor: "#D4E4FB",
    position: "relative",
    padding: 0,
    width: "100%",
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexGrow: 0,
    borderRadius: 5,
  },
  messageContainerText: {
    fontStyle: "normal",
    fontWeight: "500",
    padding: 10,
    fontSize: 8.2,
    lineHeight: 16,
    textTransform: "capitalize",
    color: "#2776EA",
    fontFamily: "PrimaryRegular",
  },
  messagePointer: {
    position: "absolute",
    top: -10,
    right: 30,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#D4E4FB",
  },
});
