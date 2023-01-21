import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import colors from "../config/colors";
import { StatusBar } from "expo-status-bar";

const SupportScreen = () => {
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
      <Text>SupportScreen</Text>
      <StatusBar style={theme ? "dark" : "light"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SupportScreen;
