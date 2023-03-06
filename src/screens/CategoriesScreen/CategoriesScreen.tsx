import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import { categories } from "../../../provider/categoryData/categories";
import { ScrollView } from "react-native-gesture-handler";
// import { useSelector } from "react-redux";
// import { handleSwitchTheme } from "../../../provider/themeSlice";
import Navigation from "../../components/Navigation";
import Category from "./component/Category";
import { ICategory } from "./interface";

const CategoriesScreen = ({ navigation }: any) => {
  // const selector: any = useSelector(handleSwitchTheme);
  // const theme = selector.payload.theme.value;
  return (
    <>
      <HeaderTitle title='categoryItem' profileURL='' user='' />
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>
            Categories of available services:
          </Text>
        </View>
        <ScrollView>
          <View>
            {categories &&
              categories.map((category: ICategory, i) => {
                return (
                  <View key={i.toString()}>
                    <TouchableOpacity>
                      <Category
                        imageUrl={category.imageUrl}
                        label={category.label}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
        </ScrollView>
      </View>
      <Navigation navigation={navigation} />
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    height: "85%",
    marginBottom: 10,
    paddingVertical: 30,
  },

  name: {
    fontSize: 15,
    fontFamily: "PrimaryRegular",
    textAlign: "center",
  },
  headerText: {
    color: "#08182F",
    fontFamily: "PrimaryRegular",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0,
    paddingBottom: 20,
  },
});
