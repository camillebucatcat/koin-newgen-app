import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import { gStyle } from '../styles/Global';
import { display } from '../styles/Display';

export default function Tab() {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Text style={gStyle.textLight}>Tab Home</Text>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <ScrollView>
          <View style={gStyle.darkCard}>
            <View style={[display.dFlex, display.justifyBetween ]}>
              <Text>sample</Text>
              <Text>sample</Text>
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