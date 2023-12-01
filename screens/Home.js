import { StyleSheet, Text, View, SafeAreaView ,ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Category from '../components/Category'
import Banner from '../components/Banner'
import Fooditems from '../components/Fooditems'

export default function Home() {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
         <SafeAreaView style={styles.safeContainer}>
                <Header />
                <Search />
                <Category />
                <Banner />
                <Fooditems />
        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
 
    safeContainer: {
        paddingHorizontal: 25,
        paddingTop: 60,
        gap: 20,
    }

})