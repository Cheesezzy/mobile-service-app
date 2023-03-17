import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { arrowIcon, arrowLeftIcon } from "../../../assets/icons/icons";
import VerificationSelectType from "../../components/businessEnroll/VerificationSelectType";

const verificationType = [
  "nin",
  "bvn",
  "Driver’s license",
  "Voter’s card",
  "National passport",
];
const KycVerification = ({ navigation }: any) => {
  const [showType, setShowType] = useState(false);
  const [verifyData, setVerifyData] = useState(verificationType[0]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        {showType ? (
          <VerificationSelectType
            showType={showType}
            setShowType={setShowType}
            verificationType={verificationType}
            setVerifyData={setVerifyData}
          />
        ) : (
          <>
            <Text style={styles.header}>KYC verification.</Text>
            <Text style={styles.headerDesc}>
              Choose your preferred method of verification.
            </Text>

            <View>
              <View>
                <View style={styles.verificationLabel}>
                  <Text>Identification method</Text>
                  <Text
                    style={{
                      color: "#D41111",
                      marginLeft: 1,
                      fontWeight: "400",
                      fontSize: 16,
                      lineHeight: 18,
                    }}
                  >
                    *
                  </Text>
                </View>

                <TouchableOpacity onPress={() => setShowType(true)}>
                  <View style={styles.verificationContainer}>
                    <Text> {verifyData.toUpperCase()}</Text>
                    <SvgXml xml={arrowLeftIcon()} width="13" height="17" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <View style={styles.inputLabel}>
                <Text>identification number</Text>
                <Text
                  style={{
                    color: "#D41111",
                    marginLeft: 1,
                    fontWeight: "400",
                    fontSize: 16,
                    lineHeight: 18,
                  }}
                >
                  *
                </Text>
              </View>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Please enter your driver’s license number"
              />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default KycVerification;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 102,
    paddingHorizontal: 24,
    position: "relative",
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
  },

  verificationLabel: {
    marginTop: 24,
    flexDirection: "row",
    fontWeight: "400",
    fontSize: 16,
  },
  verificationContainer: {
    flexDirection: "row",
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  //   Inputs\
  inputLabel: {
    marginTop: 33,
    flexDirection: "row",
    fontWeight: "400",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 17,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
