import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg';
import { smileEmoji } from '../../../assets/svgs/svgs';
import colors from '../../config/colors';
import useTheme from '../../hooks/useTheme';
import HeaderFAQs from './compponents/HeaderFAQs'

const TransactionScreen = ({ route }: any) => {
    const { title, info } = route.params;
    const [feedback, setFeedback] = useState('');
    const [showButtons, setShowButtons] = useState(true);

    const handleClick = () => {
        setFeedback('Thanks for your feedback, it helps us improve on our service.');
        setShowButtons(false);
    };

    const { backgroundColor, color, theme } = useTheme();


    return (
        <>
            <HeaderFAQs title='Transaction' />


            <View style={[{ padding: 24, flex: 1 }, {
                backgroundColor
            }]}>
                <View style={[styles.container, {
                    backgroundColor: theme
                        ? colors.secondary
                        : colors.blackSmoke,
                }]}>
                    <Text style={[{
                        fontFamily: "PrimaryRegular",
                        fontSize: 16,
                        fontWeight: "400",
                        lineHeight: 24,
                        padding: 10
                    }, {
                        color
                    }]}>
                        {title}
                    </Text>

                    <Text style={[{
                        padding: 10,
                        fontFamily: "PrimaryRegular",
                        fontSize: 12,
                        fontWeight: "400",
                        lineHeight: 20
                    }, {
                        color
                    }]}>
                        {info}
                    </Text>
                </View>

                <View style={{ marginTop: 56, }}>
                    <Text style={{ padding: 5, color: "#838B97", fontFamily: "PrimaryRegular", fontSize: 16, fontWeight: "400", lineHeight: 20 }}> Was this article helpful? </Text>
                </View>

                {showButtons && (
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.btnYes}>
                            <TouchableOpacity onPress={handleClick}>
                                <Text style={styles.textBtnYes}> Yes </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btnNo}>
                            <TouchableOpacity onPress={handleClick}>
                                <Text style={styles.textBtnNo}> No </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}




                <View style={{ paddingTop: 30 }}>
                    <Text>
                        {feedback ? (
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Text>
                                    <SvgXml
                                        xml={smileEmoji()}
                                        width={24}
                                        height={24}
                                    />
                                    &nbsp;
                                </Text>
                                <Text style={[{
                                    width: "90%",
                                    height: 50,
                                    fontSize: 15,
                                    fontWeight: "400"
                                }, {
                                    color
                                }]}>
                                    {feedback}
                                </Text>
                            </View>
                        ) : null
                        }
                    </Text>
                </View>

            </View>
        </>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-around",
        borderRadius: 8,
    },

    btnYes: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        width: "47%",
        height: 56,
        backgroundColor: "#2776EA"
    },
    textBtnYes: {
        color: "white"
    },
    btnNo: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderColor: "#2776EA",
        borderWidth: 2,
        width: "47%",
        height: 56,
    },
    textBtnNo: {
        color: "#2776EA",
    }
})
