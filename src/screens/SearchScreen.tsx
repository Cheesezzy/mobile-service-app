import { View, Text, StyleSheet, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import { searchIcon } from "../../assets/icons/icons";
import MainSearch from "../components/search/MainSearch";
import colors from "../config/colors";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MainSearch />
      <View style={styles.searchCon}>
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
    paddingHorizontal: 18,
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
