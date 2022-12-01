import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import colors from "../config/colors";
import Navigation from "../components/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers, refreshAllUsers } from "../../provider/allUsersSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const images = {
  professional: {
    uri: "",
  },
};

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);

  const user = selector.payload.user.value;

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 5, paddingBottom: 20 }}>
        <View style={styles.categorySecs}>
          <View style={styles.categoryBig}>
            <ImageBackground
              source={require("../../assets/categories/professional.png")}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.bigTxt}>Professional</Text>
          </View>
          <View style={styles.categoryBig}>
            <ImageBackground
              source={require("../../assets/categories/creative.png")}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.bigTxt}>Creative</Text>
          </View>
        </View>

        <View style={styles.categorySecs}>
          <View style={styles.categorySm}>
            <View style={styles.smCon}>
              <ImageBackground
                source={require("../../assets/categories/social.png")}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.smTxt}>Social</Text>
          </View>

          <View style={styles.categorySm}>
            <View style={styles.smCon}>
              <ImageBackground
                source={require("../../assets/categories/health.png")}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.smTxt}>Health Care</Text>
          </View>

          <View style={styles.categorySm}>
            <View style={styles.smCon}>
              <ImageBackground
                source={require("../../assets/categories/knowledge.png")}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.smTxt}>Knowledge</Text>
          </View>

          <View style={styles.categorySm}>
            <View
              style={{
                flex: 1,
                borderRadius: 5,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("../../assets/menu.png")}
                style={{
                  width: 22,
                  height: 22,
                }}
              />
            </View>
            <Text style={styles.smTxt}>See all</Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 20,
            fontFamily: "Lato",
            marginTop: 25,
            marginLeft: 5,
          }}
        >
          Recommended
        </Text>
        <View style={styles.categorySecs}>
          <View style={styles.categoryLarge}></View>
        </View>

        <View style={styles.categorySecs}>
          <View style={styles.categoryLarge}></View>
        </View>

        <View style={styles.categorySecs}>
          <View style={styles.categoryLarge}></View>
        </View>

        <View style={styles.categorySecs}>
          <View style={styles.categoryLarge}></View>
        </View>
      </ScrollView>

      <Navigation navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "whitesmoke",
  },
  categorySecs: {
    flexDirection: "row",
  },
  categoryBig: {
    flex: 1,
    justifyContent: "flex-end",
    height: 70,
    margin: 4,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    padding: 5,
  },
  bigTxt: {
    fontSize: 15,
    fontFamily: "LatoRegular",
    textAlign: "center",
  },
  smCon: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    padding: 5,
  },
  categorySm: {
    flex: 1,
    height: 70,
    margin: 4,
    borderRadius: 5,
  },
  smTxt: {
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
    marginTop: 2,
  },
  categoryLarge: {
    flex: 1,
    height: 110,
    width: "100%",
    margin: 4,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: colors.secondary,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;
