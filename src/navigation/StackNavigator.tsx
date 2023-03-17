import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import NotifScreen from "../screens/NotifScreen";
import NegoScreen from "../screens/NegoScreen";
import HustleScreen from "../screens/HustleScreen";
import AboutScreen from "../screens/AboutScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SupportScreen from "../screens/SupportScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import { auth, db } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { handleAllUsers } from "../../provider/allUsersSlice";
import { ChatScreen } from "../components/ChatScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import PaymentsScreen from "../screens/Payments & Wallets/PaymentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EarningsScreen from "../screens/EarningsScreen";
import {
  useDocumentData,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import colors from "../config/colors";
import CategoryScreen from "../screens/CategoryScreen";
import { GoogleSearch } from "../components/GoogleSearch";
import BusinessEnroll from "../components/BusinessEnroll";
import TransferScreen from "../screens/TransferScreen";
import PayScreen from "../screens/Payments & Wallets/PayScreen";
import Slider from "../components/Slider";
import CategoriesScreen from "../screens/CategoriesScreen";
import AccountSettings from "../screens/AccountSettings";
import ImageScreen from "../components/ShowImage";
import MoreScreen from "../screens/MoreScreen";
import FundScreen from "../screens/Payments & Wallets/FundScreen";
import PayStatScreen from "../screens/Payments & Wallets/PayStatScreen";
import TransactionHistory from "../screens/Payments & Wallets/TransactionHistory";
import RecentOrderScreen from "../screens/RecentOrderScreen";
import TransactionDetailsScreen from "../screens/Payments & Wallets/TransactionDetailsScreen";
import AddNewCardScreen from "../screens/Payments & Wallets/AddNewCardScreen";
import AdsComponent from "../screens/Payments & Wallets/components/AdsComponent";
import PhoneScreen from "../screens/PhoneScreen";
import PromotionScreen from "../screens/PromotionScreen";
import SearchResults from "../screens/Search/SearchResults";
import JakeScreen from "../screens/BusinessEnrollScreen";
import Terms from "../screens/policy-and-terms/Terms";
import Privacy from "../screens/policy-and-terms/Privacy";
// import BusinessEnrollScreen from "../screens/BusinessEnrollScreen";
// import BusinessDetails from "../screens/BusinessEnrollScreen/BusinessDetails";
// import BusinessCategory from "../screens/BusinessEnrollScreen/BusinessCategory";
// import BusinessLocation from "../screens/BusinessEnrollScreen/BusinessLocation";
// import BusinessEnrollment from "../screens/BusinessEnrollScreen/BusinessEnrollment";
// import KycVerification from "../screens/BusinessEnrollScreen/KycVerification";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const usersRef = collection(db, "users");
  const userbizInformedRef = doc(db, "users", user?.uid!);
  const allUsers = selector.payload.users.value;

  const [bizData, loading] = useDocumentData(userbizInformedRef);

  useEffect(() => {
    getDocs(usersRef).then((snapshot) => {
      snapshot.forEach((doc) => dispatch(handleAllUsers(doc.data())));
      console.log(allUsers);
    });
    console.log(bizData?.bizInformed, "biz stat");
  }, []);

  const checkBizInformed = () => {
    {
      /*
      !bizData?.bizInformed && loading
        ? HomeScreen
        : bizData?.bizInformed
        ? HomeScreen
        : BusinessEnroll;
  */
    }

    if (bizData && bizData?.bizInformed && !loading) {
      if (bizData?.bizInformed) return HomeScreen;
      return BusinessEnroll;
    }
    return HomeScreen;
  };

  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        name={"Home"}
        component={checkBizInformed()}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotifScreen}
        options={{
          title: "Notifications",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Negotiations"
        component={NegoScreen}
        options={{
          title: "Negotiations",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Phone"
        component={PhoneScreen}
        options={{
          title: "Negotiations",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: "More",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Hustle"
        component={HustleScreen}
        options={{
          title: "Hustle",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Promotion"
        component={PromotionScreen}
        options={{
          title: "Promotion",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          title: "Support",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          title: "Analytics",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          title: "Payments",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{
          title: "Earnings",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: "NegoDisplay",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BusinessEnroll"
        component={BusinessEnroll}
        options={{
          title: "BusinessEnroll",
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="BusinessEnrollScreen"
        component={BusinessEnrollScreen}
        options={{
          title: "BusinessEnrollScreen",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BusinessDetails"
        component={BusinessDetails}
        options={{
          title: "BusinessDetails",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BusinessCategory"
        component={BusinessCategory}
        options={{
          title: "BusinessCategory",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BusinessLocation"
        component={BusinessLocation}
        options={{
          title: "BusinessLocation",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="BusinessEnrollment"
        component={BusinessEnrollment}
        options={{
          title: "BusinessEnrollment",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="KycVerification"
        component={KycVerification}
        options={{
          title: "KycVerification",
          headerShown: false,
        }}
      /> */}

      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          title: "Category",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GoogleSearch"
        component={GoogleSearch}
        options={{
          title: "GoogleSearch",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Slider"
        component={Slider}
        options={{
          title: "Slider",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          title: "Transfer",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: "Pay",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          title: "AccountSettings",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{
          title: "ImageScreen",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Fund"
        component={FundScreen}
        options={{
          title: "Fund",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PayStatus"
        component={PayStatScreen}
        options={{
          title: "PayStatus",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Transaction History"
        component={TransactionHistory}
        options={{
          title: "Transaction History",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add New Card"
        component={AddNewCardScreen}
        options={{
          title: "Add New Card",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Recent Order"
        component={RecentOrderScreen}
        options={{
          title: "Add New Card",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Transaction details"
        component={TransactionDetailsScreen as any}
        options={{
          title: "Transaction details",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Ads Component"
        component={AdsComponent}
        options={{
          title: "Ads Component",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{
          title: "Ads Component",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Privacy-Policy"
        component={Privacy}
        options={{
          title: "Ads Component",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
