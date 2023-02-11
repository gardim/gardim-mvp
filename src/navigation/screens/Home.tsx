import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, FAB } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.fabVariant}>
          <FAB
            icon="plus"
            onPress={() => navigation.navigate('Configuration')}
            visible
            style={[styles.fabStyle]}
          />
          <Text variant="bodyLarge">Adicione sua primeira planta</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 4,
    justifyContent: 'center',
  },
  fabStyle: {
    margin: 0,
  },
  row: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabVariant: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
