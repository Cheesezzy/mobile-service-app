import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Check } from '../../../../../assets/svgs/svgs'
import { SvgXml } from "react-native-svg";
import colors from '../../../../config/colors';


const Premium = () => {

    const [backgroundColor, setBackgroundColor] = useState("#F1F1F1");
    const [textColor, setTextColor] = useState("#454647");
    const [isPressed, setIsPressed] = useState(false);

    const handleOnPress = () => {
        setIsPressed(true);
        setBackgroundColor("#2776EA");
        setTextColor("#FFFFFF");
    };
    const handleOnRelease = () => {
        setIsPressed(false);
        setBackgroundColor("#F1F1F1");
        setTextColor("#454647");
    }


    return (
        <>
            <Pressable onPressIn={handleOnPress} onPressOut={handleOnRelease}>
                <View style={[styles.container, { backgroundColor }]}>

                    <View style={styles.subContainer}>
                        <Text style={[styles.fontStyle, { color: textColor }]}>
                            Premium
                        </Text>

                        <Text style={[styles.textStyle, { color: textColor }]}>
                            #12,000/month
                        </Text>
                    </View>

                    <View style={styles.check}>
                        <SvgXml xml={Check()} width={24} height={24} />
                        <Text style={[styles.text, { color: textColor }]}>
                            Appear in posters
                        </Text>
                    </View>

                    <View style={styles.check}>
                        <SvgXml xml={Check()} width={24} height={24} />
                        <Text style={[styles.text, { color: textColor }]}>
                            Rank higher in search results
                        </Text>
                    </View>

                    <View style={styles.check}>
                        <SvgXml xml={Check()} width={24} height={24} />
                        <Text style={[styles.text, { color: textColor }]}>
                            Increase your search appearance range
                        </Text>
                    </View>

                    <View style={styles.check}>
                        <SvgXml xml={Check()} width={24} height={24} />
                        <Text style={[styles.text, { color: textColor }]}>
                            Show on the home screen of clients in your area
                        </Text>
                    </View>
                </View>


            </Pressable>



        </>
    )
}

export default Premium

const styles = StyleSheet.create({
    container: {
        padding: 24,
        width: 342,
        Height: 179,
        marginTop: 16,
        borderRadius: 8,
        fontFamily: "PrimarySemiBold",
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "PrimarySemiBold",
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "400",
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
        fontSize: 14,
    }
})
