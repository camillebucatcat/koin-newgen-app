import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';
import images from '../../../constants/Images';


const SplitTransactionSent = () => {
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
            <View style={[gStyle.successCard, gStyle.my2]}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Image source={images.icon.checkcirclesuccess} />
                <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.ml2]}>Success!</SansSerifText>
              </View>
              <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.ml8]}>3 transactions split with your <SansSerifText style={{color: '#FFE7DC'}}>EDC Fam</SansSerifText> group. </SansSerifText>
            </View>
            <View style={[gStyle.darkCard, display.flexCenterBetween, gStyle.my2]}>
              <View>
                <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2]}>Amazon</SansSerifText>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Equal Split by 4</SansSerifText>
              </View>
              <View style={[display.flexEnd, display.alignCenter]}>
                <View style={[gStyle.mr4]}>
                  <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2, {textAlign: 'right'}]}>$30.00</SansSerifText>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400, , {textAlign: 'right'}]}>you’re owed</SansSerifText>
                </View>
              </View>
            </View>
            <View style={[gStyle.darkCard, display.flexCenterBetween, gStyle.my2]}>
              <View>
                <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2]}>Slot machine </SansSerifText>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Equal Split by 4</SansSerifText>
              </View>
              <View style={[display.flexEnd, display.alignCenter]}>
                <View style={[gStyle.mr4]}>
                  <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2, {textAlign: 'right'}]}>$90.00</SansSerifText>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400, {textAlign: 'right'}]}>you’re owed</SansSerifText>
                </View>
              </View>
            </View>
            <View style={[gStyle.darkCard, display.flexCenterBetween, gStyle.my2]}>
              <View>
                <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2]}>Drinks</SansSerifText>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Equal Split by 4</SansSerifText>
              </View>
              <View style={[display.flexEnd, display.alignCenter]}>
                <View style={[gStyle.mr4]}>
                  <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2, {textAlign: 'right'}]}>$169.50</SansSerifText>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400, {textAlign: 'right'}]}>you’re owed</SansSerifText>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={[gStyle.px4]}>
          <Button title="View EDC Fam History" customStyles={[gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SplitTransactionSent

const styles = StyleSheet.create({})