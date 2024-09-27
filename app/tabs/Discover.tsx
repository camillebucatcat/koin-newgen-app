import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import SegmentControl from '../../components/SegmentControl';
import { useState } from 'react';
import images from '../../constants/Images';
import Button from '../../components/Button';
import { router } from 'expo-router';
import { display } from '../styles/Display';

const Discover = () => {
  const [activeSegment, setActiveSegment] = useState('Perks');

  const handleSegmentChange = (segment: string) => {
    setActiveSegment(segment);
  };
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SegmentControl 
        titles={['Perks', 'Partners', 'Events' ]}
        onSegmentChange={handleSegmentChange}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
        {activeSegment === 'Perks' && ( 
          <View>
            <View>
            <ImageBackground 
              source={images.discover.topBg} 
              style={[gStyle.px6, { width: '100%', height: 570 }]}
            >
              <View style={[display.justifyEnd, {flex: 1}]}>
              <Image source={images.discover.edclogo} style={[gStyle.mb6]}/>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs4, gStyle.mb3]}>EDC Group Tickets</Text>
              <Text style={[gStyle.fw400, gStyle.textLight, gStyle.mb6]}>Get <Text style={[gStyle.fw700]}>10% off</Text> of tickets to EDC when you <br />purchase 6 or more entry passes.</Text>
              <Button title="See Ticket Details" customStyles={[gStyle.mb6, {}]} transform="normal" shape="round" fill="solid" color="primary" expand="block" centerText={true} handlePress={() => router.push('')} />
              <TouchableOpacity style={[display.alignCenter, gStyle.mb12]}>
                <Image source={images.discover.arrowdown} />
              </TouchableOpacity>
              </View>
            </ImageBackground>
            </View>
            <View style={[gStyle.px6]}>
              <View style={[display.flexBetween, display.alignCenter, gStyle.mb3]}>
                <Text style={[gStyle.fs4, gStyle.fw700, gStyle.textLight]}>Shopping</Text>
                <Button title="View All" customStyles={[gStyle.fw700, gStyle.textLight, gStyle.px0, {}]} transform="normal" shape="default" fill="clear" color="light" centerText={true} handlePress={() => router.push('')} />
              </View>
            </View>
              <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={[styles.card]}>
                  <View style={{ borderRadius: 12, overflow: 'hidden' }}>
                    <ImageBackground 
                      source={images.discover.shopping.pic1} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View style={[display.justifyBetween, {display: 'flex'}]}>
                        <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                        <TouchableOpacity>
                          <Text>bookmark</Text>
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </View>
                  </View>
                </ScrollView>
              </View>
          </View>
        )}

        {activeSegment === 'Partners' && ( 
          <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
            <Text style={{ fontSize: 16, color: '#888' }}>Partners</Text>
          </View>
        )}

        {activeSegment === 'Events' && ( 
          <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
            <Text style={{ fontSize: 16, color: '#888' }}>Events</Text>
          </View>
        )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    minWidth: 230,
  },
  imgtext:{
    backgroundColor: '#D6C4FF',
    borderRadius: 100,
  }
});