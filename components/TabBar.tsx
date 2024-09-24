import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Colors from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar]}>
      <View style={[styles.tabBarBg]}></View>
      <View style={styles.tabBarBgBottom}></View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? 'orange' : '#fff', textAlign: 'center', fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
      <View style={styles.btnQR}>
        <TouchableOpacity style={{ flex: 1 }} >
          <Text>
            QR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: -50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 50,
    // paddingHorizontal: 20,
    width: '100%',
    height: 180,
    // flex: 1,
  },
  tabBarBg: {
    backgroundColor: '#543D8A',
    borderTopLeftRadius: 30,
    width: '100%',
    position: 'absolute',
    left: 0,
    height: '100%',
    transform: [
      { skewX: '-11deg' },
      { skewY: '4deg' }
    ]
  },
  tabBarBgBottom: {
    backgroundColor: '#543D8A',
    width: '100%',
    position: 'absolute',
    left: 0,
    height: '100%',
    bottom: 0,
    zIndex: -1
  },
  btnQR: {
    backgroundColor: 'orange',
    width: 80,
    height: 80,
    borderRadius: 200,
    borderColor: '#404040',
    borderWidth: 10,
    right: 0,
    bottom: 10,
    marginLeft: 12,
    marginRight: 12,
  }
});