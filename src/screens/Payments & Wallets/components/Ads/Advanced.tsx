import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlipInEasyX } from 'react-native-reanimated'
import { Check } from '../../../../../assets/svgs/svgs'
import { SvgXml } from "react-native-svg";
import colors from '../../../../config/colors';


const Advanced = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.fontStyle}>
                        Advanced
                    </Text>

                    <Text style={styles.textStyle}>
                        #6,000/month
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
            </View>
        </>
    )
}

export default Advanced

const styles = StyleSheet.create({
    container: {
        padding: 24,
        width: 342,
        Height: 242,
        backgroundColor: "#2776EA",
        marginTop: 24,
        borderRadius: 8,
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "PrimarySemiBold", 
        color: "white",       
    },
    textStyle: {
        fontSize : 16,
        fontWeight: "400",
        color: "white",       
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
        color: "white",  
    }
})
