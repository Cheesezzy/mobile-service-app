import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { SvgXml } from "react-native-svg";
import { bankIcon, cardIcon } from "../../../assets/icons/icons";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import HeaderTitle from "../../components/HeaderTitle";

const FundScreen = ({ navigation }: any) => {
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="Fund" profileURL="" user="" />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <View style={styles.fundMethods}>
          <Text
            style={[
              styles.pmSecTxt,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
          >
            Pick A Suitable Method To Fund Wallet*
          </Text>

          <TouchableOpacity
            style={styles.fundBank}
            onPress={() =>
              navigation.navigate("Pay", {
                method: "account_bank",
              })
            }
          >
            <SvgXml
              style={styles.icon}
              xml={bankIcon("")}
              width="21"
              height="21"
            />
            <Text
              style={[
                styles.pmTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Bank Transfer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.fundCard}
            onPress={() =>
              navigation.navigate("Pay", {
                method: "card",
              })
            }
          >
            <SvgXml
              style={styles.icon}
              xml={cardIcon("")}
              width="21"
              height="21"
            />
            <Text
              style={[
                styles.pmTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Debit/Credit card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  fundMethods: {
    marginTop: 20,
  },
  fundBank: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  fundCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingLeft: 0,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  pmSecTxt: {
    fontSize: 18,
    fontFamily: "PrimarySemiBold",
  },
  pmTxt: {
    fontFamily: "PrimaryRegular",
  },
});
