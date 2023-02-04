import { Avatar } from "@rneui/themed";
import { Rating, AirbnbRating } from "react-native-ratings";
import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
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
import { StatusBar } from "expo-status-bar";
import { doc } from "firebase/firestore";
import { auth, db, store } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { addCommas, checkRole } from "../../api/customHooks/generalHooks";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { updateProfilePic } from "../../api/database";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";

const HustleScreen = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Lato: require("../../assets/fonts/Lato/Lato-Black.ttf"),
  });

  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);

  const [user, loading] = useDocumentData(userRef);

  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);

  const [business] = useDocumentData(businessRef);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.avatar}
          onPress={() =>
            navigation.navigate("ImageScreen", {
              image: user?.profilePic ? user.profilePic : null,
            })
          }
        >
          <Avatar
            size={100}
            rounded
            source={
              user?.profilePic
                ? {
                    uri: user?.profilePic,
                  }
                : require("../.././assets/blankProfilePic.png")
            }
          />
        </TouchableOpacity>

        <View>
          {!loading && checkRole(user) ? (
            <Text style={styles.businessName}>{business?.name}</Text>
          ) : (
            <Text style={styles.businessName}>{user?.name}</Text>
          )}
        </View>
      </View>

      <ScrollView
        style={[
          styles.body,
          {
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          },
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            enabled
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={colors.primary}
            colors={[colors.secondary]}
          />
        }
      >
        {!loading && checkRole(user) ? (
          <>
            <View style={styles.statsSec}>
              <View style={[styles.statsItem, styles.firstStat]}>
                <Text
                  style={[
                    styles.statsItemTxtA,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Business Level
                </Text>

                <Text
                  style={[
                    styles.statsItemTxtB,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  {business?.level}
                </Text>
              </View>
              <View style={styles.statsItem}>
                <Text
                  style={[
                    styles.statsItemTxtA,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Withdrawable
                </Text>

                <Text
                  style={[
                    styles.statsItemTxtB,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  ₦{user && addCommas(user?.balance)}
                </Text>
              </View>

              <View style={styles.statsItem}>
                <Text
                  style={[
                    styles.statsItemTxtA,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Total Earnings
                </Text>

                <Text
                  style={[
                    styles.statsItemTxtB,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  ₦{business && addCommas(business?.totalEarnings)}
                </Text>
              </View>

              <View style={styles.statsItem}>
                <Text
                  style={[
                    styles.statsItemTxtA,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Business Rating
                </Text>

                <View style={{}}>
                  <Rating
                    type="custom"
                    fractions={1}
                    startingValue={business?.rating}
                    readonly
                    imageSize={12}
                    ratingCount={5}
                    ratingColor={colors.primary}
                    tintColor={theme ? colors.secondary : colors.blackSmoke}
                    ratingBackgroundColor="grey"
                  />
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text
                style={[
                  styles.secHeader,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                My Hustle
              </Text>

              <TouchableOpacity
                activeOpacity={0.6}
                // @ts-ignore
                onPress={() =>
                  navigation.navigate("Profile", {
                    business,
                  })
                }
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={profileIcon()}
                      width="21"
                      height="21"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Profile
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
                onPress={() => navigation.navigate("Earnings")}
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={earningIcon()}
                      width="21"
                      height="22"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Earnings
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
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Analytics
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
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Rete Ads
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
            </View>
            <View style={styles.section}>
              <Text
                style={[
                  styles.secHeader,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                General
              </Text>

              <TouchableOpacity
                activeOpacity={0.6}
                // @ts-ignore
                onPress={() => navigation.navigate("Settings")}
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={settingsIcon()}
                      width="21"
                      height="21"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Settings
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
                onPress={() => navigation.navigate("Payments")}
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={cardIcon("")}
                      width="21"
                      height="21"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Payments
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
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={inviteIcon()}
                      width="21"
                      height="21"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Invite friends
                    </Text>
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
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Support
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
            </View>
          </>
        ) : (
          !loading && (
            <View style={styles.section}>
              <Text
                style={[
                  styles.secHeader,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                General
              </Text>

              {user && !checkRole(user) ? (
                <TouchableOpacity
                  activeOpacity={0.6}
                  // @ts-ignore
                  onPress={() =>
                    navigation.navigate("Profile", { business: null })
                  }
                >
                  <View style={styles.itemContainer}>
                    <View style={styles.iconFlex}>
                      <SvgXml
                        style={styles.icon}
                        xml={profileIcon()}
                        width="21"
                        height="21"
                      />
                      <Text
                        style={[
                          styles.menuItem,
                          {
                            color: theme ? colors.black : colors.darkTxt,
                          },
                        ]}
                      >
                        Profile
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
              ) : null}

              <TouchableOpacity
                activeOpacity={0.6}
                // @ts-ignore
                onPress={() => navigation.navigate("Settings")}
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={settingsIcon()}
                      width="21"
                      height="21"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Settings
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
                onPress={() => navigation.navigate("Payments")}
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={cardIcon("")}
                      width="21"
                      height="21"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Payments
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
              >
                <View style={styles.itemContainer}>
                  <View style={styles.iconFlex}>
                    <SvgXml
                      style={styles.icon}
                      xml={inviteIcon()}
                      width="21"
                      height="21"
                    />
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Invite friends
                    </Text>
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
                    <Text
                      style={[
                        styles.menuItem,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      Support
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
            </View>
          )
        )}

        <View style={{ height: 50, width: "100%" }} />
      </ScrollView>
      <Navigation navigation={navigation} />
      <StatusBar style="auto" />
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
  businessName: {
    fontSize: 28,
    fontFamily: "Lato",
    fontWeight: "100",
    textAlign: "center",
    color: colors.secondary,
  },
  body: {
    height: "100%",
    padding: 20,
    paddingBottom: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  statsSec: {
    width: "100%",
    padding: 0,
    borderBottomColor: colors.deeperSmoke,
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
    fontFamily: "LatoRegular",
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
