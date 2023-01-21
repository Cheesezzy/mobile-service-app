import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import { Avatar, Icon } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import { backIcon, searchIcon, settingsIcon } from "../../assets/icons/icons";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";

type Props = {
  title: string;
  profileURL: string;
};

function HeaderTitle({ title, profileURL }: Props) {
  const navigation = useNavigation();
  const route = useRoute();

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View
      style={{
        padding: 30,
        width: Dimensions.get("window").width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        paddingVertical: 10,
        paddingHorizontal: 18,
        paddingTop: 42,
        zIndex: 200,
        backgroundColor: theme ? colors.secondary : colors.blackSmoke,
      }}
    >
      {route.name === "Home" ? (
        <>
          <TouchableOpacity // @ts-ignore
            onPress={() => navigation.navigate("Hustle")}
          >
            <Avatar
              size={28}
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

          <TouchableOpacity
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
        ""
      )}
      {route.name === "Hustle" ? <></> : ""}
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
      {route.name === "Notifications" ? (
        <>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 20,
              color: theme ? colors.black : colors.darkTxt,
            }}
          >
            Notifications
          </Text>
        </>
      ) : (
        ""
      )}
      {route.name === "Settings" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 20,
              marginLeft: 10,
              color: theme ? colors.black : colors.darkTxt,
            }}
          >
            Settings
          </Text>
        </View>
      ) : (
        ""
      )}
      {route.name === "Earnings" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 20,
              marginLeft: 10,
              color: theme ? colors.black : colors.darkTxt,
            }}
          >
            Earnings
          </Text>
        </View>
      ) : (
        ""
      )}
      {route.name === "Payments" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 20,
              marginLeft: 10,
              color: theme ? colors.black : colors.darkTxt,
            }}
          >
            Payments
          </Text>
        </View>
      ) : (
        ""
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
      {title === "categoryItem" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 20,
              marginLeft: 10,
              color: theme ? colors.black : colors.darkTxt,
            }}
          >
            Categories
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

export default HeaderTitle;
