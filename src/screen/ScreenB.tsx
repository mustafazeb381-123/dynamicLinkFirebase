import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ScreenB = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>ScreenB</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'
    }, 
    text: {
        color:'black', fontSize:21, fontWeight:'700'
    }
})

export default ScreenB