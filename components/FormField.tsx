import React, {useRef, useState} from 'react';
import {Animated, Platform, StyleSheet, TextInput, View} from 'react-native';
import Colors from '../constants/Colors';

interface FormField {
  title: string;
  isFloating?: boolean; 
  placeholder?: string;
}

const FormField: React.FC<FormField> = ({title, isFloating = true,  placeholder = ''}) => {
  const [text, setText] = useState('');
  const floatingLabelAnimation = useRef(new Animated.Value(text ? 1 : 0)).current;
  const borderAnimation = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);

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
      outputRange: [10, -5],
    }),
    fontSize: floatingLabelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], 
    }),
  };

  const stackedLabelStyle = {
    top: -5, 
    fontSize: 12, 
  };

  const borderStyle = {
    borderColor: borderAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#EBEBEB', Colors.primary.color], 
    }),
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
      />
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
    marginTop: 9,
    fontFamily: 'Aventa-Medium',
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
});

export default FormField;