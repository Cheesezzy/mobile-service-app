import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../../../config/colors";
import { SvgXml } from "react-native-svg";
import { directBoxIcon } from "../../../../assets/icons/icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  verify: () => void;
}

const EmailNotVerfied = ({ verify }: Props) => {
  const [sending, setSending] = useState<boolean>();

  const handleVerify = () => {
    if (!sending) {
      verify();
      setSending(true);
    }
    setTimeout(() => {
      setSending(false);
    }, 30000);
  };

  return (
    <View style={styles.container}>
      <SvgXml xml={directBoxIcon()} width="100" height="100" />
      <Text style={styles.text}>Email Verification</Text>
      <Text style={styles.subText}>
        {sending
          ? "You can try again in 30 seconds."
          : "Please verify your email before you can proceed"}
      </Text>
      <TouchableOpacity
        style={[
          styles.verifyBtn,
          {
            opacity: sending ? 0.5 : 1,
          },
        ]}
        onPress={handleVerify}
        disabled={sending}
      >
        <Text style={styles.verifyBtnTxt}>
          {sending ? <ActivityIndicator color="#fff" /> : "Verify"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailNotVerfied;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondarySmoke,
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    alignItems: "center",
    paddingTop: 100,
    zIndex: 200,
  },
  text: {
    fontFamily: "PrimarySemiBold",
    fontSize: 24,
    marginTop: 30,
  },
  subText: {
    fontFamily: "PrimaryRegular",
    fontSize: 13,
  },
  verifyBtn: {
    height: 45,
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyBtnTxt: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: "PrimaryRegular",
  },
});
