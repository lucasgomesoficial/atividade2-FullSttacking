import { AsyncStorage } from 'react-native';

export async function setToLocalStorage(key, obj) {
  const jsonString = JSON.stringify(obj);
  await AsyncStorage.setItem(key, jsonString);
}

export async function getFromLocalStorage(key) {
  const jsonString = await AsyncStorage.getItem(key);
  const userAuth = jsonString ? JSON.parse(jsonString) : null;
  return { userAuth };
}

export async function clearFromLocalStorage() {
  await AsyncStorage.clear();
}
