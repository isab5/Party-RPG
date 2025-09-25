import React from "react";
import {
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { FaStar } from 'react-icons/fa'; 
import { GiNightSleep } from 'react-icons/gi';


export default function CharacterCard({ characters, setCharacters }) {

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
                <Text style={{ color: "#BF8339" }}>{item.name}</Text>
                <Text style={{ color: "#0D0D0D" }}>
                    {item.recruited ? <FaStar size={18} color="#FFD700" /> : <GiNightSleep size={18} color="#3440afff" />}
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
        <FlatList
            data={characters}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderCharacter}
            style={styles.list}
        />
    )
}


const styles = StyleSheet.create({
    list: {
        marginTop: 10,
    },
    character: {
        backgroundColor: "#F2B84B",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    characterRecruited: {
        backgroundColor: "#730E0E",
        borderColor: "#F2B84B",
        borderWidth: 2,
    },
});