import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { display } from './../app/styles/Display';
import Colors from '../constants/Colors';
import { gStyle } from './../app/styles/Global';

export default class InsightDoughnutChart extends Component {
  render() {
    const widthAndHeight = 280
    const series = [123, 321, 123, 789, 537, 700]
    const sliceColor = ['#F4EBFF', '#6EDEB0', '#FA8F5C', '#B692F6', '#D6BBFB', '#E9D7FE']

    return (
        <View style={styles.container}>
          
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.80}
            coverFill={'transparent'}
          />
          <View style={styles.content}>
            <Text style={[gStyle.textLight, gStyle.fs32, gStyle.fw700]}>$549</Text>
            <Text style={[gStyle.textLight, gStyle.fw500]}>Everyday spending</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})