import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TextInputComponent from "./components/TextInputComponent";
import NextButton from "./components/NextButton";

const AddNewCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [bank, setBank] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [buttonColor, setButtonColor] = useState("#a8ceed");

  useEffect(() => {
    if (cardNumber && bank && expireDate && cvv) {
      setButtonColor("#2776EA");
    } else {
      setButtonColor("#a8ceed");
    }
  }, [cardNumber, bank, expireDate, cvv]);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.textContainer}>
          Fill in the appropriate information:
        </Text>

        <TextInputComponent
          title="card number"
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholder="enter card number  (16-19 digits)"
        />

        <TextInputComponent
          title="bank"
          value={bank}
          onChangeText={setBank}
          placeholder="select bank"
        />

        <TextInputComponent
          title="expiration date"
          value={expireDate}
          onChangeText={setExpireDate}
          placeholder="enter valid date"
        />

        <TextInputComponent
          title="CVV"
          value={cvv}
          onChangeText={setCvv}
          placeholder="enter CVV"
        />
      </View>

      <View style={styles.btn}>
        <NextButton backgroundColor={buttonColor} title="Next" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddNewCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  textContainer: {
    fontSize: 21,
    fontFamily: "PrimaryMedium",
    fontWeight: "600",
    paddingLeft: 20,
  },
  btn: {
    marginTop: 35,
    alignItems: "center",
  },
});
