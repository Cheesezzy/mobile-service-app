import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import colors from "../../config/colors";
import { SvgXml } from "react-native-svg";
import { location } from "../../../assets/svgs/svgs";
import { Dialog } from "@rneui/themed";
import * as Location from "expo-location";
import { updateLocation } from "../../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { collection, doc } from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";

const SetLocationPopup = () => {
  const [user] = useAuthState(auth);
  const navigation = useNavigation();
  const [errMsg, setErrorMsg] = useState<any>(null);

  const businessRef = collection(db, "users", user?.uid!, "business");
  //const userRef = doc(db, "users", user?.uid!);
  const [business, loading] = useCollectionData(businessRef);

  const userRef = doc(db, "users", user?.uid!);

  const [User] = useDocumentData(userRef);

  //console.log(business[1].rating, "data");

  const usePresentLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      updateLocation(
        User?.bizId,
        location.coords?.latitude,
        location.coords?.longitude
      );
    })();
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  //setVisible(true);
  return (
    <>
      <Dialog
        overlayStyle={{
          backgroundColor: theme ? colors.secondary : colors.blackSmoke,
        }}
        isVisible
        style={styles.dialogBox}
      >
        <SvgXml
          style={{ alignSelf: "center" }}
          xml={location()}
          width={300}
          height={100}
        />
        <Text
          style={[
            styles.title,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          For clients to find you in searches; you need to update your location
        </Text>
        <TouchableOpacity style={styles.choiceBtn} onPress={usePresentLocation}>
          <Text style={styles.choiceBtnTxt}>Use your present location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.choiceBtn}
          // @ts-ignore
          onPress={() => navigation.navigate("GoogleSearch")}
        >
          <Text style={styles.choiceBtnTxt}>Choose a different location</Text>
        </TouchableOpacity>
      </Dialog>
    </>
  );
};

export default SetLocationPopup;

const styles = StyleSheet.create({
  dialogBox: {
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    marginTop: 10,
  },
  choiceBtn: {
    width: "80%",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  choiceBtnTxt: {
    color: colors.secondary,
    fontSize: 11,
    fontFamily: "LatoRegular",
    textAlign: "center",
  },
});
