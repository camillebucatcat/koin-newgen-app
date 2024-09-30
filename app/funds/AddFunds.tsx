import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import Button from '../../components/Button';
import { SansSerifText } from '../../components/SanSerifText';
import FormField from '../../components/FormField';
import { router } from 'expo-router';
import { display } from '../styles/Display';

const  AddFunds= ()=>{
return(
    <SafeAreaProvider style={gStyle.darkBg}>
        <SafeAreaView>
            <ScrollView>
                <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs16, gStyle.mb2,{}]}>How much do you want to add to your</SansSerifText>
                    <SansSerifText style={[gStyle.mb8, {}]}><Text style={[gStyle.fw700,{}]}>“Draft Kings” Account</Text>?</SansSerifText>

                    <FormField title="Amount" isFloating={false} placeholder="$ 0.00"></FormField>

                    <View style={[gStyle.mt8,{}]}>
                        <SansSerifText style={[gStyle.fs12, gStyle.textLight, gStyle.mb4,{}]}>Or quick select one of the following amounts:</SansSerifText>

                        <View style={[display.flexCenterBetween, gStyle.mb8,{}]}>
                        <Button title="$10" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$20" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$50" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]} fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$100" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        </View>
                    </View>

                    <SansSerifText style={[gStyle.fw600, gStyle.mb5, gStyle.textLight, {}]}>Select Funding Source:</SansSerifText>

                    <View style={[gStyle.mb8, {}]}></View>

                    <SansSerifText style={[gStyle.fw600, gStyle.mb5, gStyle.textLight, {}]}>Transaction Date</SansSerifText>

                    <View style={[gStyle.mb8, {}]}></View>

                    <Button title="Review Transaction" transform="normal" shape="round"  customStyles={[gStyle.fs700]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
)
}
export default AddFunds;