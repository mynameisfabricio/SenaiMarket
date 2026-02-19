import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotaoCustom from '../components/BotaoCustom';
import { useCart } from '../context/CartContext';

export default function CarrinhoScreen({ navigation }) {
    const { cartItems, removeFromCart } = useCart();

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.imagem }} style={styles.itemImage} resizeMode="contain" />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.nome}</Text>
                <Text style={styles.itemPrice}>{item.preco}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeBtn}>
                <Ionicons name="trash-outline" size={22} color="#FF3B30" />
            </TouchableOpacity>
        </View>
    );

    if (cartItems.length === 0) {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Ionicons name="cart-outline" size={100} color="#EFEFEF" style={{ marginBottom: 20 }} />
                    <Text style={styles.title}>Seu carrinho está vazio</Text>
                    <Text style={styles.subtitle}>
                        Parece que você ainda não adicionou nenhum produto. Que tal conferir as novidades?
                    </Text>

                    <View style={styles.buttonContainer}>
                        <BotaoCustom
                            title="Continuar Comprando"
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
            <View style={styles.cartFooter}>
                <BotaoCustom title="Finalizar Compra" onPress={() => navigation.navigate('Checkout')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    list: {
        padding: 24,
        paddingBottom: 150, // Espaço para a Tab Bar e rodapé
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    itemImage: {
        width: 60,
        height: 60,
        marginRight: 16,
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A1A',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0066FF',
    },
    removeBtn: {
        padding: 10,
    },
    removeIcon: {
        fontSize: 20,
    },
    cartFooter: {
        position: 'absolute',
        bottom: 110, // Acima da Tab Bar flutuante
        left: 0,
        right: 0,
        padding: 24,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#EFEFEF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    icon: {
        fontSize: 80,
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        width: '100%',
    },
});
