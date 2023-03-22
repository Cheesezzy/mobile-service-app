import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Switch } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { handleSwitchNotification } from "../../../provider/pushNotificationSlice";
import colors from "../../config/colors";
import HeaderTitle from "../../components/HeaderTitle";

const NotificationSettings = () => {
  const dispatch = useDispatch();
  const selector: any = useSelector(handleSwitchNotification);
  const pushNotification = selector.payload.pushNotification.value;
  const theme = selector.payload.theme.value;

  const switchPushNotification = () => {
    dispatch(handleSwitchNotification());
    return;
  };

  return (
    <>
      <HeaderTitle title="Notifications Settings" profileURL="" user="" />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <View style={styles.settingsCon}>
          <View
            style={[
              styles.settingsItem,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.settingsItemTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {pushNotification
                ? "Turn off push notifications"
                : "Turn on push notifications"}
            </Text>

            <Switch
              color={colors.primary}
              value={pushNotification}
              onValueChange={switchPushNotification}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsCon: {
    padding: 20,
    paddingRight: 0,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingRight: 15,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  settingsItemTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 14,
  },
});
