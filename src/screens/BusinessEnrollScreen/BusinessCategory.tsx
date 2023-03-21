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
import React, { useEffect, useState } from "react";
import colors from "../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import { category } from "../../../utils/businessCategory";
import BusinessCategoryList from "../../components/businessEnroll/BusinessCategoryList";
import { updateCategory } from "../../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

const BusinessCategory = ({ navigation }: any) => {
  const [User] = useAuthState(auth);
  const userRef = User && doc(db, "users", User?.uid);
  const [user] = useDocumentData(userRef);

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

  const handleNavigation = () => {
    businessData.map((item) => {
      if (item.isSelected) {
        updateCategory(user?.bizId, item.title);
        navigation.navigate("BusinessLocation");
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Pick business category.</Text>
        <Text style={styles.headerDesc}>
          Pick the category that best suits your business.
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

        <TouchableOpacity onPress={handleNavigation}>
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
    fontFamily: "PrimarySemiBold",
    fontSize: 24,
  },
  headerDesc: {
    marginTop: 4,
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    lineHeight: 20,
    marginBottom: 8,
  },

  btnText: {
    fontFamily: "PrimaryRegular",
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
    marginBottom: 80,
  },
});
