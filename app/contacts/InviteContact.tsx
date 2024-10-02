import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FundsHeader from '../../components/header/FundsHeader';
import { gStyle } from '../styles/Global';
import { SansSerifText } from '../../components/SanSerifText';
import FormField from '../../components/FormField';
const  InviteContact= ()=>{
return(
<SafeAreaProvider style={[gStyle.darkBg]}>
<SafeAreaView>
<ScrollView>
    <FundsHeader title='Add Funds'/>
<View style={[{paddingHorizontal: 16, paddingVertical: 8}]}>
    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs24, gStyle.mb8,{}]}>Invite to Koin</SansSerifText>

    <SansSerifText style={[gStyle.textLight, gStyle.mb4,{}]}>First Name*</SansSerifText>
    <FormField
        title=""
        placeholder="First Name"
        isFloating={false}
        backgroundStyles={{ backgroundColor: '#3C3A3C',borderColor: '#3C3A3C'}}
        labelColor={{ color: '#fff'}}
        textStyles={{fontWeight: 600, fontSize: 16, marginTop: 6, color: '#fff', fontFamily: 'Aventa' }}
        maxLength={50}
        securityMask={false}
        onPress={() => { }}
        onKeyPress={() => { }}
        isActive={false}
        />
     <SansSerifText style={[gStyle.textLight, gStyle.mb4, gStyle.mt6,{}]}>Last Name*</SansSerifText>
     <FormField
        title=""
        placeholder="Last Name"
        isFloating={false}
        backgroundStyles={{ backgroundColor: '#3C3A3C',borderColor: '#3C3A3C'}}
        labelColor={{ color: '#fff'}}
        textStyles={{fontWeight: 600, fontSize: 16, marginTop: 6, color: '#fff', fontFamily: 'Aventa' }}
        maxLength={50}
        securityMask={false}
        onPress={() => { }}
        onKeyPress={() => { }}
        isActive={false}
        />
    <SansSerifText style={[gStyle.textLight, gStyle.mb4, gStyle.mt6,{}]}>Refer Via*</SansSerifText>
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default InviteContact;