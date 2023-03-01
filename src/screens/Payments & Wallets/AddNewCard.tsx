import React from 'react'
import NavigationBar from './components/NavigationBar'
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'
import TextInputComponent from './components/TextInputComponent'
import NextButton from './components/NextButton'

const AddNewCard = () => {
    return (
        <ScrollView>
            <NavigationBar title='Add New Card' />

            <View style={styles.container}>
                <Text style={styles.textContainer}>
                    Fill in the appropriate information:
                </Text>

                <TextInputComponent title="card number*"
                    placeholder="enter card number  (16-19 digits)" />

                <TextInputComponent title="bank*"
                    placeholder="select bank" />

                <TextInputComponent title="expiration date*"
                    placeholder="enter valid date" />

                <TextInputComponent title="CVV*"
                    placeholder="enter CVV" />
            </View>

            <View style={styles.btn}>
                <NextButton title='Next' />
            </View>


        </ScrollView>
    )
}

export default AddNewCard

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
    },
    textContainer: {
        fontSize: 21,
        fontFamily: "PrimaryMedium",
        fontWeight: "600",
        paddingLeft: 20,
    },
    btn:{
        marginTop: 35,
        alignItems:"center"
    }
})
