import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const EyeIcon = () => {
  return (
    <Svg width="18" height="14" viewBox="0 0 16 12" fill="none">
      <Path d="M7.98911 1C5.55359 1 3.05526 2.56632 1.08846 5.69896C1.03232 5.78936 1.00156 5.89622 1.00006 6.00604C0.998556 6.11587 1.02638 6.22372 1.08003 6.31597C2.59121 8.94444 5.05611 11 7.98911 11C10.8902 11 13.4058 8.93819 14.9198 6.30382C14.9721 6.21337 15 6.10808 15 6.00052C15 5.89296 14.9721 5.78767 14.9198 5.69722C13.4023 3.09306 10.8684 1 7.98911 1Z" stroke="#70767E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" stroke="#70767E" stroke-width="1.5" stroke-miterlimit="10" />
    </Svg>
  )
}

export default EyeIcon

const styles = StyleSheet.create({})