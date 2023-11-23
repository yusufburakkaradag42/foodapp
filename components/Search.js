import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';



export default function Search() {
    return (
        <View style={styles.searchView}>
            <Feather name="search" size={24} color="black" />
            <TextInput style={styles.ınputView} placeholder='Search' />
        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        backgroundColor: '#E3E3E3',
        height: 60,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 15,
    },
    ınputView: {
        // backgroundColor: 'red',
        flex: 0.9,
        fontSize: 17 ,
        

    }
})