import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import BotaoCustom from '../components/BotaoCustom';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        if (!email.trim() || !senha.trim()) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos para entrar.');
            return;
        }
        // Usa navigation.replace para resetar a pilha e impedir retorno ao Login
        navigation.replace('Main');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={styles.header}>
                        <Text style={styles.logo}>SenaiMarket</Text>
                        <Text style={styles.subtitle}>Sua melhor experiência de compra</Text>
                    </View>

                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor="#999"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                        />

                        <BotaoCustom title="Entrar" onPress={handleLogin} />

                        <TouchableOpacity style={styles.forgotPass}>
                            <Text style={styles.forgotPassText}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

// Adicionando TouchableOpacity localmente se necessário para o "Esqueceu a senha?"
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 48,
    },
    logo: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#0066FF',
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
    form: {
        width: '100%',
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#F5F7FA',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        color: '#1A1A1A',
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    forgotPass: {
        alignItems: 'center',
        marginTop: 16,
    },
    forgotPassText: {
        color: '#0066FF',
        fontSize: 14,
        fontWeight: '600',
    },
});

