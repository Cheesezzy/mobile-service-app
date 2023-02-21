import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";
import HeaderTitle from "../components/HeaderTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { frontIcon, supportIcon } from "../../assets/icons/icons";

const PromotionScreen = () => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="Profile" profileURL="" user="" />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <Text style={styles.headerTxt}>
          Select the promotion package that best suits your business and goes
          along with your business goals
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          // @ts-ignore
          onPress={() => navigation.navigate("Support")}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconFlex}>
              <View style={styles.iconCon}>
                <SvgXml
                  style={styles.icon}
                  xml={supportIcon()}
                  width="16"
                  height="16"
                />
              </View>

              <View style={styles.menuItem}>
                <Text
                  style={[
                    styles.menuItemBig,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Silver Package
                </Text>
                <Text
                  style={[
                    styles.menuItemSm,
                    {
                      color: theme ? colors.greyMain : colors.darkTxt,
                    },
                  ]}
                >
                  Get support and send feedback
                </Text>
              </View>
            </View>
            <View>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="16"
                height="16"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          // @ts-ignore
          onPress={() => navigation.navigate("Support")}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconFlex}>
              <View style={styles.iconCon}>
                <SvgXml
                  style={styles.icon}
                  xml={supportIcon()}
                  width="16"
                  height="16"
                />
              </View>
              <View style={styles.menuItem}>
                <Text
                  style={[
                    styles.menuItemBig,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Gold Package
                </Text>
                <Text
                  style={[
                    styles.menuItemSm,
                    {
                      color: theme ? colors.greyMain : colors.darkTxt,
                    },
                  ]}
                >
                  Get support and send feedback
                </Text>
              </View>
            </View>
            <View>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="16"
                height="16"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          // @ts-ignore
          onPress={() => navigation.navigate("Support")}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconFlex}>
              <View style={styles.iconCon}>
                <SvgXml
                  style={styles.icon}
                  xml={supportIcon()}
                  width="16"
                  height="16"
                />
              </View>
              <View style={styles.menuItem}>
                <Text
                  style={[
                    styles.menuItemBig,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Platinum Package
                </Text>
                <Text
                  style={[
                    styles.menuItemSm,
                    {
                      color: theme ? colors.greyMain : colors.darkTxt,
                    },
                  ]}
                >
                  Get support and send feedback
                </Text>
              </View>
            </View>
            <View>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="16"
                height="16"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          // @ts-ignore
          onPress={() => navigation.navigate("Support")}
        >
          <View style={styles.itemContainer}>
            <View style={styles.iconFlex}>
              <View style={styles.iconCon}>
                <SvgXml
                  style={styles.icon}
                  xml={supportIcon()}
                  width="16"
                  height="16"
                />
              </View>
              <View style={styles.menuItem}>
                <Text
                  style={[
                    styles.menuItemBig,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  About Promotions
                </Text>
                <Text
                  style={[
                    styles.menuItemSm,
                    {
                      color: theme ? colors.greyMain : colors.darkTxt,
                    },
                  ]}
                >
                  Get support and send feedback
                </Text>
              </View>
            </View>
            <View>
              <SvgXml
                style={styles.icon}
                xml={frontIcon()}
                width="16"
                height="16"
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
    padding: 15,
  },
  headerTxt: {
    fontFamily: "PrimaryRegular",
    color: colors.greyMain,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: colors.secondary,
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  menuItemBig: {
    fontFamily: "PrimaryRegular",
    fontSize: 14,
    fontWeight: "600",
  },
  menuItemSm: {
    fontFamily: "PrimaryRegular",
    fontSize: 10.5,
    fontWeight: "600",
    color: colors.greyMid,
  },
  iconCon: {
    width: 34,
    height: 34,
    padding: 10,
    marginRight: 15,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyLight,
  },
  icon: {
    alignSelf: "center",
  },
});

export default PromotionScreen;
