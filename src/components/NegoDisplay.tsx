import { Avatar } from "@rneui/themed";
import { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  useWindowDimensions,
} from "react-native";
import colors from "../config/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { SvgXml } from "react-native-svg";
import { sendIcon } from "../../assets/icons/icons";
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
} from "firebase/firestore";
import { sendMessage } from "../../api/database";
import { useDispatch, useSelector } from "react-redux";
import { handleUser, updateMessages } from "../../provider/userSlice";
import { uuidv4 } from "@firebase/util";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { getTime } from "../../api/customHooks/convertTimestamp";
import {
  scrollTo,
  useAnimatedRef,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

export const NegoDisplay = ({ route }: any) => {
  const key = uuidv4();
  const selector = useSelector(handleUser);
  const dispatch = useDispatch();
  const { name, personId } = route.params;
  const [user] = useAuthState(auth);
  const [typedMessage, setTypedMessage] = useState("");
  const [messager, setMessager] = useState<any>("");
  const User = selector.payload.user.value;
  const userRef = doc(db, "users", user?.uid!);
  const messagesRef = collection(
    db,
    "users",
    user?.uid!,
    "messages",
    personId,
    "chats"
  );
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q);

  const handleSendMessage = () => {
    sendMessage(
      user?.uid,
      personId,
      typedMessage,
      User?.name,
      name,
      serverTimestamp()
    );

    setTypedMessage("");
  };

  const dummy = useAnimatedRef<any>();
  const scroll = useSharedValue(0);
  const { height } = useWindowDimensions();

  useDerivedValue(() => {
    scrollTo(dummy, 0, scroll.value * height, true);
  });

  {
    /*useEffect(() => {
    scroll.value = scroll.value + height;
    if (scroll.value > height) scroll.value = 0;
  }, [scroll.value]);*/
  }

  return (
    <>
      <ScrollView ref={dummy} style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profilePic}>
            <Avatar
              size={50}
              rounded
              source={{ uri: "https://picsum.photos/200" }}
            />
          </View>
          <View>
            <Text style={styles.name}>{name}</Text>
          </View>

          <View>
            <Text style={styles.desc}>
              Our commitment to the job is on another level.
            </Text>
          </View>

          <View>
            <Text style={styles.joined}>Joined March 2022</Text>
          </View>
        </View>

        <View style={styles.messagesCon}>
          <View style={styles.messages}>
            <Text style={styles.day}>Today</Text>

            {messages &&
              messages.map((msg: any) => {
                return (
                  <View style={styles.msgBox} key={Math.random()}>
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
                      {getTime(
                        msg?.createdAt?.seconds,
                        msg?.createdAt?.nanoseconds
                      )}
                    </Text>
                  </View>
                );
              })}
          </View>
          <View />
        </View>
      </ScrollView>
      <View style={styles.sendMsgCon}>
        <TextInput
          style={styles.typeMsg}
          placeholder="Write your message"
          onChangeText={(newMsg) => setTypedMessage(newMsg)}
          defaultValue={typedMessage}
        />
        <TouchableOpacity
          style={
            typedMessage.length > 0
              ? [styles.sendIcon, { opacity: 1 }]
              : styles.sendIcon
          }
          onPress={handleSendMessage}
        >
          <SvgXml xml={sendIcon()} width="24" height="24" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.secondary,
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
    color: colors.grey,
    textAlign: "center",
  },
  joined: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.lightGrey,
  },
  messagesCon: {
    paddingBottom: 70,
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
    width: "100%",
  },
  sendIcon: {
    alignSelf: "flex-end",
    opacity: 0,
  },
});
