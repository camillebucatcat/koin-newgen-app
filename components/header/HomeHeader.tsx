import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gStyle } from '../../app/styles/Global';
import { display } from '../../app/styles/Display';
import { SansSerifText } from '../SanSerifText';
import images from '../../constants/Images';

const  HomeHeader= ()=>{
return(
<View style={[gStyle.py4, gStyle.px6]}>
    <View style={[display.justifyBetween, display.dFlex, display.alignCenter]}>
        <TouchableOpacity>
            <LinearGradient
        colors={['#54cd94', '#a182ed', '#211F2163']}
        style={styles.gradientBorder}
        >
        <View style={styles.imageWrapper}>
            <Image
            source={images.header}
            style={styles.image}
            />
        </View>
        </LinearGradient>
        </TouchableOpacity>
        <SansSerifText style={[gStyle.textLight, gStyle.fw400, gStyle.ml6, gStyle.fs18, {textAlign: 'left', flex: 1}]}>Morning, <SansSerifText style={[gStyle.fw500]}>Ethan</SansSerifText></SansSerifText>
        <TouchableOpacity>
            <Image source={images.icon.notification}/>
        </TouchableOpacity>
    </View>
</View>
)
}
export default HomeHeader;

const styles = StyleSheet.create({
    gradientBorder: {
        width: 58,  
        height: 58,  
        borderRadius: 30,  
        padding: 4,  
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageWrapper: {
        width: 54, 
        height: 54,
        overflow: 'hidden',  
        borderColor: '#211F21',
        borderWidth: 3,
        borderRadius: 100,
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 27,  
      },
  });