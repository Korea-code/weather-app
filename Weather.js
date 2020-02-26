import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName: "weather-lightning-rainy",
        gradient: ["#2C3E50", "#4CA1AF"],
        title: "Thunderstorm",
        subtitle: "It's dangerous out of the roof.",
    },
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ["#BA5370", "#F4E2D8"],
        title: "Drizzle",
        subtitle: "You don't need an umbrella. May be...",
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#136a8a", "#267871"],
        title: "Rain",
        subtitle: "It's rainnnnnnnnnnnnniiiiiiiiiiing!",
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#4B79A1", "#283E51"],
        title: "Snow",
        subtitle: "I don't need an umbrella.",
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#EECDA3", "#EF629F"],
        title: "Clear",
        subtitle: "",
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ["#2980b9", "#2c3e50"],
        title: "Clouds",
        subtitle: "It's cool outside",
    },
    Mist:{
        iconName: "weather-fog",
        gradient: ['#4c669f', '#192f6a'],
        title: "Mist",
        subtitle: "Let's go on a sunny trip.",
    },
    Smoke:{
        iconName: "weather-fog",
        gradient: ["#0B486B", "#0B486B"],
        title: "Smoke",
        subtitle: "Hey, Did you smoke?",
    },
    Haze:{
        iconName: "weather-fog",
        gradient: ["#5A3F37", "#2C7744"],
        title: "Haze",
        subtitle: "Haze Haze Haze Haze",
    },
    Dust:{
        iconName:"weather-fog",
        gradient: ["#2C3E50", "#FD746C"],
        title: "Dust",
        subtitle: "Dust is dirty",
    },
    Fog:{
        iconName: "weather-fog",
        gradient: ["#2c3e50", "#3498db"],
        title: "Fog",
        subtitle: "Fog calls frogs",
    },
    Sand:{
        iconName: "weather-fog",
        gradient: ["#FFB75E", "#ED8F03"],
        title: "Sand",
        subtitle: "Is there Dessert?",
    },
    Ash:{
        iconName: "weather-fog",
        gradient: ["#2C3E50", "#FD746C"],
        title: "Ash",
        subtitle: "It's burning!! Be careful!",
    },
    Squall:{
        iconName: "weather-pouring",
        gradient: ["#fd746c", "#ff9068"],
        title: "Squall",
        subtitle: "Don't go outside",
    },
    Tornado:{
        iconName: "weather-hurricane",
        gradient: ['#4c669f', '#192f6a'],
        title: "Tornado",
        subtitle: "Let's Play Outside!!!!",
    },
}


export default function Weather({temp, condition, location}) {
    return (
            <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white'/>
                    <Text style={styles.temp}>{temp}º</Text>
                    <Text style={styles.location}>{location}</Text>
                </View>   
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired,
    name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: 'white',
        marginBottom: 10,
    },
    title: {
        color:"white",
        fontWeight: "400",
        fontSize: 42,
        marginBottom: 12,
    },
    subtitle:{
        color:"white",
        fontWeight: "400",
        fontSize: 24,
    },
    textContainer:{
        alignItems: "flex-start",
        paddingHorizontal: 50,
    },
    location:{
        color:"white",
        fontWeight: "400",
        fontSize: 24,
    }
});