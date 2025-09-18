import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";

import Header from "./components/Header";
import AddCharacterForm from "./components/AddCharacterForm";
import CharacterCard from "./components/CharacterCard";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddCharacterForm />
      <CharacterCard />
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
});