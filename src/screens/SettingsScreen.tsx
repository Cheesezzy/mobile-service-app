import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import HeaderTitle from "../components/HeaderTitle";

const SettingsScreen = ({ navigation }: any) => {
  return (
    <>
      <HeaderTitle title="Settings" />
      <View style={styles.container}>
        <View style={styles.settingsCon}>
          <View style={styles.settingsItem}>
            <Text style={styles.settingsItemTxt}>Notifications</Text>
          </View>
          <View style={styles.settingsItem}>
            <Text style={styles.settingsItemTxt}>Security</Text>
          </View>
          <View style={styles.settingsItem}>
            <Text style={styles.settingsItemTxt}>Terms of service</Text>
          </View>
          <View style={styles.settingsItem}>
            <Text style={styles.settingsItemTxt}>Privacy policy</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => signOut(auth)}>
          <View style={styles.logout}>
            <Text style={styles.logoutTxt}>Logout</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.settingsFooter}>
          <Text style={styles.settingsFooterTxt}>Version 1.0.0</Text>
        </View>
      </View>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  settingsCon: {
    padding: 20,
    paddingRight: 0,
  },
  settingsItem: {
    paddingVertical: 20,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  settingsItemTxt: {
    fontFamily: "LatoRegular",
  },
  logout: {
    paddingBottom: 20,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  logoutTxt: {
    marginLeft: 20,
    color: "#d9534f",
    fontFamily: "LatoRegular",
  },
  settingsFooter: {
    alignSelf: "center",
    marginTop: 20,
  },
  settingsFooterTxt: {
    color: colors.lightBlack,
    fontFamily: "LatoRegular",
  },
});
