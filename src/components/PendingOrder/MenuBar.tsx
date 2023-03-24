import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    onClose: () => void
}

const MenuBar = ({ onClose }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Order completed
            </Text>
            <Text style={styles.text}>
                Cancel order
            </Text>

        </View>
    )
}

export default MenuBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 105,
        borderRadius: 8,
        justifyContent: "space-around",
        padding: 15,
    },
    text: {
        fontFamily: "PrimaryRegular",
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
    }
})
