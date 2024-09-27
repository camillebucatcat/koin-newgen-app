import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import SegmentControl from '../../components/SegmentControl';
import { useState } from 'react';
import GradientButton from '../../components/GradientButton';
import images from '../../constants/Images';
import { display } from '../styles/Display';
import { SansSerifText } from '../../components/SanSerifText';
import ThreeDotsLight from '../../assets/icons/svg-icons/three-dots-light';
import SendLightIcon from '../../assets/icons/svg-icons/send-light-icon';
import RequestLightIcon from '../../assets/icons/svg-icons/request-light-icon';
import SplitLightIcon from '../../assets/icons/svg-icons/split-light-icon';
import Colors from '../../constants/Colors';
import Header from '../../components/Header';
import RecentTransactions from '../../components/RecentTransactions';
import Button from '../../components/Button';

const Settings = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState('Transfer');

  const handleSegmentChange = (segment: string) => {
    setActiveSegment(segment);
  };
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <Header />
      <SegmentControl 
        titles={['Transfer', 'Manage', 'History' ]}
        onSegmentChange={handleSegmentChange}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
        {activeSegment === 'Transfer' && ( 
          <View>
            <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
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
              <View style={[display.flexCenterBetween, gStyle.pt4, { width: '100%', flexDirection: 'row', justifyContent: 'space-between' }]}>
                <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, marginRight: 8 }}>
                  <View style={[styles.btnContainer]}>
                    <SendLightIcon />
                    <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs14, gStyle.mt2]}>Send</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, marginHorizontal: 8 }}>
                  <View style={[styles.btnContainer]}>
                    <RequestLightIcon />
                    <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs14, gStyle.mt2]}>Request</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, marginLeft: 8 }}>
                  <View style={[styles.btnContainer]}>
                    <SplitLightIcon />
                    <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs14, gStyle.mt2]}>Split</SansSerifText>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt2, gStyle.px4, gStyle.py2]}>Recent</SansSerifText>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[gStyle.pt4]}>
                <TouchableOpacity style={[gStyle.ml4]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.profileSample.user1} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Olivia Rhye</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[gStyle.ml5]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.profileSample.user2} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Joshua Smith</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[gStyle.ml5]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.profileSample.user3} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Hailey Williams</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[gStyle.ml5]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.profileSample.user4} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Claudette Jones</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[gStyle.ml5]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.profileSample.user5} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Rachel Miller</SansSerifText>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View>
              <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs16, gStyle.mt2, gStyle.px4, gStyle.py2]}>Recent Groups</SansSerifText>
              <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} style={[gStyle.pt4]}>
                <TouchableOpacity style={[gStyle.ml4]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.groupSample.group1} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>EDC Fam</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[gStyle.ml5]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.groupSample.group2} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Super Club</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[gStyle.ml5]}>
                  <View style={[gStyle.mb3, styles.avatarCard,  { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.groupSample.group3} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Bachelorette Babes</SansSerifText>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[gStyle.ml5]}>
                  <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                    <Image source={images.groupSample.group4} style={styles.avatarImg}/>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Family</SansSerifText>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        )}

        {activeSegment === 'Manage' && ( 
          <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>Contacts</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw400, gStyle.fs14, gStyle.mt2]}>Manage your contacts...</SansSerifText>
              <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} style={[gStyle.mt6]}>
                <View style={[styles.avatarCard, gStyle.ml1]}>
                  <Image source={images.profileSample.user1} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Olivia Rhye</SansSerifText>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user2} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Joshua Smith</SansSerifText>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user3} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Hailey Williams</SansSerifText>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user4} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Claudette Jones</SansSerifText>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user5} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Rachel Miller</SansSerifText>
                </View>
              </ScrollView>
              <GradientButton title="Manage Contacts" transform="normal" handlePress={() => navigation.navigate('')} fill="outline" expand="block" />
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <SansSerifText style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>Groups</SansSerifText>
              <SansSerifText style={[gStyle.textLight, gStyle.fw400, gStyle.fs14, gStyle.mt2]}>Manage your groups...</SansSerifText>
              <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} style={[gStyle.mt6,]}>
                <View style={[styles.avatarCard,]}>
                  <Image source={images.groupSample.group1} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>EDC Fam</SansSerifText>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.group2} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Super Club</SansSerifText>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.group3} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Bachelorette Babes</SansSerifText>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.group4} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Family</SansSerifText>
                </View>
              </ScrollView>
              <GradientButton title="Manage Groups" transform="normal" handlePress={() => navigation.navigate('')} fill="outline" expand="block" />
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>Markers</Text>
              <Text style={[gStyle.textLight, gStyle.fw400, gStyle.fs14, gStyle.mt2]}>Manage your markers...</Text>
              <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} style={[gStyle.mt6,]}>
                <View style={[styles.avatarCard, gStyle.ml1]}>
                  <Image source={images.groupSample.casino1} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Casino</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.casino2} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Casino</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.casino3} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Casino</Text>
                </View>
              </ScrollView>
              <GradientButton title="Manage Markers" transform="normal" handlePress={() => navigation.navigate('')} fill="outline" expand="block" />
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>Wristbands</Text>
              <Text style={[gStyle.textLight, gStyle.fw400, gStyle.fs14, gStyle.mt2]}>Manage your NFC wristbands...</Text>
              <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} style={[gStyle.mt6,]}>
                <View style={[styles.avatarCard, gStyle.ml1]}>
                  <Image source={images.groupSample.group1} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>EDC Fam</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.group2} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Super Club</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.group3} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Bachelorette Babes</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.groupSample.group4} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Family</Text>
                </View>
              </ScrollView>
              <GradientButton title="Manage Wristbands" transform="normal" handlePress={() => navigation.navigate('')} fill="outline" expand="block" />
            </View>
          </View>
        )}

        {activeSegment === 'History' && ( 
          <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
            <View style={[display.flexCenterBetween, gStyle.mt4]}>
              <Text style={[gStyle.fw600, gStyle.textGrayLight, {flex: 1}]}>Transactions</Text>
              <View style={[display.dFlex, display.justifyEnd]}>
                <TouchableOpacity style={[gStyle.mr3]}>
                  <Image source={images.icon.list}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={images.icon.splitup}/>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[gStyle.fw700, gStyle.textLight, gStyle.mb1, gStyle.mt5]}>JULY</Text>
            <RecentTransactions/>
          </View>
        )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Settings;

const styles = StyleSheet.create({
  avatarCard: {
    width: 72,
    paddingBottom: 16,
    alignItems: 'center',
  },
  avatarImg: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginBottom: 6,
  },
  scrollViewContent: {
    flexGrow: 1,
    // justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: Colors.primary.color,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',  
    justifyContent: 'center', 
  }
  
});