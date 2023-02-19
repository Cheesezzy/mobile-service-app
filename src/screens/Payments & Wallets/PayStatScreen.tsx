import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import colors from "../../config/colors";
import { SvgXml } from "react-native-svg";
import { backIcon, closeIcon } from "../../../assets/icons/icons";

const PayStatScreen = ({ navigation }: any) => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
        },
      ]}
    >
      <SvgXml
        xml={backIcon(theme ? colors.black : colors.darkTxt)}
        width="22"
        height="22"
        onPress={() => navigation.goBack()}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.iconCon}>
          <SvgXml xml={closeIcon()} width="10" height="10" />
        </View>
        <Text style={styles.statusMain}>Transaction Failed</Text>
        <Text style={styles.statusSec}>
          Payment declined by bank. Please check your payment details and try
          again.
        </Text>
        <Text style={styles.statusAmount}>₦ 40,000</Text>
        <TouchableOpacity style={[styles.doneBtn]}>
          <Text style={styles.doneBtnTxt}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayStatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  iconCon: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.errorMain,
    borderRadius: 60,
  },
  statusMain: {
    fontFamily: "PrimarySemiBold",
    fontSize: 20,
    marginTop: 20,
  },
  statusSec: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    textAlign: "center",
    color: colors.greyMain,
    marginTop: 10,
  },
  statusAmount: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
    marginTop: 20,
  },
  doneBtn: {
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 20,
  },
  doneBtnTxt: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },
});
