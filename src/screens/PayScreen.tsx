import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { PayWithFlutterwave } from "flutterwave-react-native";
import colors from "../config/colors";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { fundAccount } from "../../api/database";
import { auth, db } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";

interface RedirectParams {
  status: "successful" | "cancelled";
  transaction_id?: string;
  tx_ref: string;
}

const PayScreen = ({ route }: any) => {
  const [amount, setAmount] = useState<any>("");
  const { method } = route.params;
  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", User?.uid!);

  const [user] = useDocumentData(userRef);

  /* An example function to generate a random transaction reference */
  const generateTransactionRef = (length: number) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `flw_tx_ref_${result}`;
  };

  const handleGetAmount = (newQuery: string) => {
    if (
      newQuery.includes(",") &&
      newQuery.includes(".") &&
      newQuery.includes("-")
    ) {
      setAmount("");
    } else setAmount(newQuery);
  };

  /* An example function called when transaction is completed successfully or canceled */
  const handleOnRedirect = (data: RedirectParams) => {
    console.log(data);

    if (data.status === "successful" && User && user && user.balance) {
      fundAccount(User?.uid, +user.balance, +amount);
    }
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme ? colors.secondary : colors.blackSmoke,
        },
      ]}
    >
      <Text
        style={[
          styles.headerTxt,
          {
            color: theme ? colors.black : colors.darkTxt,
          },
        ]}
      >
        Pay
      </Text>
      <TextInput
        keyboardType="numeric"
        style={[
          styles.input,
          {
            color: theme ? colors.black : colors.darkTxt,
          },
        ]}
        placeholder="Type in the amount, min.  ₦100.00"
        placeholderTextColor={colors.lightGrey}
        onChangeText={(newQuery) => handleGetAmount(newQuery)}
        defaultValue={amount}
      />
      <PayWithFlutterwave
        onRedirect={handleOnRedirect}
        options={{
          tx_ref: generateTransactionRef(10),
          authorization: "FLWPUBK_TEST-5a9b8099b909d9da2e00473ebb3de3bb-X",
          customer: {
            email: "etukudo@gmail.com",
            phonenumber: "08012345678",
            name: "Takeshi Kovacs",
          },
          amount,
          currency: "NGN",
          payment_options: method,
        }}
        customButton={(props: any) => (
          <TouchableOpacity
            style={[
              styles.paymentButton,
              {
                opacity: !props.isInitializing && +amount < 100 ? 0.5 : 1,
              },
            ]}
            onPress={props.onPress}
            //isBusy={props.isInitializing}
            disabled={
              !props.isInitializing && +amount >= 100 && amount.length > 0
                ? props.disabled
                : !props.disabled
            }
          >
            <Text style={styles.paymentButtonText}>
              {props.isInitializing ? (
                <ActivityIndicator color="#fff" />
              ) : (
                "Fund"
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
  headerTxt: {
    fontFamily: "Lato",
    fontSize: 25,
    marginBottom: 20,
  },
  paymentButton: {
    height: 50,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    height: 50,
    width: "90%",
    padding: 10,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    fontFamily: "LatoRegular",
  },
  paymentButtonText: {
    fontFamily: "LatoRegular",
    color: colors.secondary,
  },
});
