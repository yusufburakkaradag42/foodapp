import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Searches from './Searches';
import Profile from './Profile';
import Cart from './Cart';
import Home from './Home';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Tabs() {


    const Tab = createBottomTabNavigator();

    return (
        //{
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <Entypo name="home" size={24} color="black" />
                        : (
                            <AntDesign name="home" size={24} color="black" />
                        )

                ),
            }}
            />


            <Tab.Screen name="Searches" component={Searches} options={{
                tabBarIcon: ({ focused }) =>
                (
                    focused ?
                        <AntDesign name="search1" size={24} color="black" />
                        : (
                            <AntDesign name="search1" size={24} color="grey" />
                        )
                ),
            }}
            />

            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({ focused }) =>
                (
                    focused ?
                        <Entypo name="shopping-cart" size={24} color="black" />
                        : (
                            <Feather name="shopping-cart" size={24} color="grey" />
                        )
                ),
            }}
            />

            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) =>
                (
                    focused ?
                        <Ionicons name="person" size={24} color="black" />
                        : (
                            <Ionicons name="person-outline" size={24} color="grey" />
                        )
                ),
            }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})