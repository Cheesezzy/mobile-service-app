import React from "react";
import { SearchBar } from "@rneui/base";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";

const NegoScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    borderRadius: 10,
    height: 20,
    color: "red",
  },
});

export default NegoScreen;
