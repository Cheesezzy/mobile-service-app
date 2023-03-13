import React, { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { backIcon } from '../../../../assets/icons/icons';
import { handleSwitchTheme } from '../../../../provider/themeSlice';
import { useSelector } from 'react-redux';
import colors from '../../../config/colors';

interface Props {
    title: string;
}

const NavigationBar = ({ title }: Props) => {

    const selector: any = useSelector(handleSwitchTheme);
    const theme = selector.payload.theme.value;

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
                <SvgXml
                    xml={backIcon(theme ? colors.black : colors.darkTxt)}
                    width={24} height={24} />
            </TouchableOpacity>

            <View style={styles.text}>
                <Text style={[styles.navText, {
                    color: theme ? colors.black : colors.darkTxt,

                }]}>{title}</Text>
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