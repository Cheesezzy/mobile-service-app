import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { facebookicon, googleIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";

const SignupScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <TextInput style={styles.inputBox} placeholder="Name" />
      <TextInput style={styles.inputBox} placeholder="Email" />
      <TextInput style={styles.inputBox} placeholder="Password" />

      <TouchableOpacity style={styles.inputBtn}>
        <Text style={styles.inputBtnTxt}>Sign up</Text>
      </TouchableOpacity>

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
          style={styles.signup}
          onPress={() => navigation.navigate("Signin")}
        >
          Have an account? Sign in
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
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
  signup: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 15,
    fontFamily: "LatoRegular",
    fontSize: 15,
  },
});

export default SignupScreen;
