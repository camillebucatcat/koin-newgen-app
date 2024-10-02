import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import Button from '../../../components/Button';
import { router } from 'expo-router';
import images from '../../../constants/Images';
import Colors from '../../../constants/Colors';
import GradientButton from '../../../components/GradientButton';
import FundsHeader from '../../../components/header/FundsHeader';

const  EditAutoDeposit= ()=>{
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
return(
<SafeAreaProvider style={gStyle.darkBg}>
<SafeAreaView>
<ScrollView>
  <FundsHeader title='Auto Deposit' />
<View style={{paddingHorizontal: 16, paddingVertical: 8}}>
    <View style={[gStyle.darkCard, gStyle.mb4,{}]}>
        <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textGrayLight, gStyle.mb3,{}]}>Auto Deposit</SansSerifText>
        <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32,{}]}>$100</SansSerifText>
    </View>
    <View style={[gStyle.darkCard, gStyle.mb4, display.dFlex,{}]}>
        <View style={[gStyle.mr6,{}]}>
            <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, gStyle.mb4, {}]}>From</SansSerifText>
            <SansSerifText style={[gStyle.fs16, gStyle.textGrayLight, {}]}>To</SansSerifText>
        </View>
        <View style={[{}]}>
            <SansSerifText style={[gStyle.fw700, gStyle.fs16, gStyle.mb4, {}]}>Koin Everyday Spending</SansSerifText>
            <SansSerifText style={[gStyle.fw700, gStyle.fs16,{}]}>Draft Kings Account</SansSerifText>
        </View>
    </View>
    <View style={[gStyle.darkCard,gStyle.mb8,{}]}>
        <SansSerifText style={[gStyle.mb2, gStyle.fs16, gStyle.textGrayLight, gStyle.fw400,{}]}>Frequency</SansSerifText>
        <SansSerifText style={[gStyle.fw600, gStyle.fs16, gStyle.textLight, gStyle.mb6,{}]}>Monthly on the 1st</SansSerifText>

      <View style={styles.row}>
        <View style={styles.bulletPoint} />
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, gStyle.fs16, gStyle.fw400,]}>First Auto Deposit</Text>
          <Text style={[gStyle.textLight, gStyle.fs16, gStyle.fw600, gStyle.pb6]}>July 1st 2024</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.bulletPoint} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, gStyle.fs16, gStyle.fw400,]}>Next Auto Deposit</Text>
          <Text style={[gStyle.textLight, gStyle.fs16, gStyle.fw600, gStyle.pb6]}>August 1st 2024</Text>
        </View>
      </View>
    </View>
    
                    <Button title="Edit Auto Deposit" transform="normal" shape="round"  customStyles={[gStyle.fs700, gStyle.mb4]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
                    <GradientButton title="Delete Auto Deposit" transform="normal" shape="round" fill="outline" color="light" background="dark" expand="block" image={images.icon.trash}  centerText={true} handlePress={() => {
                                      openModal();
                                  }}/>

                    <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.backdrop} onPress={closeModal}>
          <View style={styles.modalContent}>
            <View style={[display.flexCenterBetween, gStyle.mb4,{}]}>
              <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.textLight,{}]}>Delete Auto Deposit!</SansSerifText>
              <Button title="" transform="normal" shape="round"  customStyles={[gStyle.mr0]} fill="clear" color="light" centerText={true} handlePress={() =>('')} image={images.icon.close} />
            </View>
            <SansSerifText style={[gStyle.textLight, gStyle.pr11, gStyle.mb8,{}]}>Are you sure you want to delete this auto deposit?  Once deleted this action can’t be undone. </SansSerifText>
            <Button title="Delete Auto Deposit" transform="normal" shape="round"  customStyles={[gStyle.fs700]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
            <Button title="Go Back" transform="normal" shape="round"  customStyles={[gStyle.fs700]} expand="block" fill="clear" color="light" centerText={true} handlePress={() =>('')} />
          </View>
        </TouchableOpacity>
      </Modal>
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default EditAutoDeposit;

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    bulletPoint: {
      width: 6,
      height: 6,
      borderRadius: 5,
      backgroundColor: Colors.primary.primary300,
      marginLeft: 2,
      marginTop: 12,
    },
    line: {
      width: .5,
      backgroundColor: Colors.primary.primary300, 
      height: '100%',
      position: 'absolute',
      left: 4.4,
      top: 13,
    },
    textContainer: {
      paddingLeft: 24,
    },
    title: {
      color: Colors.primary.primary300,
    },
    backdrop: {
      flex: 1,
      backgroundColor: '#00000099',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '80%',
      padding: 24,
      backgroundColor: '#211F21',
      borderRadius: 14,
    },
  });