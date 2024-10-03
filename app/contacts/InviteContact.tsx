import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FundsHeader from '../../components/header/FundsHeader';
import { gStyle } from '../styles/Global';
import { SansSerifText } from '../../components/SanSerifText';
import FormField from '../../components/FormField';
import RadioButton from '../../components/RadioButton';
import { display } from '../styles/Display';
import { router } from 'expo-router';
import Button from '../../components/Button';

const  InviteContact= ()=>{
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    // Define your options
  const options = [
    { title: '', label: 'Phone Number', value: 'phone', layout: 'left' },
    { title: '', label: 'Email', value: 'email', layout: 'left' },
  ];
 // Function to handle option selection
 const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

return(
<SafeAreaProvider style={[gStyle.darkBg]}>
<SafeAreaView style={[{flex: 1}]}>
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
        textStyles={{fontWeight: 400, fontSize: 16, marginTop: 6, color: '#fff', fontFamily: 'Aventa' }}
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
        textStyles={{fontWeight: 400, fontSize: 16, marginTop: 6, color: '#fff', fontFamily: 'Aventa' }}
        maxLength={50}
        securityMask={false}
        onPress={() => { }}
        onKeyPress={() => { }}
        isActive={false}
        />
    <SansSerifText style={[gStyle.textLight, gStyle.mb4, gStyle.mt6,{}]}>Refer Via*</SansSerifText>
    <View style={[gStyle.mb6,{}]}>
      {/* First Radio Button */}
      <RadioButton 
        options={[options[0]]} 
        selectedOption={selectedOption} 
        onSelect={handleSelect} 
      />

      {/* Form Field */}
      <FormField
        title=""
        placeholder="chloe.davis@mail.com"
        isFloating={false}
        backgroundStyles={{ backgroundColor: '#3C3A3C', borderColor: '#3C3A3C' }}
        labelColor={{ color: '#fff' }}
        textStyles={{ fontWeight: 400, fontSize: 16, marginTop: 6, color: '#fff', fontFamily: 'Aventa' }}
        maxLength={50}
        securityMask={false}
        onPress={() => { }}
        onKeyPress={() => { }}
        isActive={false}
      />
      
      {/* Second Radio Button */}
      <RadioButton 
        options={[options[1]]} 
        selectedOption={selectedOption} 
        onSelect={handleSelect} 
      />

      {/* Form Field */}
      <FormField
        title=""
        placeholder="chloe.davis@mail.com"
        isFloating={false}
        backgroundStyles={{ backgroundColor: '#3C3A3C', borderColor: '#3C3A3C' }}
        labelColor={{ color: '#fff' }}
        textStyles={{ fontWeight: 400, fontSize: 16, marginTop: 6, color: '#fff', fontFamily: 'Aventa',}}
        maxLength={50}
        securityMask={false}
        onPress={() => { }}
        onKeyPress={() => { }}
        isActive={false}
      />
    </View>

    <Button title="Invite to Koin" customStyles={[gStyle.fw700, gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default InviteContact;