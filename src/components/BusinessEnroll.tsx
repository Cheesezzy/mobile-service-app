import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useEffect, useRef } from "react";
import colors from "../config/colors";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Paginator from "./Paginator";
import { useNavigation } from "@react-navigation/native";

const FirstSlide = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: offset.value,
    };
  });

  useEffect(() => {
    setTimeout(() => {
      offset.value = withTiming(1, {
        duration: 1000,
        easing: Easing.in(Easing.exp),
      });
    }, 1000);
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.choice, animatedStyles]}>
        Here at Rete, we are a family that scratches each other's backs; we have
        roles and perform as a unit. So, What would you bring to the network?
      </Animated.Text>

      <TouchableOpacity>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Service Provider</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.choiceBtn}>
        <Text style={styles.choiceBtnTxt}>Service Consumer</Text>
      </View>
    </View>
  );
};

const Slide = ({ item }: any) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />

      {item.title && <Text style={styles.title}>{item.title}</Text>}
      {item.desc && <Text style={styles.desc}>{item.desc}</Text>}

      {item.btnOne && item.btnOne}
      {item.btnTwo && item.btnTwo}
      {item.input && item.input}
      {item.doneBtn && item.doneBtn}
      {item.welcomeText && item.welcomeText}
      {item.beginBtn && (
        // @ts-ignore
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.choiceBtn}>
            <Text style={styles.choiceBtnTxt}>Begin your journey!</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const BusinessEnroll = ({ navigation }: any) => {
  const [activeSlide, setActiveSlide] = useState("first");
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
      <View>
        <Animated.FlatList
          data={images}
          renderItem={({ item }) => (
            <Slide item={item} scrollX={scrollX} navigation={navigation} />
          )}
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
    </View>
  );
};

export default BusinessEnroll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
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
});

const images = [
  {
    id: 1,
    title: "What will be your role?",
    desc: "Here at Rete, we are a family that scratches each other's backs; we have roles and perform as a unit. So, What would you bring to the network?",
    image: require("../../assets/businessEnroll/role.png"),
    btnOne: (
      <TouchableOpacity>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Service Provider</Text>
        </View>
      </TouchableOpacity>
    ),
    btnTwo: (
      <TouchableOpacity>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Service Consumer</Text>
        </View>
      </TouchableOpacity>
    ),
  },
  {
    id: 2,
    title: "What will you call your little space?",
    desc: "Choose a cool, descriptive name for your business; let it come from your heart",
    image: require("../../assets/businessEnroll/space.png"),
    input: (
      <TextInput
        style={styles.inputBox}
        placeholder="Choose something descriptive"
      />
    ),
    doneBtn: (
      <TouchableOpacity>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Done</Text>
        </View>
      </TouchableOpacity>
    ),
  },
  {
    id: 3,
    image: require("../../assets/businessEnroll/welcome.png"),
    welcomeText: (
      <Text
        style={{
          fontFamily: "LatoRegular",
          fontSize: 13,
          color: colors.primary,
          paddingHorizontal: 10,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        Welcome to the Rete community! We're thrilled to have you join us. We
        can't wait to see what you have to offer. Let's make this a fun and
        engaging experience for everyone.
      </Text>
    ),
    beginBtn: true,
  },
];
