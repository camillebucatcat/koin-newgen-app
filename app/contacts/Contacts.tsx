import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import { SansSerifText } from '../../components/SanSerifText';
import images from '../../constants/Images';
import { display } from '../styles/Display';
import GradientButton from '../../components/GradientButton';
import Header from '../../components/header/Header';
import SegmentControl from '../../components/SegmentControl';
import { router } from 'expo-router';

const  Contacts= ({ navigation })=>{
    const [activeSegment, setActiveSegment] = useState('Koin Connections');

  const handleSegmentChange = (segment: string) => {
    setActiveSegment(segment);
  };
    const alphabets = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

return(
<SafeAreaProvider style={[gStyle.darkBg,{}]}>
    <Header title='Contacts'/>
<SegmentControl 
        titles={['Koin Connections', 'Synced Contacts' ]}
        onSegmentChange={handleSegmentChange}
      />
<SafeAreaView style={[{flex: 1}]}>
<ScrollView>
{activeSegment === 'Koin Connections' && (
    <View style={styles.modalContainer}>
        <View style={styles.backgroundOverlay}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.searchContainer, gStyle.mx4]}>
              <Image source={images.icon.searchInput} />
              <TextInput placeholder="Search Contacts" placeholderTextColor="#A8A8A8" style={styles.input} />
            </View>
            <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.pl4, gStyle.pb4, gStyle.pt4]}>Recent</SansSerifText>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[gStyle.pt4]}>
            <TouchableOpacity style={[gStyle.ml4]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.icon.noPfp} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Jerry Seinfeld <SansSerifText style={[gStyle.fw600]}>(invited)</SansSerifText></SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml4]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user1} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Olivia Rhye</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user2} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Joshua Smith</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user3} style={styles.avatarImg}/>
                <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Hailey Williams</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user4} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Claudette Jones</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user5} style={styles.avatarImg}/>
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Rachel Miller</SansSerifText>
                </View>
              </TouchableOpacity>
            </ScrollView>
            {/* Alphabetical Contact List */}
            <View style={styles.alphabeticalContainer}>
              <View style={styles.contactList}>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.pb5]}>A</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user1} style={styles.contactImg}/>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Ada Wilson</SansSerifText>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user2} style={styles.contactImg}/>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Aiden Rodríguez</SansSerifText>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.flexCenterBetween]}>
                      <View style={[display.dFlex, display.alignCenter]}>
                        <Image source={images.icon.noPfp} style={styles.contactImg}/>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Angela Jones</SansSerifText>
                      </View>
                      <View style={styles.koininvitecontainer}>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw600]}>Invited</SansSerifText>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.flexCenterBetween]}>
                      <View style={[display.dFlex, display.alignCenter]}>
                        <Image source={images.icon.noPfp} style={styles.contactImg}/>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Arian Williams</SansSerifText>
                      </View>
                      <View style={styles.koininvitecontainer}>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw600]}>Invited</SansSerifText>
                      </View>
                    </View>                 
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>B</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user3} style={styles.contactImg}/>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Betty Luo</SansSerifText>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.flexCenterBetween]}>
                      <View style={[display.dFlex, display.alignCenter]}>
                        <Image source={images.icon.noPfp} style={styles.contactImg}/>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Bill Jones</SansSerifText>
                      </View>
                      <View style={styles.koininvitecontainer}>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw600]}>Invited</SansSerifText>
                      </View>
                    </View>                 
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>C</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user5} style={styles.contactImg}/>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Chloe Davis</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>M</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user6} style={styles.contactImg}/>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Mia Chen</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>R</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user1} style={styles.contactImg}/>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Rachel Miller</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>T</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user7} style={styles.contactImg}/>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Tommy Johnson</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              
            </View>
            <View style={[gStyle.p4]}>
              {/* <GradientButton title="Invite To Koin" transform="normal" expand='block'/> */}
            </View>
          </ScrollView>
          <View style={styles.alphabetIndex}>
            {alphabets.map((letter, index) => (
              <TouchableOpacity  key={letter}
                disabled={index === 0} >
                <Text style={[styles.alphabetText, gStyle.textPrimaryLight]}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
)} 
{activeSegment === 'Synced Contacts' && (
    <View>
        <View style={[styles.searchContainer, gStyle.mx4, gStyle.mb8]}>
              <Image source={images.icon.searchInput} />
              <TextInput placeholder="Search Contacts" placeholderTextColor="#A8A8A8" style={styles.input} />
            </View>
        <View style={styles.alphabeticalContainer}>
        <View style={styles.contactList}>
        <View>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                <View style={[display.flexCenterBetween]}>
                    <View style={[display.dFlex, display.alignCenter]}>
                        <Image source={images.profileSample.user1} style={styles.contactImg}/>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Ada Wilson</SansSerifText>
                    </View>
                    <View style={[]}>
                        <GradientButton title="Add" transform="normal" fill="solid" color="light" background="dark" layout="right" image={images.icon.plus} centerText={true} handlePress={() => router.push('')} />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.profileSample.user2} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Aiden Rodríguez</SansSerifText>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.flexCenterBetween]}>
                <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.icon.noPfp} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Angela Jones</SansSerifText>
                </View>
                <View style={[styles.invitedContainer]}>
                    <View style={[display.dFlex, display.alignCenter,{}]}>
                        <Image source={images.icon.info} style={[gStyle.mr2,{}]}/>
                    <SansSerifText style={[gStyle.fs14, gStyle.fw600, gStyle.textGrayLight]}>Invited</SansSerifText>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.flexCenterBetween]}>
                <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.icon.noPfp} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Arian Williams</SansSerifText>
                </View>
                <View style={[styles.invitedContainer]}>
                    <View style={[display.dFlex, display.alignCenter,{}]}>
                        <Image source={images.icon.info} style={[gStyle.mr2,{}]}/>
                    <SansSerifText style={[gStyle.fs14, gStyle.fw600, gStyle.textGrayLight]}>Invited</SansSerifText>
                    </View>
                </View>
            </View>                 
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.profileSample.user3} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Betty Luo</SansSerifText>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.flexCenterBetween]}>
                <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.icon.noPfp} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Bill Jones</SansSerifText>
                </View>
                <View style={[]}>
                <GradientButton title="Invite" transform="normal" fill="solid" color="dark" background='none' centerText={true} handlePress={() => router.push('')} />
                </View>
            </View>                 
            </TouchableOpacity>
        </View>
        <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>C</SansSerifText>
        <View>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.profileSample.user5} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Chloe Davis</SansSerifText>
            </View>
            </TouchableOpacity>
        </View>
        <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>M</SansSerifText>
        <View>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.profileSample.user6} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Mia Chen</SansSerifText>
            </View>
            </TouchableOpacity>
        </View>
        <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>R</SansSerifText>
        <View>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.profileSample.user1} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Rachel Miller</SansSerifText>
            </View>
            </TouchableOpacity>
        </View>
        <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>T</SansSerifText>
        <View>
            <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
            <View style={[display.dFlex, display.alignCenter]}>
                <Image source={images.profileSample.user7} style={styles.contactImg}/>
                <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Tommy Johnson</SansSerifText>
            </View>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    </View>
    
)}
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default Contacts;
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1, 
    },
    backgroundOverlay: {
      flex: 1,
      backgroundColor: '#211F21',
      justifyContent: 'flex-start',
    },
    headerContainer: {
      padding: 16,
      backgroundColor: '#211F21',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
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
    searchContainer: {
      backgroundColor: '#7676803D',
      borderRadius: 50,
      paddingVertical: 8,
      paddingHorizontal: 16,
      flexDirection: 'row',
      marginTop: 24,
    },
    input: {
      fontSize: 16,
      marginLeft: 16,
      fontFamily: 'Aventa',
      color: '#fff',
      ...Platform.select({
        web: {
          outlineStyle: 'none',
        },
      }),
    },
    scrollContainer: {
      flexGrow: 1, 
      paddingBottom: 100, 
    },
    alphabeticalContainer: {
      flexDirection: 'row',
      paddingTop: 16,
    },
    contactList: {
      flex: 1,
      paddingHorizontal: 16,
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
    },
    contactText: {
      marginLeft: 8,
      fontSize: 16,
      color: '#fff',
    },
    alphabetIndex: {
      alignItems: 'flex-end',
      position: 'absolute',
      top: 320,
      left: 0,
      right: 4,
  
      backgroundColor: gStyle.darkBg.color, 
    },
    alphabetText: {
      fontSize: 14,
    },
    contactImg: {
      width: 44, 
      height: 44,
      borderRadius: 12,
      marginRight: 8,
    },
    invitedContainer: {
      borderColor: '#A8A8A8',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth: 1
    },
    koininvitecontainer: {
        backgroundColor: '#4F4F4F',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 50
      }
  });
  