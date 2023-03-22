import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";
import WelcomeItem from "./WelcomeItem";
import colors from "../../config/colors";
import { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Paginator from "./Paginator";
import { seenOnboarding } from "../../../provider/onBoardingSlice";
import { useDispatch, useSelector } from "react-redux";
import { handleAllUsers } from "../../../provider/allUsersSlice";

const slides = [
  {
    id: 1,
    title: "Browse available service providers in the area.",
    desc: "Rete makes it easy for you to look for any type of service provider, all you need to do is search.",
    image: require("../../.././assets/welcome/search.png"),
  },
  {
    id: 2,
    title: "Communicate with clients & service providers.",
    desc: "You can use our in-app messaging system to communicate directly with the service provider & client.",
    image: require("../../.././assets/welcome/communicate.png"),
  },
  {
    id: 3,
    title: "Pay securely within the app.",
    desc: "We use advanced security measures to protect your payment information and ensure that all transactions are processed securely.",
    image: require("../../.././assets/welcome/security.png"),
  },
];

const width = Dimensions.get("window").width;

const WelcomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const onboard = selector.payload.onboarding.value;

  const [currSlideIndex, setCurrSlideIndex] = useState(0);
  const slidesRef = useRef<any>(null);
  const scrollX = useRef<any>(new Animated.Value(0)).current;

  const scrollTo = () => {
    const nextSlideIndex = currSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      slidesRef?.current?.scrollToOffset({ offset });
      setCurrSlideIndex(nextSlideIndex);
    }
  };

  const scrollToEnd = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    slidesRef?.current?.scrollToOffset({ offset });
    setCurrSlideIndex(lastSlideIndex);
  };

  const updateCurrSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrSlideIndex(currentIndex);
  };

  const handleNavigation = () => {
    if (!onboard) dispatch(seenOnboarding());
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FlatList
          onMomentumScrollEnd={updateCurrSlideIndex}
          data={slides}
          renderItem={({ item }) => <WelcomeItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item: any) => item.id}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} currIndex={currSlideIndex} />

      {currSlideIndex === slides.length - 1 ? (
        <View style={styles.btnsCon}>
          <TouchableOpacity style={styles.btn} onPress={handleNavigation}>
            <Text style={styles.btnTxt}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.btnsCon}>
          <TouchableOpacity style={styles.skipBtn} onPress={scrollToEnd}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={scrollTo}>
            <Text style={styles.btnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    paddingTop: 25,
  },
  btnsCon: {
    width: "100%",
    padding: 20,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  skipTxt: {
    color: colors.secondary,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    justifyContent: "center",
    textAlign: "center",
  },
  skipBtn: {
    flex: 1,
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.secondary,
    margin: 5,
  },
  btn: {
    flex: 1,
    paddingHorizontal: 46,
    paddingVertical: 11,
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 5,
  },
  btnTxt: {
    color: colors.secondary,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    justifyContent: "center",
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
  },
});

export default WelcomeScreen;
