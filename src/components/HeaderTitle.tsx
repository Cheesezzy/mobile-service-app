import {
  Image,
  SafeAreaView,
  TouchableHighlight,
  View,
  TextInput,
} from "react-native";
import { Avatar, Icon } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import { settingsIcon } from "../../assets/icons/icons";

type Props = {
  title: string;
};

function HeaderTitle({ title }: Props) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView
      style={{
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      {route.name === "Home" ? (
        <>
          <TextInput
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
          />

          <Icon
            name="filter"
            type="octicon"
            color={colors.black}
            style={{
              marginLeft: 13,
            }}
          />
        </>
      ) : (
        ""
      )}
      {route.name === "Hustle" ? <></> : ""}
      {route.name === "Notifications" ? <></> : ""}
      {route.name === "Negotiations" ? (
        <>
          <TextInput
            placeholder="Search Negotiations"
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
          />

          <SvgXml
            style={{ marginLeft: 13 }}
            xml={settingsIcon(route && route.name, "Settings")}
            width="23"
            height="23"
          />
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

export default HeaderTitle;
