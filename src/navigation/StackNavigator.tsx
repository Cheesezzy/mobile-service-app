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
import BusinessEnroll from "../components/BusinessEnroll";
import { NegoDisplay } from "../components/NegoDisplay";
import { createStackNavigator } from "@react-navigation/stack";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import PaymentsScreen from "../screens/PaymentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EarningsScreen from "../screens/EarningsScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
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
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerTitle: (props) => <HeaderTitle {...props} title="Home" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <Avatar
                size={32}
                rounded
                source={require("../../assets/tfp.png")}
                //onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotifScreen}
        options={{
          title: "Notifications",
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <Avatar
                size={32}
                rounded
                source={require("../../assets/tfp.png")}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Negotiations"
        component={NegoScreen}
        options={{
          title: "Negotiations",
          headerTitle: (props) => (
            <HeaderTitle {...props} title="Negotiations" />
          ),
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <Avatar
                size={32}
                rounded
                source={require("../../assets/tfp.png")}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Hustle"
        component={HustleScreen}
        options={{
          title: "Hustle",
          headerTitle: (props) => null,
          headerLeft: () => null,
          header: () => null,
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About",
          headerTitle: (props) => <HeaderTitle {...props} title="About" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Ad"
        component={AdScreen}
        options={{
          title: "Ad",
          headerTitle: (props) => <HeaderTitle {...props} title="Ad" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          title: "Support",
          headerTitle: (props) => <HeaderTitle {...props} title="Support" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          title: "Analytics",
          headerTitle: (props) => <HeaderTitle {...props} title="Analytics" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          title: "Payments",
          headerTitle: (props) => <HeaderTitle {...props} title="Payments" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{
          title: "Earnings",
          headerTitle: (props) => <HeaderTitle {...props} title="Earnings" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerTitle: (props) => <HeaderTitle {...props} title="Profile" />,
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
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
          headerTitle: (props) => (
            <HeaderTitle {...props} title="NegoDisplay" />
          ),
          headerLeft: () => (
            <View
              style={{
                marginLeft: 18,
              }}
            >
              <SvgXml
                xml={backIcon()}
                width="24"
                height="24"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
