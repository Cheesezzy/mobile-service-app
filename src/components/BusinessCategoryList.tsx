import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import { checkboxIcon } from "../../assets/icons/icons";

const BusinessCategoryList = ({ item, handleCheckbox, navigation }: any) => {
  return (
    <>
      <View
        style={[
          styles.listContainer,
          {
            backgroundColor: item.isSelected ? colors.primary : "white",
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ width: 40, height: 40 }} source={item.imageIcon} />

          <Text
            style={[
              styles.imageBoxText,
              { color: item.isSelected ? "white" : "#292D32" },
            ]}
          >
            {item.title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleCheckbox(item.id)}>
          <View
            style={[
              styles.checkbox,
              { borderColor: item.isSelected ? "white" : "#292D32" },
            ]}
          >
            {item.isSelected && (
              <SvgXml xml={checkboxIcon()} width="10" height="17" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BusinessCategoryList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    justifyContent: "space-between",
    marginTop: 16,
  },

  //   imageBox: {
  //     width: 40,
  //     height: 40,
  //     borderRadius: 50,
  //     // backgroundColor: "#FFF9F1",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },

  imageBoxText: {
    marginLeft: 8,
    color: "white",
  },

  checkbox: {
    width: 21.5,
    height: 21.5,

    borderWidth: 2,
    borderColor: "white",
    alignSelf: "center",
    borderRadius: 4,
    alignItems: "center",
  },
});
