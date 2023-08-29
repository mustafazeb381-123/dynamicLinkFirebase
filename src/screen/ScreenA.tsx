import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ScreenA = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>ScreenA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color:"black", fontSize:21, fontWeight:'700'

    }, 
    main: {
        flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'
    }
})

export default ScreenA