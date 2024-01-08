import { StyleSheet, Text, View, FlatList, Image ,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Fooditems() {
    const nav = useNavigation()
    const food = [
        {
            id: 1,
            name: "Chciken",
            price: 100,
            
        },
        {
            id: 2,
            name: 'Pizza',
            price: 50,
            
        },
        {
            id: 3,
            name: "Burger",
            price: 80,
            
        },
        {
            id: 4,
            name: "Sandwich",
            price: 35,
           
        }
    ]
    return (
        <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 20 }}>Popular</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={food}
                renderItem={({ item, index }) => (
                    <TouchableOpacity 
                    style={styles.dataViev}
                    onPress={()=>
                        nav.navigate('Details',{data: item})
                     }
                    >

                        <Image style={{ width: 85, height: 85 ,  alignSelf:'center' }} source={require("../assets/welcom.png")} />
                        <Text style={{fontSize: 20 , textAlign:'center'}}>{item.name}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                            <Text style={{color:'#5051ac',fontWeight:'bold', fontSize:18 }}>${item.price}</Text>
                            <Ionicons name="ios-add-circle" size={24} color="green" />
                        </View>

                    </TouchableOpacity>

                )
                }

            />
        </View>
    )
}

const styles = StyleSheet.create({

    dataViev: {
        backgroundColor: '#E3E3E3',
        width: 150,
        height: 200,
        marginRight: 20,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 10,
      
        

    }


})