import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import { updateBusinessDesc, updateBusinessName } from "../../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

const BusinessDetails = ({ navigation }: any) => {
  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", User?.uid!);

  const [user] = useDocumentData(userRef);

  const [businessInputs, setBusinessInputs] = useState({
    businessName: "",
    businessDesc: "",
    businessNameError: "",
    businessDescError: "",
  });

  const handleBusinessInputs = (fieldName: string, value: string) => {
    setBusinessInputs({
      ...businessInputs,
      [fieldName]: value,
      [`${fieldName}Error`]: "",
    });
  };

  const handleFormSubmit = () => {
    // Reset all previous errors
    setBusinessInputs({
      ...businessInputs,
      businessNameError: "",
      businessDescError: "",
    });

    // Validate business name
    if (!businessInputs.businessName.trim()) {
      setBusinessInputs({
        ...businessInputs,
        businessNameError: "Business name is required",
      });
      return;
    }

    // Validate business description
    if (!businessInputs.businessDesc.trim()) {
      setBusinessInputs({
        ...businessInputs,
        businessDescError: "Business description is required",
      });
      return;
    }

    // Submit form if there are no errors
    if (
      !businessInputs.businessNameError &&
      !businessInputs.businessDescError
    ) {
      // Your submit logic goes here
      setBusinessInputs({
        ...businessInputs,
        businessName: "",
        businessDesc: "",
      });
      //updateBusinessName(user?.bizId, businessInputs.businessName);
      //updateBusinessDesc(user?.bizId, businessInputs.businessDesc);
      navigation.navigate("BusinessCategory");
    }

    return;
  };
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>Enter business details.</Text>
          <Text style={styles.headerDesc}>
            Enter the correct information about your business and make sure to
            cross check them.
          </Text>

          <View>
            <View>
              <View style={styles.inputLabel}>
                <Text>Business name</Text>
                <Text
                  style={{
                    color: "#D41111",
                    marginLeft: 1,
                    fontWeight: "400",
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                >
                  *
                </Text>
              </View>
              <TextInput
                onChangeText={(enteredText) =>
                  handleBusinessInputs("businessName", enteredText)
                }
                value={businessInputs.businessName}
                style={styles.input}
                placeholder="Pick a descriptive name"
              />
              {businessInputs.businessNameError ? (
                <Text style={styles.errorMessage}>
                  {businessInputs.businessNameError}
                </Text>
              ) : null}
            </View>
            <View>
              <View style={styles.inputLabel}>
                <Text>Business description</Text>
                <Text
                  style={{
                    color: "#D41111",
                    marginLeft: 1,
                    fontWeight: "400",
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                >
                  *
                </Text>
              </View>
              <TextInput
                onChangeText={(enteredText) =>
                  handleBusinessInputs("businessDesc", enteredText)
                }
                value={businessInputs.businessDesc}
                style={styles.input}
                placeholder={`Your description should be as detailed as possible, so you can be favored by the algorithm.`}
                numberOfLines={10}
                textAlignVertical="top"
              />
              {businessInputs.businessDescError ? (
                <Text style={styles.errorMessage}>
                  {businessInputs.businessDescError}
                </Text>
              ) : null}
            </View>
          </View>

          <TouchableOpacity onPress={() => handleFormSubmit()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Proceed</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 80, width: "100%" }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    paddingHorizontal: 24,
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

  //   Inputs\
  inputLabel: {
    marginTop: 24,
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

  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "PrimaryRegular",
    fontSize: 14,
  },
  btn: {
    width: "100%",
    paddingVertical: 14,
    marginTop: 56,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },

  errorMessage: {
    color: "red",
    fontSize: 12,
  },
});
