import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SansSerifText } from './SanSerifText'
import { gStyle } from '../app/styles/Global'

const NoContent = () => {
  return (
    <View style={[gStyle.darkCard, {borderRadius: 50}]}>
      <SansSerifText style={{textTransform: 'uppercase', textAlign: 'center'}}>prototype  |  no content</SansSerifText>
    </View>
  )
}

export default NoContent

const styles = StyleSheet.create({})