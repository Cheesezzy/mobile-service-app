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

const BusinessDetails = ({ navigation }: any) => {
  const [businessInputs, setBusinessInputs] = useState({
    businessName: "",
    businessEmail: "",
    businessContact: "",
    businessNameError: "",
    businessEmailError: "",
    businessContactError: "",
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
      businessEmailError: "",
      businessContactError: "",
    });

    // Validate business name
    if (!businessInputs.businessName.trim()) {
      setBusinessInputs({
        ...businessInputs,
        businessNameError: "Business name is required",
      });
      return;
    }

    // Validate business email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!businessInputs.businessEmail.trim()) {
      setBusinessInputs({
        ...businessInputs,
        businessEmailError: "Business email is required",
      });
      return;
    } else if (!emailRegex.test(businessInputs.businessEmail)) {
      setBusinessInputs({
        ...businessInputs,
        businessEmailError: "Invalid business email",
      });

      return;
    }

    // Validate business contact
    if (!businessInputs.businessContact.trim()) {
      setBusinessInputs({
        ...businessInputs,
        businessContactError: "Business contact is required",
      });
      return;
    }

    // Submit form if there are no errors
    if (
      !businessInputs.businessNameError &&
      !businessInputs.businessEmailError &&
      !businessInputs.businessContactError
    ) {
      // Your submit logic goes here
      console.log("Form submitted successfully!");
      setBusinessInputs({
        ...businessInputs,
        businessName: "",
        businessEmail: "",
        businessContact: "",
      });
      const businessData = {
        businessName: businessInputs.businessName,
        businessEmail: businessInputs.businessEmail,
        businessContact: businessInputs.businessContact,
      };
      navigation.navigate("BusinessCategory", { businessData });
    }

    return;
  };
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
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
                  placeholder="Oha specialist"
                />
                {businessInputs.businessNameError ? (
                  <Text style={styles.errorMessage}>
                    {businessInputs.businessNameError}
                  </Text>
                ) : null}
              </View>
              <View>
                <View style={styles.inputLabel}>
                  <Text>Business email</Text>
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
                    handleBusinessInputs("businessEmail", enteredText)
                  }
                  value={businessInputs.businessEmail}
                  style={styles.input}
                  placeholder="Oha specialist"
                />
                {businessInputs.businessEmailError ? (
                  <Text style={styles.errorMessage}>
                    {businessInputs.businessEmailError}
                  </Text>
                ) : null}
              </View>

              <View>
                <View style={styles.inputLabel}>
                  <Text>Business contact</Text>
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
                  keyboardType="numeric"
                  onChangeText={(enteredText) =>
                    handleBusinessInputs("businessContact", enteredText)
                  }
                  value={businessInputs.businessContact}
                  style={styles.input}
                  placeholder="Oha specialist"
                />
              </View>
              {businessInputs.businessContactError ? (
                <Text style={styles.errorMessage}>
                  {businessInputs.businessContactError}
                </Text>
              ) : null}
            </View>

            <TouchableOpacity onPress={() => handleFormSubmit()}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Proceed</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 102,
    paddingHorizontal: 24,
  },
  header: {
    fontWeight: "600",
    fontSize: 24,
  },
  headerDesc: {
    marginTop: 4,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
  },

  //   Inputs\
  inputLabel: {
    marginTop: 24,
    flexDirection: "row",
    fontWeight: "400",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 56,
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 8,
  },

  errorMessage: {
    color: "red",
    fontSize: 12,
  },
});
