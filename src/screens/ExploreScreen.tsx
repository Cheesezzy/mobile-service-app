import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";

const ExploreScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
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

export default ExploreScreen;
