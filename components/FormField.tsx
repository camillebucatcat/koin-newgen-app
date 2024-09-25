import React, {useRef, useState} from 'react';
import {Animated, Platform, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import Svg, { Path } from 'react-native-svg';
import EyeIcon from '../assets/icons/svg-icons/eye';
import EyeSlash from '../assets/icons/svg-icons/eye-slash';

interface FormField {
  title: string;
  isFloating?: boolean; 
  placeholder?: string;
  securityMask?: boolean;
  showClearBtn?: boolean;
}

const FormField: React.FC<FormField> = ({title, securityMask=false, showClearBtn = false, isFloating = true,  placeholder = ''}) => {
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
    <Animated.View style={[styles.container, borderStyle]}>
      {isFloating && (
        <Animated.Text style={[styles.label, floatingLabelStyle]}>
          {title}
        </Animated.Text>
      )}
      {!isFloating && (
        <Animated.Text style={[styles.label, stackedLabelStyle]}>
          {title}
        </Animated.Text>
      )}
      <TextInput
        style={styles.input}
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
          <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
            <Path d="M13.4099 12.5002L17.7099 8.21019C17.8982 8.02188 18.004 7.76649 18.004 7.50019C18.004 7.23388 17.8982 6.97849 17.7099 6.79019C17.5216 6.60188 17.2662 6.49609 16.9999 6.49609C16.7336 6.49609 16.4782 6.60188 16.2899 6.79019L11.9999 11.0902L7.70994 6.79019C7.52164 6.60188 7.26624 6.49609 6.99994 6.49609C6.73364 6.49609 6.47824 6.60188 6.28994 6.79019C6.10164 6.97849 5.99585 7.23388 5.99585 7.50019C5.99585 7.76649 6.10164 8.02188 6.28994 8.21019L10.5899 12.5002L6.28994 16.7902C6.19621 16.8831 6.12182 16.9937 6.07105 17.1156C6.02028 17.2375 5.99414 17.3682 5.99414 17.5002C5.99414 17.6322 6.02028 17.7629 6.07105 17.8848C6.12182 18.0066 6.19621 18.1172 6.28994 18.2102C6.3829 18.3039 6.4935 18.3783 6.61536 18.4291C6.73722 18.4798 6.86793 18.506 6.99994 18.506C7.13195 18.506 7.26266 18.4798 7.38452 18.4291C7.50637 18.3783 7.61698 18.3039 7.70994 18.2102L11.9999 13.9102L16.2899 18.2102C16.3829 18.3039 16.4935 18.3783 16.6154 18.4291C16.7372 18.4798 16.8679 18.506 16.9999 18.506C17.132 18.506 17.2627 18.4798 17.3845 18.4291C17.5064 18.3783 17.617 18.3039 17.7099 18.2102C17.8037 18.1172 17.8781 18.0066 17.9288 17.8848C17.9796 17.7629 18.0057 17.6322 18.0057 17.5002C18.0057 17.3682 17.9796 17.2375 17.9288 17.1156C17.8781 16.9937 17.8037 16.8831 17.7099 16.7902L13.4099 12.5002Z" fill="#404040"/>
          </Svg>
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