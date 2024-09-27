import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Animated, Easing, LayoutChangeEvent } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import { gStyle } from '../styles/Global';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import { router } from 'expo-router';
import RecentTransactions from '../../components/RecentTransactions';
import ArrowCircleGradient from '../../assets/icons/svg-icons/arrow-circle-gradient';
import InsightDoughnutChart from '../../components/InsightDoughnutChart';
import { useEffect, useRef, useState } from 'react';
import ThreeDotsLight from '../../assets/icons/svg-icons/three-dots-light';
import Colors from '../../constants/Colors';
import SegmentControl from '../../components/SegmentControl';

const Home = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState('For You');

  const handleSegmentChange = (segment: string) => {
    setActiveSegment(segment);
  };

  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SegmentControl 
        titles={['For You', 'Accounts', 'Credit', 'Rewards' ]}
        onSegmentChange={handleSegmentChange}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
        {activeSegment === 'For You' && (
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <Text style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>Total Available Cash</Text>
              <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32]}>$8,385.28</Text>
              <View style={[display.flexBetween, gStyle.gap, gStyle.my4]}>
                <Button title="Move Funds" customStyles={{ width: '48%', }} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => navigation.navigate('')} />
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
            <View style={[gStyle.my4]}>
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
            <View style={[ gStyle.darkCard, gStyle.my4 ]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <Text style={[ gStyle.textLight, gStyle.fw700, gStyle.fs14 ]}>Nearby Casinos</Text>
                <Button title="View All" customStyles={{width: '30%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
              <View style={styles.mapContainer}>
                <Image source={images.home.map} style={styles.relativeMap} />
                <Image source={images.icon.mapMarker} style={styles.absoluteMap} />
              </View>
            </View>
            <View style={[ gStyle.darkCard, gStyle.my4]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs14 ]}>Your Player Cards</Text>
                <Button title="Edit Cards" customStyles={{width: '30%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
            </View>
            <View style={[ gStyle.darkCard, gStyle.my4]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs14 ]}>Insights</Text>
                <Button title="View Detail" customStyles={{width: '30%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
              <InsightDoughnutChart/>
            </View>
            <View style={[ gStyle.darkCard, gStyle.my4]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs14 ]}>Your Properties</Text>
                <Button title="View All" customStyles={{width: '30%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
              <TouchableOpacity style={[ display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter ]} activeOpacity={0.8}>
                <View style={[]}>
                  <Image source={ images.properties.plazaDark}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                  <View>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>The Plaza Hotel & Casino</Text>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[ display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter ]} activeOpacity={0.8}>
                <View style={[]}>
                  <Image source={ images.properties.eclipseDark}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                  <View>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Eclipse Gaming</Text>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[ display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter ]} activeOpacity={0.8}>
                <View style={[]}>
                  <Image source={ images.properties.wskyDark}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                  <View>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>WSKY Bar + Grill</Text>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}  
        {activeSegment === 'Accounts' && ( 
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.my3,]}>
              <View style={[display.flexCenterBetween]}>
                <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>YOUR CASH</Text>
                <TouchableOpacity activeOpacity={0.8}>
                  <ThreeDotsLight/>
                </TouchableOpacity>
              </View>
              <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, gStyle.my3]}>$8,385.28</Text>
              <Text style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs16,]}>Total Available Cash</Text>
            </View>
            <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt4, gStyle.mb2]}>Koin Accounts</Text>
            <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.lean.leanLeftSuccess} style={[gStyle.mr2]}/>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs14]}>Everyday Spending</Text>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[display.flexCenterBetween, gStyle.mt4, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                <View>
                  <View>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, ]}>2,802</Text>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs12, { position: 'absolute', top: 6, left: '100%' }]}>.99</Text>
                  </View>
                  <Text style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textSuccessLight,]}>Total balance</Text>
                </View>
                <View>
                  <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs14, display.alignSelfEnd]}>37.5%</Text>
                  <Text style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textSuccessLight,]}>of total funds</Text>
                </View>
              </View>
            </View>
            <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.lean.leanLeftPrimary} style={[gStyle.mr2]}/>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs14]}>Emergency Fund</Text>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[display.flexCenterBetween, gStyle.mt4, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                <View>
                  <View>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, ]}>$5,000</Text>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs12, { position: 'absolute', top: 6, left: '100%' }]}>.00</Text>
                  </View>
                  <Text style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textPrimaryLight,]}>Total balance</Text>
                </View>
                <View>
                  <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs14, display.alignSelfEnd]}>50%</Text>
                  <Text style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textPrimaryLight,]}>of total funds</Text>
                </View>
              </View>
            </View>
            <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt4, gStyle.mb2]}>Gaming Accounts</Text>
            <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.lean.leanLeftOrange} style={[gStyle.mr2]}/>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs14]}>Draft Kings Account</Text>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[display.flexCenterBetween, gStyle.mt4, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                <View>
                  <View>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, ]}>$582</Text>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs12, { position: 'absolute', top: 6, left: '100%' }]}>.99</Text>
                  </View>
                  <Text style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textOrangeLight,]}>Total balance</Text>
                </View>
                <View>
                  <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs14, display.alignSelfEnd]}>37.5%</Text>
                  <Text style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textOrangeLight,]}>of total funds</Text>
                </View>
              </View>
            </View>
            <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt4, gStyle.mb2]}>Linked Accounts</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.icon.bank}/>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.ml2]}>Wells Fargo</Text>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.icon.bank}/>
                    <Text style={[gStyle.textLight, gStyle.fw600, gStyle.ml2]}>Bank of America</Text>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {activeSegment === 'Credit' && ( 
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <Text style={[gStyle.textLight]}>Credit</Text>
          </View>
        )}
        {activeSegment === 'Rewards' && ( 
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <Text style={[gStyle.textLight]}>Rewards</Text>
          </View>
        )}
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
  segmentContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#545454',
    zIndex: 2,
    position: 'relative',
    paddingHorizontal: 16
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  segmentText: {
    fontWeight: '400',
    color: '#fff',
  },
  activeSegmentText: {
    fontWeight: '700',
  },
  animatedLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: Colors.primary.color,
  },
});