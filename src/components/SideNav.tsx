import { View, Text, SafeAreaView, Platform, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Icon } from "@rneui/themed";
import { SvgXml } from "react-native-svg";
import {
  aboutIcon,
  adIcon,
  businessIcon,
  homeIcon,
  negotiateIcon,
  notifIcon,
  settingsIcon,
  supportIcon,
} from "../../assets/icons/icons";

const SideNav = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Avatar
          size={40}
          rounded
          source={require("../../assets/tfp.png")}
          containerStyle={{
            borderColor: "lightgrey",
            borderStyle: "solid",
            borderWidth: 1,
          }}
        />
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Lato",
            }}
          >
            Rete Tech
          </Text>
        </View>
        <View
          style={{
            marginTop: 2,
            marginBottom: 50,
          }}
        >
          <Text
            style={{
              fontSize: 10.5,
              fontFamily: "LatoRegular",
              color: "grey",
            }}
          >
            #7GF345
          </Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <SvgXml
          style={styles.icon}
          xml={businessIcon("", "Hustle")}
          width="22"
          height="22"
        />
        <Text style={styles.menuItem}>Your Hustle</Text>
      </View>

      <View style={styles.itemContainer}>
        <SvgXml
          style={styles.icon}
          xml={settingsIcon("", "")}
          width="22"
          height="22"
        />
        <Text style={styles.menuItem}>Settings</Text>
      </View>

      <View style={styles.itemContainer}>
        <SvgXml
          style={styles.icon}
          xml={supportIcon("", "")}
          width="22"
          height="19"
        />
        <Text style={styles.menuItem}>Support</Text>
      </View>

      <View style={styles.itemContainer}>
        <SvgXml
          style={styles.icon}
          xml={aboutIcon("", "")}
          width="21"
          height="21"
        />
        <Text style={styles.menuItem}>About</Text>
      </View>

      <View style={styles.itemContainer}>
        <SvgXml
          style={styles.icon}
          xml={adIcon("", "")}
          width="22"
          height="22"
        />
        <Text style={styles.menuItem}>Advertisements</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <Icon name="logout" type="material" size={28} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    paddingLeft: 40,
  },
  itemContainer: {
    flexDirection: "row",
  },
  menuItem: {
    fontSize: 14.5,
    fontFamily: "Lato",
    marginBottom: 30,
  },
  icon: {
    position: "relative",
    bottom: 2.5,
    marginRight: 10,
  },
});

export default SideNav;
