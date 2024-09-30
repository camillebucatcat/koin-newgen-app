import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { SansSerifText } from './SanSerifText';

interface Option {
  title?: string; // Make title optional
  label: string;
  value: string;
  image?: ImageSourcePropType; // Optional image property
}

interface RadioButtonProps {
  options: Option[];
  selectedOption: string | null;
  onSelect: (option: Option) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, selectedOption, onSelect, image }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => onSelect(option)}
        >
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.textContainer}>
            
            {option.title && ( // Render title only if it exists
              <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.titleText}>
                {option.title}
              </SansSerifText>
            )}
            <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.optionText}>
              {option.label}
            </SansSerifText>
          </View>
          <View
            style={[
              styles.radioButton,
              selectedOption === option.value && styles.selectedRadioButton,
            ]}
          >
            {selectedOption === option.value && <View style={styles.innerCircle} />}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingVertical: 16,
    borderRadius: 8,
    width: '100%',
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#DFDFDF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10, 
  },
  selectedRadioButton: {
    borderWidth: 1,
    borderColor: '#D6C4FF',
    backgroundColor: '211F21',
  },
  innerCircle: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: '#D6C4FF',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1, // Allow the text container to take up available space
    marginRight: 10, // Space between text and radio button
  },
  titleText: {
    fontSize: 14,
    paddingBottom: 4,
    // color: '#70767E',
  },
  optionText: {
    fontSize: 16,
    // color: '#404040',
  },
  image: {
    width: 20,  // Adjust the width as needed
    height: 20, // Adjust the height as needed
    marginBottom: 4, // Space between image and label
  },
});

export default RadioButton;
