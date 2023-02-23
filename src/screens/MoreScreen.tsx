import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";
import {
  adIcon,
  analyticsIcon,
  cardIcon,
  earningIcon,
  frontIcon,
  inviteIcon,
  payAndWalletIcon,
  settingsIcon,
  supportIcon,
} from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import { doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { checkRole } from "../../api/customHooks/generalHooks";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import HeaderTitle from "../components/HeaderTitle";
import { Switch } from "@rneui/themed";
import { updateUserRole } from "../.././api/database";
import { useEffect, useState } from "react";

const MoreScreen = ({ navigation }: any) => {
  const [toggle, setToggle] = useState(false);
  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);

  const [user, loading] = useDocumentData(userRef);

  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);

  const dispatch = useDispatch();
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  const switchRole = () => {
    if (User?.uid && user && user.role) {
      if (user.role === "Consumer") {
        setToggle(false);
        updateUserRole(User.uid, "Provider");
      } else if (user.role === "Provider") {
        setToggle(false);
        updateUserRole(User.uid, "Consumer");
      }
    }
    return;
  };

  useEffect(() => {
    if (user?.role === "Consumer") {
      setToggle(false);
    } else if (user?.role === "Provider") {
      setToggle(true);
    }
  }, [user?.role]);

  return (
    <>
      <HeaderTitle title="More" profileURL={user?.profilePic} user={user} />

      <View style={styles.container}>
        {user && user.role && (
          <ScrollView style={styles.body}>
            {!loading && checkRole(user) && (
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
                  onPress={() => navigation.navigate("Earnings")}
                >
                  <View style={styles.itemContainer}>
                    <View style={styles.iconFlex}>
                      <View style={styles.iconCon}>
                        <SvgXml
                          style={styles.icon}
                          xml={earningIcon()}
                          width="18"
                          height="18"
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
                          Earnings
                        </Text>
                        <Text
                          style={[
                            styles.menuItemSm,
                            {
                              color: theme ? colors.greyMain : colors.darkTxt,
                            },
                          ]}
                        >
                          How much your business has made
                        </Text>
                      </View>
                    </View>
                    <View>
                      <SvgXml
                        style={styles.icon}
                        xml={frontIcon()}
                        width="18"
                        height="18"
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
                      <View style={styles.iconCon}>
                        <SvgXml
                          style={styles.icon}
                          xml={analyticsIcon()}
                          width="18"
                          height="18"
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
                          Analytics
                        </Text>
                        <Text
                          style={[
                            styles.menuItemSm,
                            {
                              color: theme ? colors.greyMain : colors.darkTxt,
                            },
                          ]}
                        >
                          See how well your business is doing
                        </Text>
                      </View>
                    </View>
                    <View>
                      <SvgXml
                        style={styles.icon}
                        xml={frontIcon()}
                        width="18"
                        height="18"
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.6}
                  // @ts-ignore
                  onPress={() => navigation.navigate("Promotion")}
                >
                  <View style={styles.itemContainer}>
                    <View style={styles.iconFlex}>
                      <View style={styles.iconCon}>
                        <SvgXml
                          style={styles.icon}
                          xml={adIcon("", "")}
                          width="18"
                          height="18"
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
                          Promotions
                        </Text>
                        <Text
                          style={[
                            styles.menuItemSm,
                            {
                              color: theme ? colors.greyMain : colors.darkTxt,
                            },
                          ]}
                        >
                          Boost your business' visibility
                        </Text>
                      </View>
                    </View>
                    <View>
                      <SvgXml
                        style={styles.icon}
                        xml={frontIcon()}
                        width="18"
                        height="18"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
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
                    <View style={styles.iconCon}>
                      <SvgXml
                        style={styles.icon}
                        xml={settingsIcon()}
                        width="18"
                        height="18"
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
                        Settings
                      </Text>
                      <Text
                        style={[
                          styles.menuItemSm,
                          {
                            color: theme ? colors.greyMain : colors.darkTxt,
                          },
                        ]}
                      >
                        Tweak things to your preferences
                      </Text>
                    </View>
                  </View>
                  <View>
                    <SvgXml
                      style={styles.icon}
                      xml={frontIcon()}
                      width="18"
                      height="18"
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
                    <View style={styles.iconCon}>
                      <SvgXml
                        style={styles.icon}
                        xml={payAndWalletIcon()}
                        width="18"
                        height="18"
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
                        Payments and Wallet
                      </Text>
                      <Text
                        style={[
                          styles.menuItemSm,
                          {
                            color: theme ? colors.greyMain : colors.darkTxt,
                          },
                        ]}
                      >
                        Manage payment methods & wallet
                      </Text>
                    </View>
                  </View>
                  <View>
                    <SvgXml
                      style={styles.icon}
                      xml={frontIcon()}
                      width="18"
                      height="18"
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
                    <View style={styles.iconCon}>
                      <SvgXml
                        style={styles.icon}
                        xml={inviteIcon()}
                        width="18"
                        height="18"
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
                        Invite Friends
                      </Text>
                      <Text
                        style={[
                          styles.menuItemSm,
                          {
                            color: theme ? colors.greyMain : colors.darkTxt,
                          },
                        ]}
                      >
                        Refer friends and earn rewards
                      </Text>
                    </View>
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
                        width="18"
                        height="18"
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
                        Support
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
                      width="18"
                      height="18"
                    />
                  </View>
                </View>
              </TouchableOpacity>

              {user.role && (
                <View>
                  <View style={styles.itemContainer}>
                    <View style={styles.iconFlex}>
                      <View style={styles.iconCon}>
                        <SvgXml
                          style={styles.icon}
                          xml={supportIcon()}
                          width="18"
                          height="18"
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
                          Service Provider mode
                        </Text>
                        <Text
                          style={[
                            styles.menuItemSm,
                            {
                              color: theme ? colors.greyMain : colors.darkTxt,
                            },
                          ]}
                        >
                          Change your in-app experience
                        </Text>
                      </View>
                    </View>

                    <Switch
                      color={colors.primary}
                      value={toggle}
                      onValueChange={switchRole}
                    />
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        )}

        <View style={{ height: 80, width: "100%" }} />
        <Navigation navigation={navigation} />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondarySmoke,
  },
  body: {
    height: "100%",
    padding: 20,
    paddingBottom: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  secHeader: {
    fontSize: 18,
    fontFamily: "PrimarySemiBold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
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

export default MoreScreen;
