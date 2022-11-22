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
import { searchIcon, settingsIcon } from "../../assets/icons/icons";

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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {route.name === "Home" ? (
        <>
          {/*<TextInput
            placeholder="Search the network"
            style={{
              width: "87%",
              color: colors.black,
              backgroundColor: "#d7e0f059",
              borderRadius: 20,
              borderColor: "#d7e0f0",
              borderWidth: 1,
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          />*/}

          <TouchableOpacity
            style={{
              position: "absolute",
              right: 84,
            }}
            // @ts-ignore
            onPress={() => navigation.navigate("Search")}
          >
            <SvgXml xml={searchIcon()} width="22" height="22" />
          </TouchableOpacity>
        </>
      ) : (
        ""
      )}
      {route.name === "Hustle" ? <></> : ""}
      {route.name === "Notifications" ? <></> : ""}
      {route.name === "Negotiations" ? (
        <>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 84,
            }}
            // @ts-ignore
            onPress={() => navigation.navigate("Search")}
          >
            <SvgXml xml={searchIcon()} width="22" height="22" />
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

export default HeaderTitle;
