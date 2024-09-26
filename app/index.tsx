import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ButtonSample from './styled-docs/button-sample';
import FormfieldSample from './styled-docs/formfield-sample';
import RecentTransactions from '../components/RecentTransactions';
import Tab from './(tabs)';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="styled-docs/button-sample" component={ButtonSample} /> */}
        {/* <Stack.Screen name="styled-docs/formfield-sample" component={FormfieldSample} /> */}
        <Stack.Screen name="(tabs)" component={Tab}/>
      </Stack.Navigator>
      <StatusBar style="dark"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
