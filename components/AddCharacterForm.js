import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

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
      <TextInput
        style={styles.input}
        placeholder="🎭 Nome do novo personagem..."
        value={newCharacter}
        onChangeText={setNewCharacter}
        onSubmitEditing={addCharacter}
      />
      <TouchableOpacity style={styles.button} onPress={addCharacter}>
        <Text style={styles.buttonText}>⚔️</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#2C1810",
    color: "#E69A28",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#58180D",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#E69A28",
    fontSize: 18,
  },
});
