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
import { updateLocation, updateSearchLocation } from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";
import * as Location from "expo-location";

export const GoogleSearch = ({ route }: any) => {
  const [errMsg, setErrorMsg] = useState("");

  const { locationType } = route.params;
  const [user] = useAuthState(auth);
  const navigation = useNavigation();

  const userRef = doc(db, "users", user?.uid!);

  const [User] = useDocumentData(userRef);

  const [showBtn, setShowBtn] = useState(false);
  const [location, setLocation] = useState<any>(null);

  const usePresentLocation = () => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });

      if (locationType === "Business")
        updateLocation(
          User?.bizId,
          location.coords?.latitude,
          location.coords?.longitude
        );
      else if (locationType === "Search")
        updateLocation(
          user?.uid,
          location.coords?.latitude,
          location.coords?.longitude
        );
      navigation.goBack();
    })();
  };

  const handleSubmit = () => {
    if (location.lat && location.lng)
      if (locationType === "Business") {
        updateLocation(User?.bizId, location?.lat, location?.lng);
      } else if (locationType === "Search")
        updateSearchLocation(user?.uid, location?.lat, location?.lng);
    navigation.goBack();
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        { backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke },
      ]}
    >
      <Text style={styles.headerTxt}>Find location.</Text>
      <Text style={styles.headerSubTxt}>Set your {locationType} location</Text>
      <View
        style={[
          styles.searchCon,
          {
            backgroundColor: theme ? colors.secondary : colors.black,
          },
        ]}
      >
        <SvgXml
          xml={backIcon(theme ? colors.blackSmoke : colors.darkTxt)}
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
          xml={searchIcon(theme ? colors.blackSmoke : colors.darkTxt)}
          width="14"
          height="14"
        />
        <View
          style={[
            styles.search,
            {
              backgroundColor: theme ? colors.secondary : colors.black,
            },
          ]}
        >
          <GooglePlacesAutocomplete
            suppressDefaultStyles
            styles={{
              poweredContainer: {
                borderTopWidth: 0,
              },
              powered: {
                width: "50%",
              },
              textInput: {
                color: theme ? colors.black : colors.darkTxt,
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
                  <View style={styles.iconCon}>
                    <SvgXml
                      xml={locationIcon(colors.lightGrey)}
                      width="19"
                      height="19"
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.resultTitle,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      {title}
                    </Text>
                    <Text style={styles.resultAddr}>{address}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.choiceBtnWire,
          {
            marginTop: 80,
            position: "absolute",
            bottom: showBtn ? 90 : 30,
          },
        ]}
        onPress={usePresentLocation}
      >
        <Text style={styles.choiceBtnWireTxt}>Use your present location</Text>
      </TouchableOpacity>

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
  container: {
    flex: 1,
    paddingTop: 50,
    paddingVertical: 15,
  },
  headerTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 22,
    marginHorizontal: 20,
  },
  headerSubTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    marginHorizontal: 20,
    marginBottom: 20,
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
    fontFamily: "PrimaryRegular",
    textAlign: "center",
  },
  choiceBtnWire: {
    width: Dimensions.get("window").width * 0.8,
    alignSelf: "center",
    padding: 12,
    paddingVertical: 11,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 20,
  },
  choiceBtnWireTxt: {
    color: colors.primary,
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    textAlign: "center",
  },
  inputBox: {
    height: 45,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 50,
    fontFamily: "PrimaryRegular",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontFamily: "PrimaryRegular",
    fontWeight: "600",
    fontSize: 18,
    color: colors.primary,
  },
  desc: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    marginVertical: 10,
    letterSpacing: 1,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  searchCon: {
    flexDirection: "row",
    width: "90%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.black,
    borderRadius: 20,
    padding: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
  search: {
    height: "100%",
    width: "75%",
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: colors.black,
    alignSelf: "center",
    marginLeft: 10,
  },
  iconCon: {
    width: 34,
    height: 34,
    padding: 10,
    marginRight: 15,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.greyLight,
  },
  resultItem: {
    flexDirection: "row",
    paddingVertical: 8,
    marginBottom: 10,
    borderBottomColor: colors.deeperSmoke,
    borderBottomWidth: 1,
  },
  resultTitle: {
    fontFamily: "PrimaryRegular",
    fontSize: 14,
    marginBottom: 4,
  },
  resultAddr: {
    fontFamily: "PrimaryRegular",
    fontSize: 11,
    color: colors.lightGrey,
  },
});
