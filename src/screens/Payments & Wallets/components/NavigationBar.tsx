import React, { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { arrowIcon } from '../../../../assets/icons/icons';

interface Props {
    title: string;
}

const NavigationBar = ({ title }: Props) => {

    const navigate = useNavigation();
    return (

        <View style={styles.nav}>
            <TouchableOpacity
                style={{
                    zIndex: 1000,
                }}
                onPress={() => {
                    return navigate.goBack();
                }}>
                <SvgXml xml={arrowIcon()} width={24} height={24} />
            </TouchableOpacity>

            <View style={styles.text}>
                <Text style={styles.navText}>{title}</Text>
            </View>
        </View>
    );
}

export default NavigationBar

const styles = StyleSheet.create({
    text: {
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        bottom: "50%",
    },
    navText: {
        fontWeight: "600",
        fontSize: 24,
        fontFamily: "PrimarySemiBold",
        lineHeight: 32,
        textAlign: "center",
        position: "absolute",
    },
    nav: {
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: 24,
    },
})