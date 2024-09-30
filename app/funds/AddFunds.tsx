import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
import Button from '../../components/Button';
import { SansSerifText } from '../../components/SanSerifText';
import FormField from '../../components/FormField';
import { router } from 'expo-router';
import { display } from '../styles/Display';

const  AddFunds= ()=>{
    
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [form, setForm] = useState({
      amount: ''
    });
    const amounts = ['10', '20', '50', '100'];
  
    //amount choice buttons
    const handlePress = (amount) => {
      const formattedAmount = `$${amount}`;
      setSelectedAmount(formattedAmount);
      setForm({
        ...form,
        amount: formattedAmount
      });
    };
  
    //input
    const handleChangeText = (e) => {
      let value = e;
      if (!value.startsWith('$')) {
        value = `$${value}`;
      }
      setForm({
        ...form,
        amount: value
      });
    };
return(
    <SafeAreaProvider style={gStyle.darkBg}>
        <SafeAreaView>
            <ScrollView>
                <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs16, gStyle.mb2,{}]}>How much do you want to add to your</SansSerifText>
                    <SansSerifText style={[gStyle.mb8, {}]}><Text style={[gStyle.fw700,{}]}>“Draft Kings” Account</Text>?</SansSerifText>

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

                    <View style={[gStyle.mt8,{}]}>
                        <SansSerifText style={[gStyle.fs12, gStyle.textLight, gStyle.mb4,{}]}>Or quick select one of the following amounts:</SansSerifText>

                        {/* <View style={[display.flexCenterBetween, gStyle.mb8,{}]}>
                        <Button title="$10" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$20" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$50" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]} fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$100" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        </View> */}
                        <View style={styles.amountContainer}>
                            {amounts.map((amount) => (
                                <TouchableOpacity
                                activeOpacity={0.8}
                                key={amount}
                                style={[
                                    styles.amountChoice,
                                    selectedAmount === `$${amount}` && styles.selected
                                ]}
                                onPress={() => handlePress(amount)}
                                >
                                <View>
                                    <SansSerifText maxFontSizeMultiplier={1.2} minimumFontScale={1.1} 
                                    style={[styles.text, selectedAmount === `$${amount}` && styles.selectedText]}
                                    >
                                    ${amount}
                                    </SansSerifText>
                                </View>
                                </TouchableOpacity>
                            ))}
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

const styles = StyleSheet.create({
    amountContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    amountChoice: {
      width: '22%',
      height: 55,
      borderRadius: 12,
      padding: 8,
      backgroundColor: '#545454',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    selected: {
      backgroundColor: '#FF8950',
    },
    amount: {
      textAlign: 'center',
    },
    text: {
      fontSize: 16,
      color: '#ffffff',
    },
    selectedText: {
      color: '#ffffff',
    },
  
  });