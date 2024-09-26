import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from './Button';
import { gStyle } from '../app/styles/Global';
const  RecentTransactions= ()=>{
return(
<View>
    <View>
        <Text style={[gStyle.textLight, gStyle.fw700]}>Recent Transactions</Text>
        <TouchableOpacity></TouchableOpacity>
    </View>
</View>
)
}
export default RecentTransactions;