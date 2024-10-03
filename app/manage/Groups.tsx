import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import { gStyle } from '../styles/Global';
const  Groups= ()=>{
return(
<SafeAreaProvider style={[gStyle.darkBg,{}]}>
<SafeAreaView style={[{flex: 1}]}>
<ScrollView>
    <Header title='Groups'/>
<View>
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default Groups;