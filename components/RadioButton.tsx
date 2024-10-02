import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { SansSerifText } from './SanSerifText';

interface Option {
  title?: string; // Make title optional
  label: string;
  value: string;
  image?: ImageSourcePropType; // Optional image property
  layout?: 'left' | 'space-between'; // New prop to determine layout
}

interface RadioButtonProps {
  options: Option[];
  selectedOption: string | null;
  onSelect: (option: Option) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionContainer}
          onPress={() => onSelect(option)}
        >
          {option.layout === 'left' && ( // Render radio button on the left
            <View style={styles.radioButtonContainer}>
              <View
                style={[
                  styles.radioButton,
                  selectedOption === option.value && styles.selectedRadioButton,
                ]}
              >
                {selectedOption === option.value && <View style={styles.innerCircle} />}
              </View>
            </View>
          )}

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

          {option.layout === 'space-between' && ( // Render radio button for space-between layout
            <View style={styles.radioButtonContainerSpaceBetween}>
              <View
                style={[
                  styles.radioButton,
                  selectedOption === option.value && styles.selectedRadioButton,
                ]}
              >
                {selectedOption === option.value && <View style={styles.innerCircle} />}
              </View>
            </View>
          )}
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
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginRight: 10, 
  },
  radioButtonContainerSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    flex: 1, 
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#DFDFDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    borderWidth: 1,
    borderColor: '#D6C4FF',
    backgroundColor: '#211F21',
  },
  innerCircle: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: '#D6C4FF',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 10, 
  },
  titleText: {
    fontSize: 14,
    paddingBottom: 4,
  },
  optionText: {
    fontSize: 16,
  },
  image: {
    width: 20,
    height: 20,
    marginBottom: 4,
  },
});

export default RadioButton;
