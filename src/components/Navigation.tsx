import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Icon } from "@rneui/themed";
import colors from "../config/colors";

const Navigation = ({ navigation }: any) => {
  const route = useRoute();

  const checkActive = (routeName: string) => {
    if (route.name === routeName) return colors.primary;
    return "";
  };

  return (
    <View style={styles.nav}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.btns}>
          <Icon name="home" type="octicon" color={checkActive("Home")} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Hustle")}
      >
        <View style={styles.btns}>
          <Icon name="business" type="material" color={checkActive("Hustle")} />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Notifications")}
      >
        <View style={styles.btns}>
          <Icon
            name="bell"
            type="octicon"
            color={checkActive("Notifications")}
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Negotiations")}
      >
        <View style={styles.btns}>
          <Icon
            name="handshake-outline"
            type="material-community"
            color={checkActive("Negotiations")}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: 8,
    paddingRight: 10,
    paddingLeft: 10,
    borderTopColor: "whitesmoke",
    borderTopWidth: 1,
    backgroundColor: "white",
  },
  btns: {
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Navigation;
