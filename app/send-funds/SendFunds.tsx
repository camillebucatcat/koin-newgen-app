import React from 'react';
import { View, Image, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { gStyle } from '../styles/Global';
import { SansSerifText } from '../../components/SanSerifText';
import { display } from '../styles/Display';
import images from '../../constants/Images';
import FormField from '../../components/FormField';


interface ModalProps {
    visible: boolean;
    onClose: () => void;
}

const SendFunds: React.FC<ModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={[styles.modalContainer, gStyle.darkBg]}>
        <ScrollView>
          <View style={[display.flexCenterBetween, styles.header]}>
            <View>
              <SansSerifText>Send Funds</SansSerifText>
            </View>
            <TouchableOpacity onPress={onClose}>
              <View>
                <SansSerifText style={[gStyle.fw700]}>Cancel</SansSerifText>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <SansSerifText style={[gStyle.fw600]}>Select Payee</SansSerifText>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={[gStyle.darkCard, gStyle.my4]}>
                <View style={[display.flexCenterBetween]}>
                  <SansSerifText>Select Contact</SansSerifText>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
            </TouchableOpacity>
            <SansSerifText style={[gStyle.fw500]}>How much do you want to 
              <SansSerifText style={[gStyle.fw700]}> send</SansSerifText>?
            </SansSerifText>
            <FormField
              title="Amount to transfer"
              placeholder="$ 0.00"
              isFloating={false}
              backgroundStyles={{ backgroundColor: '#3C3A3C',  borderColor: '#A8A8A8',}}
              labelColor={{ color: '#fff'}}
              textStyles={{fontWeight: 600, fontSize: 24, marginTop: 12, color: '#fff', fontFamily: 'Aventa' }}
              maxLength={50}
              securityMask={false}
              onPress={() => { }}
              onKeyPress={() => { }}
              isActive={false}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16
  },

});

export default SendFunds;
