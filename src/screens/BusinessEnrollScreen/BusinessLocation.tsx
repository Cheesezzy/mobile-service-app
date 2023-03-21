import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SvgXml } from "react-native-svg";
import { searchIcon, sendLocationIcon } from "../../../assets/icons/icons";
import colors from "../../config/colors";
import BusinessConfirmLocation from "../../components/businessEnroll/BusinessConfirmLocation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

const BusinessLocation = ({ navigation, route }: any) => {
  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", User?.uid!);
  const [user] = useDocumentData(userRef);
  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);
  const [business, loading] = useDocumentData(businessRef);

  const handleNavigation = () => {
    navigation.navigate("GoogleSearch", {
      locationType: "Business",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        {!business?.location && loading ? null : business?.location ? (
          <BusinessConfirmLocation
            navigation={navigation}
            location={business.location}
          />
        ) : (
          <>
            <Text style={styles.header}>Find business location.</Text>
            <Text style={styles.headerDesc}>
              Set the location for your business.
            </Text>

            <View style={styles.locationContainer}>
              <TouchableOpacity onPress={handleNavigation}>
                <View style={styles.innerItems}>
                  <View style={styles.icon}>
                    <SvgXml xml={sendLocationIcon()} width="13" height="17" />
                  </View>
                  <Text style={{ fontFamily: "PrimaryRegular" }}>
                    Set your location
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BusinessLocation;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 102,
    paddingHorizontal: 24,
  },
  header: {
    fontFamily: "PrimarySemiBold",
    fontSize: 24,
  },
  headerDesc: {
    marginTop: 4,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    lineHeight: 20,
  },

  inputContainer: {
    marginTop: 36,
  },

  input: {
    flex: 1,
    width: "100%",
    padding: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  locationContainer: {
    marginTop: 36,
  },

  innerItems: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.greyLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
});
