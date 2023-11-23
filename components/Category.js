import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Category() {
    const [selected, setSelected] = useState();

    const data = [
        'All',
        'Burger',
        'Pizza',
        'Desserts',
        'Drinks',
        'Fruits',
        'Vegetables',
        'Beverages',
        'Other',
    ];

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    onPress={() => {
                        setSelected(index);
                    }}
                    activeOpacity={0.9}
                    style={styles.listView}
                >
                    <View style={[styles.viewImg, { backgroundColor: selected === index ? Colors.primary : '#E3E3E3' }]}>
                        <Image style={styles.listImg} source={require('../assets/welcom.png')} />
                    </View>
                    <Text style={[styles.listText ,{color: selected== index ? Colors.primary : "grey"}]}>{item}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    listView: {
        marginRight: 10,
    },
    listImg: {
        width: 60,
        height: 60,
    },
    viewImg: {
        // padding: 10,
        height: 70,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    listText: {
        marginTop: 5,
        textAlign: 'center',
    },
});
