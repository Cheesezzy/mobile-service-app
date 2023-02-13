import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Dialog } from "@rneui/themed";
import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

interface Props {
  isVisible: boolean;
  setIsVisible: any;
}

const Appointment = ({ isVisible, setIsVisible }: Props) => {
  return (
    <>
      <Dialog
        overlayStyle={
          {
            //backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          }
        }
        isVisible={isVisible}
      >
        <View style={styles.container}>
          <Text style={styles.header}>Appointment Details</Text>

          <View>
            <Text style={styles.label}>Appointment Title</Text>

            <TextInput
              keyboardType="email-address"
              style={[styles.inputBox]}
              placeholder="Title"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={colors.lightGrey}
            />
          </View>

          <View>
            <Text style={styles.label}>Appointment Date</Text>

            <TextInput
              keyboardType="email-address"
              style={[styles.inputBox]}
              placeholder="Date"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={colors.lightGrey}
            />
          </View>

          <View>
            <Text style={styles.label}>Appointment Time</Text>

            <TextInput
              keyboardType="email-address"
              style={[styles.inputBox]}
              placeholder="Time"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={colors.lightGrey}
            />
          </View>

          <View>
            <Text style={styles.label}>Appointment Location</Text>

            <TextInput
              keyboardType="email-address"
              style={[styles.inputBox]}
              placeholder="Location"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={colors.lightGrey}
            />
          </View>

          <TouchableOpacity
            style={[styles.inputBtn]}
            onPress={() => setIsVisible(false)}
          >
            <Text style={styles.inputBtnTxt}>Done</Text>
          </TouchableOpacity>
        </View>
      </Dialog>
    </>
  );
};

export default Appointment;

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
  label: {
    fontFamily: "PrimaryRegular",
    fontSize: 13,
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
  inputBtn: {
    height: 35,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBtnTxt: {
    color: colors.secondary,
    fontSize: 13,
    fontFamily: "PrimaryRegular",
  },
});
