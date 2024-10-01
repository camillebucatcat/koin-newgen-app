import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import { SansSerifText } from '../../components/SanSerifText';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';
import images from '../../constants/Images';
import Colors from '../../constants/Colors';

const  ReviewAutoDeposit= ()=>{
return(
<SafeAreaProvider style={gStyle.darkBg}>
<SafeAreaView>
<ScrollView>
<View style={{paddingHorizontal: 16, paddingVertical: 8}}>
    <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
        <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Auto Deposit</SansSerifText>
        <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32,{}]}>$100</SansSerifText>
    </View>
    <View style={[gStyle.darkCard, gStyle.mb4, display.dFlex,{}]}>
        <View style={[gStyle.mr6,{}]}>
            <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mb4, {}]}>From</SansSerifText>
            <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, {}]}>To</SansSerifText>
        </View>
        <View style={[{}]}>
            <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.mb4, {}]}>Koin Everyday Spending</SansSerifText>
            <SansSerifText style={[gStyle.fw700, gStyle.fs16,{}]}>Draft Kings Account</SansSerifText>
        </View>
    </View>
    <View style={[gStyle.darkCard,gStyle.mb8,{}]}>
        <SansSerifText style={[gStyle.mb2, gStyle.fs16, gStyle.textGrayLight, gStyle.fw400,{}]}>Frequency</SansSerifText>
        <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textLight, gStyle.mb6,{}]}>Monthly on the 1st</SansSerifText>

      <View style={styles.row}>
        <View style={styles.bulletPoint} />
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, gStyle.fs16, gStyle.fw400,]}>First Auto Deposit</Text>
          <Text style={[gStyle.textLight, gStyle.fs16, gStyle.fw600, gStyle.pb6]}>July 1st 2024</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.bulletPoint} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, gStyle.fs16, gStyle.fw400,]}>Next Auto Deposit</Text>
          <Text style={[gStyle.textLight, gStyle.fs16, gStyle.fw600, gStyle.pb6]}>August 1st 2024</Text>
        </View>
      </View>
    </View>
    
    <Button title="Set-up Auto Deposit" customStyles={[gStyle.fw700, gStyle.mb4]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.navigate('')} />
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default ReviewAutoDeposit;

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    bulletPoint: {
      width: 6,
      height: 6,
      borderRadius: 5,
      backgroundColor: Colors.primary.primary300,
      marginLeft: 2,
      marginTop: 12,
    },
    line: {
      width: .5,
      backgroundColor: Colors.primary.primary300, 
      height: '100%',
      position: 'absolute',
      left: 4.4,
      top: 13,
    },
    textContainer: {
      paddingLeft: 24,
    },
    title: {
      color: Colors.primary.primary300,
    },
  });