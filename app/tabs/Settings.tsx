import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import SegmentControl from '../../components/SegmentControl';
import { useState } from 'react';
import GradientButton from '../../components/GradientButton';
import images from '../../constants/Images';
import { display } from '../styles/Display';

const Settings = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState('Transfer');

  const handleSegmentChange = (segment: string) => {
    setActiveSegment(segment);
  };
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SegmentControl 
        titles={['Transfer', 'Manage', 'History' ]}
        onSegmentChange={handleSegmentChange}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
        {activeSegment === 'Transfer' && ( 
          <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
            <Text style={{ fontSize: 16, color: '#888' }}>Transfer</Text>
          </View>
        )}

        {activeSegment === 'Manage' && ( 
          <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>Contacts</Text>
              <Text style={[gStyle.textLight, gStyle.fw400, gStyle.fs14, gStyle.mt2]}>Manage your contacts...</Text>
              <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} style={[gStyle.mt6]}>
                <View style={[styles.avatarCard, gStyle.ml1]}>
                  <Image source={images.profileSample.user1} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Olivia Rhye</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user2} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Joshua Smith</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user3} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Hailey Williams</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user4} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Claudette Jones</Text>
                </View>
                <View style={[styles.avatarCard, gStyle.ml5]}>
                  <Image source={images.profileSample.user5} style={styles.avatarImg}/>
                  <Text style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Rachel Miller</Text>
                </View>
              </ScrollView>
              <GradientButton title="Manage Contacts" transform="normal" handlePress={() => navigation.navigate('')} fill="outline" expand="block" />
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>Groups</Text>
              <Text style={[gStyle.textLight, gStyle.fw400, gStyle.fs14]}>Manage your groups...</Text>
              <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false} style={[gStyle.mt6,]}>
                <View style={[styles.avatarCard,]}>
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
              <GradientButton title="Manage Groups" transform="normal" handlePress={() => navigation.navigate('')} fill="outline" expand="block" />
            </View>
            <View style={[gStyle.darkCard, gStyle.my4]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16]}>Markers</Text>
              <Text style={[gStyle.textLight, gStyle.fw400, gStyle.fs14]}>Manage your markers...</Text>
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
              <Text style={[gStyle.textLight, gStyle.fw400, gStyle.fs14]}>Manage your NFC wristbands...</Text>
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
            <Text style={{ fontSize: 16, color: '#888' }}>History</Text>
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
});