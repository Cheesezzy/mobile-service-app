import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Advanced from './Payments & Wallets/components/Ads/Advanced'
import Basic from './Payments & Wallets/components/Ads/Basic'
import NavigationBar from './Payments & Wallets/components/NavigationBar'
import Premium from './Payments & Wallets/components/Ads/Premium'
import colors from '../config/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'


const AdsScreen = ({navigation} : any) => {

    return (
        <ScrollView>
            <View style={styles.nav}>
                <NavigationBar title='Ads' />
            </View>

            <View style={styles.container}>

                <Text style={styles.text}>
                    Select the ad package that suit your business and  goes along with your business goals
                </Text>

                <Basic />

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Ads Component")}}>
                    <Advanced />
                </TouchableOpacity>

                <Premium />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        margin: 24,
    },
    nav: {
        justifyContent: "center",
    },
    text: {
        color: colors.greyMidDark,
        width: 342,
        height: 48,
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24,
    }

})

export default AdsScreen
