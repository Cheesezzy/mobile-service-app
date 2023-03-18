import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import colors from "../../config/colors";

const BusinessEnrollment = ({ navigation, route }: any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>Business enrollment detail .</Text>
          <Text style={styles.headerDesc}>
            Please go through the details and make sure they are correct.
          </Text>

          <View>
            <View>
              <View style={styles.inputLabel}>
                <Text>Business name</Text>
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="Oha specialist"
                editable={false}
                selectTextOnFocus={false}
              />
            </View>

            <View>
              <View style={styles.inputLabel}>
                <Text>Business email</Text>
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="Oha specialist"
                editable={false}
                selectTextOnFocus={false}
              />
            </View>

            <View>
              <View style={styles.inputLabel}>
                <Text>Business contact</Text>
              </View>
              <TextInput
                style={styles.inputs}
                placeholder="Oha specialist"
                editable={false}
                selectTextOnFocus={false}
              />
            </View>

            <View>
              <View style={styles.inputLabel}>
                <Text>Business category</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput placeholder="123, Adeyemi drive" />
                <Pressable
                  onPress={() => navigation.navigate("BusinessCategory")}
                >
                  <Text style={styles.edit}>edit</Text>
                </Pressable>
              </View>
            </View>

            <View>
              <View style={styles.inputLabel}>
                <Text>Business location</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput placeholder="123, Adeyemi drive" />
                <Pressable
                  onPress={() => navigation.navigate("BusinessLocation")}
                >
                  <Text style={styles.edit}>edit</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("KycVerification")}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessEnrollment;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    paddingHorizontal: 24,
  },
  header: {
    fontWeight: "600",
    fontSize: 24,
  },
  headerDesc: {
    marginTop: 4,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 8,
  },

  //   Inputs\
  inputLabel: {
    marginTop: 24,
    flexDirection: "row",
    fontWeight: "400",
    fontSize: 16,
  },
  inputs: {
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 8,
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
  edit: {
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
