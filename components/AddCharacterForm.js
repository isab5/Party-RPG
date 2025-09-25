import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LuSwords } from 'react-icons/lu';
import { FaMasksTheater } from 'react-icons/fa6';

export default function AddCharacterForm({ characters, setCharacters }) {
  const [newCharacter, setNewCharacter] = useState("");

  function addCharacter() {
    if (newCharacter.trim() === "") return;

    const newId =
      characters.length > 0 ? Math.max(...characters.map((c) => c.id)) + 1 : 1;

    const newCharacterObj = {
      id: newId,
      name: newCharacter.trim(),
      recruited: 0,
    };

    setCharacters([newCharacterObj, ...characters]);
    setNewCharacter("");
  }
  return (
    <SafeAreaView style={styles.inputRow}>
      <FaMasksTheater size={24} color="#BF8339" />
      <TextInput
        style={styles.input}
        placeholder="Nome do novo personagem..."
        value={newCharacter}
        onChangeText={setNewCharacter}
        onSubmitEditing={addCharacter}
      />
      <TouchableOpacity style={styles.button} onPress={addCharacter}>
        <Text style={styles.buttonText}>{<LuSwords size={24} color="#BF8339" />}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#2C1810",
    color: "#BF8339",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#730E0E",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#BF8339",
    fontSize: 18,
  },
});
