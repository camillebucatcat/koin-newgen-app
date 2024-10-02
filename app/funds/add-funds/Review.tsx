import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';
import { router } from 'expo-router';
import Header from '../../../components/header/Header';


const  ReviewTransaction= ()=>{
return(
<SafeAreaProvider style={gStyle.darkBg}>
<SafeAreaView>
<ScrollView>
<Header title='Review'/>
<View style={{paddingHorizontal: 16, paddingVertical: 8}}>
    <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
        <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Add funds</SansSerifText>
        <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mb3,{}]}>You’re about to transfer </SansSerifText>
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
    <View style={[gStyle.darkCard, gStyle.mb4, gStyle.py6,{}]}>
            <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mb2, {}]}>Transaction Date</SansSerifText>
            <SansSerifText style={[gStyle.fw700, gStyle.fs16, {}]}>05 Aug, 2024 (today)</SansSerifText>
    </View>
    <Button title="Confirm & Deposit Now" customStyles={[gStyle.fw700, gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
    <Button title="Depositing Funds" customStyles={[gStyle.fw700, gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default ReviewTransaction;