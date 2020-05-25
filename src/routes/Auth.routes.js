import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from '../pages/TelaInicial';

import Perfil from '../pages/Perfil';

const Stack = createStackNavigator();

export default function AuthScreen() {
  return (
    <Stack.Navigator initialRouteName="TelaInicial">
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}
