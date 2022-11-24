import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
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

const Drawer = createDrawerNavigator();

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
    <Drawer.Navigator initialRouteName={"Signin"} drawerContent={() => null}>
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Signin"
        component={SigninScreen}
        options={{
          title: "Signin",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: "Signup",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthNavigator;
