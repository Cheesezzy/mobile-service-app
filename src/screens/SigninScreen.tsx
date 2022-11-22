import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import { facebookicon, googleIcon } from "../../assets/icons/icons";

const facebook = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 31.81" role="img"><defs><style>.fb-btn-cls-1,.fb-btn-cls-2{fill:#1877f2;}.fb-btn-cls-1{clip-rule:evenodd;}.fb-btn-cls-2{fill-rule:evenodd;}.fb-btn-cls-3{clip-path:url(#fb-clip-path);}</style><clipPath id="fb-clip-path" fill="#1877f2"><path fill="#1877f2" class="fb-btn-cls-1" d="M32,16A16,16,0,1,0,13.5,31.81V20.63H9.44V16H13.5V12.48c0-4,2.39-6.23,6-6.23a24.77,24.77,0,0,1,3.58.31V10.5h-2A2.31,2.31,0,0,0,18.5,13v3h4.44l-.71,4.63H18.5V31.81A16,16,0,0,0,32,16"></path></clipPath></defs><g data-name="Layer 2"><g data-name="Layer 1"><path class="fb-btn-cls-2" d="M32,16A16,16,0,1,0,13.5,31.81V20.63H9.44V16H13.5V12.48c0-4,2.39-6.23,6-6.23a24.77,24.77,0,0,1,3.58.31V10.5h-2A2.31,2.31,0,0,0,18.5,13v3h4.44l-.71,4.63H18.5V31.81A16,16,0,0,0,32,16"></path></g></g></svg>`;

const SigninScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Sign In</Text>
      </View>

      <TextInput style={styles.inputBox} placeholder="Email or username" />
      <TextInput style={styles.inputBox} placeholder="Password" />

      <TouchableOpacity
        style={styles.inputBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.inputBtnTxt}>Sign in</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>

      <View style={styles.dividerCon}>
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.thirdParty}>
        <SvgXml
          style={{
            marginRight: 10,
          }}
          xml={googleIcon()}
          width={20}
          height={20}
        />
        <Text style={styles.thirdPartyTxt}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.thirdParty}>
        <SvgXml
          style={{
            marginRight: 10,
          }}
          xml={facebookicon()}
          width={20}
          height={20}
        />
        <Text style={styles.thirdPartyTxt}>Continue with Facebook</Text>
      </TouchableOpacity>

      <View>
        <Text
          style={styles.signin}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign up now
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontFamily: "Lato",
    textAlign: "center",
    marginBottom: 20,
  },
  inputBox: {
    height: 45,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontFamily: "LatoRegular",
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
  forgotPassword: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "LatoRegular",
  },
  dividerCon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    width: "44%",
    position: "relative",
    top: 5,
  },
  or: {
    color: colors.grey,
    fontFamily: "LatoLight",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
  },
  thirdParty: {
    flexDirection: "row",
    height: 48,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  thirdPartyTxt: {
    fontSize: 15,
    fontFamily: "LatoRegular",
  },
  signin: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 15,
    fontFamily: "LatoRegular",
    fontSize: 15,
  },
});

export default SigninScreen;
