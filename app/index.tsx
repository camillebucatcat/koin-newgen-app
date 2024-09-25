import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ButtonSample from './styled-docs/button-sample';
import FormfieldSample from './styled-docs/formfield-sample';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="styled-docs/button-sample" component={ButtonSample} />
        <Stack.Screen name="styled-docs/formfield-sample" component={FormfieldSample} />
      </Stack.Navigator>
      <StatusBar style="dark"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
