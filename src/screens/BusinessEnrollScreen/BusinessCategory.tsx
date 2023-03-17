import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import { category } from "../../../utils/businessCategory";
import BusinessCategoryList from "../../components/businessEnroll/BusinessCategoryList";

const BusinessCategory = ({ navigation, route }: any) => {
  const [businessData, setBusinessData] = useState(category);

  const handleCheckbox = (id: number) => {
    setBusinessData((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, isSelected: true }
          : { ...item, isSelected: false }
      )
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Pick business category.</Text>
        <Text style={styles.headerDesc}>
          pick the category that best suits your business.
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ height: "100%", flex: 1 }}
          scrollEnabled={true}
          data={businessData}
          renderItem={({ item, index }) => (
            <BusinessCategoryList
              item={item}
              navigation={navigation}
              handleCheckbox={handleCheckbox}
            />
          )}
          keyExtractor={({ id }) => id.toString()}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("BusinessLocation")}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Proceed</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default BusinessCategory;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    marginTop: 100,
    flex: 1,
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
    marginBottom: 8,
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 56,
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 8,
    marginBottom: 80,
  },
});
