import React from 'react';
import { Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const StateRoute = () => <></>;

const ClientRoute = () => <Text>Albums</Text>;

const SettingRoute = () => <Text>Recents</Text>;

const LogoutRoute = () => <Text>logout</Text>;

export default function Details({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const insets = useSafeAreaInsets();
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: StateRoute,
    albums: ClientRoute,
    recents: SettingRoute,
    notifications: LogoutRoute,
  });
  return (
    <BottomNavigation
      safeAreaInsets={{ bottom: insets.bottom }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
