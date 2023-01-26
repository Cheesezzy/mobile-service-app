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
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import Navigation from "../components/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers, refreshAllUsers } from "../../provider/allUsersSlice";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
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
import {
  collection,
  collectionGroup,
  doc,
  onSnapshot,
} from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import SetLocationPopup from "../components/SetLocationPopup";
import { categories } from "../../provider/categoryData/categories";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { moreIcon } from "../../assets/icons/icons";

const HomeScreen = ({ navigation }: any) => {
  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);
  const businessesRef = collection(db, "businesses");
  const [biz] = useCollectionData(businessesRef);
  //console.log(biz, "biz");

  const [user] = useDocumentData(userRef);
  //const user = selector.payload.user.value;

  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);

  const checkRoleAndLocation = () => {
    {
      /*user && user?.role === "Provider" ? (
      !business?.location && loading ? null : business?.location ? null : (
        <SetLocationPopup />
      )
      ) : null*/
    }

    if (user && user?.role === "Provider") {
      if (!business?.location && loading) {
        return null;
      } else {
        return <SetLocationPopup />;
      }
    } else {
      return null;
    }
  };

  const [business, loading] = useDocumentData(businessRef);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="Home" profileURL={user?.profilePic} />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.black,
          },
        ]}
      >
        {user && user?.role === "Provider" ? (
          !business?.location && loading ? null : business?.location ? null : (
            <SetLocationPopup />
          )
        ) : null}
        <ScrollView style={{ padding: 5, paddingBottom: 20 }}>
          <View>
            <View style={styles.categorySecs}>
              <TouchableOpacity
                style={[
                  styles.categoryBig,
                  {
                    backgroundColor: theme
                      ? colors.secondary
                      : colors.blackSmoke,
                  },
                ]}
                onPress={() => {
                  navigation.navigate("Category", {
                    categoryName: "Professional",
                    desc: categories[0].value.desc,
                  });
                }}
              >
                <SvgXml xml={professional()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Professional
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.categoryBig,
                  {
                    backgroundColor: theme
                      ? colors.secondary
                      : colors.blackSmoke,
                  },
                ]}
                onPress={() => {
                  navigation.navigate("Category", {
                    categoryName: "Creative",
                    desc: categories[1].value.desc,
                  });
                }}
              >
                <SvgXml xml={creative()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Creative
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.categorySecs}>
              <TouchableOpacity
                style={styles.categorySm}
                onPress={() => {
                  navigation.navigate("Category", {
                    categoryName: "Social",
                    desc: categories[2].value.name,
                  });
                }}
              >
                <View
                  style={[
                    styles.smCon,
                    {
                      backgroundColor: theme
                        ? colors.secondary
                        : colors.blackSmoke,
                    },
                  ]}
                >
                  <SvgXml xml={social()} width="70%" height="70%" />
                </View>
                <Text
                  style={[
                    styles.smTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Social
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.categorySm}
                onPress={() => {
                  navigation.navigate("Category", {
                    categoryName: "Health Care",
                    desc: categories[3].value.name,
                  });
                }}
              >
                <View
                  style={[
                    styles.smCon,
                    {
                      backgroundColor: theme
                        ? colors.secondary
                        : colors.blackSmoke,
                    },
                  ]}
                >
                  <SvgXml xml={health()} width="70%" height="70%" />
                </View>
                <Text
                  style={[
                    styles.smTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Health Care
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.categorySm}
                onPress={() => {
                  navigation.navigate("Category", {
                    categoryName: "Knowledge",
                    desc: categories[4].value.name,
                  });
                }}
              >
                <View
                  style={[
                    styles.smCon,
                    {
                      backgroundColor: theme
                        ? colors.secondary
                        : colors.blackSmoke,
                    },
                  ]}
                >
                  <SvgXml xml={knowledge()} width="70%" height="70%" />
                </View>
                <Text
                  style={[
                    styles.smTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Knowledge
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.categorySm}
                onPress={() => navigation.navigate("Categories")}
              >
                <View
                  style={[
                    [
                      styles.smCon,
                      {
                        backgroundColor: theme
                          ? colors.secondary
                          : colors.blackSmoke,
                      },
                    ],
                    {
                      flex: 1,
                      padding: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <SvgXml
                    xml={moreIcon(theme ? colors.black : colors.secondary)}
                    width={20}
                    height={20}
                  />
                </View>
                <Text
                  style={[
                    styles.smTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  See all
                </Text>
              </TouchableOpacity>
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
        <StatusBar style={theme ? "dark" : "light"} />
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
  inputBtn: {
    height: 45,
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBtnTxt: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: "LatoRegular",
  },
});

export default HomeScreen;
