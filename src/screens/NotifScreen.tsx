import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";

const NotifScreen = ({ navigation }: any) => {
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

export default NotifScreen;
