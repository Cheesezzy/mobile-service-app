import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import { TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import { frontIcon } from "../../../assets/icons/icons";
import colors from "../../config/colors";
import { generateTransactionRef } from "../../../api/hooks/generalHooks";
import { initiateWithdrawal } from "../../../api/transfer";
import { auth, db } from "../../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";

const WithdrawScreen = ({ navigation, route }: any) => {
  const { selectedBank } = route.params;

  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", User?.uid!);
  const [user] = useDocumentData(userRef);

  const [selectedBankError, setSelectedBankError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [amount, setAmount] = useState("0");
  const [amountError, setAmountError] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");

  const handleWithdraw = () => {
    setLoading(true);
    if (!selectedBank) {
      setSelectedBankError("Please select a bank");
      setLoading(false);
      return;
    } else {
      setSelectedBankError("");
    }
    if (accountNumber.length < 10) {
      setAccountNumberError(
        "Please make sure that your account number is correct"
      );
      setLoading(false);
      return;
    } else {
      setAccountNumberError("");
    }
    if (+amount > +user?.balance) {
      setAmountError("Insufficient balance");
      setLoading(false);
      return;
    } else {
      setAccountNumberError("");
    }

    // The "return" and setState below will be removed in the future
    setLoading(false);
    return;

    initiateWithdrawal(
      selectedBank.code,
      accountNumber,
      +amount,
      `${user?.name} is withdrawing ${amount} from their Rete Wallet`,
      generateTransactionRef(10)
    );
    setLoading(false);
  };

  useEffect(() => {
    if (selectedBank) null;
    if (accountNumber.length < 10) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    if (+amount >= +user?.balance) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [selectedBank, amount, user?.balance, accountNumber]);

  return (
    <>
      <HeaderTitle title="Withdraw" profileURL="" user="" />

      <View style={styles.container}>
        <View style={styles.inputLabel}>
          <Text>Select bank</Text>
          <Text style={styles.asterisk}>*</Text>
        </View>
        <TouchableOpacity
          style={styles.bank}
          onPress={() => navigation.navigate("Banks")}
        >
          {selectedBank ? (
            <Text style={[styles.label, { color: colors.black }]}>
              {selectedBank.name}
            </Text>
          ) : (
            <Text style={styles.label}>Select bank</Text>
          )}

          <View>
            <SvgXml xml={frontIcon()} width="14" height="14" />
          </View>
        </TouchableOpacity>
        {selectedBankError ? (
          <Text style={styles.errorMessage}>{selectedBankError}</Text>
        ) : null}

        <View style={styles.inputLabel}>
          <Text>Account number</Text>
          <Text style={styles.asterisk}>*</Text>
        </View>
        <TextInput
          keyboardType="numeric"
          onChangeText={(enteredText: any) => setAccountNumber(enteredText)}
          value={accountNumber}
          style={styles.input}
          placeholder="1234567890"
        />
        {accountNumberError ? (
          <Text style={styles.errorMessage}>{accountNumberError}</Text>
        ) : null}

        <View style={styles.inputLabel}>
          <Text>Amount</Text>
          <Text style={styles.asterisk}>*</Text>
        </View>
        <TextInput
          keyboardType="numeric"
          onChangeText={(enteredText: any) => setAmount(enteredText)}
          value={amount}
          style={styles.input}
          placeholder="NGN"
        />
        {amountError ? (
          <Text style={styles.errorMessage}>{amountError}</Text>
        ) : null}

        <TouchableOpacity
          style={[
            styles.paymentButton,
            {
              opacity: disabled ? 0.5 : 1,
            },
          ]}
          onPress={handleWithdraw}
        >
          <Text style={styles.paymentButtonText}>
            {loading ? <ActivityIndicator color="#fff" /> : "Fund"}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WithdrawScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  inputLabel: {
    marginTop: 24,
    flexDirection: "row",
    fontFamily: "PrimaryRegular",
    fontSize: 16,
  },
  asterisk: {
    color: colors.errorMain,
    marginLeft: 1,
    fontSize: 16,
    fontFamily: "PrimaryRegular",
  },
  bank: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  label: {
    fontFamily: "PrimaryRegular",
    color: colors.greyMain,
  },
  input: {
    borderWidth: 1,
    marginTop: 6,
    borderColor: "rgba(147, 187, 245, 0.24)",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  errorMessage: {
    color: colors.errorMain,
    fontSize: 10,
    fontFamily: "PrimaryRegular",
  },
  paymentButton: {
    height: 48,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 20,
  },
  paymentButtonText: {
    fontFamily: "LatoRegular",
    color: colors.secondary,
  },
});
