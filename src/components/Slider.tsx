import { ScrollView } from "react-native-gesture-handler";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import colors from "../config/colors";
import Paginator from "./Paginator";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import {
  updateBizInformedStat,
  updateBusinessDesc,
  updateBusinessName,
  updateCategory,
  updateRating,
} from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Page from "./Page";
import { pages } from "../../provider/pages/pages";
import { goNextIcon } from "../../assets/icons/icons";
import { SvgXml } from "react-native-svg";
import { checkRole } from "../../api/hooks/generalHooks";

const { width } = Dimensions.get("window");

const Slider = ({ navigation, route }: any) => {
  const [user] = useAuthState(auth);
  const userRef = doc(db, "users", user?.uid!);

  const { role } = route.params;

  const [User] = useDocumentData(userRef);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [btnActive, setBtnActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event: any) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / width);
  });

  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const onNextPress = useCallback(() => {
    if (activeIndex.value === 0) {
      checkRole(User) && updateBusinessName(User?.bizId, name);
      checkRole(User) && setName("");
      !checkRole(User) && updateBizInformedStat(user?.uid);
      !checkRole(User) && navigation.navigate("Home");
    }

    if (activeIndex.value === 1) {
      setDesc("");
      updateBusinessDesc(User?.bizId, desc);
    }

    if (activeIndex.value === 2) {
      setCategory("");
      updateCategory(User?.bizId, category);
    }

    if (activeIndex.value === 3) {
      setLoading(true);
      updateBizInformedStat(user?.uid);
      navigation.navigate("Home");
    }

    if (role === "Consumer") {
      setLoading(true);
      updateBizInformedStat(user?.uid);
      navigation.navigate("Home");
    }

    if (activeIndex.value === pages.length - 1) return;

    scrollRef?.current?.scrollTo({ x: width * (activeIndex.value + 1) });
  }, [activeIndex.value, name, desc]);

  const checkIndex = useCallback(() => {
    if (activeIndex.value === 0) return name.length < 1;
    else if (activeIndex.value === 1) return desc?.length < 1;
    else if (activeIndex.value === 2) return category?.length < 1;
    else return false;
  }, [activeIndex.value, name, desc, loading]);

  return (
    <>
      <Animated.ScrollView
        ref={scrollRef}
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        scrollEnabled={false}
      >
        {role === "Provider"
          ? pages.map((page, index) => {
              return (
                <Page
                  key={index}
                  index={index}
                  page={page}
                  translateX={translateX}
                  setName={setName}
                  setDesc={setDesc}
                  category={category}
                  setCategory={setCategory}
                />
              );
            })
          : pages
              .filter((page: any) => {
                return page.id === 4;
              })
              .map((page, index) => {
                return (
                  <Page
                    key={index}
                    index={index}
                    page={page}
                    translateX={translateX}
                    setName={setName}
                    setDesc={setDesc}
                    category={category}
                    setCategory={setCategory}
                  />
                );
              })}
      </Animated.ScrollView>
      <View
        style={{
          backgroundColor: colors.secondary,
          flexDirection: "row",
          justifyContent: role === "Provider" ? "space-between" : "flex-end",
          alignItems: "center",
          paddingBottom: 20,
          paddingHorizontal: 25,
        }}
      >
        {role === "Provider" ? (
          <Paginator activePage={activeIndex} pages={pages} User={User} />
        ) : null}
        <TouchableOpacity
          style={{
            opacity: role === "Provider" ? (checkIndex() ? 0.3 : 1) : 1,
          }}
          onPress={onNextPress}
          disabled={role === "Provider" ? checkIndex() : false}
        >
          <SvgXml xml={goNextIcon(colors.primary)} width="28" height="28" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  slideCon: {
    flex: 1,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  welcome: {
    fontSize: 22,
    fontFamily: "Lato",
    textAlign: "center",
    marginBottom: 60,
  },
  choice: {
    width: Dimensions.get("window").width * 0.8,
    fontSize: 14,
    fontFamily: "LatoRegular",
    marginBottom: 50,
    textAlign: "center",
    opacity: 0,
  },
  choiceBtn: {
    width: Dimensions.get("window").width * 0.8,
    alignSelf: "center",
    padding: 12,
    marginTop: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  choiceBtnTxt: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
  },
  second: {
    width: Dimensions.get("window").width * 0.8,
  },
  inputBox: {
    height: 45,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 50,
    fontFamily: "LatoRegular",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontFamily: "LatoRegular",
    fontWeight: "600",
    fontSize: 18,
    color: colors.primary,
  },
  desc: {
    fontFamily: "LatoRegular",
    fontSize: 12,
    marginVertical: 10,
    letterSpacing: 1,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  searchCon: {
    flexDirection: "row",
    width: "80%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  search: {
    width: "75%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    backgroundColor: colors.secondary,
    alignSelf: "center",
    marginLeft: 10,
  },
  resultItem: {
    flexDirection: "row",
    paddingVertical: 8,
    marginBottom: 10,
    borderBottomColor: colors.deeperSmoke,
    borderBottomWidth: 1,
  },
  resultTitle: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    marginBottom: 4,
  },
  resultAddr: {
    fontFamily: "LatoRegular",
    fontSize: 11,
    color: colors.lightGrey,
  },
});
