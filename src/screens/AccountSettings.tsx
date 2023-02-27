import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { auth, store } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  updateProfilePic,
  updateBusinessName,
  updateUserName,
  updateBusinessDesc,
} from "../../api/database";
import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import HeaderTitle from "../components/HeaderTitle";
import colors from "../config/colors";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { Avatar } from "@rneui/themed";
import { cameraIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";

const AccountSettings = ({ route }: any) => {
  const [User] = useAuthState(auth);
  const { user } = route.params;

  const [businessName, setBusinessName] = useState("");
  const [profileName, setProfileName] = useState("");
  const [desc, setDesc] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [progressProfilePic, setProgressProfilePic] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState<any>(null);

  async function changeProfilePic(user: any) {
    if (image) {
      const fileRef = ref(store, `profilePics/${user?.uid}`);

      const response = await fetch(image);
      const blob = await response.blob();
      const fileName = image.substring(image.lastIndexOf("/") + 1);

      uploadBytesResumable(fileRef, blob)
        .then((snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            updateProfilePic(User?.uid, url);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);
    console.log(result?.cancelled);

    if (result && !result?.cancelled) {
      setImage(result?.uri);
    }
  };

  const handleSave = () => {
    setClicked(true);

    if (image) {
      changeProfilePic(User);
      setClicked(false);
      setImage(null);
    }

    if (businessName.length > 0) {
      updateBusinessName(user?.bizId, businessName);
      setClicked(false);
      setBusinessName("");
    }

    if (profileName.length > 0) {
      updateUserName(User?.uid, profileName);
      setClicked(false);
      setProfileName("");
    }

    if (desc.length > 0) {
      updateBusinessDesc(user?.bizId, desc);
      setClicked(false);
      setDesc("");
    }
  };

  const checkInputs = () => {
    if (image) return true;
    if (businessName.length > 0) return true;
    if (profileName.length > 0) return true;
    if (desc.length > 0) return true;

    return false;
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="" user="" profileURL="" />
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <TouchableOpacity style={styles.avatar} onPress={pickImage}>
          <Avatar
            size={80}
            rounded
            source={
              user?.profilePic
                ? {
                    uri: image ? image : user?.profilePic,
                  }
                : require("../.././assets/blankProfilePic.png")
            }
          />
          <View
            style={{
              position: "absolute",
              top: 52,
              alignSelf: "flex-end",
              backgroundColor: colors.secondarySmoke,
              borderColor: colors.black,
              borderWidth: 0.8,
              padding: 2,
              borderRadius: 10,
            }}
          >
            <SvgXml xml={cameraIcon()} width="10" height="10" />
          </View>
        </TouchableOpacity>
        {user.role === "Provider" && (
          <TextInput
            onChangeText={(newName) => setBusinessName(newName)}
            style={styles.inputBox}
            placeholder="Business Name"
            placeholderTextColor={colors.lightGrey}
          />
        )}
        <TextInput
          onChangeText={(newName) => setProfileName(newName)}
          style={styles.inputBox}
          placeholder="Profile Name"
          placeholderTextColor={colors.lightGrey}
        />
        {user.role === "Provider" && (
          <TextInput
            onChangeText={(newDesc) => setDesc(newDesc)}
            style={styles.inputBox}
            placeholder="Business Description"
            placeholderTextColor={colors.lightGrey}
            multiline
          />
        )}
        <TouchableOpacity
          style={[
            styles.choiceBtn,
            {
              opacity: checkInputs() ? 1 : 0.5,
            },
          ]}
          onPress={handleSave}
        >
          <Text style={styles.choiceBtnTxt}>
            {clicked ? (
              <ActivityIndicator color={colors.primary} size="small" />
            ) : (
              "Save changes"
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.secondary,
  },
  avatar: {
    alignSelf: "center",
  },
  inputBox: {
    height: 45,
    width: "100%",
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontFamily: "LatoRegular",
  },
  choiceBtn: {
    width: "100%",
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  choiceBtnTxt: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: "LatoRegular",
  },
});
