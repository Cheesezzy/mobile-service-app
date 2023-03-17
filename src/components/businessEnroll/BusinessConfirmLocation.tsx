import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../config/colors";

const BusinessConfirmLocation = ({
  navigation,
  search,
  enrollmentData,
  data,
}: any) => {
  return (
    <View>
      <Text style={styles.header}>Confirm location</Text>
      <Text style={styles.headerDesc}>
        If this is the correct location, please click 'Confirm' to add it to
        your details.{" "}
      </Text>

      <Text style={styles.location}>123,adeyemi drive </Text>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("BusinessEnrollment")}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BusinessConfirmLocation;

const styles = StyleSheet.create({
  header: {
    fontWeight: "600",
    fontSize: 24,
    textAlign: "center",
  },

  headerDesc: {
    marginTop: 6,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },

  location: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    marginTop: 32,
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 56,
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 8,
  },
});
