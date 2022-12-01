import { Avatar } from "@rneui/themed";
import { Rating, AirbnbRating } from "react-native-ratings";
import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import colors from "../config/colors";
import { useFonts } from "expo-font";

const HustleScreen = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Lato: require("../../assets/fonts/Lato/Lato-Black.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Avatar
            size="small"
            rounded
            source={{ uri: "https://picsum.photos/200" }}
          />
        </View>
        <View style={styles.bal}>
          <Text style={styles.balTxt}>Balance</Text>
        </View>
        <View>
          <Text style={styles.balValue}>NGN 150,000</Text>
        </View>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.statsSec}>
          <View style={[styles.statsItem, styles.firstStat]}>
            <Text style={styles.statsItemTxtA}>Business Level</Text>

            <Text style={styles.statsItemTxtB}>Start-up</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsItemTxtA}>Total Earnings</Text>

            <Text style={styles.statsItemTxtB}>$1000</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsItemTxtA}>Business Rating</Text>

            <View style={{}}>
              <Rating
                type="custom"
                fractions={1}
                startingValue={4}
                readonly
                imageSize={13}
                ratingCount={5}
                ratingColor={colors.primary}
                tintColor={colors.secondary}
                ratingBackgroundColor={colors.grey}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    paddingHorizontal: 35,
  },
  avatar: {
    marginBottom: 10,
  },
  bal: {
    marginBottom: 10,
  },
  balTxt: {
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
    color: colors.secondary,
  },
  balValue: {
    fontSize: 28,
    fontFamily: "Lato",
    fontWeight: "100",
    textAlign: "center",
    color: colors.secondary,
  },
  body: {
    height: "100%",
    backgroundColor: colors.secondary,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  statsSec: {
    height: 170,
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 0,
  },
  statsItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  firstStat: {
    marginTop: 0,
  },
  statsItemTxtA: {
    fontSize: 12.5,
    fontFamily: "LatoRegular",
  },
  statsItemTxtB: {
    fontSize: 12,
    fontFamily: "LatoRegular",
  },
});

export default HustleScreen;
