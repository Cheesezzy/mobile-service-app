import React from 'react'
import { View, Text, TextInput, StyleSheet } from "react-native"


interface Props {
    title: string
    placeholder: string
    value: string
    onChangeText: any
}
const TextInputComponent = ({ title, onChangeText, value, placeholder }: Props) => {
    return (
        <>
            <View style={styles.cardContainer}>
                <Text style={styles.textContainer}>{title}
                    <Text style={{ color: "red" }} >*</Text>
                </Text>
                <TextInput style={styles.inputContainer}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        </>
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 30,
        paddingLeft: 20,
    },
    textContainer: {
        marginBottom: 5,
        fontFamily: "PrimaryRegular",
        fontSize: 20,
        fontWeight: "400"
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "1px solid rgba(147, 187, 245, 0.24)",
        borderRadius: 8,
        width: 340,
        padding: 10,
        height: 60,
    }
})
