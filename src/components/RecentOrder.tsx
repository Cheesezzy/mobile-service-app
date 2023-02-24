import { Text, View, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import { Avatar } from "@rneui/base";


const RecentOrder = () => {

    return (

        <>
            <View style={styles.orderContainer}>
                <View style={styles.order}>
                    <Avatar
                        size={31}
                        rounded
                        source={require("../../assets/blankProfilePic.png")
                        }
                    />

                    <View style={styles.orderSub}>
                        <Text style={styles.orderName}>
                            Ayoola Ayolola
                        </Text>
                        <Text style={styles.orderMinutes}>
                            32 minutes ago
                        </Text>
                    </View>

                </View>


                <Text style={styles.orderPrice}>
                    {'\u20A6'}7500
                </Text>

            </View>
        </>



    )
};

export default RecentOrder;

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    order: {
        flexDirection: "row",

    },

    orderSub: {
        marginLeft: 4,
    },

    orderName: {
        color: colors.greyMidDark,
        fontFamily: "PrimarySemiBold",
        fontSize: 16,
    },
    orderMinutes: {
        // fontFamily: "Public Sans"
        color: colors.greyMain,
        fontSize: 12,
        marginTop: 2,
    },
    orderPrice: {
        fontFamily: "PrimaryBold",
        fontSize: 16,
    }

});