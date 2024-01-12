import { Alert, Button, StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config'; 
const backgroundImage = require('../assets/fondo_tetris.jpg');
const logoImage = require('../assets/logo.png');

export default function LoginScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, SetContrasenia] = useState('');

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Tabs');
      
        setCorreo('');
        SetContrasenia('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case 'auth/invalid-credential':
            Alert.alert('Error', 'Credenciales Incorrectas');
            break;

          case 'auth/missing-password':
            Alert.alert('Error', 'Credenciales Perdidas');
            break;

          default:
            Alert.alert('Error', errorMessage);
            break;
        }
      });
  }

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <Image source={logoImage} style={styles.logoImage} />

        <TextInput
          style={styles.input}
          placeholder='Ingresa tu Email'
          keyboardType='email-address'
          onChangeText={(texto) => setCorreo(texto)}
          value={correo}
        />
        <TextInput
          style={styles.input}
          placeholder='Ingresa tu Contraseña'
          onChangeText={(texto) => SetContrasenia(texto)}
          value={contrasenia}
          secureTextEntry={true}
        />

        <View style={styles.buttonContainer}>
          <Button title='Iniciar sesión' onPress={() => login  ()} color='#c70f0f' />
          <View style={styles.buttonSpacer} />
          <Button title='Registrarse' onPress={() => navigation.navigate('Registro')} color='#0fc73a' />
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#ffffff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoImage: {
    width: 300,
    height: 80,
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    opacity: 0.8,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonSpacer: {
    width: 16,
  },
});