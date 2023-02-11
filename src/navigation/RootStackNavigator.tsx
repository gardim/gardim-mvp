import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';

import { Header } from './Header';
import { Carousel } from './screens/Carousel';
import Configuration from './screens/Configuration';
import Home from './screens/Home';
import IdentificationMethod from './screens/IdentificationMethod';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Suas Plantas"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}>
      <Stack.Screen name="Suas Plantas" component={Home} />
      <Stack.Screen name="Configuration" component={Configuration} />
      <Stack.Screen name="Carousel" component={Carousel} />
      <Stack.Screen name="Identifique sua planta" component={IdentificationMethod} />
    </Stack.Navigator>
  );
}
