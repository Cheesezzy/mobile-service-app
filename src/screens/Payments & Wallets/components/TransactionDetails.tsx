import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Idetails } from "../interface";
export const TransactionDetails: Function = ({
  details,
}: {
  details: Idetails;
}) => {
  let keys = Object.keys(details);
  let values = Object.values(details);
  return (
    <View style={styles.container}>
      {keys?.map((details, index) => (
        <View style={styles.keyValue} key={Math.random() * 100000000000}>
          <View>
            <Text style={styles.key}>{details}</Text>
          </View>
          <View>
            <Text style={styles.values}>{values[index]}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  key: { color: "#838B97", fontFamily: "PrimaryRegular" },
  values: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 20,
    color: "#000000",
  },
  keyValue: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
});
