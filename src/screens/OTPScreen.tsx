import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { checkVerification } from "../../api/verify";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useSelector } from "react-redux";
import { handleAllUsers } from "../../provider/allUsersSlice";
import colors from "../config/colors";

const OTPScreen = ({ route, navigation }: any) => {
  const { userChannel, type, id } = route.params;
  const [invalidCode, setInvalidCode] = useState(false);
  const [loading, setLoading] = useState(false);

  const selector = useSelector(handleAllUsers);
  const theme = selector.payload.theme.value;

  return (
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
          Verification Code
        </Text>
        <Text style={[styles.titleSmall]}>
          {`Please enter the verification code sent to (${userChannel})`}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace("ForgotPassword")}
      >
        <Text style={styles.buttonText}>Edit Phone Number</Text>
      </TouchableOpacity>
      <OTPInputView
        style={{ width: "100%", height: 200, alignSelf: "center" }}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          setLoading(true);
          checkVerification(userChannel, code).then((success) => {
            if (!success) {
              setInvalidCode(true);
              setLoading(false);
            }
            success &&
              navigation.replace("Change Password", {
                id,
              });
            success && setLoading(false);
          });
        }}
      />

      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
      {loading && (
        <Text style={{ alignSelf: "center" }}>
          <ActivityIndicator color={colors.primary} />
        </Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: "PrimarySemiBold",
    marginTop: 30,
    marginBottom: 5,
  },
  titleSmall: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    color: colors.greyMain,
    marginBottom: 10,
  },
  button: {
    height: 35,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  borderStyleBase: {
    width: 40,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: colors.primary,
  },
  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    color: colors.greyMain,
    fontSize: 20,
  },
  underlineStyleHighLighted: {
    borderColor: colors.primary,
  },
  error: {
    color: colors.errorMain,
    alignSelf: "center",
  },
});

export default OTPScreen;
