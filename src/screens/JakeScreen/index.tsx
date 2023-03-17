import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../config/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const JakeScreen = ({ navigation }: any) => {
  // const { backgroundColor, color, theme } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
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
          <TouchableOpacity>
            <View style={styles.btn1}>
              <Text style={[styles.btnText, { color: "white" }]}>
                Service consumer
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("BusinessDetails")}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Service provider</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JakeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
  welcomeText: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "700",
    fontSize: 24,
  },
  welcomeTextDesc: {
    textAlign: "center",
    marginTop: 4,
    color: "#000000",
    fontWeight: "400",
    fontSize: 16,
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
    backgroundColor: "#fff",
    borderWidth: 1.5,
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
