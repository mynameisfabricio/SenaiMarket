import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import VitrineScreen from '../screens/VitrineScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';
import PerfilScreen from '../screens/PerfilScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import SucessoScreen from '../screens/SucessoScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#FFFFFF' },
                headerShadowVisible: false,
                headerTitleStyle: { fontWeight: 'bold', fontSize: 22, color: '#1A1A1A' },
            }}
        >
            <Stack.Screen
                name="Vitrine"
                component={VitrineScreen}
                options={{ title: 'SenaiMarket' }}
            />
            <Stack.Screen
                name="Detalhes"
                component={DetalhesScreen}
                options={{
                    title: 'Detalhes',
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
}

function CartStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#FFFFFF' },
                headerShadowVisible: false,
                headerTitleStyle: { fontWeight: 'bold', fontSize: 22, color: '#1A1A1A' },
            }}
        >
            <Stack.Screen
                name="CarrinhoMain"
                component={CarrinhoScreen}
                options={{ title: 'Meu Carrinho' }}
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{ title: 'Checkout' }}
            />
            <Stack.Screen
                name="Sucesso"
                component={SucessoScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#0066FF',
                tabBarInactiveTintColor: '#A0A0A0',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    height: 75,
                    borderRadius: 25,
                    paddingBottom: 15,
                    paddingTop: 10,
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                    elevation: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? styles.activeTab : null}>
                            <Ionicons
                                name={focused ? "home" : "home-outline"}
                                size={24}
                                color={color}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Carrinho"
                component={CartStack}
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? styles.activeTab : null}>
                            <Ionicons
                                name={focused ? "cart" : "cart-outline"}
                                size={26}
                                color={color}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={focused ? styles.activeTab : null}>
                            <Ionicons
                                name={focused ? "person" : "person-outline"}
                                size={24}
                                color={color}
                            />
                        </View>
                    ),
                    headerShown: true,
                    headerTitle: 'Meu Perfil',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 22 },
                    headerShadowVisible: false,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    activeTab: {
        backgroundColor: '#F0F5FF',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
    }
});


