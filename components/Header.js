import React, { useState } from "react";
import {
    Text, StyleSheet,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GiCastle } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa'; 
import { GiNightSleep } from 'react-icons/gi';

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}> <GiCastle size={40} color="#BF8339" /> Minha Party RPG</Text>
            <Text style={styles.subtitle}>
                <FaStar size={18} color="#FFD700" /> Recrutado • <GiNightSleep size={18} color="#6ab0f1ff" /> Disponível • Segure para remover
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