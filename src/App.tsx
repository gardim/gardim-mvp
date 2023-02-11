import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { registerRootComponent } from 'expo';
import React from 'react';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import RootStackNavigator from './Root';
import { PreferencesContext } from './navigation/PreferencesContext';

import 'react-native-gesture-handler';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  const Drawer = createDrawerNavigator();

  return (
    <PaperProvider theme={theme}>
      <PreferencesContext.Provider value={preferences}>
        <>
          <NavigationContainer theme={theme}>
            <Drawer.Navigator
              initialRouteName="In"
              screenOptions={{
                headerShown: false,
                drawerPosition: 'right',
              }}>
              <Drawer.Screen name="Root" component={RootStackNavigator} />
            </Drawer.Navigator>
          </NavigationContainer>
        </>
      </PreferencesContext.Provider>
    </PaperProvider>
  );
}

export default registerRootComponent(App);
