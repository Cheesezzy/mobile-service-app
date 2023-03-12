import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { Check } from '../../../../assets/svgs/svgs'
import colors from '../../../config/colors'
import NextButton from './NextButton'
import { useNavigation } from "@react-navigation/native";
import { arrowIcon } from '../../../../assets/icons/icons'


const AdsComponent = () => {
    const navigate = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        zIndex: 1000,
                    }}
                    onPress={() => {
                        return navigate.goBack();
                    }}>
                    <SvgXml xml={arrowIcon()} width={24} height={24} />
                </TouchableOpacity>

                <Text style={styles.fontStyle}>
                    Rete <Text style={styles.midContainer}>Advanced</Text> Ads
                </Text>
                <Text style={styles.paragraph}>
                    subscribe and grow your business
                </Text>

                <Text style={styles.plan}> Select your plan</Text>

                <View style={styles.topText}><Text style={styles.smallText}>You save 10%</Text></View>

                <View style={styles.planContainer}>
                    <View style={styles.annualContainer}>
                        <Text style={styles.annual}> Annual </Text>
                        <Text style={styles.price}> #70,000/year </Text>
                        <Text style={styles.month}> (#5,833/month) </Text>

                    </View>

                    <View style={styles.monthlyContainer}>
                        <Text style={styles.annual}> Monthly </Text>
                        <Text style={styles.price}> #6,000/year </Text>
                        <Text style={styles.month}> (#6,000/month) </Text>

                    </View>
                </View>


                <Text style={styles.plan}> Features </Text>

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

                <View style={styles.button}>
                    <NextButton
                        backgroundColor="#2776EA"
                        title='Start your 7-days trial'
                    />
                </View>

                <Text style={styles.bill}> Billed yearly, cancel anytime </Text>


            </View>


        </>


    )
}

export default AdsComponent

const styles = StyleSheet.create({
    container: {
        margin: 24,
        marginTop: 50,
        lineHeight: 40,

    },
    midContainer: {
        color: "#2776EA",
    },
    fontStyle: {
        fontSize: 28,
        fontFamily: "PrimarySemiBold",
        fontWeight: "500",
        width: 276,
        height: 40,
        marginTop: 20,
    },
    paragraph: {
        color: colors.greyMain,
        marginTop: 8,

    },
    plan: {
        width: 220,
        height: 32,
        fontSize: 24,
        fontFamily: "PrimarySemiBold",
        fontWeight: "600",
        marginTop: 32,

    },
    check: {
        marginTop: 16,
        display: "flex",
        flexDirection: "row",

    },
    text: {
        marginLeft: 20,
        fontSize: 14,
        color: colors.greyMidDark,
        lineHeight: 24,
        width: 250,
    },

    button: {
        marginTop: 40,
    },
    bill: {
        color: "#2776EA",
        marginTop: 32,
        alignSelf: "center",
        fontSize: 14,
    },

    planContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    annualContainer: {
        marginTop: 20,
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#2776EA",
        width: 150,
        height: 120,
        justifyContent: "space-around",
        alignItems: "center",

    },
    price: {
        fontSize: 14,
        fontFamily: "PrimarySemiBold",
        fontWeight: "600",
    },
    annual: {
        fontSize: 12,
    },
    month: {
        fontSize: 12,
    },
    monthlyContainer: {
        marginTop: 20,
        padding: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.greyMid,
        width: 150,
        height: 120,
        justifyContent: "space-around",
        alignItems: "center",
    },
    topText :{
        borderRadius: 8,
        backgroundColor: "#2776EA",
        width: 79,
        height:20,
        color: "white",
        justifyContent: "center",
        position: "relative",
        left: 50,
        top: 30,
        zIndex: 1,
    },
    smallText: {
        color: "white", 
        fontSize: 10,
        alignSelf: "center",
    }
})
