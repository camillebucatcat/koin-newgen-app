import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Colors from '../constants/Colors';
import images from '../constants/Images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Defs, G, Path, Svg } from 'react-native-svg';
// const image = {uri: '../assets/images/tabbar-vector.png'};

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar]}>
      {/* <View style={[styles.tabLinks]}>
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
      </View>
      <View style={styles.btnQR}>
        <TouchableOpacity style={{ flex: 1 }} >
          <Text>
            QR
          </Text>
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.tabBarBg}>
        <Image source={images.tabBar.Bg} style={styles.tabBarBgImage} />
        <ImageBackground source={images.tabBar.Bg} resizeMode='cover' style={styles.tabBarBgImage}></ImageBackground>
      </View> */}
    </View>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
    height: 150,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    // maxWidth: 440,
    paddingBottom: 40

  },
  tabLinks: {
    backgroundColor: 'transparent',
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  btnQR: {
    zIndex: 10,
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    marginRight: 40
  },
  tabBarBg: {
    width: '100%',
    // height: 150,
    position: 'absolute',
    bottom: 0,
  },
  tabBarBgImage: {
    width: '100%',
    height: 142,
    zIndex: -1,
  }

  // tabBarBgImage: {
  //   width: '100%',
  //   height: 150,
  //   position: 'absolute',
  //   bottom: 0
  // }

  // tabBar: {
  //   width: '100%',
  //   height: 120,
  //   maxWidth: 500,
  //   left: '50%',
  //   // transform: [{ translateX: '-50%' }],
  // },
  // tabLinks: {
  //   width: '93%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // tabBarBg: {
  //   position: 'absolute',
  //   width: '100%',
  //   maxWidth: 440,
  //   height: 180,
  //   bottom: 0,
  //   left: 0,
  //   // transform: [{ translateX: '-50%' }],
  //   zIndex: -1
  // },
  // image: {
  //   width: '100%',
  //   height: 150,
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0
  // },
  // btnQR: {
  //   backgroundColor: 'orange',
  //   width: 90,
  //   height: 90,
  //   borderRadius: 200,
  //   borderColor: '#404040',
  //   borderWidth: 10,
  //   right: 0,
  //   bottom: 10,
  //   marginLeft: 12,
  //   marginRight: 12,
  // }
});