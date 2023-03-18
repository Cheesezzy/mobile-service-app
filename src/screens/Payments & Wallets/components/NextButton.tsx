import React, { CSSProperties } from 'react'
import { Text, StyleSheet, View } from 'react-native'

interface Props{
    title : string,
    backgroundColor: string
}

const NextButton = ({ title, backgroundColor } : Props) => {
  return (
    <>
        <View style={[styles.btn, {backgroundColor}]}>
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
        width: "100%",
        height: 56,
    },
    textBtn:{
        color: "white",
    }
})