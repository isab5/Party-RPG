import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "🧙‍♂️ Gandalf o Mago", recruited: 0 },
    { id: 2, name: "⚔️ Aragorn o Guerreiro", recruited: 1 },
    { id: 3, name: "🏹 Legolas o Arqueiro", recruited: 0 },
  ]);

  const [newCharacter, setNewCharacter] = useState("");

  function addCharacter() {
    if (newCharacter.trim() === "") return;

    const newId = characters.length > 0 ? Math.max(...characters.map(c => c.id)) + 1 : 1;

    const newCharacterObj = {
      id: newId,
      name: newCharacter.trim(),
      recruited: 0,
    };

    setCharacters([newCharacterObj, ...characters]);
    setNewCharacter("");
  }

  function toggleRecruit(character) {
    const updatedCharacters = characters.map((currentChar) =>
      currentChar.id === character.id
        ? { ...currentChar, recruited: currentChar.recruited ? 0 : 1 }
        : currentChar
    );

    setCharacters(updatedCharacters);
  }

  function renderCharacter({ item }) {
    return (
      <TouchableOpacity
        style={[
          styles.character,
          item.recruited ? styles.characterRecruited : null,
        ]}
        onPress={() => toggleRecruit(item)}
        onLongPress={() => removeCharacter(item.id)}
      >
        <Text style={{ color: "#E69A28" }}>{item.name}</Text>
        <Text style={{ color: "#E69A28" }}>
          {item.recruited ? "⭐" : "💤"}
        </Text>
      </TouchableOpacity>
    );
  }

  function removeCharacter(id) {
    Alert.alert(
      "Remover Personagem",
      "Tem certeza que deseja remover este personagem?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => {
            const filteredCharacters = characters.filter(
              (character) => character.id !== id
            );
            setCharacters(filteredCharacters);
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>🏰 Minha Party RPG</Text>
      <Text style={styles.subtitle}>
        ⭐ Recrutado • 💤 Disponível • Segure para remover
      </Text>

      <View style={styles.inputRow}>
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
      </View>

      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderCharacter}
        style={styles.list}
      />
    </SafeAreaView>
  );
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
  },
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
  list: {
    marginTop: 10,
  },
  character: {
    backgroundColor: "#2C1810",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  characterRecruited: {
    backgroundColor: "#58180D",
    borderColor: "#E69A28",
    borderWidth: 2,
  },
});