import React, { useState } from "react";
import {
    Text, StyleSheet,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}>🏰 Minha Party RPG</Text>
            <Text style={styles.subtitle}>
                ⭐ Recrutado • 💤 Disponível • Segure para remover
            </Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A0E0A",
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "#E69A28",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#E69A28",
        marginBottom: 20,
    }
});