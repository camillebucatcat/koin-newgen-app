import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import { SansSerifText } from '../../components/SanSerifText';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';
import GradientButton from '../../components/GradientButton';
import images from '../../constants/Images';

const  DepositSuccessful= ()=>{
return(
<SafeAreaProvider style={gStyle.darkBg}>
<SafeAreaView>
<ScrollView>
<View style={{paddingHorizontal: 16, paddingVertical: 8}}>
    <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
        <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Auto Deposit</SansSerifText>
        <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32,{}]}>$100</SansSerifText>
    </View>
    <View style={[gStyle.darkCard, gStyle.mb4, display.dFlex,{}]}>
        <View style={[gStyle.mr6,{}]}>
            <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mb4, {}]}>From</SansSerifText>
            <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, {}]}>To</SansSerifText>
        </View>
        <View style={[{}]}>
            <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.mb4, {}]}>Koin Everyday Spending</SansSerifText>
            <SansSerifText style={[gStyle.fw700, gStyle.fs16,{}]}>Draft Kings Account</SansSerifText>
        </View>
    </View>
    <View style={[gStyle.successCard, gStyle.mb8, {flexDirection: 'row', flexWrap: 'wrap'}]}>
        <Image source={images.icon.checkcirclesuccess} style={[gStyle.mr3,{}]} />
        <View style={{ flex: 1 }}>
            <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb3,{}]}>Auto Deposit set up successfully!</SansSerifText>
            <SansSerifText style={[gStyle.fs16, gStyle.fw700,{}]}>Your first auto deposit of <SansSerifText style={[gStyle.textLightBeige,{}]}>$50</SansSerifText> will be on <SansSerifText style={[gStyle.textLightBeige,{}]}>Friday, July 5th!</SansSerifText></SansSerifText>
        </View>
    </View>
    
    <Button title="Return to Account" customStyles={[gStyle.fw700, gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
    <GradientButton title="Manage Auto Deposit" transform="normal" shape="round" fill="outline" color="light" background="dark" expand="block"  centerText={true} handlePress={() => router.push('')} />
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default DepositSuccessful;

