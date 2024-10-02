import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 36, 40, 46, 48, 50, 75, 180];
const weight = [100, 200, 300, 400, 500, 600, 700, 800, 900,];

const spaces = {
  0: 0, 
  1: 4, 
  2: 8,    
  3: 12,  
  4: 16,     
  5: 20,  
  6: 24,   
  7: 28,   
  8: 32,      
  9: 36,  
  10: 40,  
  11: 44,  
  12: 48,     
  13: 52,  
  14: 56,   
  15: 60,  
  16: 64,     
};


const dynamicSpaces = Object.entries(spaces).reduce((styles: any, [key, value]) => {
  //margin
  styles[`m${key}`] = { margin: value };
  styles[`mt${key}`] = { marginTop: value };
  styles[`mb${key}`] = { marginBottom: value };
  styles[`mr${key}`] = { marginRight: value };
  styles[`ml${key}`] = { marginLeft: value };
  styles[`mx${key}`] = { marginHorizontal: value };
  styles[`my${key}`] = { marginVertical: value };

  //padding
  styles[`p${key}`] = { padding: value };
  styles[`pt${key}`] = { paddingTop: value };
  styles[`pb${key}`] = { paddingBottom: value };
  styles[`pr${key}`] = { paddingRight: value };
  styles[`pl${key}`] = { paddingLeft: value };
  styles[`px${key}`] = { paddingHorizontal: value }
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
  textDark: {
    color: '#211F21',
  },
  textPrimaryLight: {
    color: Colors.primary.primary300
  },
  textGrayLight: {
    color: '#A8A8A8'
  },
  textSuccessLight: {
    color: Colors.success.successBrand
  },
  textOrangeLight: {
    color: '#FA8F5C'
  },
  textLightBeige:{
    color: '#FFE7DC'
  },
  darkCard: {
    backgroundColor: '#3C3A3C',
    borderRadius: 20,
    padding: 20,
  },
  pendingCard: {
    backgroundColor: '#FA8F5C',
    borderRadius: 20,
    padding: 20,
  },
  successCard: {
    backgroundColor: '#257554',
    borderRadius: 20,
    padding: 20,
  },
  contactCard: {
    borderRadius: 12,
    backgroundColor: '#404040',
    padding: 12
  },
  darkBg: {
    backgroundColor: '#211F21',
  },

  // Dynamically generated font sizes
  ...dynamicFontSizes,
  ...dynamicFontWeight,
  ...dynamicSpaces,
});
