import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/Global';
import Button from '../../components/Button';
import { SansSerifText } from '../../components/SanSerifText';
import { display } from '../styles/Display';
import { router } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import RecentTransactions from '../../components/RecentTransactions';
import Header from '../../components/header/Header';


const  Draftkings= ()=>{
return(
    <SafeAreaProvider style={gStyle.darkBg}>
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
            <Header title='Draft Kings Account'/>
                <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
                    {/* card  */}
                <View style={[gStyle.darkCard, gStyle.mt4, gStyle.mb8]}>
                    <View style={[display.dFlex, display.alignCenter, gStyle.mb8]}>
                        <Image source={images.account.draftkings} style={[{flex: 1}]}/>
                    </View>
                            <SansSerifText style={[gStyle.textLight, gStyle.fw500, gStyle.fs16, gStyle.mb1]}>Total Available Cash</SansSerifText>
                            <SansSerifText style={[gStyle.textLight, gStyle.fw600, gStyle.fs32]}>$8,385.28</SansSerifText>
                            <View style={[display.flexBetween, gStyle.gap, gStyle.my4]}>
                                <Button title="Move Funds" customStyles={{ width: '48%', }} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => router.navigate('')} />
                                <Button title="Add Funds" customStyles={{ width: '48%', }} transform="normal" shape="round" fill="solid" color="primary" centerText={true} handlePress={() => router.navigate('styledDocs/ButtonSample')} />
                            </View>
                </View>

                {/* deposit  */}
                <View style={[gStyle.mb13]}>
                    <SansSerifText style={[gStyle.fw600, gStyle.textLight, gStyle.mb4]}>Auto Deposit </SansSerifText>
                    <View style={[gStyle.darkCard, gStyle.p0,{}]}>
                        <TouchableOpacity style={[ display.flexCenterBetween, gStyle.p5,{borderBottomColor: '#545454', borderBottomWidth: 1}]}>
                            <SansSerifText style={[gStyle.textLight]}>Monthly on the 1st – $50</SansSerifText>
                            <Image source={images.icon.arrowright}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ display.flexCenterBetween, gStyle.p5]}>
                            <SansSerifText style={[gStyle.textLight]}>Set-Up New Auto Deposit</SansSerifText>
                            <Image source={images.icon.plus}/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* recent transactions  */}
                <View>
                    <View style={[display.flexCenterBetween, gStyle.mb4]}>
                        <SansSerifText style={[gStyle.textLight, gStyle.fw600]}>Recent Transactions</SansSerifText>
                        <View style={[display.dFlex, display.justifyEnd]}>
                            <TouchableOpacity style={[gStyle.mr3]}>
                            <Image source={images.icon.list}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Image source={images.icon.splitup}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SansSerifText style={[gStyle.fw700, gStyle.textLight]}>JULY</SansSerifText>

                    <RecentTransactions/>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
)
}
export default Draftkings;