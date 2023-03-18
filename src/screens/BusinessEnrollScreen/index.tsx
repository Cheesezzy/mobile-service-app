import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { addBusiness, updateUserRole } from "../../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc } from "firebase/firestore";
import { auth, db } from "../../../firebaseConfig";

const BusinessEnrollScreen = ({ navigation }: any) => {
  const [user] = useAuthState(auth);

  const handleNavigation = (role: string) => {
    //user?.uid && updateUserRole(user?.uid, role);
    if (role === "Provider") {
      //addBusiness(user?.uid);
      navigation.navigate("BusinessDetails");
    } else if (role === "Consumer") {
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.mainContainer]}>
        <Image
          source={require("../../../assets/businessEnroll/rete_logo.png")}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.welcomeTextDesc}>
            Please select your profile type
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => handleNavigation("Consumer")}>
            <View style={styles.btn1}>
              <Text style={[styles.btnText, { color: "white" }]}>
                Service Consumer
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNavigation("Provider")}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Service Provider</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BusinessEnrollScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
  welcomeText: {
    textAlign: "center",
    fontFamily: "PrimarySemiBold",
    fontSize: 24,
  },
  welcomeTextDesc: {
    textAlign: "center",
    marginTop: 4,
    fontFamily: "PrimaryRegular",
    fontSize: 14,
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  btnText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 14,
  },
  btn: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
  },
  btn1: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 56,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
});
