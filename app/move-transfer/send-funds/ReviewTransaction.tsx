import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';
import Header from '../../../components/Header';


const SendFundReviewTransaction = () => {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Header title='Review'/>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Transfer</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mb3,{}]}>You’re about to transfer </SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32,{}]}>$100</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4, display.dFlex, gStyle.pb10,{}]}>
              <View style={[gStyle.mr6,{}]}>
                <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mb4, {}]}>From</SansSerifText>
                <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, {}]}>To</SansSerifText>
              </View>
              <View style={[{}]}>
                <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.mb4, {}]}>Koin Everyday Spending</SansSerifText>
                <SansSerifText style={[gStyle.fw700, gStyle.fs16,{}]}>Jerry Seinfeldt</SansSerifText>
              </View>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4, display.flexCenterStart, {}]}>
              <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mr6, {}]}>For</SansSerifText>
              <SansSerifText style={[gStyle.fw700, gStyle.fs16, {}]}>In-Person Bet</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Message</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs16, gStyle.mb3,{}]}>Can’t believe your team won the game! Here’s your winnings from our verbal bet 💸</SansSerifText>
            </View>
          </View>
        </ScrollView>
        <View style={[gStyle.px4]}>
          <Button title="Send Funds" customStyles={[gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SendFundReviewTransaction

const styles = StyleSheet.create({})