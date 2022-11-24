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

const SigninScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const googleProvider = new GoogleAuthProvider();

  const usersRef = collection(db, "users");

  const users = selector.payload.users.value;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    dispatch(refreshAllUsers());
    getDocs(usersRef).then((snapshot) => {
      const Users: any = [];
      snapshot.forEach((doc) => {
        Users.push({ ...doc.data(), id: doc.id });
      });
      dispatch(handleAllUsers(Users));
    });
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
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      switch (error.code) {
        case AuthErrorCodes.INVALID_EMAIL:
          setError("Invalid email");
          break;
        case AuthErrorCodes.USER_DELETED:
          setError("User not found");
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          setError("Wrong password");
          break;
        default:
          setError("Something went wrong");
      }
    }
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    for (const user of users) {
      if (user.email === email && user.password === password) {
        setError("");
        dispatch(handleUser(user));
        console.log(user.name, "signed in successfully");
        loginEmailPassword();
      } else if (user.password === password && user.email !== email) {
        setError("Your email does not seem to be correct");
        console.log(error);
      } else if (user.email === email && user.password !== password) {
        setError("Wrong password, please try again");
        console.log("wrong password");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Sign In</Text>
      </View>

      <TextInput
        onChangeText={(newEmail) => setEmail(newEmail)}
        style={styles.inputBox}
        placeholder="Email or username"
        defaultValue={email}
      />
      <TextInput
        onChangeText={(newPass) => setPassword(newPass)}
        style={styles.inputBox}
        placeholder="Password"
        defaultValue={password}
      />

      <Text>{error}</Text>

      <TouchableOpacity style={styles.inputBtn} onPress={handleLogin}>
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

      <TouchableOpacity style={styles.thirdParty} onPress={loginWithGoogle}>
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
