import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {item} from "../components/Context";


export default function Details({ route }) {
    const { myBag, setmyBag } = React.useContext(item);
    const [num, setnum] = useState(1);
    const nav = useNavigation();
    const content = route.params.data
    //   console.log(content)
    return (
        <ScrollView style={{ backgroundColor: "#98942C" }}>
            <View
                style={{
                    height: 400,
                    backgroundColor:"#98942C",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    style={{ width: 250, height: 250 }}
                    source={require("../assets/welcom.png")}
                />
            </View>

            <View
                style={{
                    height: 500,
                    borderTopLeftRadius: 60,
                    backgroundColor: "white",
                    paddingHorizontal: 30,
                    paddingTop: 40,
                    gap: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            width: 80,
                            backgroundColor: "#98942C",
                            height: 35,
                            borderRadius: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 10,
                        }}
                    >
                        <FontAwesome name="star" size={21} color="gold" />
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                            4.5
                        </Text>
                    </View>

                    <Text
                        style={{
                            color: "#98942C",
                            fontWeight: "bold",
                            fontSize: 24,
                        }}
                    >
                        {content.price} $
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "black",
                            fontWeight: "500",
                            fontSize: 22,
                        }}
                    >
                        {content.name}
                    </Text>

                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <AntDesign
                            onPress={() => {
                                num == 4 ? setnum(4) : setnum(num + 1);
                            }}
                            name="pluscircle"
                            size={24}
                            color={"#98942C"}
                        />
                        <Text style={{ fontWeight: "bold", fontSize: 19, color: "black" }}>
                            {num}
                        </Text>
                        <AntDesign
                            onPress={() => {
                                num == 1 ? setnum(1) : setnum(num - 1);
                            }}
                            name="minuscircle"
                            size={24}
                            color={"#98942C"}
                        />
                    </View>
                </View>

                <Text style={{ fontSize: 15, fontWeight: "400" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci
                    mollitia incidunt eos fuga quas!
                </Text>

                <Text
                    style={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: 20,
                    }}
                >
                    Add Ons
                </Text>
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <View>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require("../assets/welcom.png")}
                        />
                        <AntDesign
                            style={{ position: "absolute", bottom: 0, right: 0 }}
                            name="pluscircle"
                            size={24}
                            color="green"
                        />
                    </View>
                    <View>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require("../assets/welcom.png")}
                        />
                        <AntDesign
                            style={{ position: "absolute", bottom: 0, right: 0 }}
                            name="pluscircle"
                            size={24}
                            color="green"
                        />
                    </View>
                    <View>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require("../assets/welcom.png")}
                        />
                        <AntDesign
                            style={{ position: "absolute", bottom: 0, right: 0 }}
                            name="pluscircle"
                            size={24}
                            color="green"
                        />
                    </View>
                </View>

                {myBag.includes(content) ? (
                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: "red",
                            height: 55,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
                            Added to CART
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => {
                            setmyBag([...myBag, content]);
                        }}
                        style={{
                            backgroundColor: "#98942C",
                            height: 55,
                            borderRadius: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 20,
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    )
}

