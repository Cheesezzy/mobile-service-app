import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HeaderTitle from "../components/HeaderTitle";
import SideNav from "../components/SideNav";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import NotifScreen from "../screens/NotifScreen";
import NegoScreen from "../screens/NegoScreen";
import HustleScreen from "../screens/HustleScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { DrawerActions } from "@react-navigation/native";
import { View } from "react-native";
import { Avatar } from "@rneui/themed";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({}: any) => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={SideNav}>
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
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
