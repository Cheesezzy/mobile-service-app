import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, Pressable } from "react-native";
import Advanced from "./Payments & Wallets/components/Ads/Advanced";
import Basic from "./Payments & Wallets/components/Ads/Basic";
import NavigationBar from "./Payments & Wallets/components/NavigationBar";
import Premium from "./Payments & Wallets/components/Ads/Premium";
import colors from "../config/colors";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";

const PromotionScreen = ({ navigation }: any) => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <View
        style={[
          styles.nav,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <NavigationBar title="Promotions" />
      </View>

      <ScrollView
        style={{
          backgroundColor: theme ? colors.secondarySmoke : colors.black,
          flex: 1,
        }}
      >
        <View style={[styles.container]}>
          <Text
            style={[
              styles.text,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            Select the promotion package that suits your business and goes along
            with your business goals
          </Text>

          <Basic />

          <Advanced onPress={() => navigation.navigate("Ads Component")} />

          <Premium />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  nav: {
    justifyContent: "center",
  },
  text: {
    color: colors.greyMidDark,
    width: "100%",
    height: 48,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default PromotionScreen;
