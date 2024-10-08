import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, Image, TextInput, StyleSheet, Platform, Touchable, TouchableOpacity } from 'react-native';
import { SansSerifText } from '../../components/SanSerifText';
import { gStyle } from '../styles/Global';
import images from '../../constants/Images';
import { display } from '../styles/Display';
import GradientButton from '../../components/GradientButton';
import RadioButton from '../../components/RadioButton';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const SelectCategory: React.FC<ModalProps> = ({ visible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = [
    { image: images.selectCategories.banking, label: 'Banking', value: 'option1', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.cards, label: 'Cards', value: 'option2', layout: 'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.casino, label: 'Casino', value: 'option3', layout: 'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.dining, label:'Dining', value: 'option4', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.drinks, label: 'Drinks', value: 'option5', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.exercise, label: 'Exercise', value: 'option6', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.inPersonBet, label: 'In-Person Bet', value: 'option7', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.shopping, label:'Shopping', value: 'option8', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.koinTransfer, label: 'Koin Transfer', value: 'option9', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.showTickets, label: 'Show Tickets', value: 'option10', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.sportsGame, label: 'Sports Game', value: 'option11', layout:'space-between', imageWidth: 44, imageHeight: 44},
    { image: images.selectCategories.transport, label:'Transport', value: 'option12', layout:'space-between', imageWidth: 44, imageHeight: 44},
  ];

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };


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
            <View style={[gStyle.p4]}>
              <RadioButton
                options={options}
                selectedOption={selectedOption}
                onSelect={handleSelect}
                showBorder={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

export default SelectCategory

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
  scrollView: {
    flex: 1,
  },
})