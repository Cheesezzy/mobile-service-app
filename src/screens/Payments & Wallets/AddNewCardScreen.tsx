import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TextInputComponent from "./components/TextInputComponent";
import NextButton from "./components/NextButton";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddNewCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [bank, setBank] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [buttonColor, setButtonColor] = useState("#a8ceed");
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  // const isCardNumberValid = (cardNumber : string) : boolean => {
  //     const length = cardNumber.length;
  //     const maxInput = parseInt("19".padEnd(length, "9"), 10);
  //     const cardNumberInt = parseInt(cardNumber, 10);
  //     return length > 16 && length <= 19 && cardNumberInt <= maxInput;
  // };

  useEffect(() => {
    if (cardNumber && bank && expireDate && cvv) {
      setButtonColor("#2776EA");
    } else {
      setButtonColor("#a8ceed");
    }
  }, [cardNumber, bank, expireDate, cvv]);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleDateConfirm = (date: Date) => {
    hideDatePicker();
    setExpireDate(date.toISOString().substring(0, 10));
  };

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
          keyboardType="number-pad"
          onFocus={hideDatePicker}
          maxLength={19}
        />

        <TextInputComponent
          title="bank"
          value={bank}
          onChangeText={setBank}
          placeholder="select bank"
          keyboardType="default"
          onFocus={hideDatePicker}
          maxLength={null}
        />

        <TextInputComponent
          title="expiration date"
          value={expireDate}
          onChangeText={setExpireDate}
          placeholder="enter valid date"
          onFocus={showDatePicker}
          keyboardType="default"
          maxLength={null}
        />

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />

        <TextInputComponent
          title="CVV"
          value={cvv}
          onChangeText={setCvv}
          placeholder="enter CVV"
          keyboardType="number-pad"
          onFocus={hideDatePicker}
          maxLength={3}
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
