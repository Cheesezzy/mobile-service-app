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
          <View style={styles.name}>
            <Text style={{ fontSize: 38, fontFamily: "Lato" }}>Rete Tech</Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, fontFamily: "LatoRegular" }}>
              Balance: $0
            </Text>
          </View>
        </View>
        <View style={{}}>
          <Avatar
            size="large"
            rounded
            source={{ uri: "https://picsum.photos/200" }}
          />
        </View>
      </View>
      <View style={styles.statsSec}>
        <Text
          style={{
            color: colors.secondary,
            fontFamily: "Lato",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          How your business is doing
        </Text>
        <View style={styles.statsItem}>
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
              imageSize={14}
              ratingCount={5}
              ratingColor={colors.primary}
              tintColor={colors.grey}
            />
          </View>
        </View>
      </View>
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  name: {
    marginBottom: 5,
  },
  statsSec: {
    height: 170,
    width: "100%",
    backgroundColor: colors.grey,
    padding: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
  },
  statsItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  statsItemTxtA: {
    fontSize: 12.5,
    fontFamily: "LatoRegular",
    color: colors.secondary,
  },
  statsItemTxtB: {
    fontSize: 12,
    fontFamily: "Lato",
    color: colors.secondary,
  },
});

export default HustleScreen;
