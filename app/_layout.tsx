import * as React from 'react';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TabBar } from '../components/TabBar';
import Home from './(tabs)/Home';

import ButtonSample from './styledDocs/ButtonSample';
import FormFieldSample from './styledDocs/FormFieldSample';
import Settings from './(tabs)/settings';
import Discover from './(tabs)/discover';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Home} options={{headerShown: true}} />
    //   <Tab.Screen name="Feed" component={EmptyScreen} options={{headerShown: true}}  />
    //   <Tab.Screen name="Notifications" component={EmptyScreen} options={{headerShown: true}}  />
    // </Tab.Navigator>
    <Tab.Navigator tabBar={props => <TabBar {...props} />} screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tab.Screen
        name="Index"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          title: 'Discover',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const prefix = Linking.createURL('/');
const linking = {
  prefixes: [prefix],
};

function App() {
  return (
    <NavigationContainer independent={true} linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="styledDocs/ButtonSample" component={ButtonSample} />
        <Stack.Screen name="styledDocs/FormFieldSample" component={FormFieldSample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
