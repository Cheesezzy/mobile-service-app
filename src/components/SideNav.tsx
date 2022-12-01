import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Avatar, Icon } from "@rneui/themed";
import { SvgXml } from "react-native-svg";
import {
  aboutIcon,
  adIcon,
  businessIcon,
  exitIcon,
  homeIcon,
  negotiateIcon,
  notifIcon,
  settingsIcon,
  supportIcon,
} from "../../assets/icons/icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const SideNav = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        // @ts-ignore
        onPress={() => navigation.navigate("Hustle")}
      >
        <View>
          <Avatar
            size={40}
            rounded
            source={require("../../assets/tfp.png")}
            containerStyle={{
              borderColor: "lightgrey",
              borderStyle: "solid",
              borderWidth: 1,
            }}
          />
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Lato",
              }}
            >
              Rete Tech
            </Text>
          </View>
          <View
            style={{
              marginTop: 2,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                fontSize: 10.5,
                fontFamily: "LatoRegular",
                color: "grey",
              }}
            >
              #7GF345
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        // @ts-ignore
        onPress={() => navigation.navigate("Settings")}
      >
        <View style={styles.itemContainer}>
          <SvgXml
            style={styles.icon}
            xml={settingsIcon("", "")}
            width="21"
            height="21"
          />
          <Text style={styles.menuItem}>Settings</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        // @ts-ignore
        onPress={() => navigation.navigate("Support")}
      >
        <View style={styles.itemContainer}>
          <SvgXml
            style={styles.icon}
            xml={supportIcon("", "")}
            width="21"
            height="18"
          />
          <Text style={styles.menuItem}>Support</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        // @ts-ignore
        onPress={() => navigation.navigate("About")}
      >
        <View style={styles.itemContainer}>
          <SvgXml
            style={styles.icon}
            xml={aboutIcon("", "")}
            width="20"
            height="20"
          />
          <Text style={styles.menuItem}>About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        // @ts-ignore
        onPress={() => navigation.navigate("Ad")}
      >
        <View style={styles.itemContainer}>
          <SvgXml
            style={styles.icon}
            xml={adIcon("", "")}
            width="21"
            height="21"
          />
          <Text style={styles.menuItem}>Advertisements</Text>
        </View>
      </TouchableOpacity>

      <SvgXml
        onPress={() => signOut(auth)}
        style={styles.exit}
        xml={exitIcon()}
        width="30"
        height="30"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    paddingLeft: 40,
  },
  itemContainer: {
    flexDirection: "row",
  },
  menuItem: {
    position: "relative",
    top: 4,
    fontSize: 14,
    fontFamily: "Lato",
    marginBottom: 30,
  },
  icon: {
    position: "relative",
    top: 1.5,
    marginRight: 10,
  },
  exit: {
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 50,
    left: 40,

    zIndex: 100,
  },
});

export default SideNav;
