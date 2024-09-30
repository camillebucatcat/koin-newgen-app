import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { gStyle } from '../app/styles/Global';
import { display } from '../app/styles/Display';
import Button from './Button';
import images from '../constants/Images';
import { SansSerifText } from './SanSerifText';

interface TitleProps {
  title: string;
}

const Header: React.FC<TitleProps> = ({ title }) => {
  return (
    <View style={[gStyle.py8, gStyle.px6,]}>
      <View style={[ display.dFlex, display.alignCenter ]}>
        <TouchableOpacity style={[ gStyle.mr4]}>
            <Image source={images.icon.arrowBack}/>
        </TouchableOpacity>
        <SansSerifText style={[gStyle.fw400,  gStyle.fs18, {textAlign: 'left', flex: 1}]}>{title}</SansSerifText>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})