import React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { PRODUTOS } from '../data/produtos';
import CardProduto from '../components/CardProduto';

export default function VitrineScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <FlatList
                data={PRODUTOS}
                renderItem={({ item }) => (
                    <CardProduto
                        produto={item}
                        onPress={() => navigation.navigate('Detalhes', { produto: item })}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    list: {
        padding: 20,
        paddingBottom: 40,
    },
});

