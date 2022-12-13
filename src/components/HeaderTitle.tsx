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

type Props = {
  title: string;
};

function HeaderTitle({ title }: Props) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView
      style={{
        width: Dimensions.get("window").width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        paddingVertical: 10,
        paddingHorizontal: 18,
        paddingTop: 42,
        zIndex: 200,
        backgroundColor: colors.secondary,
      }}
    >
      {route.name === "Home" ? (
        <>
          <View>
            <Avatar
              size={28}
              rounded
              source={require("../../assets/tfp.png")}
            />
          </View>

          <TouchableOpacity
            // @ts-ignore
            onPress={() => navigation.navigate("Search")}
          >
            <SvgXml xml={searchIcon()} width="21" height="21" />
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
              xml={backIcon()}
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
              xml={backIcon()}
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
              xml={backIcon()}
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
            <SvgXml xml={searchIcon()} width="21" height="21" />
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
      {title === "categoryItem" ? (
        <>
          <TouchableOpacity>
            <SvgXml
              xml={backIcon()}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 18,
              top: 35,
            }}
            // @ts-ignore
            onPress={() => navigation.navigate("Search")}
          >
            <SvgXml xml={searchIcon()} width="21" height="21" />
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

export default HeaderTitle;
