import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { FlipInEasyX } from 'react-native-reanimated'
import { Check } from '../../../../../assets/svgs/svgs'
import { SvgXml } from "react-native-svg";
import colors from '../../../../config/colors';
import { useSelector } from 'react-redux';
import { handleSwitchTheme } from '../../../../../provider/themeSlice';

interface Props{
    onPress : () => void;
}

const Advanced = ({onPress} : Props) => {

    const selector: any = useSelector(handleSwitchTheme);
    const theme = selector.payload.theme.value;

    const [backgroundColor, setBackgroundColor] = useState(theme ? colors.secondarySmoke : colors.blackSmoke);
    const [textColor, setTextColor] = useState(theme ? colors.black : colors.darkTxt);
    const [isPressed, setIsPressed] = useState(false);

    const handleOnPress = () => {
        setIsPressed(true);
        setBackgroundColor("#2776EA");
        setTextColor("#FFFFFF");
    };
    const handleOnRelease = () => {
        setIsPressed(false);
        setBackgroundColor(theme ? colors.secondarySmoke : colors.blackSmoke);
        setTextColor(theme ? colors.black : colors.darkTxt);
    }

    return (
        <>
            <Pressable onPressIn={handleOnPress} onPressOut={handleOnRelease} onPress={onPress}>

                <View style={[styles.container, { backgroundColor }]}>
                    <View style={styles.subContainer}>
                        <Text style={[styles.fontStyle, { color: textColor }]}>
                            Advanced
                        </Text>

                        <Text style={[styles.textStyle, { color: textColor }]}>
                            #6,000/month
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
                </View>
            </Pressable>

        </>
    )
}

export default Advanced

const styles = StyleSheet.create({
    container: {
        padding: 24,
        width: '100%',
        Height: 242,
        marginTop: 24,
        borderRadius: 8,
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "PrimarySemiBold",
    },
    textStyle: {
        fontSize: 14,
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
        fontSize: 14,
    }
})
