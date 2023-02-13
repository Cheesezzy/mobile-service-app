import React, { useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import Navigation from "../components/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { updateBizInformedStat } from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderTitle from "../components/HeaderTitle";
import { SvgXml } from "react-native-svg";
import {
  chef,
  creative,
  health,
  knowledge,
  professional,
  social,
} from "../../assets/svgs/svgs";
import { collection, doc } from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import SetLocationPopup from "../components/SetLocationPopup";
import { categories } from "../../provider/categoryData/categories";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { searchIcon } from "../../assets/icons/icons";

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
      <HeaderTitle title="Home" profileURL={user?.profilePic} user={user} />

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
            <View style={[styles.searchCon]}>
              <SvgXml
                style={{
                  marginRight: 10,
                }}
                xml={searchIcon()}
                width="14"
                height="14"
              />
              <Text
                style={{
                  fontFamily: "PrimaryRegular",
                  color: colors.greyMain,
                }}
              >
                Search for services
              </Text>
            </View>

            <View style={styles.banner}>
              <ImageBackground
                source={require("../../assets/banner.png")}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 15,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
              <TouchableOpacity style={styles.bannerBtn}>
                <Text style={styles.bannerTxt}>Book Now</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.titleCon}>
              <Text style={styles.title}>Categories</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Categories")}
              >
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.categories}>
              <TouchableOpacity
                style={[
                  styles.category,
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
                  styles.category,
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

              <TouchableOpacity
                style={[
                  styles.category,
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
                <SvgXml xml={health()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Healthcare
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.category,
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
                <SvgXml xml={social()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Social
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.category,
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
                <SvgXml xml={social()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Social
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.category,
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
                <SvgXml xml={social()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Social
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.titleCon}>
              <Text style={styles.title}>Popular Services</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Categories")}
              >
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.categories}>
              <TouchableOpacity
                style={[
                  styles.subCategory,
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
                <Image
                  style={styles.image}
                  source={require("../.././assets/svgs/chef.png")}
                  resizeMode="contain"
                />
                <SvgXml xml={chef()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Chef
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.subCategory,
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
                  Tailor
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.subCategory,
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
                <SvgXml xml={health()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Mechanic
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.subCategory,
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
                <SvgXml xml={social()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Electrician
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.subCategory,
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
                <SvgXml xml={social()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Cleaner
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.subCategory,
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
                <SvgXml xml={chef()} width="60%" height="60%" />
                <Text
                  style={[
                    styles.bigTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
                  Plumber
                </Text>
              </TouchableOpacity>
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
  image: {
    height: "30%",
    width: "30%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  searchCon: {
    flexDirection: "row",
    height: 45,
    width: "90%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.greyLight,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 8,
  },
  titleCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 10,
  },
  viewAll: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: "#FD922E",
    textDecorationLine: "underline",
  },
  title: {
    margin: 5,
    fontFamily: "PrimarySemiBold",
    fontSize: 20,
    lineHeight: 28,
  },
  categories: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 5,
  },
  category: {
    height: 90,
    width: 90,
    margin: 4,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  subCategory: {
    height: 90,
    width: 90,
    margin: 4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  bigTxt: {
    fontSize: 12,
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
    fontFamily: "PrimaryRegular",
    textAlign: "center",
    marginTop: 2,
  },
  banner: {
    flex: 1,
    height: 160,
    margin: 4,
    marginTop: 20,
    marginHorizontal: 16,
  },
  bannerBtn: {
    position: "absolute",
    bottom: 50,
    padding: 8,
    paddingHorizontal: 18,
    marginLeft: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  bannerTxt: {
    fontSize: 9,
    fontFamily: "PrimaryRegular",
    color: colors.secondary,
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
