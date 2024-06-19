import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hook/useAuth';

const Cadastro = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [nickname, setNickanme] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  const auth = useAuth();

  const handleCadastro = () => {
    auth.createdUser(
      { name, nickname, email, password, confirmPassword, image },
      () => {
        navigation.navigate('login');
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/Group.png')} />
      </View>
      <Text style={styles.title}>Crie sua conta</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Matilde Jon Doe"
        placeholderTextColor={'#BCBCBC'}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNickanme(text)}
        value={nickname}
        placeholder="Matilde"
        placeholderTextColor={'#BCBCBC'}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="matilde@org.com.br"
        placeholderTextColor={'#BCBCBC'}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Digite sua senha"
        placeholderTextColor={'#BCBCBC'}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="Confirme sua senha"
        placeholderTextColor={'#BCBCBC'}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setImage(text)}
        value={image}
        placeholder="https://avatar.com/image.png"
        placeholderTextColor={'#BCBCBC'}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonVoltar}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;

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
    marginBottom: 5,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginVertical: 20,
  },
  input: {
    height: 45,
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
    width: 297,
    marginTop: 10,
    padding: 15,
    height: 50,
  },
  buttonVoltar: {
    borderRadius: 25,
    backgroundColor: 'rgb(55, 65, 81)',
    width: 297,
    marginTop: 10,
    padding: 15,
    height: 50,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
