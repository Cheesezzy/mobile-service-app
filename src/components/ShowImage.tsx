import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import { backIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import colors from "../config/colors";

const ImageScreen = ({ navigation, route }: any) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack}>
        <SvgXml
          xml={backIcon(colors.secondary)}
          width="22"
          height="22"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        source={
          image
            ? {
                uri: image,
              }
            : require("../../assets/blankProfilePic.png")
        }
        resizeMode="contain"
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingTop: 60,
    backgroundColor: colors.black,
  },
  goBack: {
    position: "absolute",
    top: 60,
    left: 15,
    zIndex: 10,
  },
});
