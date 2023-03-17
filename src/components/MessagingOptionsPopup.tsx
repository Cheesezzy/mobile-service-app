import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Overlay } from "@rneui/themed";
import colors from "../config/colors";
import { blockUser, deleteMessages } from "../../api/database";

interface Props {
  userId: any;
  personId: any;
  person: any;
  business: any;
  popupType: string;
  clearType: any;
}

const MessagingOptionsPopup = ({
  business,
  popupType,
  clearType,
  userId,
  personId,
  person,
}: Props) => {
  const handleReport = () => {};

  const handleDeleteChats = () => {
    deleteMessages(userId, personId);
  };

  const handleBlock = () => {
    blockUser(userId, person.name, person.email);
  };

  const handleCancel = () => {
    clearType("");
  };

  const handleSubmit = (type: any) => {
    if (type === "Report") handleReport();
    if (type === "Delete chats") handleDeleteChats();
    if (type === "Block") handleBlock();

    clearType("");
  };

  return (
    <Overlay isVisible={true} overlayStyle={styles.container}>
      <Text style={styles.txt}>
        {popupType} {business.name}
      </Text>
      <Text style={styles.subTxt}>
        Are you sure you want to {popupType.toLowerCase()} {business.name}?
      </Text>

      <View style={styles.btnsCon}>
        <TouchableOpacity
          style={[
            styles.doneBtn,
            {
              opacity: false ? 0.5 : 1,
            },
          ]}
          disabled={false}
          onPress={() => handleSubmit(popupType)}
        >
          <Text style={styles.doneBtnTxt}>{popupType}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.cancelBtn]} onPress={handleCancel}>
          <Text style={styles.cancelBtnTxt}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

export default MessagingOptionsPopup;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 18,
  },
  subTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
  },
  btnsCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  doneBtn: {
    width: "30%",
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelBtn: {
    width: "30%",
    height: 30,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  doneBtnTxt: {
    color: colors.secondary,
    fontSize: 11,
    fontFamily: "PrimaryRegular",
  },
  cancelBtnTxt: {
    color: colors.primary,
    fontSize: 11,
    fontFamily: "PrimaryRegular",
  },
});
