import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import images from '../../../constants/Images';
import Button from '../../../components/Button';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FundsHeader from '../../../components/header/FundsHeader';
import CustomCheckbox from '../../../components/CheckBox';

const SelectSplitTransaction = () => {
  const [isChecked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <SafeAreaProvider style={gStyle.darkBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <FundsHeader title='Split Transaction(s)'/>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.content}>
            <View style={[display.flexCenterBetween]}>
              <SansSerifText style={[gStyle.fw400, gStyle.fs14]}>Select the transaction(s) to <SansSerifText style={[gStyle.fw600]}>split</SansSerifText>?</SansSerifText>
              <TouchableOpacity>
                <Image source={images.icon.list}/>
              </TouchableOpacity>
            </View>
            <SansSerifText style={[gStyle.fs14, gStyle.fw700, gStyle.pt4]}>JULY</SansSerifText>
            <View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.car} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Uber</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Transport</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>Today 8:18 am</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $17.48</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.onlinePurchase} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Amazon</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Online Purchase</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>Yesterday 12.54 pm</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $40.00</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.coffee} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>The Pod</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Coffee</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>Yesterday 10:46 am</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $4.26</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.groceries} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Trader Joes</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Groceries</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>Yesterday 10.31 am</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $185.93</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.draftKings} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Draft Kings</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Account Transfer</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>July 29th</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $100.00</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.slotMachine} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Slot Machine</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Gaming</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>July 25th</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $120.00</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.tableGame} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Back Alley Casino</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Table Game</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>July 11th</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $100.00</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4,]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.movieTickets} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Cineplex</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Movie Tickets</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>July 9th</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $34.29</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
            </View>
            <SansSerifText style={[gStyle.fs14, gStyle.fw700, gStyle.pt4]}>JUNE</SansSerifText>
            <View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.car} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Delta Airlines</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Travel</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>June 30th</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $328.39</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.gaming} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Games World</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Gaming</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>June 23rd</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $73.29</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
              <View style={[display.flexCenterBetween, gStyle.py4, {borderBottomWidth: 1, borderColor: '#545454'}]}>
                <CustomCheckbox
                  isChecked={isChecked}
                  onChange={toggleCheckbox}
                />
                <View style={[gStyle.ml2]}>
                  <Image source={ images.selectCategories.entertainment} style={styles.icon}/>
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.ml2]}>
                  <View>
                    <SansSerifText style={[gStyle.fw600, gStyle.fs14]}>Live Nation</SansSerifText>
                    <SansSerifText style={[gStyle.fs12, gStyle.py1]}>Entertainment</SansSerifText>
                    <SansSerifText style={[gStyle.fs12]}>June 18th</SansSerifText>
                  </View>
                  <View>
                    <SansSerifText style={[gStyle.fw700, gStyle.fs]}>- $218.83</SansSerifText>
                  </View>
                </View>
                <View>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button title="Split Transactions"  transform="normal" expand="block" shape="round" fill="solid" color="primary" customStyles={{ marginVertical: 16}} centerText={true} handlePress={() => router.push('')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SelectSplitTransaction

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    paddingBottom: 100, 
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16, 
    backgroundColor: gStyle.darkBg.color, 
  },
  icon: {
    width: 44,
    height: 44
  }
});
