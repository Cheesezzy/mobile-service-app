import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { checkRole } from "../../api/customHooks/generalHooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

const Paginator = ({ data, scrollX, activePage, pages, User }: any) => {
  //const [user] = useAuthState(auth);
  //const userRef = doc(db, "users", user?.uid!);

  //const [User] = useDocumentData(userRef);

  const role = checkRole(User);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: colors.secondary,
      }}
    >
      {role
        ? pages.map((_: any, i: number) => {
            const dotStyle = useAnimatedStyle(() => {
              const isActive = activePage.value === i;
              console.log(activePage.value, "value");

              return {
                opacity: withTiming(isActive ? 1 : 0.3),
                width: withTiming(isActive ? 15 : 8, {
                  duration: 300,
                }),
              };
            });

            return (
              <Animated.View
                style={[styles.dot, dotStyle]}
                key={i.toString()}
              />
            );
          })
        : null}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 8,
  },
});
