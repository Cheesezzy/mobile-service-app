import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
  Dimensions,
} from "react-native";
import colors from "../config/colors";
import Navigation from "../components/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers, refreshAllUsers } from "../../provider/allUsersSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { updateBizInformedStat } from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderTitle from "../components/HeaderTitle";
import { SvgXml } from "react-native-svg";
import {
  creative,
  health,
  knowledge,
  professional,
  social,
} from "../../assets/svgs/svgs";

const image = require("../../assets/welcome/find.png");

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);

  const user = selector.payload.user.value;
  const [User] = useAuthState(auth);

  useEffect(() => {
    updateBizInformedStat(User?.uid);
  }, []);

  return (
    <>
      <HeaderTitle title="Home" />
      <View style={styles.container}>
        <ScrollView style={{ padding: 5, paddingBottom: 20 }}>
          <View>
            <View style={styles.categorySecs}>
              <View style={styles.categoryBig}>
                <SvgXml xml={professional()} width="60%" height="60%" />
                <Text style={styles.bigTxt}>Professional</Text>
              </View>
              <View style={styles.categoryBig}>
                <SvgXml xml={creative()} width="60%" height="60%" />
                <Text style={styles.bigTxt}>Creative</Text>
              </View>
            </View>

            <View style={styles.categorySecs}>
              <View style={styles.categorySm}>
                <View style={styles.smCon}>
                  <SvgXml xml={social()} width="70%" height="70%" />
                </View>
                <Text style={styles.smTxt}>Social</Text>
              </View>

              <View style={styles.categorySm}>
                <View style={styles.smCon}>
                  <SvgXml xml={health()} width="70%" height="70%" />
                </View>
                <Text style={styles.smTxt}>Health Care</Text>
              </View>

              <View style={styles.categorySm}>
                <View style={styles.smCon}>
                  <SvgXml xml={knowledge()} width="70%" height="70%" />
                </View>
                <Text style={styles.smTxt}>Knowledge</Text>
              </View>

              <View style={styles.categorySm}>
                <View
                  style={[
                    styles.smCon,
                    {
                      flex: 1,
                      padding: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
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
          </View>

          <View style={styles.categorySecs}>
            <View style={styles.categoryLarge}>
              <Image
                source={require("../../assets/jfy.png")}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 15,
                }}
              />
            </View>
          </View>

          <View style={{ height: 100, width: "100%" }} />
        </ScrollView>

        <Navigation navigation={navigation} />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.secondarySmoke,
    justifyContent: "space-between",
  },
  categorySecs: {
    flexDirection: "row",
  },
  categoryBig: {
    flex: 1,
    height: 70,
    margin: 4,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
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
    height: Dimensions.get("window").height * 0.58,
    width: "100%",
    margin: 4,
    marginTop: 15,
    borderRadius: 15,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
});

export default HomeScreen;
