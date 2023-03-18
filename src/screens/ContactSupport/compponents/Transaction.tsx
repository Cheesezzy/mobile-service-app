import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'
import { halfArrow } from '../../../../assets/svgs/svgs'

interface Props {
    title: string;
    info: string;
}


const Transaction = ({ title, info }: Props) => {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <>
            <View style={styles.textCon}>
                <View style={styles.container}>
                    <Text style={[styles.text, { padding: 8 }]}> {title} </Text>

                    <TouchableOpacity onPress={() => setShowInfo(!showInfo)} >
                        <SvgXml
                            xml={halfArrow()}
                            width={9} height={17} />
                    </TouchableOpacity>
                </View>

                <View>
                    {showInfo && <Text style={styles.info}>{info}</Text>}
                </View>
            </View>

        </>
    )
}

export default Transaction

const styles = StyleSheet.create({
    textCon: {
        margin: 24,
        backgroundColor: 'white',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        width: 350,
        height: 70,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 4,
        padding: 8,

    },
    text: {
        fontFamily: "PrimaryRegular",
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 24,
        width: 300,
        height: 70,

    },

    info: {

    }
})