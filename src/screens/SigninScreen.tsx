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
  emailIcon,
  googleIcon,
  hidePassIcon,
  lockIcon,
  showPassIcon,
} from "../../assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers, refreshAllUsers } from "../../provider/allUsersSlice";
import { useEffect, useState } from "react";
import {
  AuthErrorCodes,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getRedirectResult,
} from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { handleUser } from "../../provider/userSlice";
import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const SigninScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const googleProvider = new GoogleAuthProvider();
  const [authLoading, setAuthLoading] = useState(false);

  const usersRef = collection(db, "users");
  const [Users, loading] = useCollectionData(usersRef);
  dispatch(handleAllUsers(Users));

  const users = selector.payload.users.value;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    //dispatch(refreshAllUsers());
  }, []);

  const loginWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const User = result.user;

        for (const user of users) {
          if (User.email === user.email) {
            setError("");
            dispatch(handleUser(user));
            console.log(user.name, "signed in successfully");
          }
        }
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        //const email = error.customData.email;
        //const credential = GoogleAuthProvider.credentialFromError(error);

        setError(errorMessage);
      });
  };

  const loginEmailPassword = async () => {
    try {
      setAuthLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setAuthLoading(false);
    } catch (error: any) {
      switch (error.code) {
        case AuthErrorCodes.INVALID_EMAIL:
          setAuthLoading(false);
          setError("Invalid email");
          break;
        case AuthErrorCodes.USER_DELETED:
          setAuthLoading(false);
          setError("User not found");
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          setAuthLoading(false);
          setError("Wrong password");
          break;
        default:
          setAuthLoading(false);
          setError("Something went wrong");
      }
    }
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (users) {
      for (const user of users) {
        if (user?.email === email && user?.password === password) {
          setError("");
          dispatch(handleUser(user));
          console.log(user.name, "signed in successfully");
          loginEmailPassword();
        } else if (user?.password === password && user.email !== email) {
          setError("Your email does not seem to be correct");
          console.log(error);
        } else if (user?.email === email && user?.password !== password) {
          setError("Wrong password, please try again");
          console.log("wrong password");
        }
      }
    }
  };

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
          Sign In
        </Text>
        <Text style={[styles.titleSmall]}>
          Welcome back 👋, kindly enter your details to continue
        </Text>
      </View>

      <View style={styles.txtIconCon}>
        <SvgXml
          style={styles.firstIcon}
          xml={emailIcon(theme ? colors.black : colors.darkTxt)}
          width="15"
          height="15"
        />
        <TextInput
          keyboardType="email-address"
          onChangeText={(newEmail) => setEmail(newEmail.toLowerCase())}
          style={[
            styles.inputBox,
            { color: theme ? colors.black : colors.darkTxt },
          ]}
          placeholder="Email or username"
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
        onPress={handleLogin}
        disabled={authLoading}
      >
        <Text style={styles.inputBtnTxt}>
          {authLoading ? <ActivityIndicator color="#fff" /> : "Sign in"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.dividerCon}>
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>

        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.thirdParty} onPress={loginWithGoogle}>
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
      </TouchableOpacity>

      <View>
        <Text
          style={styles.signin}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign up now
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
    borderBottomWidth: 0.7,
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
  forgotPassword: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 10,
    fontFamily: "PrimaryRegular",
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
  signin: {
    color: colors.primary,
    textAlign: "center",
    marginTop: 15,
    fontFamily: "PrimaryRegular",
    fontSize: 15,
  },
});

export default SigninScreen;
