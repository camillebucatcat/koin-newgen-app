import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from './Button';
import { gStyle } from '../app/styles/Global';
import { display } from '../app/styles/Display';
import { router } from 'expo-router';
const  RecentTransactions= ()=>{
return(
<View style={[gStyle.darkCard]}>
    <View style={[display.flexBetween, display.alignCenter, {marginBottom: 24}]}>
        <Text style={[gStyle.textLight, gStyle.fw700]}>Recent Transactions</Text>
        <Button title="View All" customStyles={[gStyle.fs14,{}]} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => router.push('')} />
    </View>
    <TouchableOpacity style={[display.dFlex, gStyle.py12]}>
        <Image/>
        <View style={[display.flexBetween]}>
            <View>
                <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs14]}>Amazon</Text>
                <Text style={[gStyle.textLight, ]}>Online Purchase</Text>
                <Text></Text>
            </View>
            <View>
                <Text></Text>
            </View>
        </View>
    </TouchableOpacity>
</View>
)
}
export default RecentTransactions;