import React from 'react';
import { ImageSourcePropType, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { SansSerifText } from './SanSerifText';

interface ButtonProps {
  title: string;
  handlePress: () => void;
  customStyles?: object;
  customSpace?: object;
  shape?: 'default' | 'round';
  fill?: 'solid' | 'clear' | 'outline';
  color?: 'dark' | 'light'; 
  background?: 'dark' | 'light'; 
  image?: ImageSourcePropType;
  transform?: '' | 'normal';
  disabled?: boolean;
  opacity?: number;
  centerText?: boolean;
  expand?: 'block' | 'default'; 
}

const GradientButton: React.FC<ButtonProps> = ({
  title,
  handlePress,
  customStyles = {},
  customSpace = {},
  image,
  transform = '',
  background = 'dark',
  color = 'light', 
  disabled = false,
  opacity = 1,
  centerText = true,
  expand = 'default',  
}) => {
  return (
    <TouchableOpacity
      onPress={!disabled ? handlePress : undefined}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        expand === 'block' ? styles.blockButton : styles.defaultButton,
        customStyles,
      ]}
    >
      <LinearGradient
        colors={['#B99FF7', '#FFA478']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.linearGradient,
          { opacity: disabled ? 0.5 : 1 },
        
        ]}
      >
        <View
          style={[
            styles.flexRow,
            styles.innerContainer,
            background === 'dark' ? backgrounds.dark : backgrounds.light,
            centerText ? styles.centerButtonText : styles.leftButtonText,
          ]}
        >
          {image && <Image source={image} style={styles.image} />}
          <SansSerifText style={[
            styles.baseText,
            color === 'light' ? texts.light : texts.dark,
            transform === '' ? transforms.default : transforms.normal,
            customSpace
          ]}>
            {title}
          </SansSerifText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    minHeight: 43,
    borderRadius: 100, 
  },
  innerContainer: {
    borderRadius: 100,
    flex: 1,
    margin: 1, 
    justifyContent: 'center',
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
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 14,
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

const texts = StyleSheet.create({ 
  light: {
    color: Colors.text.light,
  },
  dark: {
    color: Colors.dark.color,
  },
})

const backgrounds = StyleSheet.create({
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#3C3A3C',
  }
})

const transforms = StyleSheet.create({
  default: {
    textTransform: 'uppercase',
  },
  normal: {
    textTransform: 'none',
  },
});

export default GradientButton;
