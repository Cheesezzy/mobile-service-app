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
import { useCollectionData } from "react-firebase-hooks/firestore";

const NegoScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const [user] = useAuthState(auth);
  const users = selector.payload.users.value;
  const User = selector.payload.user.value;
  const negotiatingRef = collection(db, "users", user?.uid!, "negotiating");

  const [negotiating, loading] = useCollectionData(negotiatingRef);

  const checkingPerson = (msg: any) => {
    if (msg?.type === "sent") {
      return msg?.receivedBy;
    }
    return msg?.sentBy;
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.secondary,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        {negotiating &&
          negotiating.map((msg: any) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("NegoDisplay", {
                    personId: checkingPerson(msg)?.id,
                    name: checkingPerson(msg)?.name,
                  })
                }
                key={
                  msg?.sentBy?.id + Math.floor(Math.random() * 100) + msg?.text
                }
              >
                <View style={styles.displayBox}>
                  <View style={styles.avatar}>
                    <Avatar
                      size={40}
                      rounded
                      source={{ uri: "https://picsum.photos/200" }}
                    />
                  </View>
                  <View style={styles.displayInfo}>
                    <View style={styles.nameAndTimeCon}>
                      <Text style={styles.displayName}>
                        {checkingPerson(msg)?.name}
                      </Text>
                      <Text style={styles.displayTime}>19 NOV</Text>
                    </View>
                    <View style={styles.msgAndStatus}>
                      <Text style={styles.displayMsg}>{msg?.text}</Text>
                      <View style={styles.displayStatus}>
                        <Text style={styles.displayStatusTxt}>1</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
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
    color: colors.lightGrey,
  },
  msgAndStatus: {
    width: "81%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayMsg: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    color: colors.lightGrey,
  },
  displayStatus: {
    height: 15,
    width: 15,
    backgroundColor: colors.primary,
    borderRadius: 15,
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
