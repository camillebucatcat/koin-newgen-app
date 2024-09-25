import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import { router } from 'expo-router';


const ButtonSample = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <Button title="SOLID" expand="default" shape="default" fill="solid" color="primary" customStyles={{ marginVertical: 8}} centerText={true} handlePress={() => router.push('')} />
      <Button title="CLEAR" shape="round" fill="clear" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="OUTLINE" expand="block" shape="round" fill="outline" color="primary" text="primary" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="SUCCESS SOLID" shape="round" fill="solid" color="success" customStyles={{ marginVertical: 8}}  handlePress={() => router.push('')} />
      <Button title="DANGER SOLID" shape="round" fill="solid" color="danger" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="SUCCESS OUTLINE" shape="round" fill="outline" color="success" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="DANGER OUTLINE" shape="round" fill="outline" color="danger" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="CLEAR SUCCESS" shape="round" fill="clear" color="success" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="CLEAR DANGER" shape="round" fill="clear" color="danger" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="OUTLINE DARK" shape="round" fill="outline" color="dark" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="SOLID DARK" shape="round" fill="solid" color="dark" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="CLEAR DARK" shape="round" fill="clear" color="dark" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
      <Button title="LIGHT" shape="round" fill="solid" color="light" customStyles={{ marginVertical: 8}} handlePress={() => router.push('')} />
    </View>
  );
};

export default ButtonSample;

const styles = StyleSheet.create({});
