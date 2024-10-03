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
import TransactionDetails from './move-transfer/split-transaction/TransactionDetails';
// import SendFunds from './send-funds/SendFunds';
import SendFunds from './move-transfer/send-funds/SendFunds';
import RequestFund from './move-transfer/request-funds/RequestFund';
import SendFundReviewTransaction from './move-transfer/send-funds/SendReviewTransaction';
import RequestReviewTransaction from './move-transfer/request-funds/RequestReviewTransaction';
import EditAutoDeposit from './funds/auto-deposit/EditAutoDeposit';
import SendTransactionSent from './move-transfer/send-funds/SendTransactionSent';
import RequestTransactionSent from './move-transfer/request-funds/RequestTransactionSent';
import AddFunds from './funds/add-funds/AddFunds';
import ReviewTransaction from './funds/add-funds/Review';
import FundTransfered from './funds/add-funds/FundTransfered';
import AutoDeposit from './funds/auto-deposit/AutoDeposit';
import ReviewAutoDeposit from './funds/auto-deposit/ReviewAutoDeposit';
import DepositSuccessful from './funds/auto-deposit/DepositSuccessful';
import SelectContact from './move-transfer/SelectContact';
import InviteContact from './contacts/InviteContact';
import SelectCategory from './move-transfer/SelectCategory';
import RadioButtonSample from './styledDocs/RadioButtonSample';
import SelectSplitTransaction from './move-transfer/split-transaction/SelectSplitTransaction';
import Contacts from './contacts/Contacts';
import Groups from './manage/Groups';
import SplitTransactionType from './move-transfer/split-transaction/SplitTransactionType';
import SplitReviewTransaction from './move-transfer/split-transaction/SplitReviewTransaction';
import SplitTransactionSent from './move-transfer/split-transaction/SplitTransactionSent';
import SplittingTransaction from './move-transfer/split-transaction/SplittingTransaction';
import SettleUpFund from './settle-up/SettleUpFund';
import SettleUpReview from './settle-up/SettleUpReview';
import SettleUpSent from './settle-up/SettleUpSent';
import SettleUp from './settle-up/SettleUp';

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
          <Stack.Screen name="ButtonSample" component={ButtonSample} />
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
          <Stack.Screen name="DepositSuccessful" component={DepositSuccessful}/>
          <Stack.Screen name="EditAutoDeposit" component={EditAutoDeposit}/>
          <Stack.Screen name="SendTransactionSent" component={SendTransactionSent}/>
          <Stack.Screen name="RequestTransactionSent" component={RequestTransactionSent}/>
          <Stack.Screen name="SelectContact" component={SelectContact}/>
          <Stack.Screen name="InviteContact" component={InviteContact}/>
          <Stack.Screen name="SelectCategory" component={SelectCategory}/>
          <Stack.Screen name="RadioButtonSample" component={RadioButtonSample} />
          <Stack.Screen name="SelectSplitTransaction" component={SelectSplitTransaction} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Groups" component={Groups} />
          <Stack.Screen name="SplittingTransaction" component={SplittingTransaction} />
          <Stack.Screen name="SplitTransactionType" component={SplitTransactionType} />
          <Stack.Screen name="SplitReviewTransaction" component={SplitReviewTransaction} />
          <Stack.Screen name="SplitTransactionSent" component={SplitTransactionSent} />
          <Stack.Screen name="SettleUp" component={SettleUp} />
          <Stack.Screen name="SettleUpFund" component={SettleUpFund} />
          <Stack.Screen name="SettleUpReview" component={SettleUpReview} />
          <Stack.Screen name="SettleUpSent" component={SettleUpSent} />
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