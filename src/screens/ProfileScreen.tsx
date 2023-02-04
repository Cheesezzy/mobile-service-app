import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../config/colors";
import { SvgXml } from "react-native-svg";
import {
  backIcon,
  levelIcon,
  locationIcon,
  profileIcon,
} from "../../assets/icons/icons";
import { Avatar } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { collection, doc } from "firebase/firestore";
import { auth, db, store } from "../../firebaseConfig";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { createNotification, updateGallery } from "../../api/database";
import { checkRole, checkUser } from "../../api/customHooks/generalHooks";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import * as Location from "expo-location";
import Geocoder from "react-native-geocoding";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addImage } from "../../assets/svgs/svgs";

const ProfileScreen = ({ navigation, route }: any) => {
  const { business } = route.params;

  const [User] = useAuthState(auth);
  const businessUserRef =
    business && business.userId && doc(db, "users", business.userId);
  const userRef = doc(db, "users", User?.uid!);
  const [user] = useDocumentData(userRef);
  const [businessUser] = useDocumentData(businessUserRef);

  const imageOneRef =
    businessUser?.bizId &&
    doc(db, "businesses", businessUser.bizId, "gallery", "imgOne");
  const imageTwoRef =
    businessUser?.bizId &&
    doc(db, "businesses", businessUser.bizId, "gallery", "imgTwo");
  const imageThreeRef =
    businessUser?.bizId &&
    doc(db, "businesses", businessUser.bizId, "gallery", "imgThree");
  const imageFourRef =
    businessUser?.bizId &&
    doc(db, "businesses", businessUser.bizId, "gallery", "imgFour");

  const [imageOne] = useDocumentData(imageOneRef);
  const [imageTwo] = useDocumentData(imageTwoRef);
  const [imageThree] = useDocumentData(imageThreeRef);
  const [imageFour] = useDocumentData(imageFourRef);

  const [userLocation, setUserLocation] = useState<any>(null);
  const [errMsg, setErrorMsg] = useState<any>(null);
  const [locationName, setLocationName] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const [imageNum, setImageNum] = useState<any>(null);

  useEffect(() => {
    if (!business) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          alert(errMsg);
          return;
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.BestForNavigation,
        });
        setUserLocation(location);
      })();
    }
  }, []);

  useEffect(() => {
    if (business) {
      Geocoder.from(business?.location?.lat, business?.location?.lng)
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
    } else {
      userLocation &&
        Geocoder.from(
          userLocation.coords?.latitude,
          userLocation.coords?.longitude
        )
          .then((json) => {
            var city = json.results[0]?.address_components?.find((component) =>
              component?.types?.includes("locality")
            )?.long_name;
            var country = json.results[0]?.address_components?.find(
              (component) => component?.types?.includes("country")
            )?.long_name;
            setLocationName(`${city}, ${country}`);
          })
          .catch((error) => console.warn(error));
    }
  }, [userLocation]);

  useEffect(() => {
    if (user && business && User?.uid !== business?.userId) {
      // currentUserId is the id of the current user
      createNotification(
        business?.userId,
        user?.name,
        `viewed your profile`,
        User?.uid
      );
    }
  }, [user, business?.uid]);

  const handleAddGalleryImg = async (imgNumber: string) => {
    if (image && imgNumber && user && user?.bizId) {
      const fileRef = ref(
        store,
        `businessGalleryPics/${user?.bizId}/${imgNumber}.jpg`
      );

      const response = await fetch(image);
      const blob = await response.blob();

      uploadBytesResumable(fileRef, blob)
        .then((snapshot: any) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          getDownloadURL(snapshot.ref).then((url: any) => {
            updateGallery(user.bizId, url, imgNumber);
          });
        })
        .catch((error: any) => {
          console.error(error);
        });

      setImage(null);
      setImageNum(null);
    }
  };

  const pickImage = async (imgNumber: string) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      quality: 1,
    });

    if (result && !result?.cancelled) {
      setImageNum(imgNumber);
      setImage(result?.uri);
    }
  };

  useEffect(() => {
    if (image && imageNum) {
      handleAddGalleryImg(imageNum);
    }
  }, [image, imageNum]);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme ? colors.secondary : colors.black,
        },
      ]}
    >
      <ScrollView style={styles.body}>
        <View
          style={[
            styles.flexHeader,
            {
              backgroundColor: theme ? colors.secondary : colors.blackSmoke,
            },
          ]}
        >
          <TouchableOpacity style={styles.goBack}>
            <SvgXml
              xml={backIcon(theme ? colors.black : colors.darkTxt)}
              width="22"
              height="22"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>

          <View>
            <Avatar
              size={90}
              rounded
              source={
                businessUser?.profilePic
                  ? {
                      uri: businessUser?.profilePic,
                    }
                  : require("../.././assets/blankProfilePic.png")
              }
              containerStyle={styles.avatar}
            />
            <Text
              style={[
                styles.profileName,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {business ? business?.name : user?.name}
            </Text>

            {checkRole(user) ? (
              business && business.userId !== User?.uid ? (
                <View style={styles.choiceBtnCon}>
                  <TouchableOpacity
                    style={[styles.choiceBtnWire, { marginRight: 10 }]}
                    onPress={() =>
                      navigation.navigate("NegoDisplay", {
                        personId: business.userId,
                        name: businessUser?.name,
                      })
                    }
                  >
                    <Text
                      style={[styles.choiceBtnTxt, { color: colors.primary }]}
                    >
                      Negotiate
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.choiceBtn}
                    onPress={() =>
                      navigation.navigate("Transfer", {
                        business: business,
                        businessUser,
                      })
                    }
                  >
                    <Text style={styles.choiceBtnTxt}>Hire</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.choiceBtnWire}
                  onPress={() =>
                    navigation.navigate("AccountSettings", {
                      user,
                    })
                  }
                >
                  <Text
                    style={[styles.choiceBtnTxt, { color: colors.primary }]}
                  >
                    Edit profile
                  </Text>
                </TouchableOpacity>
              )
            ) : (
              <TouchableOpacity
                style={styles.choiceBtnWire}
                onPress={() =>
                  navigation.navigate("AccountSettings", {
                    user,
                  })
                }
              >
                <Text style={[styles.choiceBtnTxt, { color: colors.primary }]}>
                  Edit profile
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {business ? (
          <>
            <View
              style={[
                styles.businessInfoCon,
                {
                  backgroundColor: theme ? colors.secondary : colors.blackSmoke,
                },
              ]}
            >
              <Text
                style={[
                  styles.businessInfoConTxt,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Business Information
              </Text>

              <View style={styles.bio}>
                <Text
                  style={[
                    styles.bioTxt,
                    {
                      color: theme ? colors.black : colors.darkTxt,
                    },
                  ]}
                >
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
                    <Text
                      style={[
                        styles.aboutInfoVal,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      {businessUser?.name}
                    </Text>
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
                    <Text
                      style={[
                        styles.aboutInfoVal,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      {locationName ? locationName : null}
                    </Text>
                  </View>
                </View>

                <View style={styles.aboutItem}>
                  <View style={styles.aboutItemIcon}>
                    <SvgXml
                      xml={levelIcon()}
                      width="22"
                      height="22"
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                  <View>
                    <Text style={styles.aboutInfoLabel}>Level</Text>
                    <Text
                      style={[
                        styles.aboutInfoVal,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      {business?.level}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[
                styles.galleryCon,
                {
                  backgroundColor: theme ? colors.secondary : colors.blackSmoke,
                },
              ]}
            >
              <Text
                style={[
                  styles.galleryConTxt,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Gallery
              </Text>

              <ScrollView
                style={styles.gallery}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {business && business.userId === User?.uid ? (
                  <>
                    <TouchableOpacity
                      onPress={() => pickImage("imgOne")}
                      style={styles.galleryImgCon}
                    >
                      {imageOne && imageOne ? (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageOne.url,
                            }}
                            resizeMode="cover"
                          />
                        </>
                      ) : (
                        <SvgXml
                          xml={addImage(
                            theme ? colors.black : colors.darkTxt,
                            theme ? "#F0F0F0" : colors.black
                          )}
                          width={"100%"}
                          height={"100%"}
                        />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => pickImage("imgTwo")}
                      style={styles.galleryImgCon}
                    >
                      {imageTwo && imageTwo ? (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageTwo.url,
                            }}
                            resizeMode="cover"
                          />
                        </>
                      ) : (
                        <SvgXml
                          xml={addImage(
                            theme ? colors.black : colors.darkTxt,
                            theme ? "#F0F0F0" : colors.black
                          )}
                          width={"100%"}
                          height={"100%"}
                        />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => pickImage("imgThree")}
                      style={styles.galleryImgCon}
                    >
                      {imageThree && imageThree ? (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageThree.url,
                            }}
                            resizeMode="cover"
                          />
                        </>
                      ) : (
                        <SvgXml
                          xml={addImage(
                            theme ? colors.black : colors.darkTxt,
                            theme ? "#F0F0F0" : colors.black
                          )}
                          width={"100%"}
                          height={"100%"}
                        />
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => pickImage("imgFour")}
                      style={[
                        styles.galleryImgCon,
                        {
                          marginRight: 10,
                        },
                      ]}
                    >
                      {imageFour && imageFour ? (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageFour.url,
                            }}
                            resizeMode="contain"
                          />
                        </>
                      ) : (
                        <SvgXml
                          xml={addImage(
                            theme ? colors.black : colors.darkTxt,
                            theme ? "#F0F0F0" : colors.black
                          )}
                          width={"100%"}
                          height={"100%"}
                        />
                      )}
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      onPress={
                        imageOne && imageOne
                          ? () =>
                              navigation.navigate("ImageScreen", {
                                image: imageOne.url,
                              })
                          : () => null
                      }
                      style={[
                        styles.galleryImgCon,
                        { backgroundColor: theme ? "#F0F0F0" : colors.black },
                      ]}
                    >
                      {imageOne && imageOne && (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageOne.url,
                            }}
                            resizeMode="cover"
                          />
                        </>
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={
                        imageTwo && imageTwo
                          ? () =>
                              navigation.navigate("ImageScreen", {
                                image: imageTwo.url,
                              })
                          : () => null
                      }
                      style={[
                        styles.galleryImgCon,
                        { backgroundColor: theme ? "#F0F0F0" : colors.black },
                      ]}
                    >
                      {imageTwo && imageTwo && (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageTwo.url,
                            }}
                            resizeMode="cover"
                          />
                        </>
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={
                        imageThree && imageThree
                          ? () =>
                              navigation.navigate("ImageScreen", {
                                image: imageThree.url,
                              })
                          : () => null
                      }
                      style={[
                        styles.galleryImgCon,
                        { backgroundColor: theme ? "#F0F0F0" : colors.black },
                      ]}
                    >
                      {imageThree && imageThree && (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageThree.url,
                            }}
                            resizeMode="cover"
                          />
                        </>
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={
                        imageFour && imageFour
                          ? () =>
                              navigation.navigate("ImageScreen", {
                                image: imageFour.url,
                              })
                          : () => null
                      }
                      style={[
                        styles.galleryImgCon,
                        {
                          backgroundColor: theme ? "#F0F0F0" : colors.black,
                          marginRight: 10,
                        },
                      ]}
                    >
                      {imageFour && imageFour && (
                        <>
                          <Image
                            style={styles.galleryImg}
                            source={{
                              uri: imageFour.url,
                            }}
                            resizeMode="contain"
                          />
                        </>
                      )}
                    </TouchableOpacity>
                  </>
                )}
              </ScrollView>
            </View>

            <View
              style={[
                styles.reviewsCon,
                {
                  backgroundColor: theme ? colors.secondary : colors.blackSmoke,
                },
              ]}
            >
              <Text
                style={[
                  styles.reviewsConTxt,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Reviews
              </Text>

              <View style={styles.reviews}></View>
            </View>
          </>
        ) : (
          <>
            <View
              style={[
                styles.businessInfoCon,
                {
                  backgroundColor: theme ? colors.secondary : colors.blackSmoke,
                },
              ]}
            >
              <Text
                style={[
                  styles.businessInfoConTxt,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                Business Information
              </Text>

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
                    <Text
                      style={[
                        styles.aboutInfoVal,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      {locationName ? locationName : null}
                    </Text>
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
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          }}
        />
      </ScrollView>
      <StatusBar style={theme ? "dark" : "light"} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  flexHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 10,
  },
  choiceBtnWire: {
    width: 70,
    height: 30,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  choiceBtnTxt: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: "LatoRegular",
  },
  businessInfoCon: {
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
  galleryImgCon: {
    height: 80,
    width: 80,
    margin: 5,
  },
  galleryImg: {
    height: 80,
    width: 80,
  },
  reviewsCon: {
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
