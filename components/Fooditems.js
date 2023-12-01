import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function Fooditems() {

    const food = [
        {
            id: 1,
            name: "Chciken",
            price: 100,
            
        },
        {
            id: 2,
            name: 'Pizza',
            price: 100,
            
        },
        {
            id: 3,
            name: "Burger",
            price: 100,
            
        },
        {
            id: 4,
            name: "Sandwich",
            price: 100,
           
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
                    <View style={styles.dataViev}>

                        <Image style={{ width: 85, height: 85 ,  alignSelf:'center' }} source={require("../assets/welcom.png")} />
                        <Text style={{fontSize: 20 , textAlign:'center'}}>{item.name}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                            <Text style={{color:'#5051ac',fontWeight:'bold', fontSize:18 }}>${item.price}</Text>
                            <Ionicons name="ios-add-circle" size={24} color="green" />
                        </View>

                    </View>

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