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
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { AuthErrorCodes } from "firebase/auth";
import { createUser } from "../../api/database";

const SignupScreen = ({ navigation }: any) => {
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    mobOrEmail: "",
    password: "",
  });
  const [name, setName] = useState("");
  const [mobOrEmail, setMobOrEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  const createAcctWithGoogle = async () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        createUser(user.uid, user.displayName, "", user.email, "", "", "", "");
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        mobOrEmail,
        password
      );

      createUser(
        userCredential.user.uid,
        name,
        "",
        mobOrEmail,
        password,
        "",
        "",
        ""
      );
    } catch (error: any) {
      // check for error codes
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("Email already in use");
        console.log(error);
      }
      if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        setError("Invalid email");
        console.log(error);
      }
      if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        setError("Weak password");
        console.log(error);
      } else {
        setError("Check your email and password");
      }
    }
  };

  const handleSignup = (e: any) => {
    e.preventDefault();

    // check if all fields are filled in
    if (name === "" || mobOrEmail === "") {
      setError("Please fill in all fields");
      console.log(error);
      return;
    }

    setError("");
    createAcctWithEandP();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <TextInput
        onChangeText={(newName) => setName(newName)}
        style={styles.inputBox}
        placeholder="Full Name"
        defaultValue={name}
      />
      <TextInput
        onChangeText={(newMoA) => setMobOrEmail(newMoA)}
        style={styles.inputBox}
        placeholder="Email"
        defaultValue={mobOrEmail}
      />
      <TextInput
        onChangeText={(newPass) => setPassword(newPass)}
        style={styles.inputBox}
        placeholder="Password"
        defaultValue={password}
      />

      <Text style={styles.err}>{error}</Text>

      <TouchableOpacity style={styles.inputBtn} onPress={handleSignup}>
        <Text style={styles.inputBtnTxt}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.dividerCon}>
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
