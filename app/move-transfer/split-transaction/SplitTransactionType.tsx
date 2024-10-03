import { ScrollView, StyleSheet, View, Image, FlatList, Text, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/Global';
import Header from '../../../components/header/Header';
import { SansSerifText } from '../../../components/SanSerifText';
import images from '../../../constants/Images';
import { display } from '../../styles/Display';
import RadioButton from '../../../components/RadioButton';
import TextAreaField from '../../../components/TextAreaField';
import Button from '../../../components/Button';

const SplitTransactionType = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const transactionData = [
    {
      image: images.selectCategories.onlinePurchase,
      title: "Amazon",
      description: "Online Purchase",
      date: "Yesterday 12:54 pm",
      amount: "$40.00",
    },
    {
      image: images.selectCategories.slotMachine,
      title: "Slot machine",
      description: "Gaming",
      date: "July 25th",
      amount: "$120.00",
    },
    {
      image: images.selectCategories.drinks,
      title: "Total Wine & More",
      description: "Alcohol",
      date: "July 12th",
      amount: "$226.48",
    },
  ];

  //scroll flatlist
  const itemWidth = 300; 
  const gap = 10; 

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / (itemWidth + gap)); 
    setActiveIndex(index);
  };

  const options = [
    {
      label: 'Equal (Everyone owes an equal share)',
      value: 'option1',
      layout: 'space-between', 
    },
    {
      label: 'Custom (Specify exactly how much each person owes)',
      value: 'option2',
      layout: 'space-between', 
    },
    {
      label: 'Percentage (Assign a percentage of the cost to each person)',
      value: 'option3',
      layout: 'space-between', 
    },
  ];
  // Function to handle option selection
  const handleSelect = ( value: string ) => {
    setSelectedOption(value); // Update the selected option
    setDropdownVisible(false);
  };

  return (
    
    <SafeAreaProvider style={gStyle.darkBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Split Transaction(s)" showCancelBtn={true}></Header>
        <ScrollView>
          <View style={[gStyle.pt4]}>
            <SansSerifText style={[gStyle.fw600, gStyle.fs20, gStyle.px6]}>How would you like to split?</SansSerifText>
            <View style={[gStyle.my4,]}>
              <SansSerifText style={[gStyle.fw600, gStyle.fs14, gStyle.px6]}>1 of 3 transactions:</SansSerifText>
              <View style={[gStyle.mt4]}>
                <FlatList
                  data={transactionData}
                  keyExtractor={(_, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingRight: gap / 2, paddingLeft: 24 }}
                  renderItem={({ item }) => (
                    <View style={[gStyle.darkCard, display.flexStart, { width: itemWidth, marginRight: gap }]}>
                      <Image source={item.image} style={{width: 44, height: 44}}/>
                      <View style={[gStyle.ml4]}>
                        <SansSerifText style={[gStyle.fs16, gStyle.fw700, gStyle.mb1]}>{item.title}</SansSerifText>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400, gStyle.mb1]}>{item.description}</SansSerifText>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400, gStyle.mb1]}>{item.date}</SansSerifText>
                        <SansSerifText style={[gStyle.fs20, gStyle.fw700]}>{item.amount}</SansSerifText>
                      </View>
                    </View>
                  )}
                  onScroll={handleScroll}
                  scrollEventThrottle={16}
                />
                <View style={styles.paginationContainer}>
                  {transactionData.map((_, index) => (
                    <View
                      key={index}
                      style={[
                        styles.paginationDot,
                        {
                          backgroundColor: activeIndex === index ? '#FA8F5C' : '#404040',
                          opacity: activeIndex === index ? 1 : 0.5,
                        },
                      ]}
                    />
                  ))}
                </View>
              </View>
              <View style={[gStyle.px6, gStyle.pt6]}>
                <View>
                  <SansSerifText>Split Type:</SansSerifText>
                  <View style={[gStyle.darkCard, gStyle.my4, { borderRadius: 12 }]}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => setDropdownVisible(prev => !prev)}>
                      <View style={[display.flexCenterBetween]}>
                        <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Equal</SansSerifText>
                        <Image source={images.icon.arrowDown}/>
                      </View>
                    </TouchableOpacity>
                    {isDropdownVisible && (
                      <View style={[gStyle.mt4]}>
                        <RadioButton
                          options={options}
                          selectedOption={selectedOption}
                          onSelect={handleSelect}
                        />
                      </View>
                    )}
                  </View>
                </View>
                <View>
                  <SansSerifText style={[gStyle.my4]}>Splitting between:</SansSerifText>
                  <View style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2]}>
                    <Image source={images.profileSample.user7} style={styles.userImg}/>
                    <View style={[display.flexCenterBetween, gStyle.ml4]}>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Ethan <SansSerifText style={[gStyle.fs14, gStyle.fw500]}>(You)</SansSerifText></SansSerifText>
                      <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700]}>$10.00 Paid</SansSerifText>
                    </View>
                  </View>
                  <View style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2]}>
                    <Image source={images.profileSample.user1} style={styles.userImg}/>
                    <View style={[display.flexCenterBetween, gStyle.ml4]}>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Chloe Davis</SansSerifText>
                      <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700]}>$10.00 Owed</SansSerifText>
                    </View>
                  </View>
                  <View style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2]}>
                    <Image source={images.profileSample.user2} style={styles.userImg}/>
                    <View style={[display.flexCenterBetween, gStyle.ml4]}>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Tommy Johnson</SansSerifText>
                      <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700]}>$10.00 Owed</SansSerifText>
                    </View>
                  </View>
                  <View style={[gStyle.darkCard, display.flexCenterStart, gStyle.my2]}>
                    <Image source={images.profileSample.user4} style={styles.userImg}/>
                    <View style={[display.flexCenterBetween, gStyle.ml4]}>
                      <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Rachel Miller</SansSerifText>
                      <SansSerifText style={[gStyle.textGrayLight, gStyle.fw700]}>$10.00 Owed</SansSerifText>
                    </View>
                  </View>
                </View>
                <View style={[gStyle.mt2]}>
                  <SansSerifText style={[gStyle.my4]}>Message (optional):</SansSerifText>
                  <TextAreaField placeholder="Add a note" backgroundStyles={{backgroundColor: '#3C3A3C',}} textStyles={{color: '#ffffff'}}/>
                </View>
                <View style={[gStyle.my4]}>
                  <Button title="Review Split" transform="normal" shape="round" customStyles={[gStyle.fs700]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SplitTransactionType

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  userImg: {
    borderRadius: 12,
    width: 44,
    height: 44,
  }
})