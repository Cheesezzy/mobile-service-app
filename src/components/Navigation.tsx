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
import { auth, db } from "../../firebaseConfig";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Navigation = ({ navigation }: any) => {
  const [user] = useAuthState(auth);
  const negotiatingRef = collection(db, "users", user?.uid!, "negotiating");
  const [negotiating, loading] = useCollectionData(negotiatingRef);
  const notifsRef = collection(db, "users/" + `${user?.uid}/notifications`);
  const [notifications] = useCollectionData(notifsRef);
  const [negoUnread, setNegoUnread] = useState(false);
  const [notifUnread, setNotifUnread] = useState(false);

  useEffect(() => {
    if (negotiating) setNegoUnread(negotiating.some((msg: any) => !msg?.seen));
    if (notifications)
      setNotifUnread(notifications.some((msg: any) => !msg?.seen));
  }, [negotiating, notifications]);

  const route = useRoute();

  const checkActive = (routeName: string) => {
    if (route && route.name === routeName) return colors.primary;
    return "";
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View
      style={[
        styles.nav,
        {
          backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          borderTopColor: theme ? colors.secondary : colors.blackSmoke,
        },
      ]}
    >
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={theme ? "#ddd" : colors.black}
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
        underlayColor={theme ? "#ddd" : colors.black}
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
        underlayColor={theme ? "#ddd" : colors.black}
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Notifications")}
      >
        <View style={styles.btns}>
          <SvgXml
            xml={notifIcon(route && route.name, "Notifications")}
            width="24"
            height="24"
          />
          {notifUnread ? (
            <View
              style={[
                styles.unreadStatus,
                {
                  top: 4,
                  right: 22,
                  borderColor: theme ? colors.secondary : colors.blackSmoke,
                },
              ]}
            />
          ) : null}
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
        underlayColor={theme ? "#ddd" : colors.black}
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("Negotiations")}
      >
        <View style={styles.btns}>
          <SvgXml
            xml={negotiateIcon(route && route.name, "Negotiations")}
            width="24"
            height="24"
          />
          {negoUnread ? (
            <View
              style={[
                styles.unreadStatus,
                {
                  top: 2,
                  right: 20,
                  borderColor: theme ? colors.secondary : colors.blackSmoke,
                },
              ]}
            />
          ) : null}
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
    borderTopWidth: 1,
  },
  btns: {
    minWidth: 60,
    borderRadius: 10,
    alignItems: "center",
    padding: 2,
    flexWrap: "nowrap",
  },
  btnLabel: {
    fontFamily: "LatoRegular",
    fontSize: 10,
    textAlign: "center",
    flexWrap: "nowrap",
  },
  unreadStatus: {
    height: 7,
    width: 7,
    position: "absolute",
    top: 2,
    right: 20,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center",
  },
});

export default Navigation;
