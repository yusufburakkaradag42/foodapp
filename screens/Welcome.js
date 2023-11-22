import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Welcome() {
  return (
  <LinearGradient style={{ flex: 1 }} colors={[Colors.primary, Colors.secondary]} >

  </LinearGradient>

  )
}

const styles = StyleSheet.create({

})