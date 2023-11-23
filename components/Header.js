import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Menu</Text>
      <Image style={styles.headerImg} source={require("../assets/welcom.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize : 35 ,

    },
    headerView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor:'red',
      alignItems: 'center',
    },
    headerImg:{
      width: 50 ,
      height: 50 ,
    }

})