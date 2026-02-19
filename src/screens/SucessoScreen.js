import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotaoCustom from '../components/BotaoCustom';
import { useCart } from '../context/CartContext';

export default function SucessoScreen({ navigation }) {
    const { clearCart } = useCart();

    useEffect(() => {
        // Limpa o carrinho ao finalizar com sucesso
        clearCart();
    }, []);

    const handleVoltarInicio = () => {
        // Primeiro reseta o stack do carrinho para a tela inicial
        navigation.reset({
            index: 0,
            routes: [{ name: 'CarrinhoMain' }],
        });
        // Depois navega para a Vitrine (na outra tab)
        navigation.navigate('Home', { screen: 'Vitrine' });
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Ionicons name="checkmark-circle" size={100} color="#34C759" />
                </View>
                <Text style={styles.title}>Sua compra foi realizada com sucesso</Text>

                <View style={styles.buttonContainer}>
                    <BotaoCustom
                        title="Voltar ao Início"
                        onPress={handleVoltarInicio}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    content: {
        alignItems: 'center',
        width: '100%',
    },
    iconContainer: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
        textAlign: 'center',
        lineHeight: 32,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 48,
    },
});
