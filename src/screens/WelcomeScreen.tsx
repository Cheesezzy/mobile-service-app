import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";
import WelcomeItem from "../components/WelcomeItem";
import colors from "../config/colors";
import { useRef, useState } from "react";
import Paginator from "../components/Paginator";
import AsyncStorage from "@react-native-async-storage/async-storage";

const images = [
  {
    id: 1,
    title: "A home for you",
    desc: "For service providers: You have all the tools to set up your business, and customize it to your needs and preferences. For service consumers: You have all the tools you need to find that much needed service.",
    image: require("../../assets/welcome/building.png"),
  },
  {
    id: 2,
    title: "Meaningful connections",
    desc: "Rete aims to not just connect you with services or with clients, but also to make sure your connections are as personalized as possible; we will provide meaningful connections.",
    image: require("../../assets/welcome/find.png"),
  },
  {
    id: 3,
    title: "Here's your boost",
    desc: "Every now and then, we all need a boost; and that is exactly what we will provide; be it as a seeker of service or as a renderer; we will raise you to the top of the counter.",
    image: require("../../assets/welcome/ads.png"),
  },
];

const width = Dimensions.get("window").width;

const WelcomeScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);
  const slidesRef = useRef<any>(null);
  const scrollX = useRef<any>(new Animated.Value(0)).current;
  const onViewableItemsChanged = ({ viewableItems }: any) => {
    setIndex(viewableItems[0].index);
  };
  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  {
    /*const viewableItemsChanged = useRef<any>(({ viewableItems }: any) => {
    setIndex(viewableItems[0].index);
  });*/
  }

  const viewConfig = useRef<any>({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollTo = async () => {
    if (index < images.length - 1) {
      slidesRef.current.scrollToIndex({ index: index + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.FlatList
          data={images}
          renderItem={({ item }) => <WelcomeItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item: any) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          // @ts-ignore
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={images} scrollX={scrollX} />

      <View
        style={{
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <View style={styles.getStarted}>
            <Text style={styles.getStartedTxt}>Get Started</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <View style={styles.thirdParty}>
            <Text style={styles.thirdPartyTxt}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  getStarted: {
    width: "100%",
    height: 45,
    borderRadius: 5,
    padding: 14,
    backgroundColor: colors.primary,
  },
  getStartedTxt: {
    color: colors.secondary,
    fontFamily: "LatoRegular",
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
  },
  thirdParty: {
    width: "100%",
    height: 45,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    marginTop: 10,
  },
  thirdPartyTxt: {
    color: colors.primary,
    fontFamily: "LatoRegular",
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
  },
  imageContainer: {
    height: 350,
  },
});

export default WelcomeScreen;
