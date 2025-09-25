import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Header from "./components/Header";
import AddCharacterForm from "./components/AddCharacterForm";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "🧙‍♂️ Gandalf o Mago", recruited: 0 },
    { id: 2, name: "⚔️ Aragorn o Guerreiro", recruited: 1 },
    { id: 3, name: "🏹 Legolas o Arqueiro", recruited: 0 },
  ]);
  
  const [filter, setFilter] = useState("all");

  const filteredCharacters = characters.filter(character => {
    if (filter === "recruited") return character.recruited === 1;
    if (filter === "available") return character.recruited === 0;
    return true; 
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddCharacterForm characters={characters} setCharacters={setCharacters} />
    
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, filter === "all" && styles.activeFilter]}
          onPress={() => setFilter("all")}
        >
          <FontAwesome name="users" size={16} color={filter === "all" ? "#0D0D0D" : "#BF8339"} />
          <Text style={[styles.filterText, filter === "all" && styles.activeFilterText]}>
            Todos
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.filterButton, filter === "recruited" && styles.activeFilter]}
          onPress={() => setFilter("recruited")}
        >
          <FontAwesome name="star" size={16} color={filter === "recruited" ? "#0D0D0D" : "#BF8339"} />
          <Text style={[styles.filterText, filter === "recruited" && styles.activeFilterText]}>
            Recrutados
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.filterButton, filter === "available" && styles.activeFilter]}
          onPress={() => setFilter("available")}
        >
          <MaterialIcons name="bedtime" size={16} color={filter === "available" ? "#0D0D0D" : "#BF8339"} />
          <Text style={[styles.filterText, filter === "available" && styles.activeFilterText]}>
            Disponíveis
          </Text>
        </TouchableOpacity>
      </View>
      
      <CharacterCard 
        characters={filteredCharacters} 
        allCharacters={characters}
        setCharacters={setCharacters} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    marginTop: 10,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C1810",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#BF8339",
    gap: 6,
  },
  activeFilter: {
    backgroundColor: "#F2B84B",
  },
  filterText: {
    color: "#BF8339",
    fontSize: 14,
    fontWeight: "600",
  },
  activeFilterText: {
    color: "#0D0D0D",
  },
});
