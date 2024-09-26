import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Button from './Button';
import { gStyle } from '../app/styles/Global';
import { display } from '../app/styles/Display';
import { router } from 'expo-router';
import images from '../constants/Images';
export default function RecentTransactions (){
return(
<View style={[gStyle.darkCard]}>
    <View style={[display.flexBetween, display.alignCenter, {marginBottom: 24}]}>
        <Text style={[gStyle.textLight, gStyle.fw700]}>Recent Transactions</Text>
        <Button title="View All" customStyles={[gStyle.fs14,{}]} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => router.push('')} />
    </View>
    <TouchableOpacity style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, {borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1}]}>
        <View style={[]}>
        <Image source={ images.transactions.shoppingbag}/>
        </View>
        <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
            <View>
                <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Amazon</Text>
                <Text style={[gStyle.textLight, gStyle.fs3]}>Online Purchase</Text>
                <Text style={[gStyle.textLight, gStyle.fs3]}>Yesterday 12.54 pm</Text>
            </View>
            <View>
                <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs3]}>- $40.00</Text>
            </View>
        </View>
        <View>
            <Image source={images.icon.arrowright}/>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, {borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1}]}>
        <View style={[]}>
        <Image source={ images.transactions.coffeecup}/>
        </View>
        <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
            <View>
                <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>The Pod</Text>
                <Text style={[gStyle.textLight, gStyle.fs3]}>Coffee</Text>
                <Text style={[gStyle.textLight, gStyle.fs3]}>Yesterday 10:46 am</Text>
            </View>
            <View>
                <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs3]}>- $4.26</Text>
            </View>
        </View>
        <View>
            <Image source={images.icon.arrowright}/>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, {borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1}]}>
        <View style={[]}>
        <Image source={ images.transactions.basket}/>
        </View>
        <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
            <View>
                <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Trader Joes</Text>
                <Text style={[gStyle.textLight, gStyle.fs3]}>Groceries</Text>
                <Text style={[gStyle.textLight, gStyle.fs3]}>Yesterday 10:31 am</Text>
            </View>
            <View>
                <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs3]}>- $185.93</Text>
            </View>
        </View>
        <View>
            <Image source={images.icon.arrowright}/>
        </View>
    </TouchableOpacity>
</View>
)
}