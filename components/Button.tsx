import { TouchableOpacity, Text, Image, StyleSheet, View, ImageSourcePropType } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  handlePress: () => void;
  customStyles?: string;
  customButton?: string;
  textStyles?: string;
  shape?: 'default' | 'round';
  fill?: 'solid' | 'clear' | 'outline';
  color?: 'primary' | 'success' | 'danger' | 'light' | 'dark' | 'moolah' | 'tipTicket' | 'ellis';
  text?: 'primary' | 'success' | 'danger' | 'light' | 'dark' | 'white';
  image?: ImageSourcePropType;
  transform?: '' | 'normal',
  disabled?: boolean;
  opacity?: number;
  centerText?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title, 
  handlePress, 
  customStyles, 
  customButton, 
  textStyles, 
  image,
  transform = '',
  shape = 'default',
  fill = 'solid',
  color = 'primary',
  text = 'primary',
  disabled = false,
  opacity = 1,
  centerText = true,
}) => {
  return (
    <TouchableOpacity
      onPress={!disabled ? handlePress : undefined}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.button, 
        customButton && styles.customButton, // Add custom styles if provided
      ]}
    >
      <View
        style={[
          styles.container,
          customStyles && styles.customStyles,
          centerText ? styles.centerText : styles.leftAlignText,
          { opacity: disabled ? 0.5 : 1 },
          shape === 'default' && shapes.defaultShape,
          shape === 'round' && shapes.round,
          fill === 'solid' && color === 'primary' && colors.primary,
          fill === 'solid' && color === 'success' && colors.success,
          fill === 'solid' && color === 'danger' && colors.danger,
          fill === 'solid' && color === 'dark' && colors.dark,
          fill === 'solid' && color === 'light' && colors.light,
          fill === 'outline' && color === 'primary' && colors.primaryBorder,
          fill === 'outline' && color === 'success' && colors.successBorder,
          fill === 'outline' && color === 'danger' && colors.dangerBorder,
          fill === 'outline' && color === 'dark' && colors.darkBorder,
          fill === 'outline' && color === 'light' && colors.lightBorder,
          fill === 'clear' && fills.clear,
          fill === 'outline' && fills.outline,
          fill === 'solid' && color === 'ellis' && colors.ellis,
        ]}
      >
        <View style={styles.row}>
          {image && <Image source={image} style={styles.image} />}
          <Text
            maxFontSizeMultiplier={1.2}
            minimumFontScale={1.1}
            style={[
              styles.text,
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
              color === 'tipTicket' && fill === 'solid' && texts.tipTicket,
            ]}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {},
  customButton: {}, 
  container: {
    minHeight: 52,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  centerText: {
    alignItems: 'center',
  },
  leftAlignText: {
    paddingLeft: 16,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: 'AventaBold',
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

const colors = StyleSheet.create({
  primary: {
    backgroundColor: "#543D8A",
    borderWidth: 0,
  },
  primaryBorder: {
    borderWidth: 1,
    borderColor: "#543D8A",
  },
  success: {
    backgroundColor: "#29A46A",
    borderWidth: 0,
  },
  danger: {
    backgroundColor: "#E14D4D",
    borderWidth: 0,
  },
  light: {
    backgroundColor: "#EBEBEB",
    borderWidth: 0,
  },
  lightBorder: {
    borderWidth: 1,
    borderColor: "#EBEBEB",
  },
  successBorder: {
    borderWidth: 1,
    borderColor: "#29A46A",
  },
  dangerBorder: {
    borderWidth: 1,
    borderColor: "#E14D4D",
  },
  dark: {
    backgroundColor: "#282828",
    borderWidth: 0,
  },
  darkBorder: {
    borderWidth: 1,
    borderColor: "#282828",
  },
  tipTicket: {
    backgroundColor: '#9AE8C8',
    borderWidth: 0,
  },
  moolah: {
    backgroundColor: '#449B81',
    borderWidth: 0,
  },
  ellis: {
    backgroundColor: '#146634',
    borderWidth: 0,
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
  tipTicket: {
    color: '#211F21',
  },
});

const fills = StyleSheet.create({
  clear: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
});
