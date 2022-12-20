import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import { backIcon, locationIcon, profileIcon } from "../../assets/icons/icons";
import { Avatar } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfileScreen = ({ navigation, route }: any) => {
  const { business } = route.params;

  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", business ? business?.userId : User?.uid);
  const [user] = useDocumentData(userRef);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={styles.flexHeader}>
          <TouchableOpacity style={styles.goBack}>
            <SvgXml
              xml={backIcon()}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>

          <View>
            <Avatar
              size={90}
              rounded
              source={{ uri: "https://picsum.photos/200" }}
              containerStyle={styles.avatar}
            />
            <Text style={styles.profileName}>
              {business ? business?.name : user?.name}
            </Text>
            {business && business.userId !== User?.uid ? (
              <View style={styles.choiceBtnCon}>
                <TouchableOpacity
                  style={[styles.choiceBtn, { marginRight: 10 }]}
                  onPress={() =>
                    navigation.navigate("NegoDisplay", {
                      personId: business.userId,
                      name: user?.name,
                    })
                  }
                >
                  <Text style={styles.choiceBtnTxt}>Negotiate</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.choiceBtn}
                  onPress={() =>
                    navigation.navigate("Transfer", {
                      business: business,
                    })
                  }
                >
                  <Text style={styles.choiceBtnTxt}>Hire</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>

        {business && business.userId !== User?.uid ? (
          <>
            <View style={styles.businessInfoCon}>
              <Text style={styles.businessInfoConTxt}>
                Business Information
              </Text>

              <View style={styles.bio}>
                <Text style={styles.bioTxt}>
                  {/*Rete Technologies is a fast-growing online platform that connects
              people looking for services with service providers. Our platform
              uses the searcher's location to suggest service providers who are
              close to them, making it easy for people to find the services they
              need quickly and efficiently. Our platform is similar to Fiverr,
              but with a greater focus on hard skills such as painting and
  barbering.*/}

                  {business && business?.desc}
                </Text>
              </View>
              <View style={styles.about}>
                <View style={styles.aboutItem}>
                  <View style={styles.aboutItemIcon}>
                    <SvgXml
                      xml={profileIcon(colors.primary)}
                      width="22"
                      height="22"
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                  <View>
                    <Text style={styles.aboutInfoLabel}>Manager</Text>
                    <Text style={styles.aboutInfoVal}>{user?.name}</Text>
                  </View>
                </View>

                <View style={styles.aboutItem}>
                  <View style={styles.aboutItemIcon}>
                    <SvgXml
                      xml={locationIcon(colors.primary)}
                      width="22"
                      height="22"
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                  <View>
                    <Text style={styles.aboutInfoLabel}>Location</Text>
                    <Text style={styles.aboutInfoVal}>Nigeria</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.galleryCon}>
              <Text style={styles.galleryConTxt}>Gallery</Text>

              <View style={styles.gallery}>
                <View style={styles.galleryImg}></View>
                <View style={styles.galleryImg}></View>
                <View style={styles.galleryImg}></View>
                <View style={styles.galleryImg}></View>
              </View>
            </View>

            <View style={styles.reviewsCon}>
              <Text style={styles.reviewsConTxt}>Reviews</Text>

              <View style={styles.reviews}></View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.businessInfoCon}>
              <Text style={styles.businessInfoConTxt}>
                Business Information
              </Text>

              <View style={styles.bio}>
                <Text style={styles.bioTxt}>
                  {/*Rete Technologies is a fast-growing online platform that connects
          people looking for services with service providers. Our platform
          uses the searcher's location to suggest service providers who are
          close to them, making it easy for people to find the services they
          need quickly and efficiently. Our platform is similar to Fiverr,
          but with a greater focus on hard skills such as painting and
barbering.*/}

                  {business && business?.desc}
                </Text>
              </View>
              <View style={styles.about}>
                <View style={styles.aboutItem}>
                  <View style={styles.aboutItemIcon}>
                    <SvgXml
                      xml={locationIcon(colors.primary)}
                      width="22"
                      height="22"
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                  <View>
                    <Text style={styles.aboutInfoLabel}>Location</Text>
                    <Text style={styles.aboutInfoVal}>Nigeria</Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}

        <View
          style={{
            height: 100,
            width: "100%",
            backgroundColor: colors.secondary,
          }}
        />
      </ScrollView>
      <StatusBar style="auto" backgroundColor={colors.secondary} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondarySmoke,
  },
  body: {
    flex: 1,
  },
  flexHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    padding: 15,
    paddingTop: 40,
  },
  goBack: {
    position: "absolute",
    left: 15,
  },
  avatar: {
    alignSelf: "center",
  },
  profileName: {
    fontFamily: "Lato",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  choiceBtnCon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  choiceBtn: {
    width: 70,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  choiceBtnTxt: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: "LatoRegular",
  },
  businessInfoCon: {
    backgroundColor: colors.secondary,
    paddingTop: 10,
    padding: 15,
    marginTop: 10,
  },
  businessInfoConTxt: {
    fontFamily: "Lato",
    fontSize: 16,
  },
  bio: {
    marginTop: 15,
  },
  bioTxt: {
    fontFamily: "LatoRegular",
  },
  about: {
    marginTop: 20,
  },
  aboutItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  aboutItemIcon: {
    marginRight: 12,
  },
  aboutInfoLabel: {
    fontFamily: "LatoRegular",
    fontSize: 11,
    color: colors.primary,
  },
  aboutInfoVal: {
    fontFamily: "Lato",
    marginTop: 5,
  },
  galleryCon: {
    backgroundColor: colors.secondary,
    padding: 15,
    marginTop: 10,
  },
  galleryConTxt: {
    fontFamily: "Lato",
    fontSize: 16,
  },
  gallery: {
    height: 95,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    overflow: "hidden",
  },
  galleryImg: {
    height: 80,
    width: 80,
    borderColor: "lightgrey",
    borderWidth: 1,
    margin: 5,
  },
  reviewsCon: {
    backgroundColor: colors.secondary,
    padding: 15,
    marginTop: 10,
  },
  reviewsConTxt: {
    fontFamily: "Lato",
    fontSize: 16,
  },
  reviews: {
    flexDirection: "row",
  },
});
