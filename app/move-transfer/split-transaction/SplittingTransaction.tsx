import { ScrollView, StyleSheet, Text, View, Image, TextInput, Platform, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/Global';
import Header from '../../../components/header/Header';
import images from '../../../constants/Images';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import SegmentControl from '../../../components/SegmentControl';
import GradientButton from '../../../components/GradientButton';

const SplittingTransaction = () => {
  const alphabets = useMemo(() => ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')], []);
  const [activeSegment, setActiveSegment] = useState('Contacts');

  const handleSegmentChange = (segment: string) => {
    setActiveSegment(segment);
  };
  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Split Transaction(s)" showCancelBtn={true} />
        <SegmentControl 
        fullWidth={false}
        titles={['Contacts', 'Groups', ]}
        onSegmentChange={handleSegmentChange}
      />
      {activeSegment === 'Contacts' && (
        <>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.searchContainer, gStyle.mx4, gStyle.mt4]}>
              <Image source={images.icon.searchInput} />
              <TextInput placeholder="Search Contacts" placeholderTextColor="#A8A8A8" style={styles.input} />
            </View>
            <View style={[gStyle.px4, gStyle.pt6]}>
              <SansSerifText style={[gStyle.fw400, gStyle.fs26]}>Who are you <SansSerifText style={gStyle.fw600}>splitting this transaction</SansSerifText> with?</SansSerifText>
              <SansSerifText style={[gStyle.fw700, gStyle.pt6, gStyle.fs14, {textAlign: 'right'}]}>0 contacts selected</SansSerifText>
            </View>
            <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.pl4, gStyle.pb4, gStyle.pt4]}>Recent</SansSerifText>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[gStyle.pt4]}>
              <TouchableOpacity style={[gStyle.ml4]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.icon.noPfp} style={styles.avatarImg} />
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Jerry Seinfeld <SansSerifText style={[gStyle.fw600]}>(invited)</SansSerifText></SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml4]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user1} style={styles.avatarImg} />
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Olivia Rhye</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user2} style={styles.avatarImg} />
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Joshua Smith</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user3} style={styles.avatarImg} />
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Hailey Williams</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user4} style={styles.avatarImg} />
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Claudette Jones</SansSerifText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[gStyle.ml5]} activeOpacity={0.5}>
                <View style={[gStyle.mb3, styles.avatarCard, { borderRadius: 12, overflow: 'hidden' }]}>
                  <Image source={images.profileSample.user5} style={styles.avatarImg} />
                  <SansSerifText style={[gStyle.textLight, gStyle.fs12, gStyle.fw400, display.alignTextCenter]}>Rachel Miller</SansSerifText>
                </View>
              </TouchableOpacity>
            </ScrollView>
            {/** Alphabetical Contact List */}
            <View style={styles.alphabeticalContainer}>
              <View style={styles.contactList}>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.pb5]}>A</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user1} style={styles.contactImg} />
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Ada Wilson</SansSerifText>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user2} style={styles.contactImg} />
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Aiden Rodríguez</SansSerifText>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.flexCenterBetween]}>
                      <View style={[display.dFlex, display.alignCenter]}>
                        <Image source={images.icon.noPfp} style={styles.contactImg} />
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Angela Jones</SansSerifText>
                      </View>
                      <View style={styles.invitedContainer}>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw600]}>Invited</SansSerifText>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.flexCenterBetween]}>
                      <View style={[display.dFlex, display.alignCenter]}>
                        <Image source={images.icon.noPfp} style={styles.contactImg} />
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Arian Williams</SansSerifText>
                      </View>
                      <View style={styles.invitedContainer}>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw600]}>Invited</SansSerifText>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>B</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user3} style={styles.contactImg} />
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Betty Luo</SansSerifText>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.flexCenterBetween]}>
                      <View style={[display.dFlex, display.alignCenter]}>
                        <Image source={images.icon.noPfp} style={styles.contactImg} />
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Bill Jones</SansSerifText>
                      </View>
                      <View style={styles.invitedContainer}>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw600]}>Invited</SansSerifText>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>C</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user5} style={styles.contactImg} />
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Chloe Davis</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>M</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user6} style={styles.contactImg} />
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Mia Chen</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>R</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user4} style={styles.contactImg} />
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Rachel Miller</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>T</SansSerifText>
                <View>
                  <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
                    <View style={[display.dFlex, display.alignCenter]}>
                      <Image source={images.profileSample.user7} style={styles.contactImg} />
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Tommy Johnson</SansSerifText>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.alphabetIndex}>
            {alphabets.map((letter, index) => (
              <TouchableOpacity key={letter} disabled={index === 0}>
                <Text style={[styles.alphabetText, gStyle.textPrimaryLight]}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
       )}
      {activeSegment === 'Groups' && ( 
        <>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
            <View style={[gStyle.px4, gStyle.pt6]}>
              <SansSerifText style={[gStyle.fw400, gStyle.fs26]}>What group are you <SansSerifText style={gStyle.fw600}>splitting this transactions</SansSerifText> with?</SansSerifText>
            </View>
            <View style={[gStyle.p4]}>
              <GradientButton title="Create a new group" image={images.icon.plusgradient} alignment="start" layout="left" shape="round" transform="normal" expand='block'/>
              <TouchableOpacity activeOpacity={0.5}  style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2, gStyle.mt6]}>
                <Image source={images.groupSample.group1} style={styles.userImg}/>
                <View style={[display.flexCenterBetween, gStyle.ml4]}>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>EDC Fam</SansSerifText>
                  <Image source={images.icon.arrowright}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}  style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2]}>
                <Image source={images.groupSample.group2} style={styles.userImg}/>
                <View style={[display.flexCenterBetween, gStyle.ml4]}>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Super Club</SansSerifText>
                  <Image source={images.icon.arrowright}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5}  style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2]}>
                <Image source={images.groupSample.group3} style={styles.userImg}/>
                <View style={[display.flexCenterBetween, gStyle.ml4]}>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Bachelorette Babes</SansSerifText>
                  <Image source={images.icon.arrowright}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2]}>
                <Image source={images.groupSample.group4} style={styles.userImg}/>
                <View style={[display.flexCenterBetween, gStyle.ml4]}>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Family</SansSerifText>
                  <Image source={images.icon.arrowright}/>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SplittingTransaction;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // paddingBottom: 100,
  },
  searchContainer: {
    backgroundColor: '#353438',
    borderRadius: 50,
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    fontSize: 14,
    marginLeft: 8,
    fontFamily: 'Aventa',
    color: '#fff',
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
  invitedContainer: {
    backgroundColor: '#4F4F4F',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50
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
  alphabeticalContainer: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  contactList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contactImg: {
    width: 44, 
    height: 44,
    borderRadius: 12,
    marginRight: 8,
  },
  alphabetIndex: {
    alignItems: 'center',
    position: 'absolute',
    top: 350,
    right: 0,
  },
  alphabetText: {
    fontSize: 13,
    color: '#fff',
    marginVertical: 2,
  },
  userImg: {
    borderRadius: 12,
    width: 44,
    height: 44,
  }
});
