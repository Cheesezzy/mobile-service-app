import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const VerificationSelectType = ({
  verificationType,
  showType,
  setShowType,
  setVerifyData,
}: {
  verificationType: string[];
  showType: boolean;
  setShowType: (boolean: false) => void;
  setVerifyData: (item: string) => void;
}) => {
  return (
    <View>
      <Text style={styles.header}>Select the type of ID you prefer </Text>

      <View>
        {verificationType.map((item: string) => (
          <TouchableOpacity
            onPress={() => {
              setVerifyData(item);
              setShowType(false);
            }}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default VerificationSelectType;

const styles = StyleSheet.create({
  header: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
  },
  text: {
    color: "black",
    marginTop: 24,
    textTransform: "uppercase",
  },
});
