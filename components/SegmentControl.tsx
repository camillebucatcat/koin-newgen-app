import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, Easing, LayoutChangeEvent, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { SansSerifText } from './SanSerifText';

interface SegmentControlProps {
  titles: string[]; 
  onSegmentChange?: (segment: string) => void;
}

const SegmentControl: React.FC<SegmentControlProps> = ({ titles, onSegmentChange }) => {
  const [selectedSegment, setSelectedSegment] = useState(0);
  const [segmentWidths, setSegmentWidths] = useState<number[]>([]);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: segmentWidths.slice(0, selectedSegment).reduce((acc, width) => acc + width, 0),
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [selectedSegment, segmentWidths]);

  const measureSegment = (index: number) => (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setSegmentWidths((prevWidths) => {
      const newWidths = [...prevWidths];
      newWidths[index] = width;
      return newWidths;
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
    <View style={styles.segmentContainer}>
      {titles.map((title, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => handleSegmentPress(index, title)}
          onLayout={measureSegment(index)}
          style={styles.segmentButton}
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
      <Animated.View
        style={[
          styles.animatedLine,
          {
            width: segmentWidths[selectedSegment] || 0,
            transform: [{ translateX: animatedValue }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  segmentContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#545454',
    zIndex: 2,
    position: 'relative',
    paddingHorizontal: 16
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
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
    backgroundColor: Colors.primary.color,
  },
});

export default SegmentControl;
