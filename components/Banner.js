import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Banner() {
  return (
    <View style={{gap:15}}>
      <Text style={styles.textBanner}>Promotions</Text>
      <View style ={styles.container}>
        <Text style={styles.containerText }>Todey's Offer</Text>
      </View>
      <View>
      <Text style={styles.containerText }>Todey's Offer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textBanner:{
      fontSize: 20 ,
    },
    container:{
      backgroundColor: '#5051ac' ,
     height : 150 ,
     borderRadius: 10,
     paddingHorizontal: 20 ,
     flexDirection: 'row',
     paddingVertical: 20 ,




    },
    containerText:{
      fontSize: 15 ,
      color : 'white',

    }

    
})