import * as React from 'react';
import * as Linking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '../components/useColorScheme';

// pages
import { TabBar } from '../components/TabBar';
import Home from './tabs/Home';
import Settings from './tabs/Settings';
import Discover from './tabs/Discover';
import ButtonSample from './styledDocs/ButtonSample';
import FormFieldSample from './styledDocs/FormFieldSample';
import EverydaySpending from './account/EverydaySpending';
import EntertainmentFunds from './account/EntertainmentFunds';
import Draftkings from './account/DraftKings';
import TransactionDetails from './transaction/TransactionDetails';
// import SendFunds from './send-funds/SendFunds';
import AddFunds from './funds/AddFunds';
import SendFunds from './move-transfer/send-funds/SendFunds';
import ReviewTransaction from './funds/Review';
import RequestFund from './move-transfer/request-funds/RequestFund';
import FundTransfered from './funds/FundTransfered';
import SendFundReviewTransaction from './move-transfer/send-funds/SendReviewTransaction';
import RequestReviewTransaction from './move-transfer/request-funds/RequestReviewTransaction';
import AutoDeposit from './funds/AutoDeposit';
import ReviewAutoDeposit from './funds/ReviewAutoDeposit';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const prefix = Linking.createURL('/');
const linking = {
  prefixes: [prefix],
};

export default function App() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Aventa: require('../assets/fonts/Aventa/Aventa-Regular.otf'),
    ...FontAwesome.font,
  });
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent={true} linking={linking}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="styledDocs/ButtonSample" component={ButtonSample} />
          <Stack.Screen name="styledDocs/FormFieldSample" component={FormFieldSample} />
          <Stack.Screen name="EverydaySpending" component={EverydaySpending} />
          <Stack.Screen name="EntertainmentFunds" component={EntertainmentFunds} />
          <Stack.Screen name="DraftKings" component={Draftkings} />
          <Stack.Screen name="TransactionDetails" component={TransactionDetails}/>
          <Stack.Screen name="AddFunds" component={AddFunds} />
          <Stack.Screen name="SendFunds" component={SendFunds}/>
          <Stack.Screen name="RequestFund" component={RequestFund}/>
          <Stack.Screen name="SendReviewRequest" component={SendFundReviewTransaction}/>
          <Stack.Screen name="ReviewReviewRequest" component={RequestReviewTransaction}/>
          <Stack.Screen name="Review" component={ReviewTransaction}/>
          <Stack.Screen name="FundTransfered" component={FundTransfered}/>
          <Stack.Screen name="AutoDeposit" component={AutoDeposit}/>
          <Stack.Screen name="ReviewAutoDeposit" component={ReviewAutoDeposit}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

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