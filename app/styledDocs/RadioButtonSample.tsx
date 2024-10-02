import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioButton from '../../components/RadioButton';
import { gStyle } from '../styles/Global';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const RadioButtonSample = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = [
    {
      title: 'Option 1',
      label: 'Radio Button 1',
      value: 'option1',
      layout: 'left', // Radio button on the left
    },
    {
      title: 'Option 2',
      label: 'Radio Button 2',
      value: 'option2',
      layout: 'right', // Radio button on the right
    },
    {
      title: 'Option 3',
      label: 'Radio Button 3',
      value: 'option3',
      layout: 'space-between', // Text on the left, radio button on the far right
    },
    {
      label: 'Radio Button 4',
      value: 'option4',
      layout: 'left', // Radio button on the left
    },
    {
      label: 'Radio Button 5',
      value: 'option5',
      layout: 'right', // Radio button on the right
    },
    {
      label: 'Radio Button 6',
      value: 'option6',
      layout: 'space-between', // Text on the left, radio button on the far right
    },
  ];

  const handleSelect = (option: { title: string; label: string; value: string }) => {
    setSelectedOption(option.value);
  };
  
  return (
      <SafeAreaProvider style={[gStyle.darkBg, gStyle.p4]}>
        <RadioButton 
          options={options} 
          selectedOption={selectedOption} 
          onSelect={handleSelect} 
        />
      </SafeAreaProvider>
  )
}

export default RadioButtonSample

const styles = StyleSheet.create({})