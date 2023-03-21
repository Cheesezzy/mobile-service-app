import RecentOrder from "../components/RecentOrder";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import colors from "../config/colors";
import NavigationBar from "./Payments & Wallets/components/NavigationBar";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { useSelector } from "react-redux";
import { collection, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import HeaderTitle from "../components/HeaderTitle";
import { SvgXml } from "react-native-svg";
import { waiting } from "../../assets/svgs/svgs";

const RecentOrdersScreen = () => {
  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", User?.uid!);
  const [user] = useDocumentData(userRef);
  const recentOrdersRef =
    user?.bizId && collection(db, "businesses", user.bizId, "recentOrders");
  const [recentOrders, loading] = useCollectionData(recentOrdersRef);

  //const transactions = Array(20).fill(null);
  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="Recent Orders" profileURL="" user="" />

      {recentOrders && recentOrders.length > 0 ? (
        <View
          style={{
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          }}
        >
          <SafeAreaView>
            <View style={styles.container}></View>

            <FlatList
              data={recentOrders}
              renderItem={({ item }) => (
                <RecentOrder name={item?.name} createdAt={item?.createdAt} />
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          </SafeAreaView>
        </View>
      ) : (
        !loading && (
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme
                ? colors.secondarySmoke
                : colors.blackSmoke,
            }}
          >
            <SvgXml xml={waiting()} width={"100%"} height={"40%"} />
            <Text
              style={{
                fontFamily: "LatoRegular",
                marginTop: 10,
                color: theme ? colors.black : colors.darkTxt,
              }}
            >
              You do not have any orders yet
            </Text>
          </View>
        )
      )}
    </>
  );
};

export default RecentOrdersScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontFamily: "PrimaryBold",
    textAlign: "center",
    fontSize: 24,
    color: colors.greyDark,
  },
});
