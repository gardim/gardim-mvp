import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';

import { Header } from './Header';
import Configuration from './navigation/screens/Configuration';
import Home from './navigation/screens/Home';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Configuration" component={Configuration} />
    </Stack.Navigator>
  );
}
