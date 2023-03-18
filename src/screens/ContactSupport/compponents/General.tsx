import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'

import { halfArrow } from '../../../../assets/svgs/svgs'
import colors from '../../../config/colors';

interface Props {
    title: string;
    info: string;
}


const General = ({ title, info }: Props) => {

    const [showInfo, setShowInfo] = useState(false);


    return (
        <>
            <View style={styles.textCon}>
                <View style={styles.container}>
                    <Text style={[styles.textQ, { padding: 8 }]}> {title} </Text>

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

export default General

const styles = StyleSheet.create({
    textCon: {
        margin: 24,
        backgroundColor: 'white',
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    container: {
        width: 350,
        height: 70,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        borderRadius: 4,
    },
    textQ: {
        fontFamily: "PrimaryRegular",
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 20,
        width: 300,
        height: 70,

    },
    containerScroll: {
        margin: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 2,
        borderBottomColor: "#CED1D5",
        paddingBottom: 12,
    },
    conText: {
        color: "#CED1D5",
        fontFamily: "PrimaryRegular",
    },
    info: {

    }
})