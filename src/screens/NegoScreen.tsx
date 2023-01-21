import { Avatar } from "@rneui/themed";
import {
  collection,
  doc,
  FieldValue,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { auth, db } from "../../firebaseConfig";
import Navigation from "../components/Navigation";
import colors from "../config/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers } from "../../provider/allUsersSlice";
import {
  refreshUser,
  updateMessages,
  updateNegotiating,
} from "../../provider/userSlice";
import { useEffect, useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import HeaderTitle from "../components/HeaderTitle";
import { StatusBar } from "expo-status-bar";
import { getTime } from "../../api/customHooks/convertTimestamp";
import { trimText } from "../../api/customHooks/generalHooks";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { waiting } from "../../assets/svgs/svgs";
import { SvgXml } from "react-native-svg";

const NegoScreen = ({ navigation }: any) => {
  const [user] = useAuthState(auth);
  const usersRef = collection(db, "users");
  const [users] = useCollectionData(usersRef);

  const negotiatingRef = collection(db, "users", user?.uid!, "negotiating");
  const [negotiating, loading] = useCollectionData(negotiatingRef);

  const checkingPerson = (msg: any) => {
    if (msg?.type === "sent") {
      return msg?.receivedBy;
    }
    return msg?.sentBy;
  };

  const getPerson = async (id: any) => {
    try {
      const userData = await getDoc(doc(db, "users", id));
      return userData.data();
    } catch (error) {
      console.error(error);
    }
  };

  const checkAttachmentTxt = (msg: any) => {
    if (msg?.attachment) {
      if (msg?.text?.length > 0) {
        if (msg?.type === "sent") {
          return trimText(`You a photo: ${msg?.text}`, 30);
        } else return trimText(`Sent you a photo: ${msg?.text}`, 30);
      } else {
        if (msg?.type === "sent") {
          return "You sent a photo";
        } else return "Sent you a photo";
      }
    }
    return trimText(msg?.text, 30);
  };

  const handleClick = (msg: any) => {
    navigation.navigate("NegoDisplay", {
      personId: checkingPerson(msg)?.id,
      name: checkingPerson(msg)?.name,
      personPic: checkingPerson(msg)?.pic,
    });

    if (msg.msgId) {
      const chatRef = doc(negotiatingRef, msg.msgId);

      updateDoc(chatRef, {
        seen: true,
      });
    }
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <HeaderTitle title="Negotiations" profileURL="" />
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          },
        ]}
      >
        <View
          style={{
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
        >
          {negotiating && negotiating.length > 0
            ? negotiating
                .sort((a, b) => b.createdAt - a.createdAt)
                .map((msg: any) => {
                  console.log(
                    "user!",

                    getPerson(checkingPerson(msg)?.id),
                    checkingPerson(msg)?.id
                  );

                  return (
                    <TouchableOpacity
                      onPress={() => handleClick(msg)}
                      key={
                        msg?.sentBy?.id +
                        Math.floor(Math.random() * 100) +
                        msg?.text
                      }
                    >
                      <View style={styles.displayBox}>
                        <View style={styles.avatar}>
                          <Avatar
                            size={40}
                            rounded
                            source={
                              checkingPerson(msg)?.pic
                                ? {
                                    uri: checkingPerson(msg)?.pic,
                                  }
                                : require("../.././assets/blankProfilePic.png")
                            }
                          />
                        </View>
                        <View style={styles.displayInfo}>
                          <View style={styles.nameAndTimeCon}>
                            <Text
                              style={[
                                styles.displayName,
                                {
                                  color: theme ? colors.black : colors.darkTxt,
                                },
                              ]}
                            >
                              {checkingPerson(msg)?.name}
                            </Text>
                            <Text
                              style={[
                                styles.displayTime,
                                {
                                  color:
                                    msg?.sentBy.id !== user?.uid && !msg?.seen
                                      ? colors.primary
                                      : colors.lightGrey,
                                },
                              ]}
                            >
                              {msg.createdAt &&
                                getTime(
                                  msg?.createdAt?.seconds,
                                  msg?.createdAt?.nanoseconds
                                )}
                            </Text>
                          </View>
                          <View style={styles.msgAndStatus}>
                            <Text
                              style={[
                                styles.displayMsg,
                                {
                                  fontFamily:
                                    msg?.sentBy.id !== user?.uid && !msg?.seen
                                      ? "Lato"
                                      : "LatoRegular",
                                },
                              ]}
                            >
                              {checkAttachmentTxt(msg)}
                            </Text>
                            {msg?.sentBy.id !== user?.uid && !msg?.seen ? (
                              <View style={styles.displayStatus} />
                            ) : null}
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
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
                    You do not have any message yet
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
    backgroundColor: colors.secondary,
    paddingTop: 20,
  },
  displayBox: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    //borderWidth: 1,
    //borderColor: colors.primary,
  },
  avatar: {
    marginRight: 15,
  },
  displayInfo: {
    width: "100%",
    alignSelf: "center",
  },
  nameAndTimeCon: {
    width: "81%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayName: {
    fontSize: 15,
    fontFamily: "LatoRegular",
    marginBottom: 3,
  },
  displayTime: {
    fontSize: 10,
    fontFamily: "LatoRegular",
  },
  msgAndStatus: {
    width: "81%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayMsg: {
    fontSize: 13,
    color: colors.lightGrey,
  },
  displayStatus: {
    height: 10,
    width: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
  },
  displayStatusTxt: {
    fontSize: 10,
    fontFamily: "LatoRegular",
    alignSelf: "center",
    color: colors.secondary,
  },
});

export default NegoScreen;
