import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderFAQs from './compponents/HeaderFAQs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import General from './compponents/General';
import Transaction from './compponents/Transaction';
import Service from './compponents/Service';
import useTheme from '../../hooks/useTheme';
import colors from '../../config/colors';



const Tab = createMaterialTopTabNavigator();


const FAQs = () => {

  const { backgroundColor, color, theme } = useTheme();


  return (
    <>
      <HeaderFAQs title='FAQs' />

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: theme
              ? colors.secondary
              : colors.blackSmoke,
          },
          tabBarLabelStyle: {
            color
          }
        }}
      >
        <Tab.Screen
          name="General"
          component={General}
          options={{
            tabBarLabel: 'General',
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarLabel: 'Transaction',
          }}
        />
        <Tab.Screen
          name="Service"
          component={Service}
          options={{
            tabBarLabel: 'Service',

          }}
        />
      </Tab.Navigator>

    </>
  )
}

export default FAQs

const styles = StyleSheet.create({

})

