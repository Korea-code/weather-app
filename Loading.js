import React from "react";
import {StyleSheet, Text, View, StatusBar } from "react-native";


export default function Loading(){
    return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.text}>Getting current weather</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 100,
        backgroundColor: "#f7d794",
    },
    text: {
        color: "black",
        fontSize: 30,
    }
})