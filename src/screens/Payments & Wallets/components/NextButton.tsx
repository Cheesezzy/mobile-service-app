import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

interface Props{
    title : string
}

const NextButton = ({ title } : Props) => {
  return (
    <>
        <View style={styles.btn}>
            <Text style={styles.textBtn}>
               {title}
            </Text>
        </View>
        
    </>
  )
}

export default NextButton

const styles = StyleSheet.create({
    btn: {
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 8,
        backgroundColor:"#2776EA",
        width: 340,
        height: 56,
    },
    textBtn:{
        color: "white",
    }
})