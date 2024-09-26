import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 36, 40, 46, 48, 50, 75, 180];
const weight = [100, 200, 300, 400, 500, 600, 700, 800, 900,];

const spaces = {
  0: '0rem', 
  1: '0.25rem', 
  2: '0.5rem',    
  3: '0.75rem',  
  4: '1rem',     
  5: '1.25rem',  
  6: '1.5rem',   
  7: '1.75rem',   
  8: '2rem',      
  9: '2.25rem',  
  10: '2.5rem',  
  11: '2.75rem',  
  12: '3rem',     
  13: '3.25rem',  
  14: '3.5rem',   
  15: '3.75rem',  
  16: '4rem',     
};


const dynamicSpaces = Object.entries(spaces).reduce((styles: any, [key, value]) => {
  //margin
  styles[`m${key}`] = { margin: value };
  styles[`mt${key}`] = { marginTop: value };
  styles[`mb${key}`] = { marginBottom: value };
  styles[`mr${key}`] = { marginRight: value };
  styles[`ml${key}`] = { marginLeft: value };
  styles[`mx${key}`] = { marginVertical: value };
  styles[`my${key}`] = { marginHorizontal: value };

  //padding
  styles[`p-${key}`] = { padding: value };
  styles[`pt${key}`] = { paddingTop: value };
  styles[`pb${key}`] = { paddingBottom: value };
  styles[`pr${key}`] = { paddingRight: value };
  styles[`pl${key}`] = { paddingLeft: value };
  styles[`px${key}`] = { paddingHorizontal: value };
  styles[`py${key}`] = { paddingVertical: value };
  return styles;
}, {});

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
  ...dynamicFontWeight,
  ...dynamicSpaces,
});
