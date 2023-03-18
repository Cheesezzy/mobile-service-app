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
import colors from "../../config/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { frontIcon } from "../../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import { addAppointment } from "../../../api/database";
import DateTimePicker from "react-native-modal-datetime-picker";
import { AppointmentLocation } from "./AppointmentLocation";

export interface AppointmentDate {
  day: number;
  month: number;
  year: number;
}

interface Props {
  isVisible: boolean;
  setIsVisible: any;
  business: any;
  sender: any;
}

const Appointment = ({ isVisible, setIsVisible, business, sender }: Props) => {
  const [name, setName] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<AppointmentDate>();
  const [selectedTime, setSelectedTime] = useState<number>();
  const [selectedLocation, setSelectedLocation] = useState<{
    lng: number;
    lat: number;
  }>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [showLocationSearch, setShowLocationSearch] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmDate = (dateString: any) => {
    const newDate = new Date(dateString);

    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    const date = {
      day,
      month,
      year,
    };

    if (date) setSelectedDate(date);
    hideDatePicker();
  };

  const handleConfirmTime = (time: any) => {
    const date = new Date(time);

    const timestamp = date.getTime();

    if (timestamp) setSelectedTime(timestamp);
    hideDatePicker();
  };

  const handleSubmitAppointment = () => {
    if (
      sender &&
      sender.bizId &&
      name &&
      selectedTime &&
      selectedDate &&
      selectedLocation
    )
      addAppointment(
        sender.bizId,
        name,
        selectedTime,
        selectedDate,
        selectedLocation
      );
    setIsVisible(false);
  };

  const disableButton = () => {
    if (name && selectedTime && selectedDate && selectedLocation) return false;
    return true;
  };

  return (
    <>
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
          <Text style={styles.header}>Appointment Details</Text>

          <View>
            <Text style={styles.label}>Appointment Title</Text>

            <TextInput
              onChangeText={(newName) => setName(newName)}
              style={[styles.inputBox]}
              placeholder="Title"
              autoCapitalize="words"
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
              isDarkModeEnabled
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
            <TouchableOpacity
              style={[styles.inputBox]}
              onPress={() => setShowLocationSearch(true)}
            >
              <Text style={{ color: colors.lightGrey }}>Location</Text>
            </TouchableOpacity>

            <AppointmentLocation
              isVisible={showLocationSearch}
              setIsVisible={setShowLocationSearch}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.doneBtn,
              {
                opacity: disableButton() ? 0.5 : 1,
              },
            ]}
            onPress={handleSubmitAppointment}
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
