import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import colors from "../config/colors";
import Paginator from "./Paginator";
import Animated from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  updateBizInformedStat,
  updateBusinessName,
  updateRating,
} from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

const Slide = ({ item, scrollX, navigation }: any) => {
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const userbizInformedRef = doc(db, "users", user?.uid!);

  const [bizData] = useDocumentData(userbizInformedRef);

  const handleUpdateBizInformed = () => {
    setLoading(true);
    updateRating(user?.uid, 0);
    updateBizInformedStat(user?.uid);
  };

  const handleNavigation = () => {
    if (bizData?.bizInformed) navigation.navigate("Home");
  };

  useEffect(() => {
    handleNavigation();
  }, [bizData?.bizInformed]);

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

      {
        // @ts-ignore
        <TouchableOpacity onPress={() => navigation.navigate("GoogleSearch")}>
          {item.inputSearch && item.inputSearch}
        </TouchableOpacity>
      }

      {item.doneBtn && item.doneBtn}
      {item.welcomeText && item.welcomeText}
      {item.beginBtn && (
        // @ts-ignore
        <TouchableOpacity onPress={handleUpdateBizInformed} disabled={loading}>
          <View style={styles.choiceBtn}>
            <Text style={styles.choiceBtnTxt}>
              {loading === true ? (
                <ActivityIndicator color={colors.secondary} size="small" />
              ) : (
                "Begin your journey!"
              )}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const SlidesContainer = ({ navigation, route }: any) => {
  const { role } = route.params;
  const [user] = useAuthState(auth);

  const [name, setName] = useState<any>(null);
  const [desc, setDesc] = useState<any>(null);

  const handleSubmit = () => {
    updateBusinessName(user?.uid, name);
    setName("");
  };

  const images =
    role === "Provider"
      ? [
          {
            id: 1,
            title: "What will you call your little space?",
            desc: "Choose a cool, descriptive name for your business; let it come from your heart",
            image: require("../../assets/businessEnroll/space.png"),
            input: (
              <TextInput
                onChangeText={(newName) => setName(newName)}
                style={styles.inputBox}
                defaultValue={name}
                placeholder="Choose something descriptive"
              />
            ),
            doneBtn: (
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.choiceBtn}>
                  <Text style={styles.choiceBtnTxt}>Done</Text>
                </View>
              </TouchableOpacity>
            ),
          },
          {
            id: 2,
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
                Welcome to the Rete community! We're thrilled to have you join
                us. We can't wait to see what you have to offer. Let's make this
                a fun and engaging experience for everyone.
              </Text>
            ),
            beginBtn: true,
          },
        ]
      : [
          {
            id: 1,
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
                Welcome to the Rete community! We're thrilled to have you join
                us. We can't wait to see what you have to offer. Let's make this
                a fun and engaging experience for everyone.
              </Text>
            ),
            beginBtn: true,
          },
        ];

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
        //await AsyncStorage.setItem("@viewedOnboarding", "true");
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
      {role === "Provider" ? (
        <Paginator data={images} scrollX={scrollX} />
      ) : null}
    </View>
  );
};

export default SlidesContainer;

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
