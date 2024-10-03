import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { gStyle } from '../styles/Global';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header/Header';
import { SansSerifText } from '../../components/SanSerifText';
import RadioButton from '../../components/RadioButton';
import { display } from '../styles/Display';
import images from '../../constants/Images';
import TextAreaField from '../../components/TextAreaField';
import FormField from '../../components/FormField';
import Button from '../../components/Button';



const SettleUpFund = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
    //options for radio button
    const options = [
      {
        image: images.lean.leanLeftSuccess,
        label: 'Everyday Spending',
        value: 'option1',
        layout: 'space-between', 
      },
      {
        image: images.lean.leanLeftPrimary,
        label: 'Entertainment Fund',
        value: 'option2',
        layout: 'space-between', 
      },
      {
        image: images.icon.bank,
        label: 'Wells Fargo',
        value: 'option3',
        layout: 'space-between', 
      },
      {
        image: images.icon.bank,
        label: 'Bank of America',
        value: 'option4',
        layout: 'space-between', 
      },
    ];
  
    // Function to handle option selection
    const handleSelect = (option: { title: string; label: string; value: string }) => {
      setSelectedOption(option.value); // Update the selected option
      setDropdownVisible(false);
    };

  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title='Settle Up' showCancelBtn={true}/>
          <ScrollView>
            <View style={styles.content}>
              <SansSerifText style={[ gStyle.fs12, gStyle.textLight, gStyle.my2 ]}>Send to</SansSerifText>
              <View style={[gStyle.darkCard, gStyle.mb4]}>
                <View style={[display.flexCenterStart]}>
                  <Image source={images.profileSample.user2} style={{borderRadius: 12, height: 44, width: 44}}/>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400, gStyle.ml4]}>Tommy Johnson</SansSerifText>
                </View>
                <View style={[display.flexCenterStart, gStyle.mt6]}>
                <SansSerifText style={[gStyle.fs16, gStyle.fw400, {color: '#A8A8A8'}]}>For</SansSerifText>
                  <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.ml4]}>Expense Share</SansSerifText>
                </View>
              </View>
              <View style={[gStyle.mb4]}>
                <FormField
                  showClearBtn={true}
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
                <SansSerifText style={[ gStyle.fs12, gStyle.textLight, gStyle.my4 ]}>Select Funding Source:</SansSerifText>
                <View style={[gStyle.darkCard, { borderRadius: 12 }]}>
                  <TouchableOpacity activeOpacity={0.5} onPress={() => setDropdownVisible(prev => !prev)}>
                    <View style={[display.flexCenterBetween]}>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Koin Everyday Spending (default)</SansSerifText>
                      <Image source={images.icon.arrowDown}/>
                    </View>
                  </TouchableOpacity>
                  {isDropdownVisible && ( // Conditionally render the RadioButton
                    <View style={[gStyle.mt4]}>
                      <RadioButton
                        options={options}
                        selectedOption={selectedOption}
                        onSelect={handleSelect}
                      />
                    </View>
                  )}
                </View>
              </View>
              <View style={[gStyle.mb4]}>
                <SansSerifText style={[ gStyle.fs12, gStyle.textLight, gStyle.my4 ]}>Message (optional):</SansSerifText>
                <TextAreaField placeholder="Add a note" backgroundStyles={{backgroundColor: '#3C3A3C',}} textStyles={{color: '#ffffff'}}/>
              </View>
              <View style={[gStyle.mb4]}>
                <Button title="Review Transaction" transform="normal" shape="round" customStyles={[gStyle.fs700]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
              </View>
            </View>
          </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SettleUpFund

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingTop: 16
  },
})