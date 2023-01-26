import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import {
  facebookicon,
  googleIcon,
  hidePassIcon,
  showPassIcon,
} from "../../assets/icons/icons";
import { useSelector } from "react-redux";
import { handleAllUsers } from "../../provider/allUsersSlice";
import { useState } from "react";

const ForgotPwdScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selector = useSelector(handleAllUsers);
  const theme = selector.payload.theme.value;

  const handleChangePassword = () => {};

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme ? colors.secondary : colors.blackSmoke,
        },
      ]}
    >
      <View>
        <Text
          style={[
            styles.title,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          Change Password
        </Text>
      </View>

      <View style={styles.password}>
        <TextInput
          onChangeText={(newPass) => setPassword(newPass)}
          style={[
            styles.inputBox,
            {
              borderBottomWidth: 0,
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
          placeholder="New Password"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.lightGrey}
        />
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
            width="19"
            height="19"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.password}>
        <TextInput
          onChangeText={(newPass) => setPassword(newPass)}
          style={[
            styles.inputBox,
            {
              borderBottomWidth: 0,
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
          placeholder="Confirm Password"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.lightGrey}
        />
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
            width="19"
            height="19"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.err}>{error}</Text>

      <TouchableOpacity
        style={[
          styles.inputBtn,
          {
            opacity: loading ? 0.5 : 1,
          },
        ]}
        onPress={handleChangePassword}
        disabled={loading}
      >
        <Text style={styles.inputBtnTxt}>
          {loading ? <ActivityIndicator color="#fff" /> : "Submit"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPwdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "Lato",
    textAlign: "center",
    marginBottom: 20,
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
  password: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "lightgrey",
    paddingRight: 30,
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  showHideToggle: {
    alignSelf: "center",
    marginTop: 8,
  },
  inputBtn: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBtnTxt: {
    color: colors.secondary,
    fontSize: 15,
    fontFamily: "LatoRegular",
  },
  err: {
    color: "#ff3333",
    fontSize: 12,
    textAlign: "center",
    margin: 4,
  },
});
