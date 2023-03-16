import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useTheme from "../../hooks/useTheme";
import NavigationBar from "../Payments & Wallets/components/NavigationBar";
import styles from "./styles";
const Privacy = () => {
  const { backgroundColor, color, theme } = useTheme();
  const unorderColorMode = { backgroundColor: theme ? "black" : "white" };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <NavigationBar title="Privacy Policy" />
    </View>
  );
};

export default Privacy;
