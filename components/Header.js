import React, { useState } from "react";
import {
    Text, StyleSheet,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}> <MaterialIcons name="castle" size={30} color="#BF8339" /> Minha Party RPG</Text>
            <Text style={styles.subtitle}>
                <FontAwesome name="star" size={20} color="#BF8339" /> Recrutado • <MaterialIcons name="bedtime" size={18} color="#6fa1fdff" /> Disponível • Segue para remover
            </Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#F2B84B",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#F2B84B",
        marginBottom: 20,
    }
});