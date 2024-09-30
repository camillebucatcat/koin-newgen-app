import { View, Text, TextInput, Animated, StyleSheet, StyleProp, TextStyle, Platform } from 'react-native';
import React, { useRef, useState } from 'react';
import { SansSerifText } from './SanSerifText';

interface TextAreaFieldProps {
  title?: string;
  value?: string;
  placeholder: string;
  customStyles?: StyleProp<TextStyle>;
  backgroundStyles?: StyleProp<TextStyle>;
  textStyles?: StyleProp<TextStyle>;
  autoFocus?: boolean;
  onChangeText?: (text: string) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  title,
  value,
  textStyles,
  placeholder,
  customStyles,
  backgroundStyles,
  autoFocus = false,
  onChangeText,
}) => {
  const [text, setText] = useState(value || '');
  const [height, setHeight] = useState(128);
  const borderAnimation = useRef(new Animated.Value(0)).current;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(borderAnimation, {
      toValue: 1,
      duration: 80,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(borderAnimation, {
      toValue: 0,
      duration: 80,
      useNativeDriver: false,
    }).start();
  };

  const borderStyle = {
    borderColor: borderAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#A8A8A8', '#543D8A'],
    }),
    borderWidth: 1,
  };

  return (
    <View style={[styles.container, customStyles]}>
      {title && (
        <SansSerifText style={styles.title}>
          {title}
        </SansSerifText>
      )}
      <Animated.View
        style={[styles.textAreaContainer, borderStyle, backgroundStyles]}
      >
        <TextInput
          style={[styles.textArea, textStyles, { height: Math.max(128, height) }]}
          placeholder={placeholder}
          placeholderTextColor="#70767E"
          multiline={true}
          value={text}
          onChangeText={(newText) => {
            setText(newText);
            if (onChangeText) {
              onChangeText(newText);
            }
          }}
          onContentSizeChange={(event) => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
        />
      </Animated.View>
    </View>
  );
}

export default TextAreaField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8, // equivalent to space-y-2
  },
  title: {
    fontSize: 12, // equivalent to text-sm
    color: '#543D8A', // replace with your secondary color
    marginBottom: 8, // equivalent to mb-2
  },
  textAreaContainer: {
    width: '100%',
    minHeight: 70,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 16,
    justifyContent: 'flex-start',
  },
  textArea: {
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    fontFamily: 'Aventa',
    fontSize: 16,
    ...Platform.select({
      web: {
        outlineStyle: 'none', 
      },
    }),
  },
});
