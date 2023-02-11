import * as React from 'react';
import { View, StyleSheet, I18nManager, ScrollView, ScrollViewProps } from 'react-native';
import {
  Badge,
  Drawer,
  Switch,
  Text,
  TouchableRipple,
  MD2Colors,
  useTheme,
  MD3Colors,
} from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DrawerContent() {
  const insets = useSafeAreaInsets();
  const drawerPosition = React.useContext(
    React.createContext<'left' | 'right' | undefined>(undefined)
  );

  const isRight = I18nManager.getConstants().isRTL
    ? drawerPosition === 'left'
    : drawerPosition === 'right';

  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <Drawer.Section title="Preferences" style={{ flex: 1, paddingTop: insets.top + 4 }}>
      <Drawer.Item
        style={{ backgroundColor: '#64ffda' }}
        icon="star"
        label="First Item"
        onPress={() => console.log('trocous')}
      />
      <Drawer.Item icon="star" label="First Item" />
      <Drawer.Item icon="star" label="First Item" />
      <TouchableRipple onPress={() => setMenuVisible(!menuVisible)}>
        <View style={[styles.preference]}>
          <Text variant="labelLarge">Dark Theme</Text>
          <View pointerEvents="none">
            <Switch value={menuVisible} />
          </View>
        </View>
      </TouchableRipple>
    </Drawer.Section>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
  badge: {
    alignSelf: 'center',
  },
});
