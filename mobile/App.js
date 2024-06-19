import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';
import Register from './Register/index';
import UserPag from './UserPag/index';
import { AuthProvider } from './context/authProvider';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerTitle: '', headerShown: false }}
          />

          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerTitle: '', headerShown: false }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{ headerTitle: '', headerShown: false }}
          />
          <Stack.Screen
            name="userPag"
            component={UserPag}
            options={{ headerTitle: '', headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
