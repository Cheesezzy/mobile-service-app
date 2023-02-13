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
import { useSelector } from "react-redux";
import HeaderTitle from "../components/HeaderTitle";

const MoreScreen = ({ navigation }: any) => {
  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);

  const [user, loading] = useDocumentData(userRef);

  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

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
                        width="16"
                        height="16"
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
                        width="16"
                        height="16"
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
                        width="16"
                        height="16"
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
                      width="16"
                      height="16"
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
                      Payments & Wallet
                    </Text>
                  </View>
                  <View style={styles.goTo}>
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
                      width="16"
                      height="16"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}

        <View style={{ height: 50, width: "100%" }} />
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
    fontFamily: "PrimaryRegular",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 30,
  },
  icon: {
    position: "relative",
    top: 5.5,
    marginRight: 15,
  },
  goTo: {
    position: "relative",
    left: 15,
  },
});

export default MoreScreen;
