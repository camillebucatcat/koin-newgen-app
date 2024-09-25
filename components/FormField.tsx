import React, {useRef, useState} from 'react';
import {Animated, Platform, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import Svg, { Path } from 'react-native-svg';

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
            <Svg width={18} height={14} viewBox="0 0 16 12" fill="none">
              <Path d="M7.98911 1C5.55359 1 3.05526 2.56632 1.08846 5.69896C1.03232 5.78936 1.00156 5.89622 1.00006 6.00604C0.998556 6.11587 1.02638 6.22372 1.08003 6.31597C2.59121 8.94444 5.05611 11 7.98911 11C10.8902 11 13.4058 8.93819 14.9198 6.30382C14.9721 6.21337 15 6.10808 15 6.00052C15 5.89296 14.9721 5.78767 14.9198 5.69722C13.4023 3.09306 10.8684 1 7.98911 1Z" stroke="#70767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <Path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="#70767E" stroke-width="1.5" stroke-miterlimit="10" />
            </Svg>
          ) : (
            <Svg width={16} height={16} viewBox="0 0 14 14" fill="none">
              <Path d="M6.25777 2.85745C6.50318 2.81983 6.75112 2.80112 6.9994 2.80148C9.2243 2.80148 11.3163 4.40369 12.5337 6.9994C12.3475 7.39442 12.1372 7.77762 11.904 8.14684C11.8299 8.26145 11.791 8.3952 11.792 8.53164C11.7936 8.68434 11.8451 8.83232 11.9386 8.95303C12.0321 9.07374 12.1626 9.16053 12.31 9.20017C12.4575 9.23981 12.6139 9.23012 12.7553 9.17258C12.8967 9.11504 13.0155 9.0128 13.0934 8.88147C13.4194 8.36928 13.7025 7.83105 13.94 7.27227C13.9775 7.18497 13.9969 7.09093 13.9969 6.9959C13.9969 6.90088 13.9775 6.80684 13.94 6.71954C12.5267 3.43816 9.86798 1.40217 6.9994 1.40217C6.67103 1.40052 6.34319 1.42862 6.01989 1.48613C5.92801 1.50175 5.8401 1.53531 5.7612 1.5849C5.68229 1.6345 5.61392 1.69914 5.55999 1.77516C5.50607 1.85117 5.46765 1.93706 5.44692 2.02792C5.42619 2.11879 5.42355 2.21284 5.43917 2.30472C5.45479 2.3966 5.48836 2.48451 5.53795 2.56342C5.58754 2.64233 5.65219 2.71069 5.7282 2.76462C5.80422 2.81854 5.89011 2.85697 5.98097 2.8777C6.07183 2.89843 6.16589 2.90106 6.25777 2.88544V2.85745ZM1.19927 0.205762C1.13404 0.140528 1.05659 0.0887806 0.971358 0.0534759C0.886125 0.0181711 0.794773 0 0.702517 0C0.610261 0 0.518909 0.0181711 0.433675 0.0534759C0.348442 0.0887806 0.270997 0.140528 0.205762 0.205762C0.0740149 0.33751 0 0.516198 0 0.702517C0 0.888836 0.0740149 1.06752 0.205762 1.19927L2.37469 3.3612C1.38508 4.3138 0.597468 5.45596 0.058835 6.71954C0.0203097 6.80781 0.000424533 6.90309 0.000424533 6.9994C0.000424533 7.09572 0.0203097 7.19099 0.058835 7.27926C1.47214 10.5606 4.13082 12.5966 6.9994 12.5966C8.25676 12.5879 9.48441 12.2136 10.5327 11.5192L12.7995 13.793C12.8646 13.8586 12.942 13.9107 13.0272 13.9462C13.1125 13.9817 13.2039 14 13.2963 14C13.3887 14 13.4801 13.9817 13.5654 13.9462C13.6506 13.9107 13.728 13.8586 13.793 13.793C13.8586 13.728 13.9107 13.6506 13.9462 13.5654C13.9817 13.4801 14 13.3887 14 13.2963C14 13.2039 13.9817 13.1125 13.9462 13.0272C13.9107 12.942 13.8586 12.8646 13.793 12.7995L1.19927 0.205762ZM5.64907 6.63558L7.36322 8.34974C7.24497 8.38365 7.12241 8.40014 6.9994 8.39871C6.62828 8.39871 6.27236 8.25128 6.00994 7.98886C5.74752 7.72644 5.60009 7.37052 5.60009 6.9994C5.59866 6.87639 5.61516 6.75383 5.64907 6.63558ZM6.9994 11.1973C4.7745 11.1973 2.68254 9.59512 1.47214 6.9994C1.92418 6.00152 2.56575 5.10095 3.3612 4.34771L4.59959 5.60009C4.30871 6.13099 4.19781 6.74189 4.28353 7.34115C4.36925 7.94042 4.64697 8.49573 5.07502 8.92378C5.50308 9.35184 6.05839 9.62956 6.65765 9.71528C7.25691 9.801 7.86782 9.6901 8.39871 9.39922L9.51116 10.4977C8.7493 10.9461 7.88336 11.1873 6.9994 11.1973Z" fill="#70767E" />
            </Svg>
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