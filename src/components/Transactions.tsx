import { Text, View, StyleSheet } from "react-native"
import { Avatar } from "@rneui/base";
import { ColorSpace } from "react-native-reanimated";
import colors from "../config/colors";
import { Thsnip1 } from "../../assets/svgs/svgs";
import { SvgXml } from "react-native-svg";

interface Props {
    title : string,
    date : string,
    price : string,
    image : any
}

const Transactions = ({title, date, price, image} : Props) => {

    return (
        <>
            <View style={styles.transactionContainer}>
                <View style={styles.transactionSection}>
                    
                    <View style={styles.imageContainer}>
                        <SvgXml xml={image} width={22} height={22} />

                    </View>

                    <View style={styles.transactionBody}>
                        <Text style={styles.transactionName}>
                            {title}
                        </Text>
                        <Text style={styles.transactionDate}>
                            {date}
                        </Text>
                    </View>

                </View>

                <Text style={styles.transactionPrice}>
                    {'\u20A6'} {price}
                </Text>



            </View>
        </>
    );
};

export default Transactions;

const styles = StyleSheet.create({
    transactionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        padding: 15,
        margin: 1,
        paddingTop: 20,
    },
    transactionSection: {
        flexDirection: 'row',
        
    },
    transactionBody: {
        marginLeft: 10,
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"flex-start", 
    },
    imageContainer: {
        backgroundColor: "#F1F1F1",
        borderRadius: 24,
        justifyContent: "center",
        alignItems:"center",
        width: 40,
        height:40,

    },
    transactionName: {
        fontSize: 16,
    },
    transactionDate: {
        color: colors.greyMain,
        fontSize: 12,
        marginTop: 2,
    },
    transactionPrice: {
        fontFamily: "PrimarySemiBold",
        fontSize: 16,
    }
})