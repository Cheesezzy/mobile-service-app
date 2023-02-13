import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Icon } from "@rneui/themed";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import {
  businessIcon,
  homeIcon,
  moreIcon,
  negotiateIcon,
  notifIcon,
  profileIcon,
} from "../../assets/icons/icons";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc } from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import NetInfo from "@react-native-community/netinfo";

const Navigation = ({ navigation }: any) => {
  const [user] = useAuthState(auth);
  const negotiatingRef = collection(db, "users", user?.uid!, "negotiating");
  const [negotiating, loading] = useCollectionData(negotiatingRef);
  const notifsRef = collection(db, "users/" + `${user?.uid}/notifications`);
  const [notifications] = useCollectionData(notifsRef);
  const [negoUnread, setNegoUnread] = useState(false);
  const [notifUnread, setNotifUnread] = useState(false);
  const connectionStatusRef = useRef<any>(null);

  const userRef = doc(db, "users", user?.uid!);
  const [User] = useDocumentData(userRef);
  const businessRef = User?.bizId && doc(db, "businesses", User?.bizId);
  const [business] = useDocumentData(businessRef);

  const unsubscribe = NetInfo.addEventListener((state) => {
    connectionStatusRef.current =
      state.isConnected && state.isInternetReachable;
  });

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
      {!connectionStatusRef && (
        <View style={styles.internetPopupCon}>
          <Text
            style={[
              styles.internetPopup,
              {
                color: theme ? colors.darkTxt : colors.black,
                backgroundColor: theme
                  ? colors.transparentBlack
                  : colors.transparentWhite,
              },
            ]}
          >
            We've detected a problem with your internet connection. Please check
            your connection and try again later.
          </Text>
        </View>
      )}
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
        onPress={() =>
          navigation.navigate("Profile", {
            business,
          })
        }
      >
        <View style={styles.btns}>
          <SvgXml
            xml={profileIcon(route && route.name, "Profile")}
            width="24"
            height="24"
          />
          <Text
            style={[
              styles.btnLabel,
              {
                color:
                  route.name === "Profile" ? colors.primary : colors.lightGrey,
              },
            ]}
          >
            Profile
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

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={theme ? "#ddd" : colors.black}
        style={{ borderRadius: 10 }}
        onPress={() => navigation.navigate("More")}
      >
        <View style={styles.btns}>
          <SvgXml
            xml={moreIcon(route && route.name, "More")}
            width="24"
            height="24"
          />
          <Text
            style={[
              styles.btnLabel,
              {
                color:
                  route.name === "More" ? colors.primary : colors.lightGrey,
              },
            ]}
          >
            More
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
  internetPopupCon: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 500,
  },
  internetPopup: {
    backgroundColor: colors.transparentBlack,
    padding: 10,
    fontFamily: "LatoRegular",
  },
});

export default Navigation;
