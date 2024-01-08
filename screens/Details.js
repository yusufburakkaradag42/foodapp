import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Details({route}) {
    const content = route.params.data
    console.log(content)
    return (
        <ScrollView style={{ backgroundColor: "#5051ac" }}>
            <View style={{
                height: 400,
                backgroundColor: "#5051ac",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image style={{
                    width: 200,
                    height: 200
                }} source={require('../assets/welcom.png')} />
            </View>

            <View style={{
                backgroundColor: 'white',
                height: 500,
                borderTopLeftRadius: 60,
                paddingHorizontal: 30,
                paddingTop: 40,
                gap: 15,
            }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        width: 80,
                        backgroundColor: "#5051ac",
                        height: 35,
                        borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,

                    }}>
                        <FontAwesome name="star" size={21} color="gold" />
                        <Text
                            style={{
                                color: 'white',
                                fonSize: 18,
                                fontWeight: 'bold',
                            }}>4.5</Text>
                    </View>
                    <Text style={{ color: "#5051ac", fontWeight: 'bold', fontSize: 25 }}>${content.price}</Text>

                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}>
                    <Text style={{ color: "black", fontWeight: '500', fontSize: 22 }}> {content.name}</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <AntDesign name="pluscircle" size={24} color="#5051ac" />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 19,
                            color: 'black'
                        }}>1</Text>
                        <AntDesign name="minuscircle" size={24} color="#5051ac" />

                    </View>

                </View>

                <Text style={{
                    fontSize: 15,
                    fontWeight: '400',
                }}>Cupidatat aliqua esse mollit ea anim dolor duis voluptate.Aute Lorem incididunt incididunt non nostrud sit. </Text>
                <Text style={{
                    color: "black",
                    fontWeight: '500',
                    fontSize: 20
                }}> Add Ons</Text>
                <View style={{
                    flexDirection: 'row',
                    gap: 20
                }}>
                    <View>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../assets/welcom.png')} />
                        <AntDesign style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }} name="pluscircle" size={24} color="green" />
                    </View>
                    <View>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../assets/welcom.png')} />
                        <AntDesign style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }} name="pluscircle" size={24} color="green" />
                    </View>
                    <View>
                        <Image style={{
                            width: 100,
                            height: 100,
                        }} source={require('../assets/welcom.png')} />
                        <AntDesign style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }} name="pluscircle" size={24} color="green" />
                    </View>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: "#5051ac",
                    height: 55,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20,
                }}>
                    <Text style={{
                        color:"white",
                        fontSize:16,
                        fontWeight:'bold',
                        }}> Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})