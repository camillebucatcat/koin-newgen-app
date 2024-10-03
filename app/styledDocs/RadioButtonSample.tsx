import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioButton from '../../components/RadioButton';
import { gStyle } from '../styles/Global';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/Images';
import { SansSerifText } from '../../components/SanSerifText';

const RadioButtonSample = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = [
    {
      title: 'Option 1',
      label: 'Radio Button 1',
      value: 'option1',
      layout: 'left', 
    },
    {
      title: 'Option 2',
      label: 'Radio Button 2',
      value: 'option2',
      layout: 'right', 
    },
    {
      title: 'Option 3',
      label: 'Radio Button 3',
      value: 'option3',
      layout: 'space-between', 
    },
    {
      label: 'Radio Button 4',
      value: 'option4',
      layout: 'left',
    },
    {
      label: 'Radio Button 5',
      value: 'option5',
      layout: 'right', 
    },
    {
      label: 'Radio Button 6',
      value: 'option6',
      layout: 'space-between', 
    },
    {
      label: 'Radio Button 7',
      image: images.icon.calendar,
      value: 'option7',
      layout: 'left',
    },
    {
      label: 'Radio Button 8',
      image: images.icon.checkcirclesuccess,
      value: 'option8',
      layout: 'right', 
    },
    {
      label: 'Radio Button 9',
      image: images.icon.noPfp,
      value: 'option9',
      layout: 'space-between', 
      imageWidth: 44,
      imageHeight: 44,
    },
  ];

  // Function to handle option selection
  const handleSelect = ( value: string ) => {
    setSelectedOption(value); // Update the selected option
  };
  
  return (
      <SafeAreaProvider style={[gStyle.darkBg, gStyle.p4]}>
        <SansSerifText>With border</SansSerifText>
        <RadioButton 
          options={options} 
          selectedOption={selectedOption} 
          onSelect={handleSelect} 
        />
        <SansSerifText>No border</SansSerifText>
         <RadioButton 
          options={options} 
          selectedOption={selectedOption} 
          onSelect={handleSelect} 
          showBorder={false}
        />
      </SafeAreaProvider>
  )
}

export default RadioButtonSample

const styles = StyleSheet.create({})