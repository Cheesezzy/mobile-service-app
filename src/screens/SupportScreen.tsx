import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";
import {
  callUsIcon,
  chatUsIcon,
  emailUsIcon,
  frontIcon,
} from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import HeaderTitle from "../components/HeaderTitle";
import { Linking } from "react-native";
const SupportScreen = ({ navigation }: any) => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="Support" profileURL="" user="" />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          // @ts-ignore
          onPress={() => Linking.openURL(`tel:09071400408`)}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconFlex}>
              <View style={styles.iconCon}>
                <SvgXml
                  style={styles.icon}
                  xml={callUsIcon()}
                  width="16"
                  height="16"
                />
              </View>
              <Text
                style={[
                  styles.menuItem,
                  {
                    color: colors.black,
                  },
                ]}
              >
                Call us
              </Text>
            </View>
            <View style={styles.goTo}>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="14"
                height="14"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          // @ts-ignore
          onPress={() => navigation.navigate("Chat Support")}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconFlex}>
              <View style={styles.iconCon}>
                <SvgXml
                  style={styles.icon}
                  xml={chatUsIcon()}
                  width="16"
                  height="16"
                />
              </View>
              <Text
                style={[
                  styles.menuItem,
                  {
                    color: colors.black,
                  },
                ]}
              >
                Chat us
              </Text>
            </View>
            <View style={styles.goTo}>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="14"
                height="14"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          // @ts-ignore
          onPress={() => Linking.openURL("mailto:support@rete.africa")}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconFlex}>
              <View style={styles.iconCon}>
                <SvgXml
                  style={styles.icon}
                  xml={emailUsIcon()}
                  width="16"
                  height="16"
                />
              </View>
              <Text
                style={[
                  styles.menuItem,
                  {
                    color: colors.black,
                  },
                ]}
              >
                Email us
              </Text>
            </View>
            <View style={styles.goTo}>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="14"
                height="14"
              />
            </View>
          </View>
        </TouchableOpacity>
        <StatusBar style={theme ? "dark" : "light"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  iconFlex: {
    flexDirection: "row",
  },
  menuItem: {
    position: "relative",
    top: 4,
    fontFamily: "PrimaryRegular",
    fontSize: 13,
    fontWeight: "600",
  },
  iconCon: {
    width: 25,
    height: 25,
    padding: 10,
    marginRight: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyLight,
  },
  icon: {
    position: "relative",
  },
  goTo: {
    position: "relative",
  },
});

export default SupportScreen;
