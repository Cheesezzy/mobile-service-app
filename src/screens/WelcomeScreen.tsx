import { View, StyleSheet, Text, Platform } from "react-native";
import Navigation from "../components/Navigation";
import SideNav from "../components/SideNav";
import colors from "../config/colors";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your number</Text>
      <View style={styles.phoneNum}>
        <Text style={styles.phoneNumTxt}>+234</Text>
      </View>
      <View style={styles.dividerCon}>
        <View style={styles.line} />
        <Text style={styles.or}>OR</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.getStarted}>
        <Text style={styles.getStartedTxt}>Get Started</Text>
      </View>
      <View style={styles.thirdParty}>
        <Text style={styles.thirdPartyTxt}>Sign In</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
    paddingTop: 150,
    alignItems: "center",
  },
  phoneNum: {
    width: "100%",
    height: 50,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    padding: 14,
    marginTop: 20,
  },
  phoneNumTxt: {
    color: colors.grey,
    fontFamily: "LatoRegular",
    fontSize: 18,
    justifyContent: "center",
  },
  or: {
    color: colors.grey,
    fontFamily: "LatoLight",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
  },
  dividerCon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    width: "40%",
    position: "relative",
    top: 5,
  },
  getStarted: {
    width: "100%",
    height: 50,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 30,
    padding: 14,
    marginTop: 20,
    color: colors.secondary,
    backgroundColor: colors.primary,
  },
  getStartedTxt: {
    color: colors.grey,
    fontFamily: "LatoRegular",
    fontSize: 18,
    justifyContent: "center",
    textAlign: "center",
  },
  thirdParty: {
    width: "100%",
    height: 50,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 30,
    padding: 14,
    marginTop: 20,
  },
  thirdPartyTxt: {
    color: colors.grey,
    fontFamily: "LatoRegular",
    fontSize: 18,
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 22,
    fontFamily: "Lato",
    color: colors.black,
  },
});

export default WelcomeScreen;
