import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import Header from '../../components/header/Header';
import { SansSerifText } from '../../components/SanSerifText';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';

const SettleUpReview = () => {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Header title='Settle Up'/>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>June 4th 2024</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mb3,{}]}>You’re about to send </SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32,{}]}>$ 158.28</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4, display.dFlex, gStyle.pb10,{}]}>
              <View style={[gStyle.mr6,{}]}>
                <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mb4, {}]}>From</SansSerifText>
                <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, {}]}>To</SansSerifText>
              </View>
              <View style={[{}]}>
                <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.mb4, {}]}>Koin Everyday Spending</SansSerifText>
                <SansSerifText style={[gStyle.fw700, gStyle.fs16,{}]}>Tommy Johnson</SansSerifText>
              </View>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4, display.flexCenterStart, {}]}>
              <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mr6, {}]}>For</SansSerifText>
              <SansSerifText style={[gStyle.fw700, gStyle.fs16, {}]}>Expense Share</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Message</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs16, gStyle.mb3,{}]}>Settling our group balance!</SansSerifText>
            </View>
          </View>
        </ScrollView>
        <View style={[gStyle.px4]}>
          <Button title="Settle Up" customStyles={[gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
          {/* <Button title="Sending Funds" customStyles={[gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} /> */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SettleUpReview

const styles = StyleSheet.create({})