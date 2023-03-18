import { View, Text, StyleSheet, Image } from "react-native";
import { ICategory } from "../interface";
import { SvgXml } from "react-native-svg";
import { gotoIcon } from "../../../../assets/icons/icons";

const Category: React.FC<ICategory> = ({ imageUrl, label }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Image source={imageUrl} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.catText}>{label}</Text>
        </View>

        <View style={styles.goto}>
          <SvgXml xml={gotoIcon()} width='14' height='14' />
        </View>
      </View>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  icon: {
    flex: 0.25,
    paddingHorizontal: 10,
  },
  goto: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 14,
  },
  container: {
    height: 64,
    width: 342,
    left: 0,
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  catText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    display: "flex",
    color: "#08182F",
    width: 200,
    fontFamily: "LatoRegular",
    marginLeft: 20,
  },
  textContainer: { display: "flex", flexDirection: "row" },
});
