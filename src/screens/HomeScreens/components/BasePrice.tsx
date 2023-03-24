import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Dialog } from "@rneui/themed";
import { TextInput } from "react-native";
import colors from "../../../config/colors";
import { updateBusinessBasePrice } from "../../../../api/database";

interface Props {
  id: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasePrice = ({ isVisible, setIsVisible, id }: Props) => {
  const [price, setPrice] = useState<string>();
  const [loading, setLoading] = useState(false);

  const disableButton = () => {
    if (price) return false;
    return true;
  };

  const handleUpdateBasePrice = () => {
    setLoading(true);
    if (id && price) updateBusinessBasePrice(id, +price);
    setLoading(false);
    setIsVisible(false);
  };

  return (
    <Dialog
      overlayStyle={{
        //backgroundColor: theme ? colors.secondary : colors.blackSmoke,
        width: "90%",
        zIndex: 1000,
      }}
      isVisible={isVisible}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <Text style={styles.header}>Change your base price</Text>

        <TextInput
          keyboardType="numeric"
          onChangeText={(newPrice) => setPrice(newPrice)}
          style={[styles.inputBox]}
          placeholder="Input new price"
          autoCorrect={false}
          placeholderTextColor={colors.lightGrey}
        />

        <TouchableOpacity
          style={[
            styles.doneBtn,
            {
              opacity: disableButton() ? 0.5 : 1,
            },
          ]}
          onPress={handleUpdateBasePrice}
          disabled={disableButton()}
        >
          <Text style={styles.doneBtnTxt}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.cancelBtn]}
          onPress={() => setIsVisible(false)}
        >
          <Text style={styles.cancelBtnTxt}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Dialog>
  );
};

export default BasePrice;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  header: {
    fontFamily: "PrimaryRegular",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 10,
  },
  inputBox: {
    height: 35,
    width: "100%",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    borderColor: colors.greyLight,
    borderWidth: 1,
  },
  doneBtn: {
    height: 35,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelBtn: {
    height: 35,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  doneBtnTxt: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },
  cancelBtnTxt: {
    color: colors.primary,
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },
});
