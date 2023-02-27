import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { MessageBox } from "./components/MessageBox";
import CircleStatus from "./components/CircleStatus";
import {
  arrowIcon,
  horizontalRull,
  tikLine,
} from "../../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import { PaymentType } from "./components/PaymentType";
import { TranssctionDetails } from "./components/TranssctionDetails";
import { ShareButton } from "./components/ShareButton";
import { Idetails, Ipayment } from "./interface";
import NavigationBar from "./components/NavigationBar";
const TransactionDetailsScreen = ({
  route,
}: {
  route: { params: { payment: Ipayment; details: Idetails } };
}) => {
  const { details, payment } = route.params;
  const { actionType } = payment;
  let debit = actionType === "transfer";
  return (
    <>
      <NavigationBar title="Transaction details"/>

      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.statusContainer}>
            <CircleStatus
              color='#2776EA'
              text='Transaction Submitted'
              textColor='#000000'
              outline='#2776EA'
            />
            <View style={{ width: 33 }}>
              <SvgXml xml={tikLine("#2776EA")} width='100%' height={40} />
            </View>
            <CircleStatus
              color='#2776EA'
              text='Payment Successful'
              textColor='#000000'
              outline='#2776EA'
            />
            <View style={{ width: 33 }}>
              <SvgXml
                xml={tikLine(`${debit ? "#E9E7E7" : "#2776EA"}`)}
                width='100%'
                height={40}
              />
            </View>
            <CircleStatus
              color={debit ? "#F9F9F9" : "#2776EA"}
              text='Money Received'
              outline={debit ? "#E9E7E7" : "#2776EA"}
              textColor={debit ? "#838B97" : "#000000"}
            />
          </View>
          <View style={styles.messageContainer}>
            <MessageBox
              message={
                debit
                  ? "the recipient account is expected to be credited after the services has been rendered."
                  : "your wallet is expected to be credited within the next 10 minutes, subject to notification from bank."
              }
            />
          </View>

          <View style={styles.payment}>
            <PaymentType payment={payment} />
          </View>
          <View style={styles.horizontalRull}>
            <SvgXml xml={horizontalRull()} width='100%' height={70} />
          </View>

          <View style={styles.transsactionDetails}>
            <TranssctionDetails details={details} />
          </View>
        </View>
        <View style={styles.btn}>
          <ShareButton />
        </View>
      </SafeAreaView>
    </>
  );
};
export default TransactionDetailsScreen;
const styles = StyleSheet.create({
  container: {
    width: 342,
    top: "5%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  statusContainer: {
    paddingTop: 20,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "center",
  },
  messageContainer: {
    position: "relative",
    width: "100%",
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  messageContainerText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 8.2,
    lineHeight: 16,
    textTransform: "capitalize",
    color: "#2776EA",
    fontFamily: "PrimaryRegular",
  },
  messagePointer: {
    position: "absolute",
    top: -10,
    right: 30,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#D4E4FB",
  },
  payment: {
    height: 100,
    width: "100%",
    top: 15,
  },
  horizontalRull: {
    height: 50,
    display: "flex",
    alignItems: "flex-end",
    top: 20,
    marginBottom: 25,
  },
  btn: {
    paddingHorizontal: 25,
    justifyContent: "center",
    position: "relative",
    display: "flex",
    top: "7%",
  },

  transsactionDetails: {
    paddingBottom: 10,
  },
});
