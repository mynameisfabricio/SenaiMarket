import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

export default function CardProduto({ produto, onPress }) {
    const { addToCart } = useCart();

    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: produto.imagem }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.nome} numberOfLines={1}>{produto.nome}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.preco}>{produto.preco}</Text>
                    <TouchableOpacity
                        style={styles.addShortcut}
                        onPress={() => addToCart(produto)}
                    >
                        <Ionicons name="add" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    imageContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        flex: 1,
    },
    nome: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: 4,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    preco: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0066FF',
    },
    addShortcut: {
        backgroundColor: '#0066FF',
        width: 32,
        height: 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
