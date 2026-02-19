import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BotaoCustom from '../components/BotaoCustom';

export default function PerfilScreen({ navigation }) {
    const handleLogout = () => {
        // Retorna para o fluxo de autenticação resetando a pilha
        navigation.replace('Auth');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}>
                    <Ionicons name="person" size={60} color="#0066FF" />
                    <TouchableOpacity style={styles.editBadge}>
                        <Ionicons name="pencil" size={16} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.userName}>Fabrício Senai</Text>
                <Text style={styles.userEmail}>fabricio@senaimarket.com.br</Text>
            </View>

            <View style={styles.menuSection}>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Meus Pedidos</Text>
                    <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Endereços de Entrega</Text>
                    <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>Configurações</Text>
                    <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                </TouchableOpacity>
            </View>


            <View style={styles.footer}>
                <BotaoCustom
                    title="Sair da Conta"
                    type="danger"
                    onPress={handleLogout}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    profileHeader: {
        alignItems: 'center',
        paddingVertical: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    avatarContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#F0F5FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        position: 'relative',
    },
    avatarEmoji: {
        fontSize: 60,
    },
    editBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#0066FF',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    editIcon: {
        fontSize: 16,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    menuSection: {
        paddingHorizontal: 24,
        marginTop: 24,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
    },
    menuText: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1A1A1A',
    },
    chevron: {
        fontSize: 24,
        color: '#C7C7CC',
    },
    footer: {
        padding: 24,
        marginTop: 'auto',
        marginBottom: 90, // Ajuste para ficar acima da Tab Bar flutuante
    },
});


