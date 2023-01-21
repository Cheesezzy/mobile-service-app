import { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./provider/store";
import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";
import AuthNavigator from "./src/navigation/AuthStack";
import {
  ActivityIndicator,
  ImageBackground,
  View,
  Text,
  Image,
} from "react-native";
import colors from "./src/config/colors";
import BusinessEnroll from "./src/components/BusinessEnroll";
import Geocoder from "react-native-geocoding";

export default function App() {
  Geocoder.init("AIzaSyATG5qhpd-R_W7Dv0oUMatTSbRru2EbYcI");
  const [user, loading] = useAuthState(auth);

  const [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato/Lato-Black.ttf"),
    LatoRegular: require("./assets/fonts/Lato/Lato-Regular.ttf"),
    LatoLight: require("./assets/fonts/Lato/Lato-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  {
    /* 
  const writeUserData = () => {
    const userRef = doc(db, "users", "alovelace");
    setDoc(userRef, {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
  */
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            {loading ? (
              <View
                style={{
                  backgroundColor: colors.secondary,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={require("./assets/splash.png")}
                  resizeMode="contain"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </View>
            ) : user ? (
              <StackNavigator />
            ) : (
              <AuthNavigator />
            )}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
