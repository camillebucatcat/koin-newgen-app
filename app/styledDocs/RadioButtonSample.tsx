import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioButton from '../../components/RadioButton';
import { gStyle } from '../styles/Global';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const RadioButtonSample = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const options = [
    { title: 'Option 1', label: 'First Option', value: '1', layout: 'left' },
    { label: 'Second Option', value: '2', layout: 'space-between' },
    { title: 'Option 3', label: 'Third Option', value: '3', layout: 'left' },
    { label: 'Fourth Option', value: '4', layout: 'space-between' },
  ];

  const handleSelect = (option: { title: string; label: string; value: string }) => {
    setSelectedOption(option.value);
  };
  
  return (
      <SafeAreaProvider style={gStyle.darkBg}>
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