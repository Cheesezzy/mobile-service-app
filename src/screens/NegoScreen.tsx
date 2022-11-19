import React from "react";
import MapView from "react-native-maps";
import { View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";

const NegoScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default NegoScreen;
