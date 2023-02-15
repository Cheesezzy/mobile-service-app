import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Dialog } from "@rneui/themed";
import colors from "../config/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { frontIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";

const { width, height } = Dimensions.get("window");

interface Props {
  isVisible: boolean;
  setIsVisible: any;
}

const Appointment = ({ isVisible, setIsVisible }: Props) => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmDate = (date: any) => {
    console.log("A date has been picked: ", date);
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleConfirmTime = (time: any) => {
    console.log("A time has been picked: ", time);
    setSelectedTime(time);
    hideDatePicker();
  };

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

          <TouchableOpacity
            style={styles.picker}
            onPress={() => setDatePickerVisibility(true)}
          >
            <Text style={styles.label}>Select Date</Text>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirmDate}
              onCancel={hideDatePicker}
            />

            <SvgXml xml={frontIcon()} width="14" height="14" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.picker}
            onPress={() => setTimePickerVisibility(true)}
          >
            <Text style={styles.label}>Select Time</Text>

            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />

            <View>
              <SvgXml xml={frontIcon()} width="14" height="14" />
            </View>
          </TouchableOpacity>

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
            style={[styles.doneBtn]}
            onPress={() => setIsVisible(false)}
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
  picker: {
    height: 35,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    borderColor: colors.greyLight,
    borderWidth: 1,
  },
});
