import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
      <Text style={styles.headerText}>Menu</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize : 35 ,

    }
})