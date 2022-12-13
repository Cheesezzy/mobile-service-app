import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import HeaderTitle from "../components/HeaderTitle";
import { StatusBar } from "expo-status-bar";

const CategoryScreen = ({ route }: any) => {
  const { categoryName, desc } = route.params;

  return (
    <>
      <HeaderTitle title="categoryItem" />
      <View style={styles.container}>
        <Text style={styles.categoryName}>{categoryName}</Text>

        <Text style={styles.categoryDesc}>{desc}</Text>

        <Text style={styles.filter}>Hire by</Text>

        <View style={styles.filterItem}>
          <Text style={styles.filterItemTxt}>Rating</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondarySmoke,
    padding: 15,
  },
  categoryName: {
    fontFamily: "Lato",
    fontSize: 20,
    marginBottom: 15,
  },
  categoryDesc: {
    fontFamily: "LatoRegular",
    lineHeight: 18,
    marginBottom: 15,
    color: "#111",
  },
  filter: {
    flexDirection: "row",
    fontFamily: "Lato",
    fontSize: 15,
    marginBottom: 12,
  },
  filterItem: {
    width: 60,
    backgroundColor: colors.lightPrimary,
    padding: 5,
    paddingBottom: 6,
    borderRadius: 15,
    borderColor: colors.primary,
    borderWidth: 0.5,
  },
  filterItemTxt: {
    fontFamily: "LatoRegular",
    textAlign: "center",
    color: colors.primary,
  },
});
