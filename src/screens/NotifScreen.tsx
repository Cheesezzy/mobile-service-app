import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import Navigation from "../components/Navigation";
import colors from "../config/colors";

const NotifScreen = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.container}>
        <HeaderTitle title="Notifications" />
        <Navigation navigation={navigation} />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  btn: {
    borderRadius: 10,
    height: 20,
    color: "red",
  },
});

export default NotifScreen;
