import { Avatar } from "@rneui/themed";
import { useEffect, useMemo, useRef, useState } from "react";
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
  ImageBackground,
} from "react-native";
import colors from "../config/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, store } from "../../firebaseConfig";
import { SvgXml } from "react-native-svg";
import {
  attachIcon,
  sendIcon,
  exitIcon,
  editIcon,
  closeIcon,
} from "../../assets/icons/icons";
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
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { sendMessage } from "../../api/database";
import { useDispatch, useSelector } from "react-redux";
import { handleUser, updateMessages } from "../../provider/userSlice";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { getTime } from "../../api/customHooks/convertTimestamp";
import { useAnimatedRef } from "react-native-reanimated";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { StatusBar } from "expo-status-bar";
import { uuidv4 } from "@firebase/util";

export const NegoDisplay = ({ navigation, route }: any) => {
  const selector = useSelector(handleUser);
  const { name, personId, personPic } = route.params;
  const [user] = useAuthState(auth);
  const [typedMessage, setTypedMessage] = useState("");
  const [image, setImage] = useState<any>(null);
  const User = selector.payload.user.value;
  const userRef = doc(db, "users", user?.uid!);
  const senderRef = doc(db, "users", personId);
  const [messages, setMessages]: any[] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const scrollViewRef = useAnimatedRef<any>();
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

  const [sender] = useDocumentData(senderRef);
  const businessRef = sender?.bizId && doc(db, "businesses", sender?.bizId);
  const [business] = useDocumentData(businessRef);

  const updateSeen = (id: any) => {
    if (id) {
      const chatRef = doc(receivedMessagesRef, id);
      updateDoc(chatRef, {
        seen: true,
      });
    }
  };

  const handleSendMessage = () => {
    sendMessage(
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
          sendMessage(
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
    if (typedMessage.length > 0 || image) return true;
    else return false;
  };

  return (
    <>
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
              {business ? business.desc : "A business on Rete"}
            </Text>
          </View>

          <View>
            <Text style={styles.joined}>Joined March 2022</Text>
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
            <SvgXml xml={attachIcon()} width="24" height="24" />
          </TouchableOpacity>

          {showSend() && (
            <TouchableOpacity
              style={styles.sendIcon}
              onPress={image ? handleSendAttachment : handleSendMessage}
            >
              <SvgXml xml={sendIcon()} width="24" height="24" />
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
    paddingTop: 40,
  },
  profile: {
    width: "90%",
    padding: 15,
    alignSelf: "center",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: colors.lightGrey,
  },
  profilePic: {
    marginBottom: 10,
  },
  name: {
    fontFamily: "Lato",
    fontSize: 15,
    marginBottom: 10,
  },
  desc: {
    width: 200,
    fontFamily: "LatoRegular",
    marginBottom: 10,
    color: colors.lightBlack,
    textAlign: "center",
  },
  joined: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.lightGrey,
  },
  messagesCon: {
    paddingBottom: 120,
  },
  messages: {},
  day: {
    fontFamily: "Lato",
    fontSize: 12,
    textAlign: "center",
    margin: 10,
  },
  msgBox: {},
  msgSent: {
    maxWidth: "80%",
    padding: 12,
    paddingHorizontal: 15,
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
    padding: 12,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.lightPrimary,
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 0,
  },

  msgSentTxt: {
    fontFamily: "LatoRegular",
    color: colors.secondary,
  },
  msgReceivedTxt: {
    fontFamily: "LatoRegular",
  },
  msgSentTime: {
    fontFamily: "LatoRegular",
    fontSize: 9.5,
    alignSelf: "flex-end",
    color: colors.lightGrey,
    marginRight: 10,
    marginTop: 5,
  },
  msgRecTime: {
    fontFamily: "LatoRegular",
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
    fontFamily: "LatoRegular",
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
