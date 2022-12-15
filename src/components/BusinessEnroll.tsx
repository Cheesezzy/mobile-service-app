import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import colors from "../config/colors";
import { useState } from "react";
import { updateUserRole } from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";

const BusinessEnroll = ({ navigation }: any) => {
  const { width } = useWindowDimensions();
  const [user] = useAuthState(auth);

  const handleNavigation = (role: string) => {
    updateUserRole(user?.uid, role);
    navigation.navigate("SlidesContainer", { role });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/businessEnroll/role.png")}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      <Text style={styles.title}>What will be your role?</Text>
      <Text style={styles.desc}>
        Here at Rete, we are a family that scratches each other's backs; we have
        roles and perform as a unit. So, What would you bring to the network?
      </Text>

      <TouchableOpacity onPress={() => handleNavigation("Provider")}>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Service Provider</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation("Consumer")}>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Service Consumer</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BusinessEnroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  slideCon: {
    flex: 1,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  welcome: {
    fontSize: 22,
    fontFamily: "Lato",
    textAlign: "center",
    marginBottom: 60,
  },
  choice: {
    width: Dimensions.get("window").width * 0.8,
    fontSize: 14,
    fontFamily: "LatoRegular",
    marginBottom: 50,
    textAlign: "center",
    opacity: 0,
  },
  choiceBtn: {
    width: Dimensions.get("window").width * 0.8,
    alignSelf: "center",
    padding: 12,
    marginTop: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  choiceBtnTxt: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
  },
  second: {
    width: Dimensions.get("window").width * 0.8,
  },
  inputBox: {
    height: 45,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 50,
    fontFamily: "LatoRegular",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontFamily: "LatoRegular",
    fontWeight: "600",
    fontSize: 18,
    color: colors.primary,
  },
  desc: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    marginVertical: 10,
    letterSpacing: 1,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  searchCon: {
    flexDirection: "row",
    width: "80%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  search: {
    width: "75%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    backgroundColor: colors.secondary,
    alignSelf: "center",
    marginLeft: 10,
  },
  resultItem: {
    flexDirection: "row",
    paddingVertical: 8,
    marginBottom: 10,
    borderBottomColor: colors.deeperSmoke,
    borderBottomWidth: 1,
  },
  resultTitle: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    marginBottom: 4,
  },
  resultAddr: {
    fontFamily: "LatoRegular",
    fontSize: 11,
    color: colors.lightGrey,
  },
});

{
  /*const FirstSlide = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      offset.value = withTiming(1, {
        duration: 1000,
        easing: Easing.in(Easing.exp),
      });
    }, 1000);
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.choice, animatedStyles]}>
        Here at Rete, we are a family that scratches each other's backs; we have
        roles and perform as a unit. So, What would you bring to the network?
      </Animated.Text>

      <TouchableOpacity>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Service Provider</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.choiceBtn}>
        <Text style={styles.choiceBtnTxt}>Service Consumer</Text>
      </View>
    </View>
  );
};*/
}
