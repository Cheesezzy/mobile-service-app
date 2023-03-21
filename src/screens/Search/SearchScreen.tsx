import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import { backIcon, searchIcon } from "../../../assets/icons/icons";
import MainSearch from "../../components/search/MainSearch";
import colors from "../../config/colors";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";

const SearchScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilled, setSearchFilled] = useState(false);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme ? colors.secondary : colors.blackSmoke,
        },
      ]}
    >
      <MainSearch
        searchQuery={searchQuery.toLowerCase()}
        queryUntouched={searchQuery}
        searchFilled={searchFilled}
        setSearchFilled={setSearchFilled}
        navigation={navigation}
      />
      <View
        style={[
          styles.searchCon,
          {
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          },
        ]}
      >
        <SvgXml
          xml={backIcon(theme ? colors.blackSmoke : colors.darkTxt)}
          width="16"
          height="16"
          onPress={() => navigation.goBack()}
          style={{
            position: "relative",
            top: 6,
            marginRight: 10,
          }}
        />
        <SvgXml
          style={{
            position: "relative",
            top: 7,
          }}
          xml={searchIcon(theme ? colors.blackSmoke : colors.darkTxt)}
          width="14"
          height="14"
        />

        <TextInput
          style={[
            styles.search,
            {
              borderColor: colors.grey,
              borderWidth: searchFilled ? 1 : 0,
              backgroundColor: theme ? colors.secondary : colors.blackSmoke,
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
          placeholderTextColor={colors.lightGrey}
          placeholder="Search the network"
          onChangeText={(newQuery) => setSearchQuery(newQuery)}
          defaultValue={searchQuery}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchCon: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    width: "80%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.black,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  search: {
    width: "80%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default SearchScreen;
