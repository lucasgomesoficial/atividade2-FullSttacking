import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hook/useAuth';

const App = () => {
  const navigation = useNavigation();

  const auth = useAuth();

  const { user, signout } = auth;

  const logout = () => {
    signout(() => {
      navigation.navigate('login');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Logo.png')} />
        <Text style={styles.title}>😊 Bem-vindo(a)!</Text>
        <Text style={styles.subtitle}>{user && user.nickname}</Text>
        <Text style={styles.paragraph}>
          Este app foi criado para ajudar você a ser mais sustentável e
          responsável em sua vida pessoal e profissional.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('userPag')}>
          <Text style={styles.textoBotao}>Acessar meu perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newButton} onPress={logout}>
          <Text style={styles.textoBotao}>Fechar seção</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 40,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  image: {
    width: 328,
    height: 328,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 12,
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 32,
  },
  button: {
    borderRadius: 25,
    backgroundColor: 'rgba(118, 15, 253, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    width: 297,
    marginTop: 49,
    padding: 15,
    height: 62,
  },
  newButton: {
    borderRadius: 25,
    backgroundColor: 'rgb(55, 65, 81)',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    width: 297,
    marginTop: 20,
    padding: 15,
    height: 62,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
