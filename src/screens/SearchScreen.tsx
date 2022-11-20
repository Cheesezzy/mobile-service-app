import { View, Text, StyleSheet } from "react-native";
import MainSearch from "../components/search/MainSearch";
import colors from "../config/colors";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MainSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
});

export default SearchScreen;
