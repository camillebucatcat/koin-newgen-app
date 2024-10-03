import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { gStyle } from '../../app/styles/Global';
import { display } from '../../app/styles/Display';
import { SansSerifText } from '../SanSerifText';
import images from '../../constants/Images';


interface TitleProps {
  title: string;
  showCancelBtn?: boolean;
}

const Header: React.FC<TitleProps> = ({ title, showCancelBtn = false }) => {
  return (
    <View style={[gStyle.py6, gStyle.px6,]}>
      <View style={[ display.dFlex, display.alignCenter ]}>
        <TouchableOpacity style={[ gStyle.mr3]}>
          <Image source={images.icon.arrowBack}/>
        </TouchableOpacity>
        <View style={[display.flexCenterBetween]}>
          <SansSerifText style={[gStyle.fw500,  gStyle.fs18, {textAlign: 'left', flex: 1}]}>{title}</SansSerifText>
          {showCancelBtn ?
            <TouchableOpacity activeOpacity={0.8}>
              <SansSerifText style={[gStyle.fs14, gStyle.fw700]}>Cancel</SansSerifText>
            </TouchableOpacity>
            : null
          }
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})