import { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./provider/store";
import "react-native-gesture-handler";
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function App() {
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
            <DrawerNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
