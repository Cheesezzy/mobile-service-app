import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../config/colors";
import PhoneInput from "react-native-phone-number-input";
import { sendSmsVerification } from "../../api/verify";
import { useSelector } from "react-redux";
import { handleAllUsers } from "../../provider/allUsersSlice";

const PhoneScreen = ({ navigation }: any) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  const selector = useSelector(handleAllUsers);
  const theme = selector.payload.theme.value;

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          <View>
            <Text
              style={[
                styles.title,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Forgot password?
            </Text>
            <Text style={[styles.titleSmall]}>
              Enter your phone number to reset your password
            </Text>
          </View>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="US"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            countryPickerProps={{ withAlphaFilter: true }}
            withShadow
            autoFocus
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              sendSmsVerification(formattedValue).then((sent) => {
                navigation.navigate("OTP", {
                  userChannel: formattedValue,
                  type: "sms",
                });
              });
            }}
          >
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondarySmoke,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "PrimarySemiBold",
    marginBottom: 5,
  },
  titleSmall: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    color: colors.greyMain,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  welcome: {
    padding: 20,
  },
  status: {
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    color: "gray",
  },
});

export default PhoneScreen;
