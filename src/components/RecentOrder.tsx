import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Avatar } from "@rneui/base";

interface Props {
    name: string;
    minutes: string;
}

const RecentOrder = ({ name, minutes }: Props) => {

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
                            {name}
                        </Text>
                        <Text style={styles.orderMinutes}>
                            {minutes}
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
        fontFamily: "PrimarySemiBold",
        fontSize: 16,
    }

});