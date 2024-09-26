import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import { gStyle } from '../styles/Global';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';
import RecentTransactions from '../../components/RecentTransactions';
import ArrowCircleGradient from '../../assets/icons/svg-icons/arrow-circle-gradient';

const Home = ({ navigation }) => {
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SafeAreaView style={{ flex: 1, padding: 16 }}>
        <ScrollView>
          <View style={[gStyle.darkCard, gStyle.my4]}>
            <Text style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>Total Available Cash</Text>
            <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32]}>$8,385.28</Text>
            <View style={[display.flexBetween, gStyle.gap, gStyle.my4]}>
              <Button title="Move Funds" customStyles={{ width: '48%', }} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => router.push('')} />
              <Button title="Add Funds" customStyles={{ width: '48%', }} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => navigation.navigate('styledDocs/ButtonSample')} />
            </View>
          </View>
          <View style={[gStyle.darkCard, gStyle.my4, { position: "relative" }]}>
            <View style={{ width: '45%' }}>
              <Text style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>
                See the benefits we give you for your
                <Text style={gStyle.fw700}> local casino</Text>
              </Text>
              <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 20 }}>
                <Text style={gStyle.textPrimaryLight}>View benefits</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={images.home.dice}
              style={styles.diceImage}
            />
          </View>
          <View>
            <RecentTransactions />
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[ gStyle.darkCard, gStyle.my4 ]}>
              <View style={[ display.flexBetween, display.alignCenter ]}>
                <View style={[ display.dFlex, display.alignCenter ]}>
                  <Image source={ images.icon.qrCode } />
                  <View style={[ gStyle.ml4 ]}>
                    <Text style={[ gStyle.textLight, gStyle.fw700, gStyle.fs16 ]}>Connect to Game</Text>
                    <Text style={[ gStyle.textLight, gStyle.fw500, gStyle.fs14, gStyle.mt2 ]}>With QR Code</Text>
                  </View>
                </View>
                <ArrowCircleGradient/>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[ gStyle.darkCard]}>
            <View style={[display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs14]}>Nearby Casinos</Text>
              <Button title="View All" customStyles={{width: '30%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
            </View>
            <View style={styles.mapContainer}>
              <Image source={images.home.map} style={styles.relativeMap} />
              <Image source={images.icon.mapMarker} style={styles.absoluteMap} />
            </View>
          </View>
          <View style={[ gStyle.darkCard, gStyle.my4]}>
            <View style={[display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs14]}>Your Player Cards</Text>
              <Button title="View All" customStyles={{width: '30%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Home;


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
  },
  mapContainer: {
    position: 'relative', 
  },
  relativeMap: {
    width: '100%', 
    aspectRatio: 1, 
  },
  absoluteMap: {
    position: 'absolute',
    top: 50, 
    left: 30,
    right: 0,
    bottom: 0,
    aspectRatio: 1, 
  },
});