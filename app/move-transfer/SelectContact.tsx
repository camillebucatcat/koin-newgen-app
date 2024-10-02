import React from 'react';
import { View, Text, Modal, ScrollView, Image, TextInput, StyleSheet, Platform, Touchable, TouchableOpacity } from 'react-native';
import { SansSerifText } from '../../components/SanSerifText';
import { gStyle } from '../styles/Global';
import images from '../../constants/Images';
import { display } from '../styles/Display';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const SelectContact: React.FC<ModalProps> = ({ visible, onClose }) => {
  
  const alphabets = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

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
            <View>
              <Image source={images.icon.close}/>
            </View>
          </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            <View style={[styles.searchContainer, gStyle.mx4]}>
              <Image source={images.icon.searchInput} />
              <TextInput placeholder="Search Contacts" placeholderTextColor="#A8A8A8" style={styles.input} />
            </View>
            <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.pl4, gStyle.pb4, gStyle.pt4]}>Recent</SansSerifText>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[gStyle.pt4]}>
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

                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>B</SansSerifText>
                <View>
                  
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>C</SansSerifText>
                <View>
                  
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>D</SansSerifText>
                <View>
                  
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>M</SansSerifText>
                <View>
                  
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>R</SansSerifText>
                <View>
                  
                </View>
                <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700, gStyle.py5]}>T</SansSerifText>
                <View>
                  
                </View>
              </View>
              <View style={styles.alphabetIndex}>
                {alphabets.map((letter, index) => (
                  <TouchableOpacity  key={letter}
                  disabled={index === 0} >
                    <Text style={[styles.alphabetText, gStyle.textPrimaryLight]}>{letter}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
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
    backgroundColor: 'rgba(52, 52, 52, 10)',
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
  scrollView: {
    flex: 1,
  },
  alphabeticalContainer: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  contactList: {
    flex: 1,
    paddingLeft: 16,
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
    marginRight: 6,
  },
  alphabetText: {
    fontSize: 14,
  },
});

export default SelectContact;
