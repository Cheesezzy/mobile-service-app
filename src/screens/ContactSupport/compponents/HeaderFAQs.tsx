import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { backIcon } from '../../../../assets/icons/icons';
import { bell } from '../../../../assets/svgs/svgs';
import { handleSwitchTheme } from '../../../../provider/themeSlice';
import { useSelector } from 'react-redux';
import colors from '../../../config/colors';

const HeaderFAQs = () => {
  const navigate = useNavigation();

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <View style={[styles.containerNav,
      {
        backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
      },
      ]}>
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
          }]}>
            FAQs
          </Text>
        </View>

        <View>
          <SvgXml
            xml={bell(theme ? colors.black : colors.darkTxt)}
            width={24} height={24} />
        </View>
      </View>
    </>
  )
}

export default HeaderFAQs

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
})

