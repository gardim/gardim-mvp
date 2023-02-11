import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, FAB } from 'react-native-paper';

export default function IdentificationMethod({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text variant="titleMedium" style={{ textAlign: 'center' }}>
          {' '}
          Selecione o método que deseja seguir para identificar sua plantinha!
        </Text>
        <FAB
          icon="camera"
          label="Identificar por imagem"
          onPress={() => navigation.navigate('Configuration')}
          size="medium"
          visible
        />
        <Text variant="titleMedium"> ou </Text>
        <FAB
          icon="clipboard-edit-outline"
          label="Inserir manualmente"
          onPress={() => navigation.navigate('Configuration')}
          visible
          size="medium"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 8,
    justifyContent: 'center',
  },
  row: {
    flex: 0.5,
    marginBottom: 8,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  fabVariant: {},
});
