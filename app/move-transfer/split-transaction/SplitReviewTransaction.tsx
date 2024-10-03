import { ScrollView, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/Global';
import Header from '../../../components/header/Header';
import { SansSerifText } from '../../../components/SanSerifText';
import Button from '../../../components/Button';
import images from '../../../constants/Images';
import { display } from '../../styles/Display';

const SplitReviewTransaction = () => {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Split Transaction(s)"></Header>
        <ScrollView>
          <View style={[gStyle.pt4, gStyle.px6]}>
            <SansSerifText style={[gStyle.fw600, gStyle.fs20]}>EDC Fam</SansSerifText>
            <SansSerifText style={[gStyle.fw400, gStyle.fs16, gStyle.mt2, gStyle.mb4]}>Splitting: <SansSerifText style={[gStyle.fw600]}>3 Transactions</SansSerifText></SansSerifText>
            <View style={[gStyle.darkCard, display.flexCenterBetween, gStyle.my2]}>
              <View>
                <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2]}>Amazon</SansSerifText>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Equal Split by 4</SansSerifText>
              </View>
              <View style={[display.flexEnd, display.alignCenter]}>
                <View style={[gStyle.mr4]}>
                  <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb2, {textAlign: 'right'}]}>$30.00</SansSerifText>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400, {textAlign: 'right'}]}>you’re owed</SansSerifText>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                  <Image source={images.icon.editPencil} />
                </TouchableOpacity>
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
                <TouchableOpacity activeOpacity={0.8}>
                  <Image source={images.icon.editPencil} />
                </TouchableOpacity>
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
                <TouchableOpacity activeOpacity={0.8}>
                  <Image source={images.icon.editPencil} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={[gStyle.px4, gStyle.pb4]}>
          <Button title="Set Split" transform="normal" shape="round" customStyles={[gStyle.fs700]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SplitReviewTransaction

const styles = StyleSheet.create({})