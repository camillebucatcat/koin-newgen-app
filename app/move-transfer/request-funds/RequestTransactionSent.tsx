import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';
import images from '../../../constants/Images';

const RequestTransactionSent = () => {
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
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>You’ve Request</SansSerifText>
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
            <View style={[gStyle.successCard]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Image source={images.icon.checkcirclesuccess} />
                <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.ml2]}>Success!</SansSerifText>
              </View>
              <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.ml8]}>$60.00 requested from Mia Chen</SansSerifText>
            </View>
          </View>  
        </ScrollView>
        <View style={[gStyle.px4]}>
          <Button title="View Transaction History" customStyles={[gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default RequestTransactionSent

const styles = StyleSheet.create({})