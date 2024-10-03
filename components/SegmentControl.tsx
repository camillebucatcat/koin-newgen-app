import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, Easing, LayoutChangeEvent, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { SansSerifText } from './SanSerifText';

interface SegmentControlProps {
  titles: string[];
  onSegmentChange?: (segment: string) => void;
  fullWidth?: boolean; 
}

const SegmentControl: React.FC<SegmentControlProps> = ({ titles, onSegmentChange, fullWidth = true }) => {
  const [selectedSegment, setSelectedSegment] = useState(0);
  const [segmentLayouts, setSegmentLayouts] = useState<{ width: number; x: number }[]>([]);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (segmentLayouts.length === titles.length) {
      Animated.timing(animatedValue, {
        toValue: segmentLayouts[selectedSegment]?.x || 0,
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  }, [selectedSegment, segmentLayouts]);

  const measureSegment = (index: number) => (event: LayoutChangeEvent) => {
    const { width, x } = event.nativeEvent.layout;
    setSegmentLayouts((prevLayouts) => {
      const newLayouts = [...prevLayouts];
      newLayouts[index] = { width, x };
      return newLayouts;
    });
  };

  const handleSegmentPress = (index: number, segment: string) => {
    setSelectedSegment(index);
    if (onSegmentChange) {
      onSegmentChange(segment);
    }
    console.log(`Selected Index: ${index}, Selected Segment: ${segment}`);
  };

  return (
    <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#545454',}}>
        <View style={styles.segmentContainer}>
          {titles.map((title, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => handleSegmentPress(index, title)}
              onLayout={measureSegment(index)}
              style={[
                styles.segmentButton,
                fullWidth ? styles.fullWidthSegment : styles.nonFullWidthSegment,
              ]}
            >
              <SansSerifText
                maxFontSizeMultiplier={1.1}
                minimumFontScale={1.1}
                style={[
                  styles.segmentText,
                  selectedSegment === index && styles.activeSegmentText,
                ]}
              >
                {title}
              </SansSerifText>
            </TouchableOpacity>
          ))}
          {segmentLayouts[selectedSegment] && (
            <Animated.View
              style={[
                styles.animatedLine,
                {
                  width: segmentLayouts[selectedSegment].width || 0,
                  transform: [{ translateX: animatedValue }],
                },
              ]}
            >
              <LinearGradient
                colors={['#B99FF7', '#FFA478']} // Adjust the colors as needed
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={StyleSheet.absoluteFill}
              />
            </Animated.View>
          )}
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  segmentContainer: {
    flexDirection: 'row',
    zIndex: 2,
    position: 'relative',
    marginHorizontal: 16,
  },
  segmentButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  fullWidthSegment: {
    flex: 1,
  },
  nonFullWidthSegment: {
    marginHorizontal: 8,
  },
  segmentText: {
    fontWeight: '400',
    color: '#fff',
  },
  activeSegmentText: {
    fontWeight: '700',
  },
  animatedLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
  },
});

export default SegmentControl;
