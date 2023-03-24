import { Avatar } from "@rneui/themed";
import { collection, doc, updateDoc } from "firebase/firestore";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { auth, db } from "../../../firebaseConfig";
import Navigation from "../../components/Navigation";
import colors from "../../config/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { StatusBar } from "expo-status-bar";
import { getTime } from "../../../api/hooks/convertTimestamp";
import { trimText } from "../../../api/hooks/generalHooks";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import { waiting } from "../../../assets/svgs/svgs";
import { SvgXml } from "react-native-svg";
import { searchIcon } from "../../../assets/icons/icons";
import { TextInput } from "react-native";
import { useState } from "react";

const NegoScreen = ({ navigation }: any) => {
  const [user] = useAuthState(auth);
  const usersRef = collection(db, "users");
  const [users] = useCollectionData(usersRef);

  const negotiatingRef = collection(db, "users", user?.uid!, "negotiating");
  const [negotiating, loading] = useCollectionData(negotiatingRef);

  const [searchQuery, setSearchQuery] = useState("");

  const checkingPerson = (msg: any) => {
    if (msg?.type === "sent") {
      return msg?.receivedBy;
    }
    return msg?.sentBy;
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
    navigation.navigate("ChatScreen", {
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
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondary : colors.black,
          },
        ]}
      >
        <View style={styles.searchCon}>
          <SvgXml
            style={{
              position: "relative",
              top: 0,
            }}
            xml={searchIcon(theme ? colors.blackSmoke : colors.darkTxt)}
            width="14"
            height="14"
          />

          <TextInput
            style={[
              styles.search,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
            placeholderTextColor={colors.lightGrey}
            placeholder="Search"
            onChangeText={(newQuery) => setSearchQuery(newQuery)}
            defaultValue={searchQuery}
          />
        </View>

        <Text
          style={[
            styles.header,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          Negotiations
        </Text>

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
                .filter((msg) => {
                  if (
                    checkingPerson(msg)
                      ?.name.toLocaleLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                    return msg;
                })
                .map((msg: any) => {
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
                            size={38}
                            rounded
                            source={
                              checkingPerson(msg)?.pic
                                ? {
                                    uri: checkingPerson(msg)?.pic,
                                  }
                                : require("../../.././assets/blankProfilePic.png")
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
                                      : colors.greyMain,
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
                                      ? "PrimarySemiBold"
                                      : "PrimaryRegular",
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
                      <View style={styles.line} />
                    </TouchableOpacity>
                  );
                })
            : !loading && (
                <View
                  style={{
                    width: "100%",
                    height: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SvgXml xml={waiting()} width={"100%"} height={"40%"} />
                  <Text
                    style={{
                      fontFamily: "PrimaryRegular",
                      marginTop: 10,
                      color: theme ? colors.black : colors.darkTxt,
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
  searchCon: {
    flexDirection: "row",
    height: 45,
    width: "90%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.greyLight,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 50,
  },
  search: {
    width: "80%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 10,
  },
  header: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 15,
  },
  displayBox: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
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
    fontSize: 14,
    fontFamily: "PrimaryRegular",
  },
  displayTime: {
    fontSize: 10,
    fontFamily: "PrimaryRegular",
    alignSelf: "center",
  },
  msgAndStatus: {
    width: "81%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayMsg: {
    fontSize: 12,
    color: colors.greyMain,
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
    fontFamily: "PrimaryRegular",
    alignSelf: "center",
    color: colors.secondary,
  },
  line: {
    height: 0.8,
    width: "100%",
    backgroundColor: colors.greyLight,
  },
});

export default NegoScreen;
