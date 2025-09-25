import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SuccessModal({ visible, onClose, message }) {
    return (
        <Modal
            animationType="fade"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.successIcon}><FontAwesome name="check-circle" size={40} color="#4BB543" /></Text>
                    <Text style={styles.title}>Sucesso!</Text>
                    <Text style={styles.message}>{message || 'Ação realizada com sucesso.'}</Text>
                    <TouchableOpacity style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: { 
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalContainer: { 
        backgroundColor: '#0D0D0D', 
        borderRadius: 16, 
        padding: 28, 
        alignItems: 'center', 
        minWidth: 280, 
        elevation: 4 
    },
    successIcon: { 
        fontSize: 48, 
        marginBottom: 10 
    },
    title: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 8, 
        color: '#4BB543' 
    },
    message: { 
        fontSize: 16, 
        textAlign: 'center', 
        marginBottom: 18, 
        color: '#fff' 
    },
    button: { 
        backgroundColor: '#4BB543', 
        borderRadius: 8, 
        paddingVertical: 10, 
        paddingHorizontal: 32 
    },
    buttonText: { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16 
    },
});