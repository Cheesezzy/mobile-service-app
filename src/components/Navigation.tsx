import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Icon } from "@rneui/themed";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import {
  businessIcon,
  homeIcon,
  negotiateIcon,
  notifIcon,
} from "../../assets/icons/icons";

const Navigation = ({ navigation }: any) => {
  const route = useRoute();

  const checkActive = (routeName: string) => {
    if (route && route.name === routeName) return colors.primary;
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
          {/* <Icon name="home" type="octicon" color={checkActive("Home")} /> */}
          <SvgXml
            xml={homeIcon(route && route.name, "Home")}
            width="23"
            height="23"
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Hustle")}
      >
        <View style={styles.btns}>
          <SvgXml
            xml={businessIcon(route && route.name, "Hustle")}
            width="24"
            height="24"
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Notifications")}
      >
        <View style={styles.btns}>
          <SvgXml
            xml={notifIcon(route && route.name, "Notifications")}
            width="24"
            height="24"
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
          <SvgXml
            xml={negotiateIcon(route && route.name, "Negotiations")}
            width="24"
            height="24"
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
