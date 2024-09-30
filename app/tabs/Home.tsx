import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground,} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import { gStyle } from '../styles/Global';
import { display } from '../styles/Display';
import Button from '../../components/Button';
import RecentTransactions from '../../components/RecentTransactions';
import ArrowCircleGradient from '../../assets/icons/svg-icons/arrow-circle-gradient';
import InsightDoughnutChart from '../../components/InsightDoughnutChart';
import { useState } from 'react';
import ThreeDotsLight from '../../assets/icons/svg-icons/three-dots-light';
import Colors from '../../constants/Colors';
import SegmentControl from '../../components/SegmentControl';
import GradientButton from '../../components/GradientButton';
import { SansSerifText } from '../../components/SanSerifText';

import { router } from 'expo-router';
import HomeHeader from '../../components/HomeHeader';

const Home = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState('For You');

  const handleSegmentChange = (segment: string) => {
    setActiveSegment(segment);
  };

  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <HomeHeader />
      <SegmentControl 
        titles={['For You', 'Accounts', 'Credit', 'Rewards' ]}
        onSegmentChange={handleSegmentChange}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
        {activeSegment === 'For You' && (
          <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>Total Available Cash</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32]}>$8,385.28</SansSerifText>
              <View style={[display.flexBetween, gStyle.gap, gStyle.my4]}>
                <Button title="Move Funds" customStyles={{ width: '48%', }} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => navigation.navigate('')} />
                <Button title="Add Funds" customStyles={{ width: '48%', }} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => navigation.navigate('styledDocs/FormFieldSample')} />
              </View>
            </View>
            <View style={[gStyle.darkCard, gStyle.my4, { position: "relative" }]}>
              <View style={{ width: '45%' }}>
                <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs16]}>
                  See the benefits we give you for your
                  <SansSerifText style={gStyle.fw700}> local casino</SansSerifText>
                </SansSerifText>
                <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 20 }} onPress={() => navigation.navigate('Discover')}>
                  <SansSerifText style={gStyle.textPrimaryLight}>View benefits</SansSerifText>
                </TouchableOpacity>
              </View>
              <Image
                source={images.home.dice}
                style={styles.diceImage}
              />
            </View>
            <View style={[gStyle.my4, gStyle.darkCard]}>
            <View style={[display.flexBetween, display.alignCenter, {marginBottom: 24}]}>
              <SansSerifText style={[gStyle.textLight, gStyle.fw700]}>Recent Transactions</SansSerifText>
              <GradientButton title="View Detail" customStyles={{width: '35%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => router.push('')} />
            </View>
              <RecentTransactions />
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={[ gStyle.darkCard, gStyle.my4 ]}>
                <View style={[ display.flexBetween, display.alignCenter ]}>
                  <View style={[ display.dFlex, display.alignCenter ]}>
                    <Image source={ images.icon.qrCode } />
                    <View style={[ gStyle.ml4 ]}>
                      <SansSerifText style={[ gStyle.textLight, gStyle.fw700, gStyle.fs16 ]}>Connect to Game</SansSerifText>
                      <SansSerifText style={[ gStyle.textLight, gStyle.fw500, gStyle.fs14, gStyle.mt2 ]}>With QR Code</SansSerifText>
                    </View>
                  </View>
                  <ArrowCircleGradient/>
                </View>
              </View>
            </TouchableOpacity>
            <View style={[ gStyle.darkCard, gStyle.my4 ]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <SansSerifText style={[ gStyle.textLight, gStyle.fw700, gStyle.fs14 ]}>Nearby Casinos</SansSerifText>
                <GradientButton title="View All" customStyles={{width: '35%'}}  customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light" centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
              <View style={styles.mapContainer}>
                <Image source={images.home.map} style={styles.relativeMap} />
                <Image source={images.icon.mapMarker} style={styles.absoluteMap} />
              </View>
            </View>
            <View style={[ gStyle.darkCard, gStyle.my4]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs14, gStyle.pt4 ]}>Your Player Card</SansSerifText>
                <GradientButton title="View Detail" customStyles={{width: '35%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[gStyle.mt6]}>
                <View style={[styles.playerCard,]}>
                  <ImageBackground source={images.properties.bg.gleamorBg} style={[styles.card, styles.gridBg]}>
                    <View style={[display.dFlex, display.justifyBetween, ]}>
                      <Image source={images.properties.logo.gleamorLogoLight} style={[gStyle.mt1]}/>
                      <View style={styles.poweredBy}>
                        <SansSerifText style={[gStyle.fs8, gStyle.mr2]}>Powered By: </SansSerifText>
                        <Image source={images.properties.logo.ardentxs} style={styles.logo} />
                      </View>
                    </View>
                    <View>
                      <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs12]}>Player Card Number</SansSerifText>
                      <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>0123491235</SansSerifText>
                    </View>
                  </ImageBackground>
                </View>
                <View style={[styles.playerCard, gStyle.ml6]}>
                  <ImageBackground source={images.properties.bg.nexyraBg} style={[styles.card, styles.gridBg]}>
                    <View style={[display.dFlex, display.justifyBetween, ]}>
                      <Image source={images.properties.logo.nexyraLogoLight} style={[gStyle.mt1]}/>
                      <View style={styles.poweredBy}>
                        <SansSerifText style={[gStyle.fs8, gStyle.mr2]}>Powered By: </SansSerifText>
                        <Image source={images.properties.logo.acrexs} style={styles.logo} />
                      </View>
                    </View>
                    <View>
                      <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs12]}>Player Card Number</SansSerifText>
                      <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>0123491235</SansSerifText>
                    </View>
                  </ImageBackground>
                </View>
                <View style={[styles.playerCard, gStyle.ml6]}>
                  <ImageBackground source={images.properties.bg.gambitBg} style={[styles.card, styles.gridBg]}>
                    <View style={[display.dFlex, display.justifyBetween, ]}>
                      <Image source={images.properties.logo.gambitLogoDark} style={[gStyle.mt1]}/>
                      <View style={styles.poweredBy}>
                        <SansSerifText style={[gStyle.fs8, gStyle.mr2]}>Powered By: </SansSerifText>
                        <Image source={images.properties.logo.konamixs} style={styles.logo} />
                      </View>
                    </View>
                    <View>
                      <SansSerifText style={[ gStyle.fw500, gStyle.fs12]}>Player Card Number</SansSerifText>
                      <SansSerifText style={[ gStyle.fw700, gStyle.fs16]}>0123491235</SansSerifText>
                    </View>
                  </ImageBackground>
                </View>
                <View style={[styles.playerCard, gStyle.ml6]}>
                  <ImageBackground source={images.properties.bg.eliteBg} style={[styles.card, styles.gridBg]}>
                    <View style={[display.dFlex, display.justifyBetween, ]}>
                      <Image source={images.properties.logo.eliteLogoDark} style={[gStyle.mt1]}/>
                      <View style={styles.poweredBy}>
                        <SansSerifText style={[gStyle.fs8, gStyle.mr2]}>Powered By: </SansSerifText>
                        <Image source={images.properties.logo.konamiEliteXs} style={styles.logo} />
                      </View>
                    </View>
                    <View>
                      <SansSerifText style={[ gStyle.fw500, gStyle.fs12]}>Player Card Number</SansSerifText>
                      <SansSerifText style={[ gStyle.fw700, gStyle.fs16]}>0123491235</SansSerifText>
                    </View>
                  </ImageBackground>
                </View>
                <View style={[styles.playerCard, gStyle.ml6]}>
                  <ImageBackground source={images.properties.bg.fortunaBg} style={[styles.card, styles.gridBg]}>
                    <View style={[display.dFlex, display.justifyBetween, ]}>
                      <Image source={images.properties.logo.fortunaLogoLight} style={[gStyle.mt1]}/>
                      <View style={styles.poweredBy}>
                        <SansSerifText style={[gStyle.fs8, gStyle.mr2]}>Powered By:</SansSerifText>
                        <Image source={images.properties.logo.konamixs} style={styles.logo} />
                      </View>
                    </View>
                    <View>
                      <SansSerifText style={[ gStyle.textLight, gStyle.fw500, gStyle.fs12]}>Player Card Number</SansSerifText>
                      <SansSerifText style={[ gStyle.textLight, gStyle.fw700, gStyle.fs16]}>0123491235</SansSerifText>
                    </View>
                  </ImageBackground>
                </View>
              </ScrollView>
            </View>
            <View style={[ gStyle.darkCard, gStyle.my4]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs14 ]}>Insights</SansSerifText>
                <GradientButton title="View Detail" customStyles={{width: '35%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
              <InsightDoughnutChart/>
            </View>
            <View style={[ gStyle.darkCard, gStyle.my4]}>
              <View style={[ display.flexBetween, display.alignCenter, gStyle.mb4 ]}>
                <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs14 ]}>Your Properties</SansSerifText>
                <GradientButton title="View All" customStyles={{width: '35%'}} customSpace={{padding: 12}} transform="normal" shape="round" fill="outline" color="light"  centerText={true} handlePress={() => navigation.navigate('')} />
              </View>
              <TouchableOpacity style={[ display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter ]} activeOpacity={0.8}>
                <View style={[]}>
                  <Image source={ images.properties.plazaDark}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                  <View>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>The Plaza Hotel & Casino</SansSerifText>
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
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Eclipse Gaming</SansSerifText>
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
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>WSKY Bar + Grill</SansSerifText>
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
          <View style={{paddingHorizontal: 16, paddingVertical: 8, paddingBottom: 150}}>
            <View style={[gStyle.darkCard, gStyle.my3,]}>
              <View style={[display.flexCenterBetween]}>
                <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>YOUR CASH</SansSerifText>
                <TouchableOpacity activeOpacity={0.8}>
                  <ThreeDotsLight/>
                </TouchableOpacity>
              </View>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, gStyle.my3]}>$8,385.28</SansSerifText>
              <SansSerifText style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs16,]}>Total Available Cash</SansSerifText>
            </View>
            <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt4, gStyle.mb2]}>Koin Accounts</SansSerifText>
            <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.lean.leanLeftSuccess} style={[gStyle.mr2]}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs14]}>Everyday Spending</SansSerifText>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[display.flexCenterBetween, gStyle.mt4, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                <View>
                  <View>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, ]}>2,802</SansSerifText>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs12, { position: 'absolute', top: 6, left: '100%' }]}>.99</SansSerifText>
                  </View>
                  <SansSerifText style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textSuccessLight,]}>Total balance</SansSerifText>
                </View>
                <View>
                  <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs14, display.alignSelfEnd]}>37.5%</SansSerifText>
                  <SansSerifText style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textSuccessLight,]}>of total funds</SansSerifText>
                </View>
              </View>
            </View>
            <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.lean.leanLeftPrimary} style={[gStyle.mr2]}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs14]}>Emergency Fund</SansSerifText>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[display.flexCenterBetween, gStyle.mt4, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                <View>
                  <View>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, ]}>$5,000</SansSerifText>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs12, { position: 'absolute', top: 6, left: '100%' }]}>.00</SansSerifText>
                  </View>
                  <SansSerifText style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textPrimaryLight,]}>Total balance</SansSerifText>
                </View>
                <View>
                  <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs14, display.alignSelfEnd]}>50%</SansSerifText>
                  <SansSerifText style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textPrimaryLight,]}>of total funds</SansSerifText>
                </View>
              </View>
            </View>
            <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt4, gStyle.mb2]}>Gaming Accounts</SansSerifText>
            <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.lean.leanLeftOrange} style={[gStyle.mr2]}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs14]}>Draft Kings Account</SansSerifText>
                  </View>
                  <View>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={[display.flexCenterBetween, gStyle.mt4, { flexDirection: 'row', alignItems: 'flex-end' }]}>
                <View>
                  <View>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32, ]}>$582</SansSerifText>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs12, { position: 'absolute', top: 6, left: '100%' }]}>.99</SansSerifText>
                  </View>
                  <SansSerifText style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textOrangeLight,]}>Total balance</SansSerifText>
                </View>
                <View>
                  <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs14, display.alignSelfEnd]}>37.5%</SansSerifText>
                  <SansSerifText style={[gStyle.textGrayLight, gStyle.fw600, gStyle.fs12, gStyle.textOrangeLight,]}>of total funds</SansSerifText>
                </View>
              </View>
            </View>
            <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt4, gStyle.mb2]}>Linked Accounts</SansSerifText>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={[gStyle.darkCard, gStyle.my3, {borderColor: '#FFFFFF', borderWidth: 1}]}>
                <View style={[display.flexCenterBetween]}>
                  <View style={[display.dFlex, display.alignCenter]}>
                    <Image source={images.icon.bank}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.ml2]}>Wells Fargo</SansSerifText>
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
                    <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.ml2]}>Bank of America</SansSerifText>
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
          <View style={{paddingHorizontal: 16, paddingVertical: 8, paddingBottom: 150}}>
            <SansSerifText style={[gStyle.textLight]}>Credit</SansSerifText>
          </View>
        )}
        {activeSegment === 'Rewards' && ( 
          <View style={{paddingHorizontal: 16, paddingVertical: 8, paddingBottom: 150}}>
            <SansSerifText style={[gStyle.textLight]}>Rewards</SansSerifText>
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
    right: -16,
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
  playerCard:{
    minWidth: 240,
  },
  card: {
    height: 150,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gridBg: {
    // padding: 24,
    borderRadius: 12,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  poweredBy: {
    flexDirection: 'row',           
    justifyContent: 'space-between',
    alignItems: 'center',           
    borderRadius: 32,
    height: 24,
    padding: 10,
    backgroundColor: "#fff"
  },
  logo: {
    resizeMode: 'contain',
  }
});