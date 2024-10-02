import React from 'react';
import { View, StyleSheet, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';
import images from '../../../constants/Images';

const SendTransactionSent = () => {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <View style={[gStyle.py6, gStyle.px6,]}>
        <View style={[ display.flexCenterBetween ]}>
          <SansSerifText style={[gStyle.fs18, gStyle.fw500]}>Review</SansSerifText>
          <TouchableOpacity>
            <Image source={images.icon.close}/>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>You’ve Transfer</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32,{}]}>$100.00</SansSerifText>
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
            <View style={[gStyle.pendingCard]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Image source={images.icon.clockPending} />
                <SansSerifText style={[gStyle.textDark, gStyle.fw700, gStyle.fs16, gStyle.ml1]}>Transfer Pending</SansSerifText>
              </View>
              <SansSerifText style={[gStyle.textDark, gStyle.fw400, gStyle.fs16, gStyle.ml8]}>
                You’ve sent $100 to Jerry Seinfeld! If not accepted in 30 days, the funds pending will be deposited back into your account.
              </SansSerifText>
            </View>
          </View>  
        </ScrollView>
        <View style={[gStyle.px4]}>
          <Button title="Sending Funds" customStyles={[gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SendTransactionSent

const styles = StyleSheet.create({})