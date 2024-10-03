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
  background?: 'dark' | 'light' | 'none'; 
  image?: ImageSourcePropType;
  transform?: '' | 'normal';
  disabled?: boolean;
  opacity?: number;
  centerText?: boolean;
  expand?: 'block' | 'default'; 
  layout?: 'left' | 'right' | 'space-between';
  alignment?: 'start' | 'center' | 'end';  // Alignment prop added
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
  layout = 'left',
  fill = 'solid',
  shape = 'default',
  alignment = 'center',  // Default alignment
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
          shape === 'default' && shapes.defaultShape,
          shape === 'round' && shapes.round,
        ]}
      >
        <View
          style={[
            styles.flexRow,
            styles.innerContainer,
            background === 'dark'
            ? [backgrounds.dark, shape === 'round' ? shapes.round : shapes.defaultShape]
            : background === 'light'
            ? [backgrounds.light, shape === 'round' ? shapes.round : shapes.defaultShape]
            : background === 'none'
            ? backgrounds.none
            : {},
            layout === 'space-between' ? styles.spaceBetweenLayout : {},
            alignment === 'center'
              ? styles.alignCenter
              : alignment === 'start'
              ? styles.alignStart
              : alignment === 'end'
              ? styles.alignEnd
              : {},
          ]}
        >
          {/* Left layout */}
          {layout === 'left' && (
            <>
              {image && <Image source={image} style={styles.image} />}
              <SansSerifText
                style={[
                  styles.baseText,
                  color === 'light' ? texts.light : texts.dark,
                  transform === '' ? transforms.default : transforms.normal,
                  customSpace,
                ]}
              >
                {title}
              </SansSerifText>
            </>
          )}

          {/* Right layout */}
          {layout === 'right' && (
            <>
              <SansSerifText
                style={[
                  styles.baseText,
                  color === 'light' ? texts.light : texts.dark,
                  transform === '' ? transforms.default : transforms.normal,
                  customSpace,
                ]}
              >
                {title}
              </SansSerifText>
              {image && <Image source={image} style={styles.image} />}
            </>
          )}

          {/* Space-between layout*/}
          {layout === 'space-between' && (
            <>
              <SansSerifText
                style={[
                  styles.baseText,
                  color === 'light' ? texts.light : texts.dark,
                  transform === '' ? transforms.default : transforms.normal,
                  customSpace,
                ]}
              >
                {title}
              </SansSerifText>
              {image && <Image source={image} style={styles.image} />}
            </>
          )}
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
    borderRadius: 8,
    flex: 1,
    margin: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16, 
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetweenLayout: {
    justifyContent: 'space-between',
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
  defaultButton: {
    alignSelf: 'flex-start',
  },
  blockButton: {
    width: '100%',
  },
  // Alignment styles
  alignCenter: {
    justifyContent: 'center',
  },
  alignStart: {
    justifyContent: 'flex-start',
  },
  alignEnd: {
    justifyContent: 'flex-end',
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
  },
})
const shapes = StyleSheet.create({
  defaultShape: {
    borderRadius: 16,
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
const fills = StyleSheet.create({
  clear: {
    backgroundColor: 'transparent',
  },
});
export default GradientButton;
