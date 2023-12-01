import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'


export default function Banner() {
  return (
    <View style={{ gap: 15 }}>
      <Text style={styles.textBanner}>Promotions</Text>
      <View style={styles.container}>
        <View style={{ gap: 12 }}>
          <Text style={styles.containerText}>Todey's Offer</Text>
          <Text style={styles.containerTextMenu}>Free box of Fries</Text>
          <Text style={styles.containerText}>On all Orders above $150</Text>
        </View>
      <Image style={styles.viewImage} source={require('../assets/welcom.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textBanner: {
    fontSize: 20,
  },
  container: {
    backgroundColor: '#5051ac',
    height: 150,
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',

  },
  containerText: {
    fontSize: 15,
    color: 'white',

  },
  containerTextMenu: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  viewImage:{
    width: 100 ,
    height : 100 ,

  }


})