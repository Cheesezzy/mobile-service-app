import { useCallback } from "react";
import "react-native-gesture-handler";
import DrawerNavigator from "./src/navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}
