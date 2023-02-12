import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, FAB, List, Avatar, Divider } from 'react-native-paper';

import ScreenWrapper from '../../components/ScreenWrapper';

export default function Home({ navigation }) {
  return (
    <ScreenWrapper>
      <List.Item
        title="Headline"
        onPress={() => console.log('faz nada')}
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />

      <List.Item
        title="Headline"
        description="Supporting text that is long enough to fill up multiple lines in the item"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <Divider />
      <List.Item
        title="Headline"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <List.Item
        title="Headline"
        description="Supporting text that is long enough to fill up multiple lines in the item"
        left={(props) => <Avatar.Text style={props.style} label="A" size={40} />}
      />
      <Divider />
    </ScreenWrapper>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  fabStyle: {
    margin: 20,
  },
});
