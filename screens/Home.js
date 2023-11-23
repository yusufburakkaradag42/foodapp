import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export default function Home() {
    return (
        <View style={styles.viewContainer}>
            <SafeAreaView style={styles.safeContainer }>
                <Header />
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex : 1,
      
    },
    safeContainer:{
        paddingHorizontal: 25 ,
        paddingTop: 60,
    }

})