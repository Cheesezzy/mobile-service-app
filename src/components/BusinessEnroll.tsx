import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
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

const SecondSlide = () => {
  return (
    <View style={styles.second}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyDwzW1q7R5P65DD3lVDrvG5Q1gMAWFQFVo",
          language: "en",
        }}
        styles={{
          textInputContainer: {
            backgroundColor: "grey",
            borderWidth: 1,
            borderColor: colors.primary,
          },
          textInput: {
            height: 38,
            color: "#5d5d5d",
            fontSize: 16,
            borderWidth: 1,
            borderColor: colors.primary,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
            borderWidth: 1,
            borderColor: colors.primary,
          },
        }}
      />
      {/* <TouchableOpacity>
        <View style={styles.choiceBtn}>
          <Text style={styles.choiceBtnTxt}>Join the network</Text>
        </View>
      </TouchableOpacity>*/}
    </View>
  );
};

const ThirdSlide = () => {
  return (
    <View>
      <Text>Third</Text>
    </View>
  );
};

const BusinessEnroll = () => {
  const [activeSlide, setActiveSlide] = useState("first");

  return (
    <View style={styles.container}>
      <View>
        <SecondSlide />
      </View>
    </View>
  );
};

export default BusinessEnroll;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
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
});
