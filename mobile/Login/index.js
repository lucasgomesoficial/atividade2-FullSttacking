import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../Services/api';
import { useAuth } from '../hook/useAuth';

const Login = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const onSubmit = () => {
    auth.signin({ email, password: senha }, () => {
      navigation.navigate('home');
    });
  };

  // navigation.navigate('home');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Group.png')} />
        <Text style={styles.title}>Acesse sua conta</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="matilde@org.com.br"
          placeholderTextColor={'#BCBCBC'}
          selectionColor={'rgba(118, 15, 253, 1)'}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry
          placeholder="Digite sua senha"
          placeholderTextColor={'#BCBCBC'}
          selectionColor={'rgba(118, 15, 253, 1)'}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textoBotao} onPress={onSubmit}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigation.navigate('register')}>
          <Text style={styles.textoBotao}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 99,
  },
  image: {
    width: 305,
    height: 305,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 40,
  },
  input: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 17,
    paddingHorizontal: 10,
    width: 297,
    borderRadius: 30,
  },
  button: {
    borderRadius: 25,
    backgroundColor: 'rgba(118, 15, 253, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    width: 297,
    marginTop: 20,
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
    fontWeight: '600',
  },
});
