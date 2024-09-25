import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormField from '../../components/FormField'

const FormfieldSample = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <FormField title="Security Mask" isFloating={true} securityMask={true} placeholder="floating label"></FormField>
      <FormField title="Clear button" isFloating={true} showClearBtn={true} placeholder="floating label"></FormField>
      <FormField title="Edit label" isFloating={true} showEditIcon={true} placeholder="floating label"></FormField>
      <FormField title="stacked label" isFloating={false} placeholder="stacked label"></FormField>
      <FormField title="floating label" isFloating={true} placeholder="floating label"></FormField>
    </View>
  )
}

export default FormfieldSample

const styles = StyleSheet.create({})