import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../styles/Global';
const  ReviewTransaction= ()=>{
return(
<SafeAreaProvider style={gStyle.darkBg}>
<SafeAreaView>
<ScrollView>
<View style={{paddingHorizontal: 16, paddingVertical: 8}}>
</View>
</ScrollView>
</SafeAreaView>
</SafeAreaProvider>
)
}
export default ReviewTransaction;