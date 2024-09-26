import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import { gStyle } from '../styles/Global';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';

export default function Tab() {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Text style={gStyle.textLight}>Tab Home</Text>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <ScrollView>
          <View style={gStyle.darkCard}>
            <Text style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>Total Available Cash</Text>
            <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32]}>$8,385.28</Text>
            <View style={[display.flexBetween, {marginVertical: 16}]}>
              <Button title="Move Funds" customStyles={{width: '50%', marginRight: 5}} transform="normal" shape="round" fill="solid" color="primary"  centerText={true} handlePress={() => router.push('')} />
              <Button title="Add Funds" customStyles={{width: '50%', marginLeft: 5}} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => router.push('')} />
            </View>
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
});