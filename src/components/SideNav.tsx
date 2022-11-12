import { View, Text, SafeAreaView, Platform, StyleSheet } from "react-native";
import React from "react";
import { Avatar, Icon } from "@rneui/themed";

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
              fontWeight: "bold",
            }}
          >
            Lorem ipsum
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
              fontSize: 11,
              color: "grey",
            }}
          >
            #7GF345
          </Text>
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Icon name="business" type="material" style={styles.icon} size={20} />
        <Text style={styles.menuItem}>Your Hustle</Text>
      </View>

      <View style={styles.itemContainer}>
        <Icon name="settings" type="material" style={styles.icon} size={20} />
        <Text style={styles.menuItem}>Settings</Text>
      </View>

      <View style={styles.itemContainer}>
        <Icon name="support" type="material" style={styles.icon} size={20} />
        <Text style={styles.menuItem}>Support</Text>
      </View>

      <View style={styles.itemContainer}>
        <Icon name="info" type="material" style={styles.icon} size={20} />
        <Text style={styles.menuItem}>About</Text>
      </View>

      <View style={styles.itemContainer}>
        <Icon name="tv" type="material" style={styles.icon} size={20} />
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
    fontWeight: "500",
    marginBottom: 30,
  },
  icon: {
    position: "relative",
    bottom: 1.5,
    marginRight: 10,
  },
});

export default SideNav;
