import React from 'react';
import { Appbar } from 'react-native-paper';

export type RootStackParamList = {
  App: undefined;
};

export const TestHeaderCarousel = () => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => console.log('apertou mizeravo')} />
      <Appbar.Content title="FOI DESGRAÇA" style={{ alignItems: 'center' }} />
      <Appbar.Action icon="arrow-right" onPress={() => console.log('mizeravo apertou')} />
    </Appbar.Header>
  );
};
