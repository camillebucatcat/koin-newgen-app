import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormField from '../../components/FormField'

const FormfieldSample = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <FormField title="stacked label" isFloating={false} placeholder="stacked label"></FormField>
      <FormField title="floating label" isFloating={true} placeholder="floating label"></FormField>
    </View>
  )
}

export default FormfieldSample

const styles = StyleSheet.create({})