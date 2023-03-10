import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Check } from '../../../../../assets/svgs/svgs'
import { SvgXml } from "react-native-svg";
import colors from '../../../../config/colors';


const Premium = () => {
    return (
        <>
            <View style={styles.container}>
                
                <View style={styles.subContainer}>
                    <Text style={styles.fontStyle}>
                      Premium
                    </Text>

                    <Text style={styles.textStyle}>
                        #12,000/month
                    </Text>
                </View>

                <View style={styles.check}>
                    <SvgXml xml={Check()} width={24} height={24} />
                    <Text style={styles.text}>
                        Appear in posters
                    </Text>
                </View>

                <View style={styles.check}>
                    <SvgXml xml={Check()} width={24} height={24} />
                    <Text style={styles.text}>
                        Rank higher in search results
                    </Text>
                </View>

                <View style={styles.check}>
                    <SvgXml xml={Check()} width={24} height={24} />
                    <Text style={styles.text}>
                       Increase your search appearance range
                    </Text>
                </View>

                <View style={styles.check}>
                    <SvgXml xml={Check()} width={24} height={24} />
                    <Text style={styles.text}>
                       Show on the home screen of clients in your area
                    </Text>
                </View>
            </View>



        </>
    )
}

export default Premium

const styles = StyleSheet.create({
    container: {
        padding: 24,
        width: 342,
        Height: 179,
        backgroundColor: colors.greyLight,
        marginTop: 16,
        borderRadius: 8,
        fontFamily: "PrimarySemiBold",
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "PrimarySemiBold", 
        color: colors.greyMidDark,       
    },
    textStyle: {
        fontSize : 16,
        fontWeight: "400",
        color: colors.greyMidDark,       
    },
    subContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    check: {
        marginTop: 24,
        display: "flex",
        flexDirection: "row",
    },
    text: {
        marginLeft: 20,
        fontSize : 14,
        color: colors.greyMidDark,       
    }
})
