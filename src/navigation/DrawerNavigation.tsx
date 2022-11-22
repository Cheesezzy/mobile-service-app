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
import { auth } from "../../firebaseConfig";
import { backIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({}: any) => {
  const navigation = useNavigation();
  const [user] = useAuthState(auth);

  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName={viewedOnboarding ? "Home" : "Welcome"}
      drawerContent={SideNav}
    >
      <Drawer.Screen
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
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen name="Explore" component={ExploreScreen} />
      <Drawer.Screen
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
      <Drawer.Screen
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
      <Drawer.Screen
        name="Hustle"
        component={HustleScreen}
        options={{
          title: "Hustle",
          headerTitle: (props) => null,
          headerLeft: () => null,
          header: () => null,
        }}
      />
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
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
      <Drawer.Screen
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
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
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
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
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
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Negotiations",
          headerTitle: (props) => <HeaderTitle {...props} title="Search" />,
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

export default DrawerNavigator;
