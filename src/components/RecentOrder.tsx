import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Avatar } from "@rneui/base";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";

interface Props {
  name: string;
  minutes: string;
}

const RecentOrder = ({ name, minutes }: Props) => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;
  return (
    <View style={[styles.orderContainer, {
      backgroundColor: theme ? colors.secondarySmoke : colors.black,
    }]}>
      <View style={styles.order}>
        <Avatar
          size={31}
          rounded
          source={require("../../assets/blankProfilePic.png")}
        />

        <View style={styles.orderSub}>
          <Text
            style={[
              styles.orderName,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            {name}
          </Text>
          <Text
            style={[
              styles.orderMinutes,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            {minutes}
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.orderPrice,
          {
            color: theme ? colors.black : colors.darkTxt,
          },
        ]}
      >
        {"\u20A6"}7500
      </Text>
    </View>
  );
};

export default RecentOrder;

const styles = StyleSheet.create({
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingVertical: 10,
  },
  order: {
    flexDirection: "row",
  },

  orderSub: {
    marginLeft: 4,
  },

  orderName: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
  },
  orderMinutes: {
    fontFamily: "PrimarySemiBold",
    fontSize: 12,
    marginTop: 2,
  },
  orderPrice: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
  },
});
