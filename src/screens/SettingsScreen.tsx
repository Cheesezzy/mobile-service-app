import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import HeaderTitle from "../components/HeaderTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { Switch } from "@rneui/themed";
import { SvgXml } from "react-native-svg";
import { frontIcon } from "../../assets/icons/icons";

const SettingsScreen = ({ navigation }: any) => {
  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);

  const [user] = useDocumentData(userRef);

  const dispatch = useDispatch();
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  const switchMode = () => {
    dispatch(handleSwitchTheme());
    return;
  };

  return (
    <>
      <HeaderTitle title="Settings" profileURL="" user="" />
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <View style={styles.settingsCon}>
          <TouchableOpacity
            style={styles.settingsItem}
            activeOpacity={0.6}
            // @ts-ignore
            onPress={() =>
              navigation.navigate("AccountSettings", {
                user,
              })
            }
          >
            <Text
              style={[
                styles.settingsItemTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Account settings
            </Text>
            <View style={styles.goTo}>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="14"
                height="14"
              />
            </View>
          </TouchableOpacity>
          <View style={styles.settingsItem}>
            <Text
              style={[
                styles.settingsItemTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Notifications
            </Text>
            <View style={styles.goTo}>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="14"
                height="14"
              />
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Terms")}>
            <View style={styles.settingsItem}>
              <Text
                style={[
                  styles.settingsItemTxt,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Terms of service
              </Text>
              <View style={styles.goTo}>
                <SvgXml
                  style={styles.icon}
                  xml={frontIcon()}
                  width="14"
                  height="14"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Privacy-Policy")}
          >
            <View style={styles.settingsItem}>
              <Text
                style={[
                  styles.settingsItemTxt,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Privacy policy
              </Text>
              <View style={styles.goTo}>
                <SvgXml
                  style={styles.icon}
                  xml={frontIcon()}
                  width="14"
                  height="14"
                />
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={[
              styles.settingsItem,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.settingsItemTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Switch to {theme ? "dark" : "light"} mode
            </Text>

            <Switch
              color={colors.primary}
              value={!theme}
              onValueChange={switchMode}
            />
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
        <StatusBar style={theme ? "dark" : "light"} />
      </View>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsCon: {
    padding: 20,
    paddingRight: 0,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingRight: 15,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  settingsItemTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 14,
  },
  icon: {
    position: "relative",
    top: 1.5,
    marginRight: 15,
  },
  goTo: {
    position: "relative",
    left: 15,
  },
  logout: {
    paddingBottom: 20,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  logoutTxt: {
    marginLeft: 20,
    color: "#d9534f",
    fontFamily: "PrimaryRegular",
  },
  settingsFooter: {
    alignSelf: "center",
    marginTop: 20,
  },
  settingsFooterTxt: {
    color: colors.greyMain,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
  },
});
