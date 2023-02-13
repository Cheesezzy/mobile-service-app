import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import Navigation from "../components/Navigation";
import colors from "../config/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Avatar } from "@rneui/themed";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";
import { SvgXml } from "react-native-svg";
import { waiting } from "../../assets/svgs/svgs";

const NotifScreen = ({ navigation }: any) => {
  const [User] = useAuthState(auth);

  const notifsRef = collection(db, "users/" + `${User?.uid}/notifications`);

  const [notifications, loading] = useCollectionData(notifsRef);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  const updateSeen = (id: any) => {
    const notifRef = doc(notifsRef, id);

    updateDoc(notifRef, {
      seen: true,
    });
  };

  return (
    <>
      <HeaderTitle title="Notifications" profileURL="" user="" />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <View>
          {notifications && notifications?.length > 0
            ? notifications.map((notification) => {
                if (!notification?.seen && notification.id) {
                  updateSeen(notification.id);
                }
                return (
                  <View
                    style={styles.notification}
                    key={Math.random() + notification?.senderId}
                  >
                    <View style={styles.avatar}>
                      <Avatar
                        size={25}
                        rounded
                        source={{ uri: "https://picsum.photos/200" }}
                      />
                    </View>
                    <Text
                      style={[
                        styles.name,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      {notification?.name}
                      <Text
                        style={[
                          styles.msg,
                          {
                            color: theme ? colors.black : colors.darkTxt,
                          },
                        ]}
                      >
                        {" "}
                        {notification?.notification}
                      </Text>
                    </Text>
                    <View></View>
                  </View>
                );
              })
            : !loading && (
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SvgXml xml={waiting()} width={"100%"} height={"40%"} />
                  <Text
                    style={{
                      fontFamily: "LatoRegular",
                      marginTop: 10,
                    }}
                  >
                    You do not have any notification yet
                  </Text>
                </View>
              )}
        </View>
        <Navigation navigation={navigation} />
        <StatusBar style={theme ? "dark" : "light"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  btn: {
    borderRadius: 10,
    height: 20,
    color: "red",
  },
  notification: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    padding: 20,
    borderBottomColor: colors.greyMid,
    borderBottomWidth: 0.5,
  },
  avatar: {
    marginRight: 15,
  },
  name: {
    fontFamily: "PrimarySemiBold",
    fontSize: 14.5,
  },
  msg: {
    fontFamily: "PrimaryRegular",
    fontSize: 14,
  },
});

export default NotifScreen;
