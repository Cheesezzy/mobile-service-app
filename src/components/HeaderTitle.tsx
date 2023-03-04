import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Avatar, Icon } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import { backIcon, notifIcon, searchIcon } from "../../assets/icons/icons";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";
import { trimAfterSpace } from "../../api/hooks/generalHooks";
import { useEffect, useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {
  title: string;
  profileURL: any;
  user: any;
};

function HeaderTitle({ title, profileURL }: Props) {
  const navigation = useNavigation();
  const route = useRoute();
  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", User?.uid!);

  //console.log(biz, "biz");

  const [user] = useDocumentData(userRef);

  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);
  const [business, loading] = useDocumentData(businessRef);

  const notifsRef = collection(db, "users/" + `${User?.uid}/notifications`);
  const [notifications] = useCollectionData(notifsRef);
  const [notifUnread, setNotifUnread] = useState(false);

  useEffect(() => {
    if (notifications)
      setNotifUnread(notifications.some((msg: any) => !msg?.seen));
  }, [notifications]);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        paddingVertical: 10,
        paddingHorizontal: 18,
        paddingTop: 48,
        zIndex: 200,
        backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
      }}
    >
      {route.name === "Home" && (
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity // @ts-ignore
              onPress={() => navigation.navigate("Hustle")}
            >
              <Avatar
                size={31}
                rounded
                source={
                  profileURL
                    ? {
                        uri: profileURL,
                      }
                    : require("../../assets/blankProfilePic.png")
                }
              />
            </TouchableOpacity>
            {user && business && (
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "PrimaryRegular",
                  }}
                >
                  Yo{" "}
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "PrimaryBold",
                    }}
                  >
                    {user && user?.role === "Consumer"
                      ? `${trimAfterSpace(user?.name)} 🤗`
                      : `${business?.name} 🤗`}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "PrimaryRegular",
                    color: colors.greyMidDark,
                  }}
                >
                  {user && user?.role === "Consumer"
                    ? "What services do you need today?"
                    : "Ready to get clients?"}
                </Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </>
      )}
      {route.name === "More" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              More
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {route.name === "Support" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Support
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {route.name === "NegoDisplay" ? (
        <>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 18,
              color: theme ? colors.black : colors.darkTxt,
            }}
          >
            {
              // @ts-ignore
              route?.params?.name
            }
          </Text>
        </>
      ) : (
        ""
      )}
      {route.name === "Notifications" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Notifications
            </Text>
          </View>
        </View>
      )}
      {route.name === "Settings" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Settings
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {route.name === "AccountSettings" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Edit Profile
            </Text>
          </View>
        </View>
      )}
      {route.name === "Fund" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Fund
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {route.name === "Profile" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Profile
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {route.name === "Earnings" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Earnings
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {route.name === "Payments" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Payments & Wallet
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {route.name === "Negotiations" ? (
        <>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 18,
              top: 42,
            }}
            // @ts-ignore
            onPress={() => navigation.navigate("Search")}
          >
            <SvgXml
              xml={searchIcon(theme ? colors.blackSmoke : colors.darkTxt)}
              width="21"
              height="21"
            />
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
      {route.name === "Promotion" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Promotions
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
      {title === "categoryItem" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity style={{}}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "PrimarySemiBold",
                fontSize: 20,
                alignSelf: "center",
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              Category
            </Text>
          </View>
          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Notifications")}
          >
            <SvgXml xml={notifIcon()} width="21" height="21" />
            {notifUnread ? (
              <View
                style={[
                  styles.unreadStatus,
                  {
                    top: 2,
                    right: 2,
                    borderColor: theme ? colors.secondary : colors.blackSmoke,
                  },
                ]}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  unreadStatus: {
    height: 7,
    width: 7,
    position: "absolute",
    top: 2,
    right: 20,
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center",
  },
});

export default HeaderTitle;
