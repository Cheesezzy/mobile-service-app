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
import { DrawerActions } from "@react-navigation/native";
import { View } from "react-native";
import { Avatar } from "@rneui/themed";
import { auth } from "../../firebaseConfig";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({}: any) => {
  const navigation = useNavigation();
  const [user] = useAuthState(auth);

  return (
    <Drawer.Navigator
      initialRouteName={!user ? "Home" : "Welcome"}
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
        name="Ad"
        component={AdScreen}
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
