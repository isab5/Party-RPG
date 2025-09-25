import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import SuccessModal from "./SuccessModal";

export default function AddCharacterForm({ characters, setCharacters }) {
  const [newCharacter, setNewCharacter] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(true); 
  }

  return (
    <SafeAreaView style={styles.inputRow}>
      <MaterialIcons name="theater-comedy" size={24} color="#BF8339" />
      <TextInput
        style={styles.input}
        placeholder="Nome do novo personagem..."
        value={newCharacter}
        onChangeText={setNewCharacter}
        onSubmitEditing={addCharacter}
      />
      <TouchableOpacity style={styles.button} onPress={addCharacter}>
        <FontAwesome name="plus" size={24} color="#BF8339" />
      </TouchableOpacity>
          <SuccessModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        message="Personagem adicionado com sucesso!"
      />
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
