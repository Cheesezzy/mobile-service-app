import { View, Text, StyleSheet, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import { backIcon, searchIcon } from "../../assets/icons/icons";
import MainSearch from "../components/search/MainSearch";
import colors from "../config/colors";

const SearchScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <MainSearch />
      <View style={styles.searchCon}>
        <SvgXml
          xml={backIcon()}
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
          xml={searchIcon()}
          width="14"
          height="14"
        />
        <TextInput style={styles.search} placeholder="Search the network" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
  searchCon: {
    flexDirection: "row",
    position: "absolute",
    top: 50,
    width: "80%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  search: {
    width: "85%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    backgroundColor: colors.secondary,
    alignSelf: "center",
    marginLeft: 10,
  },
});

export default SearchScreen;
