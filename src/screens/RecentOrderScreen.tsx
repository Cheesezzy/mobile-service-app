import RecentOrder from "../components/RecentOrder";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import colors from "../config/colors";
import NavigationBar from "./Payments & Wallets/components/NavigationBar";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";

const RecentOrderScreen = () => {
  const transactions = Array(20).fill(null);
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  const renderItem = () => {
    return <RecentOrder name="Ayoola Ayolola" minutes="32 minutes ago" />;
  };

  return (
    <>
      <NavigationBar title="Recent Order" />

      <SafeAreaView>
        <View style={[styles.container, {
          backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
        }]}></View>

        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
};

export default RecentOrderScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  heading: {
    fontFamily: "PrimaryBold",
    textAlign: "center",
    fontSize: 24,
    color: colors.greyDark,
  },
});
