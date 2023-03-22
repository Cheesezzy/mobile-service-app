import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../config/colors";
import Navigation from "../../components/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { auth, db } from "../../../firebaseConfig";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import HeaderTitle from "../../components/HeaderTitle";
import { collection, doc } from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import SetLocationPopup from "../../components/businessEnroll/SetLocationPopup";
import { handleSwitchTheme } from "../../../provider/themeSlice";
import ClientHome from "./ClientHome";
import ProviderHome from "./ProviderHome";
import { sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import EmailNotVerfied from "./components/EmailNotVerified";

const HomeScreen = ({ navigation }: any) => {
  const [emailVerificationSent, setEmailVerificationSent] = useState(false);

  const [User] = useAuthState(auth);

  const userRef = doc(db, "users", User?.uid!);

  const [user, userLoading] = useDocumentData(userRef);
  //const user = selector.payload.user.value;

  const businessRef = user?.bizId && doc(db, "businesses", user?.bizId);
  const [business, loading] = useDocumentData(businessRef);

  const checkRoleAndLocation = () => {
    {
      /*user && user?.role === "Provider" ? (
      !business?.location && loading ? null : business?.location ? null : (
        <SetLocationPopup />
      )
      ) : null*/
    }

    if (user && user?.role === "Provider") {
      if (!business?.location && loading) {
        return null;
      } else {
        return <SetLocationPopup />;
      }
    } else {
      return null;
    }
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  const sendVerification = () => {
    if (User)
      sendEmailVerification(User).then(() => {
        setEmailVerificationSent(true);
        User?.reload();
      });
  };

  return (
    <>
      {User?.email === "dos@gmail.com" ||
      User?.email === "preyeduke@gmail.com" ||
      User?.email === "bezzy@gmail.com" ? (
        <HeaderTitle title="Home" profileURL={user?.profilePic} user={user} />
      ) : User?.emailVerified ? (
        <HeaderTitle title="Home" profileURL={user?.profilePic} user={user} />
      ) : null}

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.black,
          },
        ]}
      >
        {User &&
        !User?.emailVerified &&
        User?.email !== "dos@gmail.com" &&
        User?.email !== "preyeduke@gmail.com" &&
        User?.email !== "bezzy@gmail.com" ? (
          <EmailNotVerfied
            verify={sendVerification}
            emailSent={emailVerificationSent}
          />
        ) : null}

        <ScrollView style={{ padding: 5, paddingBottom: 20 }}>
          {!userLoading ? (
            user?.role === "Consumer" ? (
              <ClientHome navigation={navigation} theme={theme} />
            ) : (
              <ProviderHome
                navigation={navigation}
                theme={theme}
                business={business}
                user={user}
              />
            )
          ) : (
            <ActivityIndicator color={colors.primary} />
          )}
          <View style={{ height: 100, width: "100%" }} />
        </ScrollView>

        <Navigation navigation={navigation} />
        <StatusBar style={theme ? "dark" : "light"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "30%",
    width: "30%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  searchCon: {
    flexDirection: "row",
    height: 45,
    width: "90%",
    fontFamily: "LatoRegular",
    fontSize: 12,
    color: colors.black,
    borderWidth: 1,
    borderColor: colors.greyLight,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 8,
  },
  titleCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 10,
  },
  viewAll: {
    fontFamily: "PrimaryRegular",
    fontSize: 12,
    color: "#FD922E",
    textDecorationLine: "underline",
  },
  title: {
    margin: 5,
    fontFamily: "PrimarySemiBold",
    fontSize: 20,
    lineHeight: 28,
  },
  categories: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 5,
  },
  category: {
    height: 90,
    width: 90,
    margin: 4,
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  subCategory: {
    height: 90,
    width: 90,
    margin: 4,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  bigTxt: {
    fontSize: 12,
    fontFamily: "LatoRegular",
    textAlign: "center",
  },
  smCon: {
    flex: 1,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categorySm: {
    flex: 1,
    height: 70,
    margin: 4,
    borderRadius: 5,
  },
  smTxt: {
    fontSize: 12,
    fontFamily: "PrimaryRegular",
    textAlign: "center",
    marginTop: 2,
  },
  banner: {
    flex: 1,
    height: 160,
    margin: 4,
    marginTop: 20,
    marginHorizontal: 16,
  },
  bannerBtn: {
    position: "absolute",
    bottom: 50,
    padding: 8,
    paddingHorizontal: 18,
    marginLeft: 10,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  bannerTxt: {
    fontSize: 9,
    fontFamily: "PrimaryRegular",
    color: colors.secondary,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
  inputBtn: {
    height: 45,
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBtnTxt: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: "LatoRegular",
  },
});

export default HomeScreen;
