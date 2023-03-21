import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { halfArrow } from '../../../../assets/svgs/svgs'
import GeneralData from './GeneralData';
import useTheme from '../../../hooks/useTheme';
import colors from '../../../config/colors';


const General = ({ navigation }: any) => {

    const [data, setData] = useState(GeneralData);
    const { backgroundColor, color, theme } = useTheme();

    return (
        <>
            <View style={[{ padding: 10 }, { backgroundColor, flex: 1 }]}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('GeneralScreen', item)}>
                            <View style={[styles.container, { margin: 10 }, {
                                backgroundColor: theme
                                    ? colors.secondary
                                    : colors.blackSmoke,
                            }]}>
                                <Text style={[styles.textQ, { color }]}> {item.title} </Text>
                                <SvgXml
                                    xml={halfArrow()}
                                    width={9} height={17} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </>
    )
}

export default General

const styles = StyleSheet.create({
    container: {
        width: "95%",
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        borderRadius: 4,
        height: 70,
    },
    textQ: {
        fontFamily: "PrimaryRegular",
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 20,
        width: "95%",
        maxWidth: 284,
    },
})