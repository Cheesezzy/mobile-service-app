import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import {
  businnessLocationIcon,
  sendLocationIcon,
} from "../../../assets/icons/icons";
import colors from "../../config/colors";
import BusinessConfirmLocation from "../../components/BusinessConfirmLocation";

const BusinessLocation = ({ navigation, route }: any) => {
  const [showLocationPopup, setLocationPopup] = useState(false);
  const [search, setSearch] = useState("");
  const enrollmentData = route.params.allData;
  const data = route.params.businessData;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        {showLocationPopup ? (
          <BusinessConfirmLocation
            navigation={navigation}
            search={search}
            enrollmentData={enrollmentData}
            data={data}
          />
        ) : (
          <>
            <Text style={styles.header}>Find business location.</Text>
            <Text style={styles.headerDesc}>
              set the location for your business.
            </Text>

            <View style={styles.inputContainer}>
              <View style={styles.searchBox}>
                <SvgXml xml={businnessLocationIcon()} width="13" height="17" />
                <TextInput
                  onChangeText={(enteredText) => setSearch(enteredText)}
                  style={styles.input}
                  placeholder="Oha specialist"
                />
              </View>
            </View>

            <View style={styles.locationContainer}>
              <TouchableOpacity onPress={() => setLocationPopup(true)}>
                <View style={styles.innerItems}>
                  <View style={styles.icon}>
                    <SvgXml xml={sendLocationIcon()} width="13" height="17" />
                  </View>
                  <Text>Use current location</Text>
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
    fontWeight: "600",
    fontSize: 24,
  },
  headerDesc: {
    marginTop: 4,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
  },

  inputContainer: {
    marginTop: 36,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(147, 187, 245, 0.24)",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 12,
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
