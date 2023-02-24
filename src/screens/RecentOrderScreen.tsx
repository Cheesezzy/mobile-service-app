import RecentOrder from "../components/RecentOrder"
import {View, StyleSheet, Text} from "react-native"
import colors from "../config/colors";

const RecentOrderScreen = () => {
    return (
        <>
        <View style={styles.container}>
        <Text style={styles.heading}>Recent Order</Text>
      </View>
            {Array(20).fill(null).map((_, i) => (
                <RecentOrder name="Ayoola Ayolola" minutes="32 minutes ago" />
            ))}        
        </>
    )
}

export default RecentOrderScreen;

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
    },
    heading:{
        fontFamily: "PrimaryBold",
    textAlign: "center",
    fontSize: 24,
    color: colors.greyDark,
    }
})