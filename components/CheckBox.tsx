import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface CustomCheckboxProps {
  isChecked: boolean;
  onChange: () => void; 
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, onChange }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange} activeOpacity={0.8}>
      <View style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}>
        {isChecked && <View style={styles.checkmark} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Space between checkboxes
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8, // Space between checkbox and label
    position: 'relative', // Allows positioning of the checkmark
  },
  unchecked: {
    borderColor: '#A8A8A8', // Border color when unchecked
    backgroundColor: 'transparent', // Ensure background is transparent when unchecked
  },
  checked: {
    borderColor: '#A182ED', // Border color when checked
    backgroundColor: '#A182ED', // Background color when checked
  },
  checkmark: {
    width: 8,
    height: 14,
    borderWidth: 3,
    borderRadius: 1,
    borderColor: '#FFFFFF', // Checkmark color
    borderBottomWidth: 0, // Remove bottom border to form a check
    borderRightWidth: 0, // Remove right border
    transform: [{ rotate: '225deg' }], // Rotate to form a checkmark
    position: 'absolute',
    left: 4, // Adjust to position checkmark correctly
    bottom: 2, // Adjust to position checkmark correctly
  },
  label: {
    fontSize: 16,
  },
});

export default CustomCheckbox;
