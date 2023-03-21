import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import colors from "../../config/colors";
import PhoneInput from "react-native-phone-number-input";
import { sendSmsVerification } from "../../../api/verify";
import { handleAllUsers } from "../../../provider/allUsersSlice";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../firebaseConfig";
import { collection } from "firebase/firestore";

const ForgotPwdScreen = ({ navigation }: any) => {
  const [id, setId] = useState("");
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  const usersRef = collection(db, "users");
  const [users] = useCollectionData(usersRef);

  useEffect(() => {
    if (users && value) {
      if (value.length === 10) {
        users?.map((user) => {
          if (user?.phone === `0${value}`) setId(user.id);
        });
      }
      if (value.length === 11) {
        users?.map((user) => {
          if (user?.phone === value) setId(user.id);
        });
      }
    }
  }, [users, value]);

  const selector = useSelector(handleAllUsers);
  const theme = selector.payload.theme.value;

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.title,
            {
              color: theme ? colors.black : colors.darkTxt,
            },
          ]}
        >
          Forgot password?
        </Text>
        <Text style={[styles.titleSmall]}>
          Enter your phone number to reset your password
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="NG"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          countryPickerProps={{ withAlphaFilter: true }}
          withShadow
          autoFocus
        />
      </View>

      {id && (
        <TouchableOpacity
          style={styles.button}
          disabled={loading}
          onPress={() => {
            setLoading(true);
            sendSmsVerification(formattedValue)
              .then((sent) => {
                navigation.navigate("OTP", {
                  userChannel: formattedValue,
                  type: "sms",
                  id,
                });
                setLoading(false);
              })
              .catch((e) => {
                console.log(e);
                setLoading(false);
              });
          }}
        >
          <Text style={styles.buttonText}>
            {loading ? <ActivityIndicator color="#fff" /> : "Send OTP"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: "PrimarySemiBold",
    marginTop: 30,
    marginBottom: 5,
  },
  titleSmall: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    color: colors.greyMain,
    marginBottom: 30,
  },
  button: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  welcome: {
    padding: 20,
  },
  status: {
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    color: "gray",
  },
});

export default ForgotPwdScreen;
