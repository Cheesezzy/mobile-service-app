import React, { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { backIcon } from '../../../assets/icons/icons';
import { handleSwitchTheme } from '../../../provider/themeSlice';
import { useSelector } from 'react-redux';
import colors from '../../config/colors';
import { bell, character, halfArrow } from '../../../assets/svgs/svgs';
import { FlipInEasyX } from 'react-native-reanimated';
import NextButton from '../Payments & Wallets/components/NextButton';

interface Props {
    navigation: any,
}

const ContactSupport = ({ navigation }: Props) => {
    const selector: any = useSelector(handleSwitchTheme);
    const theme = selector.payload.theme.value;

    const navigate = useNavigation();

    return (
        <>
            <View
                style={[styles.containerNav,
                {
                    backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
                },
                ]}
            >
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

                <View>
                    <Text style={[styles.text, {
                        color: theme ? colors.black : colors.darkTxt,
                    }]}> Contact Support
                    </Text>
                </View>

                <View>
                    <SvgXml
                        xml={bell(theme ? colors.black : colors.darkTxt)}
                        width={24} height={24} />
                </View>
            </View>

            <ScrollView>

                <View style={styles.containerScroll}>
                    <View style={styles.conAde}>
                        <Text style={styles.textAde}> Hi Ade </Text>
                        <Text style={styles.textHiAde}> Hi Ade, how can we help you today?</Text>
                    </View>
                    <View style={styles.conCharacter}>
                        <SvgXml
                            xml={character()}
                            width={130} height={132} />
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.conBody}>
                        <Text style={styles.frequently}> Frequently Asked Questions </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("FAQs")}>
                            <Text style={styles.viewAll}>View All</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.question}>
                        <Text style={styles.qText}> How do I sign up as a service provider? </Text>
                        <SvgXml
                            xml={halfArrow()}
                            width={9} height={17} />
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.qText}> What is a Rete wallet? </Text>
                        <SvgXml
                            xml={halfArrow()}
                            width={9} height={17} />
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.qText}> Is it possible to have two accounts? </Text>
                        <SvgXml
                            xml={halfArrow()}
                            width={9} height={17} />
                    </View>

                    <View style={styles.question}>
                        <Text style={styles.qText}> Is my Rete wallet balance secure? </Text>
                        <SvgXml
                            xml={halfArrow()}
                            width={9} height={17} />
                    </View>

                </View>

                <View style={styles.btn}>
                    <Text style={styles.help}> Need more help? </Text>

                    <NextButton title='Contact support' backgroundColor={colors.primary} />

                </View>



            </ScrollView>


        </>
    )
}

export default ContactSupport

const styles = StyleSheet.create({
    containerNav: {
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 24,
    },
    text: {
        fontWeight: "600",
        fontSize: 24,
        fontFamily: "PrimarySemiBold",

    },

    containerScroll: {
        marginTop: 15,
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.primary,
    },
    conAde: {
        width: 240,
        height: 55,
        marginVertical: 45,
        marginLeft: 10,
    },
    textAde: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        fontFamily: "PrimarySemiBold",

    },
    textHiAde: {
        color: "white",
    },
    conCharacter: {
        marginTop: 12,
    },
    viewAll: {
        fontFamily: "PrimaryRegular",
        fontSize: 12,
        color: colors.greyMain,
        textDecorationLine: "underline",
    },
    container: {
        borderRadius: 8,
        backgroundColor: "white",
        margin: 24,
        padding: 16,
        width: 350,
        height: 450,
    },
    conBody: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,

    },

    frequently: {
        fontFamily: "PrimaryRegular",
        fontSize: 16,
        fontWeight: "400",
        marginBottom: 10,
    },
    question: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        borderBottomColor: "#CED1D5",
        borderBottomWidth: 1,
        paddingBottom: 16,

    },
    qText: {
        fontFamily: "PrimaryRegular",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 24,
    },
    help: {
        ontFamily: "PrimaryRegular",
        fontSize: 14,
        color: colors.greyMain,
        alignSelf: "center",
        height: 24,
    },
    btn: {
        margin: 24,
    }
})
