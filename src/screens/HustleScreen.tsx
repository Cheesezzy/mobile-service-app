import { Avatar } from "@rneui/themed";
import { Rating, AirbnbRating } from "react-native-ratings";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";
import { useFonts } from "expo-font";
import {
  aboutIcon,
  adIcon,
  analyticsIcon,
  cardIcon,
  earningIcon,
  frontIcon,
  inviteIcon,
  profileIcon,
  settingsIcon,
  supportIcon,
} from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";

const HustleScreen = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Lato: require("../../assets/fonts/Lato/Lato-Black.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Avatar
            size="small"
            rounded
            source={{ uri: "https://picsum.photos/200" }}
          />
        </View>
        <View style={styles.bal}>
          <Text style={styles.balTxt}>Balance</Text>
        </View>
        <View>
          <Text style={styles.balValue}>NGN 150,000</Text>
        </View>
      </View>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.statsSec}>
          <Text
            style={[
              styles.secHeader,
              { alignSelf: "center", marginTop: 5, fontSize: 21 },
            ]}
          >
            Rete Technologies
          </Text>

          <View style={[styles.statsItem, styles.firstStat]}>
            <Text style={styles.statsItemTxtA}>Business Level</Text>

            <Text style={styles.statsItemTxtB}>Start-up</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsItemTxtA}>Total Earnings</Text>

            <Text style={styles.statsItemTxtB}>$1000</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsItemTxtA}>Business Rating</Text>

            <View style={{}}>
              <Rating
                type="custom"
                fractions={1}
                startingValue={4}
                readonly
                imageSize={12}
                ratingCount={5}
                ratingColor={colors.primary}
                tintColor={colors.secondary}
                ratingBackgroundColor={colors.grey}
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.secHeader}>My Hustle</Text>

          <TouchableOpacity
            activeOpacity={0.6}
            // @ts-ignore
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={profileIcon()}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Profile</Text>
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
            onPress={() => navigation.navigate("Earnings")}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={earningIcon()}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Earnings</Text>
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
            onPress={() => navigation.navigate("Analytics")}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={analyticsIcon()}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Analytics</Text>
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
            onPress={() => navigation.navigate("Ad")}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={adIcon("", "")}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Advertisements</Text>
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
        </View>

        <View style={styles.section}>
          <Text style={styles.secHeader}>General</Text>

          <TouchableOpacity
            activeOpacity={0.6}
            // @ts-ignore
            onPress={() => navigation.navigate("Settings")}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={settingsIcon("", "")}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Settings</Text>
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
            onPress={() => navigation.navigate("Payments")}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={cardIcon()}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Payments</Text>
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
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={inviteIcon()}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Invite friends</Text>
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
                <SvgXml
                  style={styles.icon}
                  xml={supportIcon("", "")}
                  width="21"
                  height="21"
                />
                <Text style={styles.menuItem}>Support</Text>
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
            onPress={() => navigation.navigate("About")}
          >
            <View style={styles.itemContainer}>
              <View style={styles.iconFlex}>
                <SvgXml
                  style={styles.icon}
                  xml={aboutIcon("", "")}
                  width="20"
                  height="20"
                />
                <Text style={styles.menuItem}>About</Text>
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
        </View>
      </ScrollView>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    paddingHorizontal: 35,
  },
  avatar: {
    marginBottom: 10,
  },
  bal: {
    marginBottom: 6,
  },
  balTxt: {
    fontSize: 13,
    fontFamily: "LatoRegular",
    textAlign: "center",
    color: colors.secondary,
  },
  balValue: {
    fontSize: 28,
    fontFamily: "Lato",
    fontWeight: "100",
    textAlign: "center",
    color: colors.secondary,
  },
  body: {
    height: "100%",
    backgroundColor: colors.secondary,
    padding: 20,
    paddingBottom: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  statsSec: {
    width: "100%",
    padding: 0,
    borderBottomColor: colors.lightBlack,
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 25,
  },
  statsItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  firstStat: {
    marginTop: 0,
  },
  statsItemTxtA: {
    fontSize: 13,
    fontFamily: "LatoRegular",
  },
  statsItemTxtB: {
    fontSize: 13.5,
    fontFamily: "LatoRegular",
  },
  secHeader: {
    fontSize: 18,
    fontFamily: "Lato",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  iconFlex: {
    flexDirection: "row",
  },
  menuItem: {
    position: "relative",
    top: 4,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 30,
  },
  icon: {
    position: "relative",
    top: 1.5,
    marginRight: 15,
  },
  goTo: {
    position: "relative",
    left: 15,
  },
});

export default HustleScreen;
