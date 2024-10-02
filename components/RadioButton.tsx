import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { SansSerifText } from './SanSerifText';
import { gStyle } from '../app/styles/Global';

interface Option {
  title?: string; 
  label: string;
  value: string;
  layout?: 'left' | 'right' | 'space-between';
  image?: ImageSourcePropType;
  imageWidth?: number; // Optional image width
  imageHeight?: number; // Optional image height
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
          {option.layout === 'left' && (
            <>
              {/* Radio button and optional image on the left */}
              <View style={styles.leftContainer}>
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
                {option.image && (
                  <Image
                    source={option.image}
                    style={[
                      styles.optionImage,
                      {
                        width: option.imageWidth ?? 24,
                        height: option.imageHeight ?? 24,
                      },
                    ]}
                  />
                )}
              </View>
              <View style={styles.textContainer}>
                {option.title && (
                  <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.titleText}>
                    {option.title}
                  </SansSerifText>
                )}
                <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.optionText}>
                  {option.label}
                </SansSerifText>
              </View>
            </>
          )}

          {option.layout === 'right' && (
            <>
              {/* Text on the left, radio button and optional image on the right */}
              {option.image && (
                <Image
                  source={option.image}
                  style={[
                    styles.optionImage,
                    {
                      width: option.imageWidth ?? 24,
                      height: option.imageHeight ?? 24,
                    },
                  ]}
                />
              )}
              <View style={[gStyle.mr3]}>
                {option.title && (
                  <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.titleText}>
                    {option.title}
                  </SansSerifText>
                )}
                <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.optionText}>
                  {option.label}
                </SansSerifText>
              </View>
              <View style={styles.rightContainer}>
                <View>
                  <View
                    style={[
                      styles.radioButton,
                      selectedOption === option.value && styles.selectedRadioButton,
                    ]}
                  >
                    {selectedOption === option.value && <View style={styles.innerCircle} />}
                  </View>
                </View>
              </View>
            </>
          )}

          {option.layout === 'space-between' && (
            <>
              {/* Text on the left, radio button and optional image on the far right */}
              {option.image && (
                <Image
                  source={option.image}
                  style={[
                    styles.optionImage,
                    {
                      width: option.imageWidth ?? 24,
                      height: option.imageHeight ?? 24,
                    },
                  ]}
                />
              )}
              <View style={styles.textContainer}>
                {option.title && (
                  <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.titleText}>
                    {option.title}
                  </SansSerifText>
                )}
                <SansSerifText maxFontSizeMultiplier={1} minimumFontScale={1} style={styles.optionText}>
                  {option.label}
                </SansSerifText>
              </View>
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
            </>
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
    paddingVertical: 16,
    borderRadius: 8,
    width: '100%',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonContainer: {
    marginRight: 8, // Space between radio button and text
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
  },
  titleText: {
    fontSize: 14,
    paddingBottom: 4,
  },
  optionText: {
    fontSize: 16,
  },
  optionImage: {
    marginRight: 8, // Space between the image and the next element
  },
});

export default RadioButton;
