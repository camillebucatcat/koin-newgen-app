import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import { SansSerifText } from '../../components/SanSerifText';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';
import images from '../../constants/Images';
import FundsHeader from '../../components/header/FundsHeader';
import RadioButton from '../../components/RadioButton';

const SettleUp = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options1 = [
    { label: 'Pay:', value: 'option1', layout: 'left' },
  ];

  const options2 = [
    { label: 'Request:', value: 'optionA', layout: 'left' },
  ];

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <FundsHeader title='Settle Up'/>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <SansSerifText style={[gStyle.fw600, gStyle.fs20]}>Select a balance to settle</SansSerifText>
            <View style={[display.flexCenterStart, gStyle.my6]}>
              <SansSerifText style={[gStyle.fw400, gStyle.mr2]}>How was this balance calculated</SansSerifText>
              <Image source={images.icon.questionCircle}/>
            </View>
              <RadioButton 
                options={options1} 
                selectedOption={selectedOption} 
                onSelect={handleSelect} 
                showBorder={false}
              />
            <View style={[gStyle.darkCard, display.flexCenterStart, gStyle.mb4]}>
              <Image source={images.profileSample.user7} style={{height: 44, width: 44, borderRadius: 12}}/>
              <View style={[display.flexCenterBetween, gStyle.ml4]}>
                <SansSerifText style={[gStyle.fw500]}>You owe Tommy Johnson</SansSerifText>
                <SansSerifText style={[gStyle.fw700]}>$158.28</SansSerifText>
              </View>
            </View>
            <RadioButton 
              options={options2} 
              selectedOption={selectedOption} 
              onSelect={handleSelect} 
              showBorder={false}
            />
            <View style={[gStyle.darkCard, display.flexCenterStart, gStyle.mb4]}>
              <Image source={images.profileSample.user3} style={{height: 44, width: 44, borderRadius: 12}}/>
              <View style={[display.flexCenterBetween, gStyle.ml4]}>
                <SansSerifText style={[gStyle.fw700]}>Chloe Davis <SansSerifText style={[gStyle.fw500]}>owes you</SansSerifText></SansSerifText>
                <SansSerifText style={[gStyle.fw700]}>$136.92</SansSerifText>
              </View>
            </View>
            <View style={[gStyle.darkCard, display.flexCenterStart, gStyle.mb4]}>
              <Image source={images.profileSample.user4} style={{height: 44, width: 44, borderRadius: 12}}/>
              <View style={[display.flexCenterBetween, gStyle.ml4]}>
                <SansSerifText style={[gStyle.fw700]}>Hailey Williams <SansSerifText style={[gStyle.fw500]}>owes you</SansSerifText></SansSerifText>
                <SansSerifText style={[gStyle.fw700]}>$110.86</SansSerifText>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={[gStyle.px4, gStyle.mb4]}>
          <Button title="Settle Up" transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SettleUp

const styles = StyleSheet.create({})