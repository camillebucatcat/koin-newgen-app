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
          <View style={{paddingBottom: 200}}>
            <View>
            <ImageBackground 
              source={images.discover.topBg} 
              style={[gStyle.px6, { width: '100%', height: 570 }]}
            >
              <View style={[display.justifyEnd, {flex: 1}]}>
              <Image source={images.discover.edclogo} style={[gStyle.mb6]}/>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16, gStyle.mb3]}>EDC Group Tickets</Text>
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
              <View style={[gStyle.mb15]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[]}>
                <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.shopping.pic1} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>

                  <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.shopping.pic2} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>
                </ScrollView>
              </View>

              <View style={[gStyle.px6]}>
              <View style={[display.flexBetween, display.alignCenter, gStyle.mb3]}>
                <Text style={[gStyle.fs4, gStyle.fw700, gStyle.textLight]}>Gaming</Text>
                <Button title="View All" customStyles={[gStyle.fw700, gStyle.textLight, gStyle.px0, {}]} transform="normal" shape="default" fill="clear" color="light" centerText={true} handlePress={() => router.push('')} />
              </View>
            </View>
              <View style={[gStyle.mb15]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[]}>
                <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.gaming.pic1} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>

                  <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.gaming.pic2} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>
                </ScrollView>
              </View>

              <View style={[gStyle.px6]}>
              <View style={[display.flexBetween, display.alignCenter, gStyle.mb3]}>
                <Text style={[gStyle.fs4, gStyle.fw700, gStyle.textLight]}>Events</Text>
                <Button title="View All" customStyles={[gStyle.fw700, gStyle.textLight, gStyle.px0, {}]} transform="normal" shape="default" fill="clear" color="light" centerText={true} handlePress={() => router.push('')} />
              </View>
            </View>
              <View style={[gStyle.mb15]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[]}>
                <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.events.pic1} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>

                  <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.events.pic2} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>
                </ScrollView>
              </View>

              <View style={[gStyle.px6]}>
              <View style={[display.flexBetween, display.alignCenter, gStyle.mb3]}>
                <Text style={[gStyle.fs4, gStyle.fw700, gStyle.textLight]}>Dining</Text>
                <Button title="View All" customStyles={[gStyle.fw700, gStyle.textLight, gStyle.px0, {}]} transform="normal" shape="default" fill="clear" color="light" centerText={true} handlePress={() => router.push('')} />
              </View>
            </View>
              <View style={[gStyle.mb15]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[]}>
                <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.dining.pic1} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>

                  <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.dining.pic2} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>
                </ScrollView>
              </View>

              <View style={[gStyle.px6]}>
              <View style={[display.flexBetween, display.alignCenter, gStyle.mb3]}>
                <Text style={[gStyle.fs4, gStyle.fw700, gStyle.textLight]}>Shows</Text>
                <Button title="View All" customStyles={[gStyle.fw700, gStyle.textLight, gStyle.px0, {}]} transform="normal" shape="default" fill="clear" color="light" centerText={true} handlePress={() => router.push('')} />
              </View>
            </View>
              <View style={[gStyle.mb15]}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[]}>
                <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.shows.pic1} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>

                  <View style={[styles.card, gStyle.ml6]}>
                  <View style={[gStyle.mb3, { borderRadius: 12, overflow: 'hidden' }]}>
                    <ImageBackground 
                      source={images.discover.shows.pic2} 
                      style={[gStyle.p3, { height: 128 }]}
                    >
                      <View>
                        <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
                          <Text style={[gStyle.fw600, styles.imgtext, gStyle.px3]}>Popular</Text>
                          <TouchableOpacity style={[styles.bookmark, gStyle.p1 ]}>
                            <Image source={images.discover.bookmark}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  <Text style={[gStyle.fw600, gStyle.fs4, gStyle.mb2, gStyle.textLight]}>10% OFF at The Shops</Text>
                  <Text style={[gStyle.fs3, gStyle.textLight]}>Expires: August 19th, 2024 11:59pm</Text>
                  </View>
                </ScrollView>
              </View>

              <View>
            <ImageBackground 
              source={images.discover.botBg} 
              style={[gStyle.px6, { width: '100%', height: 570 }]}
            >
              <View style={[display.justifyEnd, {flex: 1}]}>
              <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs16, gStyle.mb3]}>Under the Electric Sky</Text>
              <Text style={[gStyle.fw400, gStyle.textLight, gStyle.mb6]}>Come hang with SKYY Vodka at the Pacific Mineral Cove for fresh-tasting cocktails!</Text>
              <Button title="Learn more" customStyles={[gStyle.mb6, gStyle.fw700, gStyle.fs3, {}]} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => router.push('')} />
              </View>
            </ImageBackground>
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
  },
  bookmark:{
    backgroundColor: '#1F1F1F5C',
    borderRadius: 100
  }
});