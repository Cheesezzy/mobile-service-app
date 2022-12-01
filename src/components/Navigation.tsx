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
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

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
          <SvgXml
            xml={homeIcon(route && route.name, "Home")}
            width="23"
            height="23"
          />
          <Text
            style={[
              styles.btnLabel,
              {
                color:
                  route.name === "Home" ? colors.primary : colors.lightGrey,
              },
            ]}
          >
            Home
          </Text>
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
          <Text
            style={[
              styles.btnLabel,
              {
                color:
                  route.name === "Hustle" ? colors.primary : colors.lightGrey,
              },
            ]}
          >
            Your Hustle
          </Text>
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
          <Text
            style={[
              styles.btnLabel,
              {
                color:
                  route.name === "Notifications"
                    ? colors.primary
                    : colors.lightGrey,
              },
            ]}
          >
            Notifications
          </Text>
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
          <Text
            style={[
              styles.btnLabel,
              {
                color:
                  route.name === "Negotiations"
                    ? colors.primary
                    : colors.lightGrey,
              },
            ]}
          >
            Negotiations
          </Text>
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
    width: 60,
    borderRadius: 10,
    alignItems: "center",
    padding: 2,
  },
  btnLabel: {
    fontFamily: "LatoRegular",
    fontSize: 10,
    textAlign: "center",
  },
});

export default Navigation;
