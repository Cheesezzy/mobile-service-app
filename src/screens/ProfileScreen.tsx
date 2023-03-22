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
  addIcon,
  backIcon,
  levelIcon,
  locationIcon,
  profileIcon,
} from "../../assets/icons/icons";
import { Avatar, Tab } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { collection, doc } from "firebase/firestore";
import { auth, db, store } from "../../firebaseConfig";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { createNotification, updateGallery } from "../../api/database";
import { checkRole, checkUser } from "../../api/hooks/generalHooks";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import * as Location from "expo-location";
import Geocoder from "react-native-geocoding";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addImage } from "../../assets/svgs/svgs";
import HeaderTitle from "../components/HeaderTitle";
import { Rating } from "react-native-ratings";
import { TabView } from "@rneui/base";

const ProfileScreen = ({ navigation, route }: any) => {
  const { business } = route.params;

  const [User] = useAuthState(auth);
  const businessUserRef =
    business && business.userId && doc(db, "users", business.userId);
  const userRef = doc(db, "users", User?.uid!);
  const [user] = useDocumentData(userRef);
  const [businessUser] = useDocumentData(businessUserRef);
  const ratingsAndReviewsRef =
    user?.bizId &&
    collection(db, "businesses", user.bizId, "ratingsAndReviews");
  const [ratingsAndReviews] = useCollectionData(ratingsAndReviewsRef);

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

  const [imageOne, imageOneLoading] = useDocumentData(imageOneRef);
  const [imageTwo, imageTwoLoading] = useDocumentData(imageTwoRef);
  const [imageThree, imageThreeLoading] = useDocumentData(imageThreeRef);
  const [imageFour, imageFourLoading] = useDocumentData(imageFourRef);

  const [userLocation, setUserLocation] = useState<any>(null);
  const [errMsg, setErrorMsg] = useState<any>(null);
  const [locationName, setLocationName] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const [imageNum, setImageNum] = useState<any>(null);
  const [index, setIndex] = useState(0);

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
    <>
      <HeaderTitle title="Profile" profileURL="" user="" />

      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.black,
          },
        ]}
      >
        <View
          style={[
            styles.header,
            {
              backgroundColor: theme ? colors.secondary : colors.blackSmoke,
            },
          ]}
        >
          {user?.role === "Provider" ? (
            <Avatar
              size={80}
              rounded
              source={
                business?.businessDP
                  ? {
                      uri: business?.businessDP,
                    }
                  : require("../.././assets/blankProfilePic.png")
              }
              containerStyle={styles.avatar}
            />
          ) : (
            <Avatar
              size={80}
              rounded
              source={
                user?.profilePic
                  ? {
                      uri: user?.profilePic,
                    }
                  : require("../.././assets/blankProfilePic.png")
              }
              containerStyle={styles.avatar}
            />
          )}

          <View>
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

            {business && (
              <Text
                style={[
                  styles.manager,
                  {
                    color: theme ? colors.black : colors.darkTxt,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: "PrimarySemiBold",
                  }}
                >
                  Manager:{" "}
                </Text>
                {businessUser?.name}
              </Text>
            )}

            <Text
              style={[
                styles.location,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: "PrimarySemiBold",
                }}
              >
                Location:{" "}
              </Text>
              {locationName && locationName}
            </Text>

            <View style={styles.rating}>
              <Rating
                type="custom"
                fractions={1}
                startingValue={business?.rating}
                readonly
                imageSize={12}
                ratingCount={5}
                ratingColor={colors.primary}
                tintColor={theme ? colors.secondary : colors.blackSmoke}
                ratingBackgroundColor="grey"
              />
            </View>
          </View>
        </View>

        {business && business.userId !== User?.uid ? (
          <View style={styles.choiceBtnCon}>
            <TouchableOpacity
              style={[styles.choiceBtnWire, { marginRight: 10 }]}
              onPress={() =>
                navigation.navigate("ChatScreen", {
                  personId: business.userId,
                  name: businessUser?.name,
                })
              }
            >
              <Text style={[styles.choiceBtnTxt, { color: colors.primary }]}>
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
            <Text style={[styles.choiceBtnTxt, { color: colors.primary }]}>
              Edit profile
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.stats}>
          <View
            style={[
              styles.statsItem,
              {
                backgroundColor: theme ? colors.secondary : colors.blackSmoke,
              },
            ]}
          >
            <Text
              style={[
                styles.statsItemBigTxt,
                ,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {business?.level}
            </Text>
            <Text
              style={[
                styles.statsItemSmTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Level
            </Text>
          </View>

          <View
            style={[
              styles.statsItem,
              {
                backgroundColor: theme ? colors.secondary : colors.blackSmoke,
              },
            ]}
          >
            <Text
              style={[
                styles.statsItemBigTxt,
                ,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {business?.completedBookings}
            </Text>
            <Text
              style={[
                styles.statsItemSmTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Completed Orders
            </Text>
          </View>

          <View
            style={[
              styles.statsItem,
              {
                backgroundColor: theme ? colors.secondary : colors.blackSmoke,
              },
            ]}
          >
            <Text
              style={[
                styles.statsItemBigTxt,
                ,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              {ratingsAndReviews ? ratingsAndReviews.length : 0}
            </Text>
            <Text
              style={[
                styles.statsItemSmTxt,
                {
                  color: theme ? colors.black : colors.darkTxt,
                },
              ]}
            >
              Reviews
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 400,
          }}
        >
          <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: colors.primary,
              height: 3,
            }}
            containerStyle={{
              backgroundColor: theme ? colors.secondary : colors.blackSmoke,
            }}
            variant="primary"
          >
            <Tab.Item
              title="About"
              titleStyle={{
                color: theme ? colors.black : colors.darkTxt,
                fontSize: 12,
                fontFamily: "PrimarySemiBold",
              }}
            />
            <Tab.Item
              title="Gallery"
              titleStyle={{
                color: theme ? colors.black : colors.darkTxt,
                fontSize: 12,
                fontFamily: "PrimarySemiBold",
              }}
            />
            <Tab.Item
              title="Reviews"
              titleStyle={{
                color: theme ? colors.black : colors.darkTxt,
                fontSize: 12,
                fontFamily: "PrimarySemiBold",
              }}
            />
          </Tab>

          <TabView value={index} onChange={setIndex} animationType="spring">
            <>
              <TabView.Item style={styles.tabSection}>
                {
                  <View style={styles.bio}>
                    <Text
                      style={[
                        styles.bioTxt,
                        {
                          color: theme ? colors.black : colors.darkTxt,
                        },
                      ]}
                    >
                      {business?.desc}
                    </Text>
                  </View>
                }
              </TabView.Item>
              <TabView.Item style={styles.tabSection}>
                {business && user ? (
                  business.userId === User?.uid &&
                  !imageOneLoading &&
                  !imageTwoLoading &&
                  imageThreeLoading &&
                  imageFourLoading ? (
                    <View style={styles.gallery}>
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
                          <View style={[styles.galleryImg, styles.addPhoto]}>
                            <SvgXml xml={addIcon()} width={20} height={20} />
                            <Text style={{ color: "#454647" }}>Add photo</Text>
                          </View>
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
                          <View style={[styles.galleryImg, styles.addPhoto]}>
                            <SvgXml xml={addIcon()} width={20} height={20} />
                            <Text style={{ color: "#454647" }}>Add photo</Text>
                          </View>
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
                          <View style={[styles.galleryImg, styles.addPhoto]}>
                            <SvgXml xml={addIcon()} width={20} height={20} />
                            <Text style={{ color: "#454647" }}>Add photo</Text>
                          </View>
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
                              resizeMode="center"
                            />
                          </>
                        ) : (
                          <View style={[styles.galleryImg, styles.addPhoto]}>
                            <SvgXml xml={addIcon()} width={20} height={20} />
                            <Text style={{ color: "#454647" }}>Add photo</Text>
                          </View>
                        )}
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={styles.gallery}>
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
                          {
                            backgroundColor: theme
                              ? colors.greyMain
                              : colors.black,
                          },
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
                              resizeMode="center"
                            />
                          </>
                        )}
                      </TouchableOpacity>
                    </View>
                  )
                ) : null}
              </TabView.Item>
              <TabView.Item style={styles.tabSection}>
                <Text>Cart</Text>
              </TabView.Item>
            </>
          </TabView>
        </View>

        <View
          style={{
            height: 100,
            width: "100%",
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          }}
        />
      </ScrollView>
      <StatusBar style={theme ? "dark" : "light"} />
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 0,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
  },
  avatar: {
    marginRight: 20,
  },
  profileName: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
  },
  manager: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
  },
  location: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
  },
  rating: {
    alignSelf: "flex-start",
  },
  choiceBtnCon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  choiceBtn: {
    width: "30%",
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  choiceBtnWire: {
    width: "30%",
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
    fontFamily: "PrimaryRegular",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  statsItem: {
    width: "30%",
    alignItems: "center",
    backgroundColor: colors.secondary,
    padding: 10,
    paddingVertical: 18,
    margin: 5,
    borderRadius: 5,
  },
  statsItemBigTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 15,
    textAlign: "center",
  },
  statsItemSmTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    textAlign: "center",
  },
  tabSection: {
    width: "100%",
  },
  businessInfoCon: {
    paddingTop: 10,
    marginTop: 10,
  },
  businessInfoConTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 16,
  },
  bio: {
    marginTop: 15,
  },
  bioTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
  },
  gallery: {
    flexWrap: "wrap",
    padding: 10,
    paddingTop: 20,
  },
  galleryImgCon: {
    height: 100,
    width: "46%",
    margin: 5,
    borderRadius: 5,
  },
  addPhoto: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.greyMid,
    borderStyle: "dashed",
  },
  galleryImg: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
  reviewsCon: {
    marginTop: 10,
  },
  reviewsConTxt: {
    fontFamily: "PrimarySemiBold",
    fontSize: 12,
  },
  reviews: {
    flexDirection: "row",
  },
});
