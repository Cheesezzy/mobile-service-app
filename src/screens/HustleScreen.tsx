import { Avatar } from "@rneui/themed";
import { Rating, AirbnbRating } from "react-native-ratings";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
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
        <View style={{}}>
          <View style={styles.bal}>
            <Text style={styles.balTxt}>Balance:</Text>
          </View>
          <View>
            <Text style={styles.balValue}>$1000</Text>
          </View>
        </View>
        <View style={{}}>
          <Avatar
            size="small"
            rounded
            source={{ uri: "https://picsum.photos/200" }}
          />
        </View>
      </View>
      {/*<View style={styles.statsSec}>
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
  </View>*/}
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 15,
  },
  bal: {
    marginBottom: 5,
  },
  balTxt: {
    fontSize: 12,
    fontFamily: "LatoRegular",
  },
  balValue: {
    fontSize: 28,
    fontFamily: "Lato",
    fontWeight: "100",
  },
  statsSec: {
    height: 170,
    width: "100%",
    padding: 20,
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
