import { Avatar, Overlay } from "@rneui/themed";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  useWindowDimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import colors from "../config/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, store } from "../../firebaseConfig";
import { SvgXml } from "react-native-svg";
import {
  attachIcon,
  sendIcon,
  closeIcon,
  optionIcon,
  backIcon,
} from "../../assets/icons/icons";
import {
  collection,
  doc,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { sendSupportMessage, unBlockUser } from "../../api/database";
import { useSelector } from "react-redux";
import { handleUser } from "../../provider/userSlice";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { getTime } from "../../api/hooks/convertTimestamp";
import { useAnimatedRef } from "react-native-reanimated";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import { uuidv4 } from "@firebase/util";

export const ChatSupportScreen = ({ navigation }: any) => {
  const selector = useSelector(handleUser);
  const [user] = useAuthState(auth);
  const [popupType, setPopupType] = useState("");
  const [typedMessage, setTypedMessage] = useState("");
  const [image, setImage] = useState<any>(null);
  const User = selector.payload.user.value;
  const userRef = doc(db, "users", user?.uid!);
  const [messages, setMessages]: any[] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const scrollViewRef = useAnimatedRef<any>();
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showBlockedMsg, setShowBlockedMsg] = useState(false);
  const [iWasBlocked, setIWasBlocked] = useState(false);
  const personId = "raTnUab6u3bDMqS3CmxuR3J2Sq12";
  const name = "Support";
  const personPic = "";

  const blocklistRef = collection(db, "users", user?.uid!, "blocklist");
  const [blocklist] = useCollectionData(blocklistRef);

  const handleUnblockUser = () => {
    if (sender && user && user.uid && sender.email)
      unBlockUser(user.uid, sender.email);
  };

  {
    /* const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 20) {
      setHeaderVisible(true);
    } else if (scrollY < 20) {
      setHeaderVisible(false);
    }
  }; */
  }

  const sentMessagesRef = collection(
    db,
    "users",
    user?.uid!,
    "messages",
    personId,
    "chats"
  );

  const receivedMessagesRef = collection(
    db,
    "users",
    personId,
    "messages",
    user?.uid!,
    "chats"
  );
  const sentQ = query(sentMessagesRef, orderBy("createdAt"));
  const receivedQ = query(receivedMessagesRef, orderBy("createdAt"));

  const [sentMessages, sentLoading] = useCollectionData(sentQ);
  const [receivedMessages, receivedLoading] = useCollectionData(receivedQ);

  const senderRef = doc(db, "users", personId);
  const [sender] = useDocumentData(senderRef);

  const updateSeen = (id: any) => {
    if (id) {
      const chatRef = doc(receivedMessagesRef, id);
      updateDoc(chatRef, {
        seen: true,
      });
    }
  };

  const handleSendMessage = () => {
    sendSupportMessage(
      user?.uid,
      personId,
      typedMessage,
      null,
      User?.name,
      User?.profilePic ? User?.profilePic : null,
      name,
      personPic ? personPic : null,
      serverTimestamp()
    );

    setTypedMessage("");
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const handleSendAttachment = async () => {
    const fileRef = ref(store, `messagePics/${user?.uid}/${uuidv4()}.jpg`);

    const response = await fetch(image);
    const blob = await response.blob();
    const fileName = image.substring(image.lastIndexOf("/") + 1);

    uploadBytesResumable(fileRef, blob)
      .then((snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        getDownloadURL(snapshot.ref).then((url: any) => {
          sendSupportMessage(
            user?.uid,
            personId,
            typedMessage,
            url,
            User?.name,
            User?.profilePic ? User?.profilePic : null,
            name,
            personPic ? personPic : null,
            serverTimestamp()
          );
        });
      })
      .catch((error: any) => {
        console.error(error);
      });

    setImage(null);
    setTypedMessage("");
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
    });

    if (result && !result?.cancelled) {
      setImage(result?.uri);
    }
  };

  useEffect(() => {
    if (sentMessages && receivedMessages) {
      const allMessages = [...sentMessages, ...receivedMessages].sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(allMessages);
      setMessagesLoading(false);
    }
  }, [sentMessages, receivedMessages]);

  const { height } = useWindowDimensions();

  useEffect(() => {
    if (!messagesLoading) {
      scrollViewRef.current.scrollTo({
        x: 0,
        y: height * messages.length,
        animated: true,
      });
    }
  }, [messagesLoading]);

  const today = new Date();
  const messagesByDay = messages?.reduce((acc: any, message: any) => {
    const messageDate = message?.createdAt?.toDate();
    let day;

    if (
      messageDate &&
      messageDate?.getDay() === today?.getDay() &&
      messageDate?.getDate() === today?.getDate()
    ) {
      day = "Today";
    } else if (
      (messageDate &&
        messageDate?.getDay() === today?.getDay() - 1 &&
        messageDate?.getDate() === today?.getDate()) ||
      (messageDate?.getDay() === 6 && today?.getDay() === 0)
    ) {
      day = "Yesterday";
    } else {
      day = messageDate?.toLocaleDateString();
    }

    if (!acc[day]) {
      acc[day] = [];
    }

    acc[day].push(message);
    return acc;
  }, {});

  const theme = selector.payload.theme.value;

  if (sentLoading && receivedLoading && messagesLoading) {
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

  const showSend = () => {
    if (showBlockedMsg || iWasBlocked) return;
    if (typedMessage.length > 0 || image) return true;
    else return false;
  };

  return (
    <>
      <View
        style={[
          styles.header,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.profilePicAndName}
          onPress={() =>
            navigation.navigate("ImageScreen", {
              image: personPic,
            })
          }
        >
          <TouchableOpacity
            style={{
              marginRight: 10,
            }}
          >
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight: 5,
            }}
          >
            <Avatar
              size={30}
              rounded
              source={
                personPic
                  ? {
                      uri: personPic,
                    }
                  : require("../../assets/blankProfilePic.png")
              }
            />
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.headerName,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          },
        ]}
      >
        <View style={styles.profile}>
          <TouchableOpacity
            style={styles.profilePic}
            onPress={() =>
              navigation.navigate("ImageScreen", {
                image: personPic,
              })
            }
          >
            <Avatar
              size={50}
              rounded
              source={
                personPic
                  ? {
                      uri: personPic,
                    }
                  : require("../../assets/blankProfilePic.png")
              }
            />
          </TouchableOpacity>
          <View>
            <Text
              style={[
                styles.name,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {name}
            </Text>
          </View>

          <View>
            <Text style={styles.desc}>
              You are chatting with a support representative.
            </Text>
          </View>

          <View>
            <Text style={styles.joined}>Joined 0000</Text>
          </View>
        </View>

        <View style={styles.messagesCon}>
          {Object.keys(messagesByDay).map((day, i) => {
            if (!messagesByDay[day][messagesByDay[day].length - 1]?.createdAt)
              return;

            return (
              <View style={styles.messages} key={day}>
                {day && (
                  <Text
                    style={[
                      styles.day,
                      {
                        color: theme ? colors.black : colors.darkTxt,
                      },
                    ]}
                  >
                    {day}
                  </Text>
                )}
                {messagesByDay[day].map((msg: any) => {
                  if (!msg.seen) {
                    updateSeen(
                      msg?.sentBy?.id !== user?.uid ? msg.msgId : null
                    );
                  }

                  return (
                    msg.createdAt &&
                    (msg?.attachment ? (
                      msg?.text?.length > 0 ? (
                        <View key={msg.msgId}>
                          <TouchableOpacity
                            style={
                              msg?.sentBy?.id === user?.uid
                                ? [styles.msgSentImg]
                                : styles.msgReceivedImg
                            }
                            onPress={() =>
                              navigation.navigate("ImageScreen", {
                                image: msg.attachment,
                              })
                            }
                          >
                            <Image
                              style={styles.msgImg}
                              source={{
                                uri: msg.attachment,
                              }}
                              resizeMode="contain"
                            />
                          </TouchableOpacity>
                          <View style={styles.msgBox}>
                            <View
                              style={
                                msg?.sentBy?.id === user?.uid
                                  ? [styles.msgSent, { marginTop: 2 }]
                                  : [styles.msgReceived, , { marginTop: 2 }]
                              }
                            >
                              <Text
                                style={
                                  msg?.sentBy?.id === user?.uid
                                    ? styles.msgSentTxt
                                    : styles.msgReceivedTxt
                                }
                              >
                                {msg?.text}
                              </Text>
                            </View>
                            <Text
                              style={
                                msg?.sentBy?.id === user?.uid
                                  ? styles.msgSentTime
                                  : styles.msgRecTime
                              }
                            >
                              {msg.createdAt &&
                                getTime(
                                  msg?.createdAt?.seconds,
                                  msg?.createdAt?.nanoseconds
                                )}
                              {msg?.sentBy?.id === user?.uid
                                ? msg?.seen
                                  ? " . Seen"
                                  : " . Sent"
                                : null}
                            </Text>
                          </View>
                        </View>
                      ) : (
                        <TouchableOpacity
                          style={
                            msg?.sentBy?.id === user?.uid
                              ? styles.msgSentImg
                              : styles.msgReceivedImg
                          }
                          key={msg.msgId}
                          onPress={() =>
                            navigation.navigate("ImageScreen", {
                              image: msg.attachment,
                            })
                          }
                        >
                          <Image
                            style={styles.msgImg}
                            source={{
                              uri: msg.attachment,
                            }}
                            resizeMode="contain"
                          />
                          <Text
                            style={
                              msg?.sentBy?.id === user?.uid
                                ? styles.msgSentTime
                                : styles.msgRecTime
                            }
                          >
                            {msg.createdAt &&
                              getTime(
                                msg?.createdAt?.seconds,
                                msg?.createdAt?.nanoseconds
                              )}
                            {msg?.sentBy?.id === user?.uid
                              ? msg?.seen
                                ? " . Seen"
                                : " . Sent"
                              : null}
                          </Text>
                        </TouchableOpacity>
                      )
                    ) : (
                      msg?.createdAt && (
                        <View style={styles.msgBox} key={msg.msgId}>
                          <View
                            style={
                              msg?.sentBy?.id === user?.uid
                                ? styles.msgSent
                                : styles.msgReceived
                            }
                          >
                            <Text
                              style={
                                msg?.sentBy?.id === user?.uid
                                  ? styles.msgSentTxt
                                  : styles.msgReceivedTxt
                              }
                            >
                              {msg?.text}
                            </Text>
                          </View>
                          <Text
                            style={
                              msg?.sentBy?.id === user?.uid
                                ? styles.msgSentTime
                                : styles.msgRecTime
                            }
                          >
                            {msg.createdAt &&
                              getTime(
                                msg?.createdAt?.seconds,
                                msg?.createdAt?.nanoseconds
                              )}
                            {msg?.sentBy?.id === user?.uid
                              ? msg?.seen
                                ? " . Seen"
                                : " . Sent"
                              : null}
                          </Text>
                        </View>
                      )
                    ))
                  );
                })}
              </View>
            );
          })}
          <View />

          {showBlockedMsg && (
            <TouchableOpacity
              style={styles.blockedMsg}
              onPress={handleUnblockUser}
            >
              <Text style={styles.blockedMsgTxt}>
                You blocked this person. Tap to unblock.
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      <View style={styles.sendCon}>
        {image && (
          <>
            <TouchableOpacity
              style={styles.sendImgExitCon}
              onPress={() => setImage(null)}
            >
              <SvgXml xml={closeIcon()} width="9" height="9" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sendImgCon}
              onPress={() => navigation.navigate("ImageScreen", { image })}
            >
              <Image
                style={{
                  height: 80,
                  borderRadius: 15,
                }}
                source={{
                  uri: image,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </>
        )}
      </View>

      <View
        style={
          showSend()
            ? [styles.sendMsgCon, { paddingRight: 75 }]
            : styles.sendMsgCon
        }
      >
        <TextInput
          style={styles.typeMsg}
          placeholder="Write your message"
          onChangeText={(newMsg) => setTypedMessage(newMsg)}
          defaultValue={typedMessage}
        />

        <View style={styles.sendMsgIcons}>
          <TouchableOpacity style={styles.attachIcon} onPress={pickImage}>
            <SvgXml xml={attachIcon()} width="21" height="21" />
          </TouchableOpacity>

          {showSend() && (
            <TouchableOpacity
              style={styles.sendIcon}
              onPress={image ? handleSendAttachment : handleSendMessage}
            >
              <SvgXml xml={sendIcon()} width="21" height="21" />
            </TouchableOpacity>
          )}
        </View>
        <StatusBar style={theme ? "dark" : "light"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 80,
  },
  dropdown: {
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 60,
    right: 20,
    padding: 20,
    paddingHorizontal: 25,
    borderRadius: 5,
    zIndex: 150,
  },
  dropdownItem: {
    padding: 5,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    zIndex: 1,
  },
  headerName: {
    left: 30,
    width: 150,
    fontFamily: "PrimarySemiBold",
    fontSize: 15,
  },
  profile: {
    width: "90%",
    padding: 15,
    alignSelf: "center",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: colors.lightGrey,
  },
  profilePicAndName: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
  },
  profilePic: {
    marginBottom: 10,
  },
  name: {
    fontFamily: "PrimarySemiBold",
    fontSize: 15,
    marginBottom: 10,
  },
  desc: {
    width: 200,
    fontFamily: "PrimaryRegular",
    marginBottom: 10,
    color: colors.lightBlack,
    textAlign: "center",
  },
  joined: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.lightGrey,
  },
  messagesCon: {
    paddingBottom: 160,
  },
  messages: {},
  day: {
    fontFamily: "PrimarySemiBold",
    fontSize: 12,
    textAlign: "center",
    margin: 10,
  },
  msgBox: {},
  msgSent: {
    maxWidth: "80%",
    padding: 7,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    backgroundColor: colors.primary,
    alignSelf: "flex-end",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  msgReceived: {
    maxWidth: "80%",
    padding: 7,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.lightPrimary,
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 0,
  },

  msgSentTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.secondary,
  },
  msgReceivedTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
  },
  msgSentTime: {
    fontFamily: "PrimaryRegular",
    fontSize: 9.5,
    alignSelf: "flex-end",
    color: colors.lightGrey,
    marginRight: 10,
    marginTop: 5,
  },
  msgRecTime: {
    fontFamily: "PrimaryRegular",
    fontSize: 9.5,
    alignSelf: "flex-start",
    color: colors.lightGrey,
    marginLeft: 10,
    marginTop: 5,
  },
  msgSentImg: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  msgReceivedImg: {
    alignSelf: "flex-start",
    marginTop: 10,
  },
  msgImg: {
    minHeight: 150,
    width: 150,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  blockedMsg: {
    margin: 20,
    alignSelf: "center",
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  blockedMsgTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 10,
    color: colors.secondary,
  },
  sendCon: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    padding: 15,
  },
  sendImgExitCon: {
    position: "absolute",
    backgroundColor: "black",
    top: 23,
    right: 36,
    zIndex: 10,
    padding: 8,
    borderRadius: 15,
  },
  sendImgCon: {
    height: 80,
    width: 80,
    borderRadius: 22,
    marginRight: 15,
  },
  sendMsgCon: {
    height: 50,
    width: Dimensions.get("window").width * 0.9,
    position: "absolute",
    bottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    backgroundColor: colors.lightPrimary,
    borderRadius: 22,
    padding: 15,
    paddingRight: 38,
  },
  typeMsg: {
    fontFamily: "PrimaryRegular",
    fontSize: 13,
    width: "100%",
  },
  sendMsgIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  attachIcon: {
    alignSelf: "flex-end",
  },
  sendIcon: {
    alignSelf: "flex-end",
    marginLeft: 12,
  },
});
