import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { calender, locations, threeDots } from '../../../assets/svgs/svgs'
import colors from '../../config/colors'
import useTheme from '../../hooks/useTheme'
import MenuBar from './MenuBar'

const PendingOrderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handlePress = () => {
        setIsMenuOpen(prevState => !prevState);
    }
    const navigate = useNavigation();

    const { backgroundColor, color, theme } = useTheme();

    return (
        <View style={[{ padding: 20 }]}>

            <View style={[{
                borderRadius: 8, padding: 11, width: "100%", height: 140,
                backgroundColor: theme
                    ? colors.secondary
                    : colors.blackSmoke,
            }]}>
                <View style={[styles.firstContainer, {
                    borderBottomColor: color
                }]}>
                    <View style={{ marginBottom: 6 }}>
                        <Text style={[{ color, fontFamily: "PrimaryRegular", fontSize: 16, fontWeight: "400", lineHeight: 24 }]}>
                            kiki olalekun
                        </Text>
                        <Text style={[{ color: "#838B97", fontFamily: "PrimaryRegular", fontSize: 12, fontWeight: "400", lineHeight: 24 }]}>
                            Hair & Nail
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            zIndex: 1000,
                        }}
                        onPress={() => handlePress()}>
                        <SvgXml
                            xml={threeDots(color)}
                            width={4} height={15} />
                    </TouchableOpacity>
                </View>

                <View style={[{ display: "flex", flexDirection: "row", marginVertical: 10, alignItems: "center" }]}>
                    <SvgXml
                        xml={calender(color)}
                        width={15} height={15} />
                    <Text style={[{ color, marginLeft: 5 }]}>10:00 am, feb 15, 2023.</Text>
                </View>
                <View style={[{ display: "flex", flexDirection: "row", alignItems: "center" }]}>
                    <SvgXml
                        xml={locations(color)}
                        width={15} height={15} />
                    <Text style={{ color, marginLeft: 5 }}>13, adejoro street off dr adeniyi okota, lagos.</Text>
                </View>
            </View>
            <View style={styles.pos}>
                {isMenuOpen && <MenuBar onClose={handlePress} />}
            </View>
        </View>

    )
}

export default PendingOrderComponent

const styles = StyleSheet.create({
    firstContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
    },
    pos: {
        position: "absolute",
        top: 50,
        left: 200,

    }
})
