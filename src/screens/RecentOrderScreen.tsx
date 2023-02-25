import RecentOrder from "../components/RecentOrder"
import { View, StyleSheet, Text, FlatList } from "react-native"
import colors from "../config/colors";

const RecentOrderScreen = () => {

    const transactions = Array(20).fill(null);

    const renderItem = () => {
        return <RecentOrder name="Ayoola Ayolola" minutes="32 minutes ago" />;
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>Recent Order</Text>
            </View>

            <FlatList 
            data={transactions}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            />
        </>
    )
}

export default RecentOrderScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    heading: {
        fontFamily: "PrimaryBold",
        textAlign: "center",
        fontSize: 24,
        color: colors.greyDark,
    }
})