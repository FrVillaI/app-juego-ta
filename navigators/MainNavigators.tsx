import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import InicioSecionScreen from "../screens/InicioSecionScreen";
import RegistroScreen from "../screens/RegistroScreen";
import JuegoScreen from "../screens/JuegoScreen";
import ListaPuntuacionScreen from "../screens/ListaPuntuacionScreen";
import PerfilScreen from "../screens/PerfilScreen";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ComJueScree from "../screens/ComJueScree";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: "Welcome",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen
        name="Inciar_Secion"
        component={InicioSecionScreen}
        options={{
          title: "Iniciar Sesión",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Registro"
        component={RegistroScreen}
        options={{
          title: "Registro",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7CBA45',
        tabBarInactiveTintColor: '#45BAAF',
        tabBarStyle: {
          backgroundColor: '#000000',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Juego"
        component={JuegoScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="puzzle-piece" size={24} color="#F0EAD6" />
          ),
        }}
      />
      <Tab.Screen
        name="Puntuacion"
        component={ListaPuntuacionScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="aliwangwang" size={24} color="#F0EAD6" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="pied-piper-pp" size={24} color="#F0EAD6" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TopTabNavigator() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}