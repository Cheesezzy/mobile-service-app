import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { halfArrow } from '../../../../assets/svgs/svgs'
import colors from '../../../config/colors'
import useTheme from '../../../hooks/useTheme'
import TransactionData from './TransactionData'


const Transaction = ({ navigation }: any) => {

    const [data, setData] = useState(TransactionData);
    const { backgroundColor, color, theme } = useTheme();

    return (
        <>
            <View style={[{ padding: 10, flex: 1 }, { backgroundColor }]}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('TransactionScreen', item)} >
                            <View style={[styles.container, { margin: 10 }, {
                                backgroundColor: theme
                                    ? colors.secondary
                                    : colors.blackSmoke,
                            }]}>
                                <Text style={[styles.textQ, { color }]}> {item.title}</Text>
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

export default Transaction

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