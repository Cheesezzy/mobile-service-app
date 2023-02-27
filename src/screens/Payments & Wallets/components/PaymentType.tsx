import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { depositIcon, tranferIcon } from "../../../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import { Ipayment } from "../interface";

export const PaymentType: Function = ({ payment }: { payment: Ipayment }) => {
  const { price, fee, actionType } = payment;
  let debit = actionType === "transfer";
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <View style={styles.iconContainer}>
          <SvgXml
            xml={debit ? tranferIcon() : depositIcon()}
            width='45'
            height={40}
          />
          <Text style={styles.text}>{debit ? "Transfer" : "deposit "}</Text>
        </View>

        <View>
          <Text
            style={[
              styles.price,
              {
                color: debit ? "#FD5D37" : "#2ECC51",
              },
            ]}
          >
            {price}
          </Text>
        </View>
      </View>

      <View style={styles.feeContainer}>
        <View>
          <Text style={{ color: "#838B97" }}>{"fee"}</Text>
        </View>
        <View>
          <Text style={{ color: "#000000" }}>{fee}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "80%",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
  },
  text: {
    color: "#838B97",
    fontSize: 12,
    fontFamily: "PrimaryRegular",
  },
  iconContainer: {
    width: 120,
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
  },
  feeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  price: {
    fontFamily: "PrimaryRegular",
  },
});
