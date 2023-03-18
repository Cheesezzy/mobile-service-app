import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { halfArrow } from '../../../../assets/svgs/svgs'

interface Props {
    title: string;
    info: string;
}


const Service = ({ title, info }: Props) => {

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

export default Service

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
        flex: 1,
        flexShrink: 1,
        flexWrap: "wrap",
        width: 300,
        height: 70,
        textTransform: 'none',
    },
    info: {

    }
})