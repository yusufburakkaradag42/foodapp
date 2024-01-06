import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const Colors = {
  primary: '#482e9e',
  secondary: '#755EBB',
};



export default function Welcome() {
  const nav = useNavigation()
  return (
  <LinearGradient style={styles.linearcontainer} colors={[Colors.primary, Colors.secondary]}>
    <View style={styles.imgContainer}>
      <Image style={styles.img} source={require('../assets/welcom.png')} />
    </View>
  
      <Text style={styles.homeText}> Enjoy {'\n'} Your Food</Text>
    <TouchableOpacity 
    style={styles.touchConatiner}
    onPress={()=>{
      nav.navigate('Tabs')
    }}
    >
      <Text style={styles.touchText}>Get Started</Text>
    </TouchableOpacity>
  </LinearGradient>

  )
}

const styles = StyleSheet.create({
  linearcontainer:{
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
    imgContainer:{
    width:300 ,
    height:300,
    backgroundColor:'white',
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50, 
  },
  img:{
    width:270,
    height: 270,
  },
  homeText:{
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 55 ,
  },
  touchText:{
    fontSize: 20, 
    color:Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight:30 ,
  },
  touchConatiner:{
    backgroundColor: 'white',
    width :180,
    height: 55, 
    padding:10,
    borderRadius: 20,

  }

})