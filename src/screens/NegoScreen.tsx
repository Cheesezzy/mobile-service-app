import { View, StyleSheet } from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";

const NegoScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NegoScreen;
