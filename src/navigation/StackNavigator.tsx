import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import NotifScreen from "../screens/NotifScreen";
import NegoScreen from "../screens/Negotiation/NegoScreen";
import HustleScreen from "../screens/HustleScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import SupportScreen from "../screens/SupportScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import { auth, db } from "../../firebaseConfig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDocs } from "firebase/firestore";
import { handleAllUsers } from "../../provider/allUsersSlice";
import { ChatScreen } from "../screens/Negotiation/ChatScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import PaymentsScreen from "../screens/Payments & Wallets/PaymentsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EarningsScreen from "../screens/EarningsScreen";
import { useDocumentData } from "react-firebase-hooks/firestore";
import CategoryScreen from "../screens/CategoryScreen";
import { GoogleSearch } from "../components/GoogleSearch";
import BusinessEnroll from "../components/BusinessEnroll";
import TransferScreen from "../screens/TransferScreen";
import PayScreen from "../screens/Payments & Wallets/PayScreen";
import Slider from "../components/Slider";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import AccountSettings from "../screens/Settings/AccountSettings";
import ImageScreen from "../components/ShowImage";
import MoreScreen from "../screens/MoreScreen";
import FundScreen from "../screens/Payments & Wallets/FundScreen";
import PayStatScreen from "../screens/Payments & Wallets/PayStatScreen";
import TransactionHistory from "../screens/Payments & Wallets/TransactionHistory";
import RecentOrdersScreen from "../screens/RecentOrderScreen";
import TransactionDetailsScreen from "../screens/Payments & Wallets/TransactionDetailsScreen";
import AddNewCardScreen from "../screens/Payments & Wallets/AddNewCardScreen";
import AdsComponent from "../screens/Payments & Wallets/components/AdsComponent";
import PhoneScreen from "../screens/PhoneScreen";
import PromotionScreen from "../screens/PromotionScreen";
import SearchResults from "../screens/Search/SearchResults";
import ContactSupport from "../screens/ContactSupport/ContactSupport";
import FAQs from "../screens/ContactSupport/FAQs";
import JakeScreen from "../screens/BusinessEnrollScreen";
import Privacy from "../screens/Settings/policy-and-terms/Privacy";
import Terms from "../screens/Settings/policy-and-terms/Terms";
import BusinessEnrollScreen from "../screens/BusinessEnrollScreen/index";
import BusinessDetails from "../screens/BusinessEnrollScreen/BusinessDetails";
import BusinessCategory from "../screens/BusinessEnrollScreen/BusinessCategory";
import BusinessLocation from "../screens/BusinessEnrollScreen/BusinessLocation";
import BusinessEnrollment from "../screens/BusinessEnrollScreen/BusinessEnrollment";
import KycVerification from "../screens/BusinessEnrollScreen/KycVerification";
import ServiceConfirmationScreen from "../screens/ServiceConfirmationScreen";
import ServiceScreen from "../screens/ContactSupport/ServiceScreen";
import GeneralScreen from "../screens/ContactSupport/GeneralScreen";
import TransactionScreen from "../screens/ContactSupport/TransactionScreen";
import { ChatSupportScreen } from "../screens/ChatSupportScreen";
import WithdrawScreen from "../screens/Payments & Wallets/WithdrawScreen";
import BanksScreen from "../screens/Payments & Wallets/BanksScreen";
import NotificationSettings from "../screens/Settings/NotificationSettings";
import PendingOrderScreen from "../components/PendingOrder/PendingOrderScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const selector = useSelector(handleAllUsers);
  const usersRef = collection(db, "users");
  const userbizInformedRef = doc(db, "users", user?.uid!);

  const [bizData, loading] = useDocumentData(userbizInformedRef);

  useEffect(() => {
    getDocs(usersRef).then((snapshot) => {
      snapshot.forEach((doc) => dispatch(handleAllUsers(doc.data())));
    });
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

    if (bizData && !loading) {
      if (bizData?.bizInformed) return HomeScreen;
      return BusinessEnrollScreen;
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
        name="Contact Support"
        component={ContactSupport}
        options={{
          title: "Contact Support",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Pending Order"
        component={PendingOrderScreen}
        options={{
          title: "Pending Order",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="FAQs"
        component={FAQs}
        options={{
          title: "FAQs",
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
        name="GeneralScreen"
        component={GeneralScreen}
        options={{
          title: "GeneralScreen",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ServiceScreen"
        component={ServiceScreen}
        options={{
          title: "ServiceScreen",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{
          title: "TransactionScreen",
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
      <Stack.Screen
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
      />

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
        name="Withdraw"
        component={WithdrawScreen}
        options={{
          title: "Withdraw",
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
        name="Recent Orders"
        component={RecentOrdersScreen}
        options={{
          title: "Recent Orders",
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
          title: "Terms",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Privacy-Policy"
        component={Privacy}
        options={{
          title: "Privacy-Policy",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Service Confirmation"
        component={ServiceConfirmationScreen}
        options={{
          title: "Service Confirmation",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search Results"
        component={SearchResults}
        options={{
          title: "Search Results",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat Support"
        component={ChatSupportScreen}
        options={{
          title: "Chat Support",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Banks"
        component={BanksScreen}
        options={{
          title: "Banks",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification Settings"
        component={NotificationSettings}
        options={{
          title: "Notification Settings",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
