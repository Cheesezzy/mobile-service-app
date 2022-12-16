import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  Button,
  KeyboardAvoidingView,
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
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Paginator from "./Paginator";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { backIcon, locationIcon, searchIcon } from "../../assets/icons/icons";
import { updateLocation } from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";

export const GoogleSearch = () => {
  const [user] = useAuthState(auth);
  const navigation = useNavigation();

  const [showBtn, setShowBtn] = useState(false);
  const [location, setLocation] = useState<any>(null);

  const handleSubmit = () => {
    if (location.lat && location.lng)
      updateLocation(user?.uid, location?.lat, location?.lng);
    console.log(location);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        paddingTop: 50,
        paddingVertical: 15,
      }}
    >
      <View style={styles.searchCon}>
        <SvgXml
          xml={backIcon()}
          width="16"
          height="16"
          // @ts-ignore
          onPress={() => navigation.goBack()}
          style={{
            position: "relative",
            top: 6,
            marginRight: 10,
          }}
        />
        <SvgXml
          style={{
            position: "relative",
            top: 7,
          }}
          xml={searchIcon()}
          width="14"
          height="14"
        />
        <View style={styles.search}>
          <GooglePlacesAutocomplete
            suppressDefaultStyles
            styles={{
              poweredContainer: {
                borderTopWidth: 0,
              },
              powered: {
                width: "50%",
              },
            }}
            placeholder="Search destination"
            listViewDisplayed="auto"
            minLength={2}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setLocation(details?.geometry.location);
              setShowBtn(true);
            }}
            fetchDetails
            query={{
              key: "AIzaSyATG5qhpd-R_W7Dv0oUMatTSbRru2EbYcI",
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
            disableScroll={false}
            renderRow={(rowData) => {
              setShowBtn(false);
              const title = rowData.structured_formatting.main_text;
              const address = rowData.structured_formatting.secondary_text;
              return (
                <View style={styles.resultItem}>
                  <View
                    style={{
                      marginRight: 8,
                      justifyContent: "center",
                    }}
                  >
                    <SvgXml
                      xml={locationIcon(colors.lightGrey)}
                      width="15"
                      height="15"
                    />
                  </View>
                  <View>
                    <Text style={styles.resultTitle}>{title}</Text>
                    <Text style={styles.resultAddr}>{address}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>

      {showBtn ? (
        <TouchableOpacity
          style={[
            styles.choiceBtn,
            { marginTop: 80, position: "absolute", bottom: 30 },
          ]}
          onPress={handleSubmit}
        >
          <Text style={styles.choiceBtnTxt}>Done</Text>
        </TouchableOpacity>
      ) : null}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
