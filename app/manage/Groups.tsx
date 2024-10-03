import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import { gStyle } from '../styles/Global';
import images from '../../constants/Images';
import GradientButton from '../../components/GradientButton';
import { router } from 'expo-router';
import { SansSerifText } from '../../components/SanSerifText';
import { display } from '../styles/Display';
const  Groups= ()=>{
return(
<SafeAreaProvider style={[gStyle.darkBg,{}]}>
<SafeAreaView style={[{flex: 1}]}>
<ScrollView>
    <Header title='Groups'/>
        <View style={[styles.searchContainer, gStyle.mx4]}>
              <Image source={images.icon.searchInput} />
              <TextInput placeholder="Search Contacts" placeholderTextColor="#A8A8A8" style={styles.input} />
        </View>
<View style={{paddingHorizontal: 16, paddingVertical: 8}}>
        <GradientButton title="Create a new group" transform="normal" fill="solid" color="light" background='dark' layout="left"  expand="block" shape="round" alignment='start' image={images.icon.plusgradient} centerText={false} customStyles={[gStyle.mb8]} handlePress={() => router.push('')} />
        <TouchableOpacity style={[gStyle.darkCard, gStyle.py2, gStyle.px3, gStyle.mb3,{}]}>
            <View style={[display.flexCenterBetween,{}]}>
                <View style={[display.dFlex, display.alignCenter,{}]}>
                    <Image source={images.groupSample.group1} style={[gStyle.mr3, styles.img,{}]}/>
                    <SansSerifText>EDC Fam</SansSerifText>
                </View>
                <Image source={images.icon.arrowright}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[gStyle.darkCard, gStyle.py2, gStyle.px3, gStyle.mb3,{}]}>
            <View style={[display.flexCenterBetween,{}]}>
                <View style={[display.dFlex, display.alignCenter,{}]}>
                    <Image source={images.groupSample.group2} style={[gStyle.mr3, styles.img,{}]}/>
                    <SansSerifText>Super Club</SansSerifText>
                </View>
                <Image source={images.icon.arrowright}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[gStyle.darkCard, gStyle.py2, gStyle.px3, gStyle.mb3,{}]}>
            <View style={[display.flexCenterBetween,{}]}>
                <View style={[display.dFlex, display.alignCenter,{}]}>
                    <Image source={images.groupSample.group3} style={[gStyle.mr3, styles.img,{}]}/>
                    <SansSerifText>Bachelorette Babes</SansSerifText>
                </View>
                <Image source={images.icon.arrowright}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={[gStyle.darkCard, gStyle.py2, gStyle.px3, gStyle.mb3,{}]}>
            <View style={[display.flexCenterBetween,{}]}>
                <View style={[display.dFlex, display.alignCenter,{}]}>
                    <Image source={images.groupSample.group4} style={[gStyle.mr3, styles.img,{}]}/>
                    <SansSerifText>Family</SansSerifText>
                </View>
                <Image source={images.icon.arrowright}/>
            </View>
        </TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default Groups;
const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#7676803D',
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 32,
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
      img:{
        borderRadius: 16,
        width: 44,
        height: 44
      }
})