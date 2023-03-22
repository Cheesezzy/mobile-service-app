import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import {
  arrowIcon,
  arrowLeftIcon,
  frontIcon,
} from "../../../assets/icons/icons";
import VerificationSelectType from "../../components/businessEnroll/VerificationSelectType";
import colors from "../../config/colors";
import * as ImagePicker from "expo-image-picker";
import { trimText } from "../../../api/hooks/generalHooks";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, store } from "../../../firebaseConfig";
import { uuidv4 } from "@firebase/util";
import { useAuthState } from "react-firebase-hooks/auth";

const verificationType = [
  "nin",
  "bvn",
  "Driver’s license",
  "Voter’s card",
  "National passport",
];
const KycVerification = ({ navigation }: any) => {
  const [showType, setShowType] = useState(false);
  const [verifyData, setVerifyData] = useState(verificationType[0]);
  const [image, setImage] = useState<any>(null);

  const [user] = useAuthState(auth);

  function removeFilePathPrefix(filePath: string) {
    const prefix = "file:///data/user/0/host.exp.exponent/cache/ImagePicker/";
    const index = filePath.indexOf(prefix);
    if (index === -1) {
      // prefix not found, return original string
      return filePath;
    } else {
      // remove prefix and return rest of string
      return filePath.substring(index + prefix.length);
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
    });

    if (result && !result?.cancelled) {
      await setImage(result?.uri);
      console.log();
    }
  };

  const handleSubmit = async () => {
    const fileRef = ref(store, `messagePics/${user?.uid}/${uuidv4()}.jpg`);

    const response = await fetch(image);
    const blob = await response.blob();
    const fileName = image.substring(image.lastIndexOf("/") + 1);

    uploadBytesResumable(fileRef, blob)
      .then((snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        getDownloadURL(snapshot.ref).then((url: any) => {});
      })
      .catch((error: any) => {
        console.error(error);
      });

    setImage(null);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        {showType ? (
          <VerificationSelectType
            showType={showType}
            setShowType={setShowType}
            verificationType={verificationType}
            setVerifyData={setVerifyData}
          />
        ) : (
          <>
            <Text style={styles.header}>KYC Verification.</Text>
            <Text style={styles.headerDesc}>
              Choose your preferred method of verification.
            </Text>

            <View>
              <View>
                <View style={styles.verificationLabel}>
                  <Text
                    style={{
                      fontFamily: "PrimaryRegular",
                    }}
                  >
                    Identification method
                  </Text>
                  <Text
                    style={{
                      color: "#D41111",
                      marginLeft: 1,
                      fontFamily: "PrimaryRegular",
                      fontSize: 16,
                      lineHeight: 18,
                    }}
                  >
                    *
                  </Text>
                </View>

                <TouchableOpacity onPress={() => setShowType(true)}>
                  <View style={styles.verificationContainer}>
                    <Text>{verifyData.toUpperCase()}</Text>
                    <SvgXml xml={arrowLeftIcon()} width="13" height="17" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <View style={styles.inputLabel}>
                <Text
                  style={{
                    fontFamily: "PrimaryRegular",
                  }}
                >
                  Identification number
                </Text>
                <Text
                  style={{
                    color: "#D41111",
                    marginLeft: 1,
                    fontFamily: "PrimaryRegular",
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                >
                  *
                </Text>
              </View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={`Please enter your ${verifyData.toUpperCase()} number`}
              />

              <View style={styles.inputLabel}>
                <Text
                  style={{
                    fontFamily: "PrimaryRegular",
                  }}
                >
                  Image of identification document
                </Text>
                <Text
                  style={{
                    color: "#D41111",
                    marginLeft: 1,
                    fontFamily: "PrimaryRegular",
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                >
                  *
                </Text>
              </View>
              <TouchableOpacity style={styles.bank} onPress={pickImage}>
                {image ? (
                  <Text style={[styles.label, { color: colors.black }]}>
                    {trimText(removeFilePathPrefix(image), 25)}
                  </Text>
                ) : (
                  <Text style={styles.label}>Choose Image</Text>
                )}

                <View>
                  <SvgXml xml={frontIcon()} width="14" height="14" />
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default KycVerification;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
    paddingHorizontal: 24,
    position: "relative",
  },
  header: {
    fontFamily: "PrimarySemiBold",
    fontSize: 24,
  },
  headerDesc: {
    marginTop: 4,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    lineHeight: 20,
  },

  verificationLabel: {
    marginTop: 24,
    flexDirection: "row",
    fontFamily: "PrimaryRegular",
    fontSize: 16,
  },
  verificationContainer: {
    flexDirection: "row",
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  //   Inputs\
  inputLabel: {
    marginTop: 33,
    flexDirection: "row",
    fontFamily: "PrimaryRegular",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  bank: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  label: {
    fontFamily: "PrimaryRegular",
    color: colors.greyMain,
  },
});
