import React, { useState, useRef, useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { gStyle } from '../../styles/Global';
import Button from '../../../components/Button';
import { SansSerifText } from '../../../components/SanSerifText';
import FormField from '../../../components/FormField';
import { router } from 'expo-router';
import { display } from '../../styles/Display';
import RadioButton from '../../../components/RadioButton';
import images from '../../../constants/Images';
import { Calendar } from 'react-native-calendars';
import FundsHeader from '../../../components/header/FundsHeader';

const  AddFunds= ()=>{
    const [selectedAmount, setSelectedAmount] = useState(null);
  const [form, setForm] = useState({
    amount: ''
  });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const amounts = ['10', '20', '50', '100'];

  const [selectedDate, setSelectedDate] = useState('2024-08-01'); // Initialize with a default ISO date
  const [showCalendar, setShowCalendar] = useState(false);
  const [buttonYPosition, setButtonYPosition] = useState(0); // To store button Y position
  const buttonRef = useRef(null);

  // Function to format the date to "01 Aug, 2024"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString); // Set selected date as ISO string
    setShowCalendar(false); // Close the calendar modal after selection
  };

  // Function to calculate button position
  const calculateButtonPosition = () => {
    if (buttonRef.current) {
      buttonRef.current.measureInWindow((x, y, width, height) => {
        setButtonYPosition(y + height); // Store Y position + button height to place calendar below
      });
    }
  };

  useEffect(() => {
    if (showCalendar) {
      calculateButtonPosition(); // Calculate the position whenever the calendar is shown
    }
  }, [showCalendar]);

  // Get the marked dates
  const getMarkedDates = () => {
    return {
      [selectedDate]: {
        selected: true,
        selectedColor: '#FA8F5C', // Apply background color to the selected date
        selectedTextColor: '#fff',
      },
    };
  };
  
    //amount choice buttons
    const handlePress = (amount) => {
      const formattedAmount = `$${amount}`;
      setSelectedAmount(formattedAmount);
      setForm({
        ...form,
        amount: formattedAmount
      });
    };
  
    //input
    const handleChangeText = (e) => {
      let value = e;
      if (!value.startsWith('$')) {
        value = `$${value}`;
      }
      setForm({
        ...form,
        amount: value
      });
    };

       // Define your options
  const options = [
    { label: 'Everyday Spending', value: '81' },
    { label: 'Entertainment Fund', value: 'option2' },
    { label: 'Wells Fargo', value: 'option3' },
    { label:'Bank of America', value: 'option4' },
  ];

  // Function to handle option selection
  const handleSelect = ( value: string ) => {
    setSelectedOption(value); // Update the selected option
    setDropdownVisible(false);
  };
return(
    <SafeAreaProvider style={gStyle.darkBg}>
        <SafeAreaView>
            <ScrollView>
              <FundsHeader title='Add Funds'/>
                <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
                    <SansSerifText style={[gStyle.textLight, gStyle.fs16, gStyle.mb2,{}]}>How much do you want to add to your</SansSerifText>
                    <SansSerifText style={[gStyle.mb8, {}]}><Text style={[gStyle.fw700,{}]}>“Draft Kings” Account</Text>?</SansSerifText>

                    <FormField
                        title="Amount to transfer"
                        placeholder="$ 0.00"
                        isFloating={false}
                        backgroundStyles={{ backgroundColor: '#3C3A3C',  borderColor: '#A8A8A8',}}
                        labelColor={{ color: '#fff'}}
                        textStyles={{fontWeight: 600, fontSize: 24, marginTop: 12, color: '#fff', fontFamily: 'Aventa' }}
                        maxLength={50}
                        securityMask={false}
                        onPress={() => { }}
                        onKeyPress={() => { }}
                        isActive={false}
                        />

                    <View style={[gStyle.mt8,{}]}>
                        <SansSerifText style={[gStyle.fs12, gStyle.textLight, gStyle.mb4,{}]}>Or quick select one of the following amounts:</SansSerifText>

                        {/* <View style={[display.flexCenterBetween, gStyle.mb8,{}]}>
                        <Button title="$10" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$20" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$50" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]} fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        <Button title="$100" transform="normal" shape="default"  customStyles={[gStyle.fs700, gStyle.fs16,{ width: '23%', }]}  fill="solid" color="darkgray" centerText={true} handlePress={() =>('')} />
                        </View> */}
                        <View style={styles.amountContainer}>
                            {amounts.map((amount) => (
                                <TouchableOpacity
                                activeOpacity={0.8}
                                key={amount}
                                style={[
                                    styles.amountChoice,
                                    selectedAmount === `$${amount}` && styles.selected
                                ]}
                                onPress={() => handlePress(amount)}
                                >
                                <View>
                                    <SansSerifText maxFontSizeMultiplier={1.2} minimumFontScale={1.1} 
                                    style={[styles.text, selectedAmount === `$${amount}` && styles.selectedText]}
                                    >
                                    ${amount}
                                    </SansSerifText>
                                </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <SansSerifText style={[gStyle.fw600, gStyle.mb5, gStyle.mt8, gStyle.textLight, {}]}>Select Funding Source:</SansSerifText>
                    <View style={[gStyle.darkCard, { borderRadius: 12 }]}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => setDropdownVisible(prev => !prev)}>
                        <View style={[display.flexCenterBetween]}>
                            <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Koin Everyday Spending (default)</SansSerifText>
                            <Image source={images.icon.arrowDown}/>
                        </View>
                        </TouchableOpacity>
                        {isDropdownVisible && ( // Conditionally render the RadioButton
                        <View style={[gStyle.mt4]}>
                            <RadioButton
                            options={options}
                            selectedOption={selectedOption}
                            onSelect={handleSelect}
                            />
                        </View>
                        )}
                    </View>

                    <SansSerifText style={[gStyle.fw600, gStyle.mb5,gStyle.mt8, gStyle.textLight, {}]}>Transaction Date</SansSerifText>
                        {/* calendar  */}
                        <View style={[gStyle.mb8, { position: 'relative' }]}>
                          <TouchableOpacity
                            ref={buttonRef} // Ref to measure button position
                            onPress={() => setShowCalendar(!showCalendar)}
                            style={[gStyle.darkCard, display.flexBetween, {
                              borderRadius: 8,  // Set top radius to 10 when calendar is open
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              borderBottomLeftRadius: showCalendar ? 0 : 8,
                              borderBottomRightRadius: showCalendar ? 0 : 8,
                            }]}
                          >
                            <Text style={[gStyle.textLight, gStyle.fs16]}>
                              {formatDate(selectedDate)} <Text style={[gStyle.fw300, gStyle.fs16, { fontStyle: 'italic' }]}> (today)</Text>
                            </Text>
                            <Image source={showCalendar ? images.icon.arrowUp : images.icon.calendar} />
                          </TouchableOpacity>
                          {showCalendar && (
                            <Modal
                              transparent={true}
                              visible={showCalendar}
                              animationType="none"
                              onRequestClose={() => setShowCalendar(false)}
                            >
                              <View
                                style={{
                                  flex: 1,
                                  justifyContent: 'flex-start',
                                  alignItems: 'center',
                                  marginTop: buttonYPosition,
                                  marginHorizontal: 16,
                                }}
                              >
                                <View
                                  style={{
                                    backgroundColor: '#3C3A3C',
                                    padding: 10,
                                    borderRadius: 10,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                    width: '100%',
                                  }}
                                >
                                  <Calendar
                                    onDayPress={onDayPress}
                                    markedDates={getMarkedDates()} // Use the function to get marked dates
                                    theme={{
                                      backgroundColor: '#3C3A3C',
                                      calendarBackground: '#3C3A3C',
                                      textSectionTitleColor: '#fff',
                                      dayTextColor: '#fff',
                                      todayTextColor: '#FA8F5C', // Highlight today's date
                                      monthTextColor: '#fff',
                                      // Custom header without year and align month to the left
                                      'stylesheet.calendar.header': {
                                        arrow: { display: 'none' }, // Hide arrows
                                        monthText: {
                                          fontSize: 16,
                                          fontWeight: 'bold',
                                          color: '#fff',
                                          alignSelf: 'flex-start', // Align month text to the left
                                        },
                                        week: {
                                          marginTop: 5,
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                        },
                                        header: {
                                          flexDirection: 'row',
                                          justifyContent: 'flex-start', // Align header left
                                          marginLeft: 10,
                                        },
                                      },
                                      // Custom day styles
                                      'stylesheet.day.basic': {
                                        base: {
                                          width: 32,
                                          height: 32,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          backgroundColor: '#545454', 
                                          borderRadius: 8, 
                                        },
                                        selected: {
                                          backgroundColor: '#FA8F5C', 
                                          borderRadius: 8, 
                                        },
                                        today: {
                                          backgroundColor: '#545454',
                                          borderRadius: 8, 
                                        },
                                      },
                                    }}
                                    // Render only the month, remove the year from the display
                                    renderHeader={(date) => {
                                      const month = date.toString('MMMM yyyy').split(' ')[0]; // Extract month
                                      return (
                                        <Text
                                          style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            alignSelf: 'flex-start',
                                          }}
                                        >
                                          {month}
                                        </Text>
                                      );
                                    }}
                                    hideDayNames={true} // This will remove the weekdays (Mon, Tue, etc.)
                                  />
                                </View>
                              </View>
                            </Modal>
                          )}
                        </View>

                    <Button title="Review Transaction" transform="normal" shape="round"  customStyles={[gStyle.fs700]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
    )
}
export default AddFunds;

const styles = StyleSheet.create({
    amountContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    amountChoice: {
      width: '22%',
      height: 55,
      borderRadius: 12,
      padding: 8,
      backgroundColor: '#545454',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    selected: {
      backgroundColor: '#FF8950',
    },
    amount: {
      textAlign: 'center',
    },
    text: {
      fontSize: 16,
      color: '#ffffff',
    },
    selectedText: {
      color: '#ffffff',
    },
  
  });