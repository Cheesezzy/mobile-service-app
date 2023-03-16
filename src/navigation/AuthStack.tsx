import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/Onboarding/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import { DrawerActions } from "@react-navigation/native";
import { View } from "react-native";
import { Avatar } from "@rneui/themed";
import { auth, db } from "../../firebaseConfig";
import { backIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { handleAllUsers } from "../../provider/allUsersSlice";
import { createStackNavigator } from "@react-navigation/stack";
import PhoneScreen from "../screens/PhoneScreen";
import OTPScreen from "../screens/OTPScreen";
import GatedScreen from "../screens/GatedScreen";
import ForgotPwdScreen from "../screens/ForgotPassword/ForgotPwdScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthNavigator = () => {
  const navigation = useNavigation();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const usersRef = collection(db, "users");

  const allUsers = selector.payload.users.value;

  useEffect(() => {
    getDocs(usersRef).then((snapshot) => {
      snapshot.forEach((doc) => dispatch(handleAllUsers(doc.data())));
      console.log(allUsers);
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName={"Welcome"}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{
          title: "Signin",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: "Signup",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Phone"
        component={PhoneScreen}
        options={{
          title: "Phone",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OTP"
        component={OTPScreen}
        options={{
          title: "OTP",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gated"
        component={GatedScreen}
        options={{
          title: "Gated",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPwdScreen}
        options={{
          title: "ForgotPassword",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
