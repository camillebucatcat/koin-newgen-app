import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import images from '../../../constants/Images';
const RequestReviewTransaction = () => {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Header title='Review'/>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Transfer Request</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mb3,{}]}>You’re about to request </SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32,{}]}>$60.00</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4, display.flexCenterStart, {}]}>
              <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mr6, {}]}>For</SansSerifText>
              <View>
                <Image source={images.profileSample.user6} style={[ gStyle.mr3, {borderRadius: 12, width: 44, height: 44}]}/>
              </View>
              <SansSerifText style={[gStyle.fw400, gStyle.fs16, {}]}>Mia Chen</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4, display.flexCenterStart, {}]}>
              <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mr6, {}]}>For</SansSerifText>
              <SansSerifText style={[gStyle.fw700, gStyle.fs16, {}]}>Dinner & Drinks</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Message</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs16, gStyle.mb3,{}]}>Nice try getting me to pay for dinner - gonna have to do better than forgetting your wallet like that bro 
              🤣💸💸💸</SansSerifText>
            </View>
          </View>
        </ScrollView>
        <View style={[gStyle.px4]}>
          <Button title="Request Funds" customStyles={[gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default RequestReviewTransaction

const styles = StyleSheet.create({})