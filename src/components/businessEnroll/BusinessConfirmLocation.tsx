import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../config/colors";
import Geocoder from "react-native-geocoding";

const BusinessConfirmLocation = ({ navigation, location }: any) => {
  const [locationName, setLocationName] = useState<any>(null);

  useEffect(() => {
    if (location) {
      Geocoder.from(location?.lat, location?.lng)
        .then((json) => {
          var city = json.results[0]?.address_components?.find((component) =>
            component?.types?.includes("locality")
          )?.long_name;
          var country = json.results[0]?.address_components?.find((component) =>
            component?.types?.includes("country")
          )?.long_name;
          setLocationName(`${city}, ${country}`);
        })
        .catch((error) => console.warn(error));
    }
  }, []);

  return (
    <View>
      <Text style={styles.header}>Confirm location</Text>
      <Text style={styles.headerDesc}>
        If this is the correct location, please click 'Confirm' to add it to
        your details.
      </Text>

      <Text style={styles.location}>{locationName}</Text>

      <View>
        <TouchableOpacity
          //onPress={() => navigation.navigate("KycVerification")}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BusinessConfirmLocation;

const styles = StyleSheet.create({
  header: {
    fontFamily: "PrimaryRegular",
    fontSize: 24,
    textAlign: "center",
  },

  headerDesc: {
    marginTop: 6,
    fontFamily: "PrimaryRegular",
    fontSize: 15,
    textAlign: "center",
  },

  location: {
    fontFamily: "PrimarySemiBold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 32,
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    width: "100%",
    paddingVertical: 14,
    marginTop: 56,
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 8,
  },
});
