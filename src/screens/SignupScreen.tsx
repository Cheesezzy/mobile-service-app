import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import {
  callUsIcon,
  emailIcon,
  facebookicon,
  googleIcon,
  hidePassIcon,
  lockIcon,
  profileIcon,
  profileNormalIcon,
  showPassIcon,
} from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { AuthErrorCodes } from "firebase/auth";
import { createUser } from "../../api/database";
//import { sendEmailVerification } from "../../api/verify";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import date from "date-and-time";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const SignupScreen = ({ navigation }: any) => {
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const usersRef = collection(db, "users");
  const [users, loading] = useCollectionData(usersRef);

  const now = new Date();
  const pattern = date.compile("MMM, DD YYYY");

  const createAcctWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        createUser(
          user.uid,
          name,
          "Consumer",
          {},
          email,
          phone,
          password,
          "",
          date.format(now, pattern),
          "",
          false,
          "",
          "",
          0
        );
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        //const email = error.customData.email;
        //const credential = GoogleAuthProvider.credentialFromError(error);

        setError(errorMessage);
      });
  };

  const createAcctWithEandP = async () => {
    try {
      setAuthLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      createUser(
        userCredential.user.uid,
        name,
        "Consumer",
        {},
        email,
        phone,
        password,
        null,
        date.format(now, pattern),
        null,
        false,
        "",
        "",
        0
      );

      setAuthLoading(false);
    } catch (error: any) {
      // check for error codes
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setAuthLoading(false);
        setError("Email already in use");
        console.log(error);
      }
      if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        setAuthLoading(false);
        setError("Invalid email");
        console.log(error);
      }
      if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        setAuthLoading(false);
        setError("Weak password");
        console.log(error);
      } else {
        setAuthLoading(false);
        setError("Check your email and password");
      }
    }
  };

  const handleSignup = (e: any) => {
    e.preventDefault();

    // check if all fields are filled in
    if (name === "" || email === "") {
      setError("Please fill in all fields");
      console.log(error);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    users?.map((user) => {
      if (user.phone === phone) {
        setError("Phone Number is already in use");
        return;
      } else {
        setError("");
        createAcctWithEandP();
      }
    });

    {
      /*sendEmailVerification(mobOrEmail).then((sent) => {
      navigation.navigate("OTP", { userChannel: mobOrEmail, type: "email" });
    });*/
    }
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

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
          Sign Up
        </Text>
        <Text style={[styles.titleSmall]}>
          Hi there 👋, Create your account
        </Text>
      </View>

      <View style={styles.txtIconCon}>
        <SvgXml
          style={styles.firstIcon}
          xml={profileNormalIcon(theme ? colors.black : colors.darkTxt)}
          width="15"
          height="15"
        />
        <TextInput
          onChangeText={(newName) => setName(newName)}
          style={[
            styles.inputBox,
            { color: theme ? colors.black : colors.darkTxt },
          ]}
          placeholder="Full Name"
          placeholderTextColor={colors.lightGrey}
        />
      </View>

      <View style={styles.txtIconCon}>
        <SvgXml
          style={styles.firstIcon}
          xml={emailIcon(theme ? colors.black : colors.darkTxt)}
          width="15"
          height="15"
        />
        <TextInput
          onChangeText={(email) => setEmail(email.toLowerCase())}
          style={[
            styles.inputBox,
            { color: theme ? colors.black : colors.darkTxt },
          ]}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.lightGrey}
        />
      </View>

      <View style={styles.txtIconCon}>
        <SvgXml
          style={styles.firstIcon}
          xml={callUsIcon(theme ? colors.black : colors.darkTxt)}
          width="15"
          height="15"
        />
        <TextInput
          keyboardType="numeric"
          onChangeText={(phone) => setPhone(phone.toLowerCase())}
          style={[
            styles.inputBox,
            { color: theme ? colors.black : colors.darkTxt },
          ]}
          placeholder="Phone Number"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.lightGrey}
        />
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
            placeholder="Password"
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

      <Text style={styles.err}>{error}</Text>

      <TouchableOpacity
        style={[
          styles.inputBtn,
          {
            opacity: authLoading ? 0.5 : 1,
          },
        ]}
        onPress={handleSignup}
        disabled={authLoading}
      >
        <Text style={styles.inputBtnTxt}>
          {authLoading ? <ActivityIndicator color="#fff" /> : "Sign up"}
        </Text>
      </TouchableOpacity>

      {/* <View style={styles.dividerCon}>
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity
        style={styles.thirdParty}
        onPress={createAcctWithGoogle}
      >
        <SvgXml
          style={{
            marginRight: 10,
          }}
          xml={googleIcon()}
          width={20}
          height={20}
        />
        <Text
          style={[
            styles.thirdPartyTxt,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          Continue with Google
        </Text>
      </TouchableOpacity> */}

      <View>
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("Signin")}
        >
          Have an account? Sign in
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
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
  txtIconCon: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.greyMid,
    borderBottomWidth: 0.9,
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
    paddingRight: 30,
    borderColor: colors.greyMid,
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
    fontFamily: "PrimaryRegular",
  },
  err: {
    color: "#ff3333",
    fontSize: 12,
    textAlign: "center",
    margin: 4,
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
    fontFamily: "PrimaryLight",
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
    fontFamily: "PrimaryRegular",
  },
  signup: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 15,
    fontFamily: "PrimaryRegular",
    fontSize: 15,
  },
});

export default SignupScreen;
