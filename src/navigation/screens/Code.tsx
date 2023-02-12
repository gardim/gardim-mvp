import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Text } from 'react-native-paper';

const CELL_COUNT = 6;

export default function Code({ navigation }) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onPress = (text) => {
    console.log(text);
    navigation.navigate('Nome');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text variant="titleMedium" style={{ textAlign: 'center' }}>
          {' '}
          Digite o código do componente
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="numeric"
          textContentType="oneTimeCode"
          onEndEditing={() => onPress(value)}
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0.5,
    padding: 32,
    justifyContent: 'center',
  },
  row: {
    flex: 0.5,
    marginBottom: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fabVariant: {
    marginTop: 40,
  },
  focusCell: {
    borderColor: '#000',
  },
  cell: {
    width: 40,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    marginHorizontal: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  codeFieldRoot: { margin: 20 },
});
