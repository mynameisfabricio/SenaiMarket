import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import BotaoCustom from '../components/BotaoCustom';

export default function CheckoutScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleFinalizar = () => {
        if (!nome.trim() || !telefone.trim() || !endereco.trim()) {
            Alert.alert('Atenção', 'Por favor, preencha todos os dados de entrega.');
            return;
        }
        navigation.navigate('Sucesso');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Dados de Entrega</Text>
                <Text style={styles.subtitle}>Preencha as informações abaixo para finalizar seu pedido.</Text>

                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nome Completo</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Telefone / WhatsApp</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="85988889999"
                            keyboardType="phone-pad"
                            value={telefone}
                            onChangeText={setTelefone}
                            maxLength={11}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Endereço Completo</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Rua, número, bairro e cidade"
                            multiline
                            numberOfLines={3}
                            value={endereco}
                            onChangeText={setEndereco}
                        />
                    </View>
                </View>

                <View style={styles.footer}>
                    <BotaoCustom title="Confirmar Pedido" onPress={handleFinalizar} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: 24,
        paddingBottom: 120,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 32,
    },
    form: {
        flex: 1,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F8F9FA',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#1A1A1A',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    footer: {
        marginTop: 40,
    },
});
