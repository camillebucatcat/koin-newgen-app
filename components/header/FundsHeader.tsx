import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { gStyle } from '../../app/styles/Global';
import { display } from '../../app/styles/Display';
import Button from '../Button';
import images from '../../constants/Images';
import { SansSerifText } from '../SanSerifText';

interface TitleProps {
  title: string;
}

const FundsHeader: React.FC<TitleProps> = ({ title }) => {
  return (
    <View style={[gStyle.py6, gStyle.px6,]}>
      <View style={[ display.dFlex, display.alignCenter ]}>
        <SansSerifText style={[gStyle.fw500,  gStyle.fs18, {textAlign: 'left', flex: 1, color: '#F6F6F6'}]}>{title}</SansSerifText>
        <Button title="Cancel" transform="normal" shape="round"  customStyles={[gStyle.fs700]} fill="clear" color="light" centerText={true} handlePress={() =>('')} />
      </View>
    </View>
  )
}

export default FundsHeader

const styles = StyleSheet.create({})