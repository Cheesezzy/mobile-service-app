import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import ServiceData from './compponents/ServiceData';
import TransactionData from './compponents/TransactionData';
import GeneralData from './compponents/GeneralData';
import HeaderFAQs from './compponents/HeaderFAQs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import General from './compponents/General';
import Transaction from './compponents/Transaction';
import Service from './compponents/Service';



const Tab = createMaterialTopTabNavigator();


const FAQs = () => {

  return (
    <>
      <HeaderFAQs />


      <Tab.Navigator>
        <Tab.Screen name="General">
          {() => GeneralData.map((question) => (
            <General key={question.id} {...question} />
          ))}
        </Tab.Screen>

        <Tab.Screen name="Transaction">
          {() => TransactionData.map((question) => (
            <Transaction key={question.id} {...question} />
          ))}
        </Tab.Screen>

        <Tab.Screen name="Service">
          {() => ServiceData.map((question) => (
            <Service key={question.id} {...question} />
          ))}
        </Tab.Screen>

      </Tab.Navigator>
    </>
  )
}

export default FAQs

const styles = StyleSheet.create({

})


