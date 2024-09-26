import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import { gStyle } from '../styles/Global';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';
import RecentTransactions from '../../components/RecentTransactions';

export default function Tab() {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Text style={gStyle.textLight}>Tab Home</Text>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <ScrollView>
          <View style={[gStyle.darkCard, {marginVertical: 16}]}>
            <Text style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>Total Available Cash</Text>
            <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32]}>$8,385.28</Text>
            <View style={[display.flexBetween, gStyle.gap, {marginVertical: 16}]}>
              <Button title="Move Funds" customStyles={{width: '48%',}} transform="normal" shape="round" fill="solid" color="primary"  centerText={true} handlePress={() => router.push('')} />
              <Button title="Add Funds" customStyles={{width: '48%',}} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => router.push('')} />
            </View>
          </View>
          <View style={[gStyle.darkCard, { marginVertical: 16, position: "relative" }]}>
            <View style={{width: '45%'}}>
              <Text style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>
                See the benefits we give you for your
                <Text style={gStyle.fw700}> local casino</Text>
              </Text>
              <TouchableOpacity activeOpacity={0.8} style={{marginTop: 20}}>
                <Text style={gStyle.textPrimaryLight}>View benefits</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={images.home.dice} 
              style={styles.diceImage} 
            />
          </View>

          <View>
            <RecentTransactions/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    position: 'absolute',
    right: -5,         
    bottom: 0, 
    width: 209,        
    height: 170,  
    zIndex: 100,     
    resizeMode: 'contain',
  }
});