import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Alert } from 'react-native';
import BotaoCustom from '../components/BotaoCustom';
import { useCart } from '../context/CartContext';

export default function DetalhesScreen({ route }) {
    const { produto } = route.params;
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(produto);
        Alert.alert('Sucesso', `${produto.nome} foi adicionado ao seu carrinho!`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.imageCard}>
                    <Image
                        source={{ uri: produto.imagem }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.nome}>{produto.nome}</Text>
                    <Text style={styles.preco}>{produto.preco}</Text>

                    <View style={styles.divider} />

                    <Text style={styles.sectionTitle}>Especificações Técnicas</Text>
                    <Text style={styles.descricao}>
                        {produto.descricao}
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <BotaoCustom title="Adicionar ao Carrinho" onPress={handleAddToCart} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        padding: 24,
        paddingBottom: 100, // Espaço para a Tab Bar flutuante
    },
    imageCard: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: '#F8F9FA',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#EFEFEF',
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
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 8,
    },
    preco: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0066FF',
        marginBottom: 24,
    },
    divider: {
        height: 1,
        backgroundColor: '#EFEFEF',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 12,
    },
    descricao: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
        marginBottom: 20,
    },
    footer: {
        padding: 24,
        paddingBottom: 40, // Espaço extra para não ficar colado na Tab Bar
        marginBottom: 90, // Eleva o botão para ficar acima da Tab Bar flutuante
        borderTopWidth: 1,
        borderTopColor: '#EFEFEF',
        backgroundColor: '#FFFFFF',
    },
});

