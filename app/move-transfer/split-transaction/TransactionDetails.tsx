import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/Global';
import Header from '../../../components/header/Header';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';



const TransactionDetails = ({ navigation }) => {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Header title='Transaction Details'/>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <SansSerifText style={[gStyle.textGrayLight, gStyle.fs16]}>June 1st 2024</SansSerifText>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.py3]}>Amazon</SansSerifText>
              <SansSerifText style={[gStyle.fw600, gStyle.fs40]}>$40.00</SansSerifText>
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
             <View style={[display.flexCenterStart]}>
              <SansSerifText style={[gStyle.textGrayLight, gStyle.fs16, gStyle.pr5, styles.textWidth]}>From</SansSerifText>
              <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.py3]}>Everyday Spending</SansSerifText>
             </View>
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <View style={[display.flexCenterStart]}>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fs16, gStyle.pr5, styles.textWidth]}>For</SansSerifText>
                <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.py3]}>Entertainment</SansSerifText>
              </View>
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <View style={[display.flexCenterStart]}>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fs16, gStyle.pr5, styles.textWidth]}>Status</SansSerifText>
                <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.py3]}>Complete</SansSerifText>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
          <Button title="Split Transaction" transform="normal" expand="block" shape="round" fill="solid" color="primary" customStyles={{ marginVertical: 8}} centerText={true} handlePress={() => navigation.navigate('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default TransactionDetails

const styles = StyleSheet.create({
  textWidth: {
    width: 70
  }
})