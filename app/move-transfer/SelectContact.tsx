import React from 'react';
import { View, Text, Modal, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import { SansSerifText } from '../../components/SanSerifText';
import { gStyle } from '../styles/Global';
import images from '../../constants/Images';
import { display } from '../styles/Display';
import GradientButton from '../../components/GradientButton';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const contacts = [
  { id: '1', name: 'Ada Wilson', image: images.profileSample.user1 },
  { id: '2', name: 'Aiden Rodríguez', image: images.profileSample.user2 },
  { id: '3', name: 'Angela Jones', image: images.icon.noPfp },
  { id: '4', name: 'Arian Williams', image: images.icon.noPfp },
  { id: '5', name: 'Betty Luo', image: images.profileSample.user3 },
  { id: '6', name: 'Bill Jones', image: images.icon.noPfp },
  { id: '7', name: 'Chloe Davis', image: images.profileSample.user5 },
  { id: '8', name: 'Mia Chen', image: images.profileSample.user6 },
  { id: '9', name: 'Rachel Miller', image: images.profileSample.user4 },
  { id: '10', name: 'Tommy Johnson', image: images.profileSample.user7 },
];

const SelectContact: React.FC<ModalProps> = ({ visible, onClose }) => {
  const alphabets = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const renderContact = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity style={[gStyle.contactCard, gStyle.mb4]} activeOpacity={0.5}>
      <View style={[display.dFlex, display.alignCenter]}>
        <Image source={item.image} style={styles.contactImg} />
        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>{item.name}</SansSerifText>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.backgroundOverlay}>
          <View style={styles.headerContainer}>
            <SansSerifText style={[gStyle.fw600, gStyle.fs18]}>Select Contact</SansSerifText>
            <TouchableOpacity onPress={onClose}>
              <Image source={images.icon.close} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} >
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
          {/** Alphabetical Contact List */}
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
                      <View style={styles.invitedContainer}>
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
                      <Image source={images.profileSample.user4} style={styles.contactImg}/>
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
            <GradientButton title="Invite To Koin" shape="round" transform="normal" expand='block'/>
          </View>
        </ScrollView>
          <View style={styles.alphabetIndex}>
            {alphabets.map((letter, index) => (
              <TouchableOpacity key={letter} disabled={index === 0}>
                <Text style={[styles.alphabetText, gStyle.textPrimaryLight]}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  backgroundOverlay: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#211F21',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#767680',
    borderRadius: 50,
    padding: 16,
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
  contactImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  alphabeticalContainer: {
    padding: 16,
  },
  alphabetIndex: {
    alignItems: 'center',
    position: 'absolute',
    top: 320,
    right: 0,
  },
  alphabetText: {
    fontSize: 16,
  },
  invitedContainer: {
    backgroundColor: '#4F4F4F',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 50
  },
  contactList: {
    flex: 1,
    // paddingHorizontal: 16,
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
});

export default SelectContact;
