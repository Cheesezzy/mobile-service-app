import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Bank, getBanks } from "../../../api/getBanks";
import colors from "../../config/colors";
import HeaderTitle from "../../components/HeaderTitle";
import { SvgXml } from "react-native-svg";
import { waiting } from "../../../assets/svgs/svgs";
import { searchIcon } from "../../../assets/icons/icons";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../../provider/themeSlice";

const BanksScreen = ({ navigation }: any) => {
  const [banks, setBanks] = useState<Bank[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRetry = () => {
    setLoading(true);
    getBanks("NG")
      .then((banks) => {
        setBanks(banks);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getBanks("NG")
      .then((banks) => {
        setBanks(banks);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="Banks" profileURL="" user="" />

      <ScrollView style={styles.container}>
        <View style={styles.searchCon}>
          <SvgXml
            style={{
              position: "relative",
              top: 0,
            }}
            xml={searchIcon(theme ? colors.blackSmoke : colors.darkTxt)}
            width="14"
            height="14"
          />

          <TextInput
            style={[
              styles.search,
              {
                color: theme ? colors.black : colors.darkTxt,
              },
            ]}
            placeholderTextColor={colors.lightGrey}
            placeholder="Search for a bank"
            onChangeText={(newQuery) => setSearchQuery(newQuery)}
            defaultValue={searchQuery}
          />
        </View>
        {!loading ? (
          error.length < 1 ? (
            banks
              ?.sort((a: Bank, b: Bank) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
              })
              .filter((bank: Bank) => {
                if (
                  bank.name
                    .toLocaleLowerCase()
                    .includes(searchQuery.toLowerCase())
                )
                  return bank;
              })
              .map((bank: Bank) => {
                return (
                  <TouchableOpacity
                    style={styles.bank}
                    key={bank.id}
                    onPress={() =>
                      navigation.navigate("Withdraw", {
                        selectedBank: bank,
                      })
                    }
                  >
                    <Text style={styles.bankTxt}>{bank.name}</Text>
                  </TouchableOpacity>
                );
              })
          ) : (
            <View style={styles.errorMsg}>
              <SvgXml xml={waiting()} width={"100%"} height={"40%"} />
              <Text
                style={{
                  fontFamily: "LatoRegular",
                  marginTop: 10,
                }}
              >
                There was an error while fetching banks
              </Text>

              <TouchableOpacity
                style={styles.paymentButton}
                onPress={handleRetry}
              >
                <Text style={styles.paymentButtonText}>Try again</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          <ActivityIndicator color={colors.primary} />
        )}
        <View style={{ height: 80, width: "100%" }} />
      </ScrollView>
    </>
  );
};

export default BanksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  searchCon: {
    flexDirection: "row",
    height: 45,
    width: "100%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.greyMain,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  search: {
    width: "80%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    alignSelf: "center",
    marginLeft: 10,
  },
  bank: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 5,
    backgroundColor: colors.secondary,
    borderRadius: 5,
  },
  bankTxt: {
    fontFamily: "PrimaryRegular",
  },
  paymentButton: {
    height: 40,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 20,
  },
  paymentButtonText: {
    fontFamily: "LatoRegular",
    color: colors.secondary,
  },
  errorMsg: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
