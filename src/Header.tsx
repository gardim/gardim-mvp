import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { useTheme, Appbar, Switch, Menu } from 'react-native-paper';

import { PreferencesContext } from './navigation/PreferencesContext';

export type RootStackParamList = {
  App: undefined;
};

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export const Header = ({ navigation, back }: StackHeaderProps) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="bucetinha" />
      <Switch color="red" value={isThemeDark} onValueChange={toggleTheme} />
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Appbar.Action
            icon={MORE_ICON}
            onPress={() => (navigation as any as DrawerNavigationProp<any>).openDrawer()}
          />
        }>
        <></>
      </Menu>
    </Appbar.Header>
  );
};
