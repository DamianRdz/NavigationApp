/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Center({children}) {
  return (
    <View style={styles.textCenter}>
      <Text>{children}</Text>
    </View>
  );
}

function Profile() {
  return (
    <Center>
      <Text>Hello Profile</Text>
    </Center>
  );
}

function Feed() {
  return (
    <Center>
      <Text>Hello Feed</Text>
    </Center>
  );
}

function Settings() {
  return (
    <Center>
      <Text>Hello Settings</Text>
    </Center>
  );
}
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
