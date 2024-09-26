import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 36, 40, 46, 48, 50, 75, 180];
const weight = [100, 200, 300, 400, 500, 600, 700, 800, 900,];

const dynamicFontSizes = sizes.reduce((styles: any, size) => {
  styles[`fs${size}`] = { fontSize: size };
  return styles;
}, {});

const dynamicFontWeight = weight.reduce((styles: any, weight) => {
  styles[`fw${weight}`] = { fontWeight: weight };
  return styles;
}, {});

export const gStyle = StyleSheet.create({

  gap: {
    gap: 12,
  },
  textLight: {
    color: Colors.text.light,
  },
  textPrimaryLight: {
    color: Colors.primary.primary300
  },

  darkCard: {
    backgroundColor: '#3C3A3C',
    borderRadius: 20,
    padding: 20,
  },
  darkBg: {
    backgroundColor: '#211F21',
  },

  // Dynamically generated font sizes
  ...dynamicFontSizes,
  ...dynamicFontWeight
});
