import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import colors from "../../config/colors";
import { handleAllUsers } from "../../../provider/allUsersSlice";
import { useSelector } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import {
  hidePassIcon,
  lockIcon,
  showPassIcon,
} from "../../../assets/icons/icons";
import { updateUserPassword } from "../../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import { updatePassword } from "firebase/auth";

const ChangePassword = () => {
  const [user] = useAuthState(auth);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = () => {
    setLoading(true);
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        if (user) {
          updateUserPassword(user.uid, confirmPassword);
          updatePassword(user, confirmPassword);
          setLoading(false);
        }
      } else {
        setError("Password does not match");
        setLoading(false);
      }
    } else setError("Please fill in your password");
    setLoading(false);
  };

  const selector = useSelector(handleAllUsers);
  const theme = selector.payload.theme.value;

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.title,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          Enter new password
        </Text>
        <Text style={[styles.titleSmall]}>
          Your new password should be different from your previous password.
        </Text>
      </View>

      <View style={styles.password}>
        <View style={styles.iconTxtCon}>
          <SvgXml
            style={styles.firstIcon}
            xml={lockIcon(theme ? colors.black : colors.darkTxt)}
            width="15"
            height="15"
          />
          <TextInput
            onChangeText={(newPass) => setPassword(newPass)}
            style={[
              styles.inputBox,
              {
                borderBottomWidth: 0,
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
            placeholder="Enter password"
            secureTextEntry={!passwordVisible}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <TouchableOpacity
          style={styles.showHideToggle}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <SvgXml
            xml={
              passwordVisible
                ? showPassIcon(theme ? colors.black : colors.darkTxt)
                : hidePassIcon(theme ? colors.black : colors.darkTxt)
            }
            width="15"
            height="15"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.password}>
        <View style={styles.iconTxtCon}>
          <SvgXml
            style={styles.firstIcon}
            xml={lockIcon(theme ? colors.black : colors.darkTxt)}
            width="15"
            height="15"
          />
          <TextInput
            onChangeText={(newPass) => setConfirmPassword(newPass)}
            style={[
              styles.inputBox,
              {
                borderBottomWidth: 0,
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
            placeholder="Confirm password"
            secureTextEntry={!passwordVisible}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <TouchableOpacity
          style={styles.showHideToggle}
          onPress={() => setConfirmPasswordVisible(!passwordVisible)}
        >
          <SvgXml
            xml={
              confirmPasswordVisible
                ? showPassIcon(theme ? colors.black : colors.darkTxt)
                : hidePassIcon(theme ? colors.black : colors.darkTxt)
            }
            width="15"
            height="15"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.err}>{error}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleChangePassword}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? <ActivityIndicator color="#fff" /> : "Change Password"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 30,
  },
  firstIcon: {
    top: 3,
  },
  inputBox: {
    height: 45,
    width: "100%",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontFamily: "PrimaryRegular",
  },
  iconTxtCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.greyMid,
    paddingRight: 30,
    borderBottomWidth: 0.9,
    borderRadius: 5,
  },
  showHideToggle: {
    alignSelf: "center",
    marginTop: 8,
  },
  err: {
    color: "#ff3333",
    fontSize: 12,
    textAlign: "center",
    margin: 4,
  },
  button: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});
