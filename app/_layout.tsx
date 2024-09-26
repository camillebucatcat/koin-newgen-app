// import { Stack } from 'expo-router/stack';

// export default function Layout() {
//   return (
//     <Stack screenOptions={{
//       headerShown: false,
//       headerShadowVisible: false,
//       contentStyle:{
//         backgroundColor: '#F2F6F6',
//       },
//       headerStyle:{
//         backgroundColor: '#F2F6F6'
//       },
      
//     }}>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }


import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import ButtonSample from './styled-docs/button-sample';
import FormfieldSample from './styled-docs/formfield-sample';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// export default function App() {
//   const Stack = createNativeStackNavigator();

//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="styled-docs/button-sample" component={ButtonSample} />
//         <Stack.Screen name="styled-docs/formfield-sample" component={FormfieldSample} />
//       </Stack.Navigator>
//       <StatusBar style="dark"/>
//     </NavigationContainer>
//   );
// }

function HomeStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="styled-docs/button-sample" component={ButtonSample} />
        <Stack.Screen name="styled-docs/formfield-sample" component={FormfieldSample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function App() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeStack} />
//     </Tab.Navigator>
//   );
// }

const styles = StyleSheet.create({});
