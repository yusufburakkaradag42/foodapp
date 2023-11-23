import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Category from '../components/Category'
import Banner from '../components/Banner'

export default function Home() {
    return (
        <View style={styles.viewContainer}>
            <SafeAreaView style={styles.safeContainer}>
                <Header />
                <Search />
                <Category />
                <Banner />
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,

    },
    safeContainer: {
        paddingHorizontal: 25,
        paddingTop: 60,
        gap: 20,
    }

})