import React, {useRef, useState} from 'react';
import {Animated, Image, Platform, StyleProp, StyleSheet, TextInput, TextStyle, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import Svg, { Path } from 'react-native-svg';
import EyeIcon from '../assets/icons/svg-icons/eye';
import EyeSlash from '../assets/icons/svg-icons/eye-slash';
import EditIcon from '../assets/icons/svg-icons/edit-icon';
import ClearIcon from '../assets/icons/svg-icons/clear-icon';
import images from '../constants/Images';

interface FormField {
  title: string;
  isFloating?: boolean; 
  placeholder?: string;
  securityMask?: boolean;
  showClearBtn?: boolean;
  showEditIcon?: boolean;
  textStyles?: StyleProp<TextStyle>;
  backgroundStyles?: StyleProp<TextStyle>;
  labelColor?: StyleProp<TextStyle>;
}

const FormField: React.FC<FormField> = ({title, securityMask=false, labelColor, textStyles, backgroundStyles, showEditIcon = false, showClearBtn = false, isFloating = true,  placeholder = ''}) => {
  const [text, setText] = useState('');
  const floatingLabelAnimation = useRef(new Animated.Value(text ? 1 : 0)).current;
  const borderAnimation = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (isFloating) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
    Animated.timing(borderAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (isFloating) {
      Animated.timing(floatingLabelAnimation, {
        toValue: text ? 1 : 0, 
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
    Animated.timing(borderAnimation, {
      toValue: 0, 
      duration: 80,
      useNativeDriver: false,
    }).start();
  };

  const floatingLabelStyle = {
    top: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -2],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], 
    }),
  };

  const stackedLabelStyle = {
    top: -2, 
    fontSize: 12, 
  };

  const borderStyle = {
    borderColor: borderAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#EBEBEB', Colors.primary.color], 
    }),
  };

  const clearText = () => {
    setText('');
    if (!isFocused) {
      Animated.timing(floatingLabelAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.container, borderStyle, backgroundStyles]}>
      {isFloating && (
        <Animated.Text style={[styles.label, floatingLabelStyle, labelColor]}>
          {title}
        </Animated.Text>
      )}
      {!isFloating && (
        <Animated.Text style={[styles.label, stackedLabelStyle, labelColor]}>
          {title}
        </Animated.Text>
      )}
      <TextInput
        style={[styles.input, textStyles]}
        value={text}
        placeholder={isFloating ? (isFocused || text ? placeholder : '') : placeholder} // Adjusted here
        placeholderTextColor="#B8BBBF"
        onChangeText={val => setText(val)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={securityMask && !showPassword}
      />
      { securityMask ? (
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          activeOpacity={0.8}
          style={styles.iconContainer}
        >
          {showPassword ? (
            <EyeIcon />
          ) : (
            <EyeSlash />
          )}
        </TouchableOpacity>
      ): null }
      { showClearBtn ? 
        <TouchableOpacity style={styles.clearIconContainer} onPress={clearText}>
          <Image source={images.icon.close}/>
        </TouchableOpacity>
        : null
      }
      { showEditIcon ? 
        <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
          <EditIcon />
        </TouchableOpacity>
        : null
      }
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    borderColor: '#EBEBEB',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    height: 65,
  },
  input: {
    padding: 16,
    fontSize: 16,
    marginTop: 12,
    fontFamily: 'Aventa',
    ...Platform.select({
      web: {
        outlineStyle: 'none', 
      },
    }),
  },
  label: {
    paddingTop: 10,
    paddingLeft: 16,
    position: 'absolute',
    color: '#70767E',
  },
  iconContainer: {
    position: 'absolute',
    right: 16,
    top: 14,
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  clearIconContainer: {
    position: 'absolute',
    right: 16,
    top: 9,
    paddingVertical: 10,
    paddingHorizontal: 4
  },
});

export default FormField;