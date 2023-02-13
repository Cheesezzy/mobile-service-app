import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import HeaderTitle from "../components/HeaderTitle";
import { StatusBar } from "expo-status-bar";
import { categories } from "../../provider/categoryData/categories";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";

const CategoriesScreen = ({ navigation }: any) => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="categoryItem" profileURL="" user="" />
      <ScrollView
        style={[
          styles.container,
          [
            styles.container,
            {
              backgroundColor: theme ? colors.secondary : colors.blackSmoke,
            },
          ],
        ]}
      >
        {categories &&
          categories.map((category: any, i) => {
            return (
              <View style={styles.categorySecs} key={i.toString()}>
                <TouchableOpacity
                  style={[
                    styles.category,
                    {
                      backgroundColor: theme ? colors.secondary : colors.black,
                      elevation: theme ? 25 : 0,
                    },
                  ]}
                  onPress={() => {
                    navigation.navigate("Category", {
                      categoryName: category.value.name,
                      desc: category.value.desc,
                    });
                  }}
                >
                  <Text
                    style={[
                      styles.name,
                      {
                        color: theme ? colors.black : colors.darkTxt,
                      },
                    ]}
                  >
                    {category.value.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}

        <StatusBar style={theme ? "dark" : "light"} />

        <View style={{ height: 100, width: "100%" }} />
      </ScrollView>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  categorySecs: {
    flexDirection: "row",
  },
  category: {
    flex: 1,
    height: 70,
    margin: 5,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 25,
    shadowColor: colors.grey,
  },
  name: {
    fontSize: 15,
    fontFamily: "PrimaryRegular",
    textAlign: "center",
  },
});
