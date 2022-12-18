import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HeaderTitle from "../components/HeaderTitle";
import SideNav from "../components/SideNav";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import NotifScreen from "../screens/NotifScreen";
import NegoScreen from "../screens/NegoScreen";
import HustleScreen from "../screens/HustleScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import AboutScreen from "../screens/AboutScreen";
import AdScreen from "../screens/AdScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SupportScreen from "../screens/SupportScreen";
import SearchScreen from "../screens/SearchScreen";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import { DrawerActions } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Avatar } from "@rneui/themed";
import { auth, db } from "../../firebaseConfig";
import { backIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { handleAllUsers } from "../../provider/allUsersSlice";
import { NegoDisplay } from "../components/NegoDisplay";
import { createStackNavigator } from "@react-navigation/stack";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EarningsScreen from "../screens/EarningsScreen";
import {
  useDocumentData,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import colors from "../config/colors";
import CategoryScreen from "../screens/CategoryScreen";
import { GoogleSearch } from "../components/GoogleSearch";
import SlidesContainer from "../components/SlidesContainer";
import BusinessEnroll from "../components/BusinessEnroll";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const usersRef = collection(db, "users");
  const userbizInformedRef = doc(db, "users", user?.uid!);

  const allUsers = selector.payload.users.value;

  const [bizData, loading] = useDocumentData(userbizInformedRef);

  useEffect(() => {
    getDocs(usersRef).then((snapshot) => {
      snapshot.forEach((doc) => dispatch(handleAllUsers(doc.data())));
      console.log(allUsers);
    });
    console.log(bizData?.bizInformed, "biz stat");
  }, []);

  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name={"Home"}
        component={
          loading
            ? HomeScreen
            : bizData?.bizInformed
            ? HomeScreen
            : BusinessEnroll
        }
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotifScreen}
        options={{
          title: "Notifications",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Negotiations"
        component={NegoScreen}
        options={{
          title: "Negotiations",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Hustle"
        component={HustleScreen}
        options={{
          title: "Hustle",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Ad"
        component={AdScreen}
        options={{
          title: "Ad",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          title: "Support",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          title: "Analytics",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          title: "Payments",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{
          title: "Earnings",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NegoDisplay"
        component={NegoDisplay}
        options={{
          title: "NegoDisplay",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BusinessEnroll"
        component={BusinessEnroll}
        options={{
          title: "BusinessEnroll",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "Category",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GoogleSearch"
        component={GoogleSearch}
        options={{
          title: "GoogleSearch",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SlidesContainer"
        component={SlidesContainer}
        options={{
          title: "SlidesContainer",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
