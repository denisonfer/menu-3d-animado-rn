import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Perfil from '../pages/Perfil';

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}
