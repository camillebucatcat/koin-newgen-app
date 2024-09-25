import { TouchableOpacity, Text, Image, StyleSheet, View, ImageSourcePropType } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  handlePress: () => void;
  customStyles?: object;
  shape?: 'default' | 'round';
  fill?: 'solid' | 'clear' | 'outline';
  color?: 'primary' | 'success' | 'danger' | 'light' | 'dark';
  text?: 'primary' | 'success' | 'danger' | 'light' | 'dark' | 'white';
  image?: ImageSourcePropType;
  transform?: '' | 'normal';
  disabled?: boolean;
  opacity?: number;
  centerText?: boolean;
  expand?: 'block' | 'default'; 
}

const TestButtons: React.FC<ButtonProps> = ({
  title,
  handlePress,
  customStyles = {},
  image,
  transform = '',
  shape = 'default',
  fill = 'solid',
  color = 'primary',
  text = 'primary',
  disabled = false,
  opacity = 1,
  centerText = true,
  expand = 'default',  // Default value for layout prop
}) => {
  return (
    <TouchableOpacity
      onPress={!disabled ? handlePress : undefined}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        customStyles,
        expand === 'block' ? styles.blockButton : styles.defaultButton,  // Use block style if layout is 'block'
      ]}
    >
      <View
        style={[
          styles.buttonContent,
          { opacity: disabled ? 0.5 : 1 },
          shape === 'default' && shapes.defaultShape,
          shape === 'round' && shapes.round,
          fill === 'solid' && colorStyles[color],
          fill === 'outline' && borderStyles[color],
          fill === 'clear' && fills.clear,
        ]}
      >
        <View
          style={[
            styles.flexRow,
            centerText ? styles.centerButtonText : styles.leftButtonText,
          ]}
        >
          {image && <Image source={image} style={styles.image} />}
          <Text
            style={[
              styles.baseText,
              transform === '' ? transforms.default : transforms.normal,
              fill === 'solid' && texts.solid,
              color === 'primary' && fill === 'solid' && texts.white,
              color === 'primary' && fill === 'clear' && texts.primary,
              color === 'primary' && fill === 'outline' && texts.primary,
              color === 'success' && fill === 'solid' && texts.white,
              color === 'success' && fill === 'clear' && texts.success,
              color === 'success' && fill === 'outline' && texts.success,
              color === 'danger' && fill === 'solid' && texts.white,
              color === 'danger' && fill === 'clear' && texts.danger,
              color === 'danger' && fill === 'outline' && texts.danger,
              color === 'dark' && fill === 'solid' && texts.white,
              color === 'dark' && fill === 'clear' && texts.dark,
              color === 'dark' && fill === 'outline' && texts.dark,
              color === 'light' && fill === 'solid' && texts.light,
            ]}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TestButtons;

const styles = StyleSheet.create({
  buttonContent: {
    minHeight: 50,
    paddingVertical: 16,
    paddingHorizontal: 12,  // Adjust padding for horizontal spacing
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  baseText: {
    fontSize: 16,
    fontFamily: 'AventaBold',
  },
  centerButtonText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButtonText: {
    paddingLeft: 16,
  },
  defaultButton: {
    alignSelf: 'flex-start', 
  },
  blockButton: {
    width: '100%',  
  },
});

const shapes = StyleSheet.create({
  defaultShape: {
    borderRadius: 8,
  },
  round: {
    borderRadius: 100,
  },
});

const transforms = StyleSheet.create({
  default: {
    textTransform: 'uppercase',
  },
  normal: {
    textTransform: 'none',
  },
});

const colorStyles = StyleSheet.create({
  primary: {
    backgroundColor: '#543D8A',
  },
  success: {
    backgroundColor: '#29A46A',
  },
  danger: {
    backgroundColor: '#E14D4D',
  },
  dark: {
    backgroundColor: '#282828',
  },
  light: {
    backgroundColor: '#EBEBEB',
  },
});

const borderStyles = StyleSheet.create({
  primary: {
    borderWidth: 1,
    borderColor: '#543D8A',
  },
  success: {
    borderWidth: 1,
    borderColor: '#29A46A',
  },
  danger: {
    borderWidth: 1,
    borderColor: '#E14D4D',
  },
  dark: {
    borderWidth: 1,
    borderColor: '#282828',
  },
  light: {
    borderWidth: 1,
    borderColor: '#EBEBEB',
  },
});

const texts = StyleSheet.create({
  solid: {
    color: "#ffffff",
  },
  primary: {
    color: "#543D8A",
  },
  white: {
    color: "#ffffff",
  },
  success: {
    color: '#29A46A',
  },
  danger: {
    color: '#E14D4D',
  },
  dark: {
    color: "#282828",
  },
  light: {
    color: "#404040",
  },
});

const fills = StyleSheet.create({
  clear: {
    backgroundColor: 'transparent',
  },
});
