import React, { useState } from 'react';
import { View, Image, Modal, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { gStyle } from '../../styles/Global';
import { SansSerifText } from '../../../components/SanSerifText';
import { display } from '../../styles/Display';
import images from '../../../constants/Images';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import TextAreaField from '../../../components/TextAreaField';
import RadioButton from '../../../components/RadioButton';


interface ModalProps {
    visible: boolean;
    onClose: () => void;
}

const SendFunds: React.FC<ModalProps> = ({ visible, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [form, setForm] = useState({
    amount: ''
  });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const amounts = ['10', '20', '50', '100'];

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
    { label: 'Everyday Spending', value: 'option1' },
    { label: 'Entertainment Fund', value: 'option2' },
    { label: 'Wells Fargo', value: 'option3' },
    { label:'Bank of America', value: 'option4' },
  ];

  // Function to handle option selection
  const handleSelect = (option: { title: string; label: string; value: string }) => {
    setSelectedOption(option.value); // Update the selected option
    setDropdownVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={[styles.modalContainer, gStyle.darkBg]}>
        <View style={[display.flexCenterBetween, styles.header]}>
          <View>
            <SansSerifText>Send Funds</SansSerifText>
          </View>
          <TouchableOpacity onPress={onClose}>
            <View>
              <SansSerifText style={[gStyle.fw700]}>Cancel</SansSerifText>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <SansSerifText style={[gStyle.fs12, gStyle.fw600]}>Select Payee</SansSerifText>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={[gStyle.darkCard, gStyle.my4, { borderRadius: 12 }]}>
                <View style={[display.flexCenterBetween]}>
                  <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Select Contact</SansSerifText>
                  <Image source={images.icon.arrowright}/>
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <SansSerifText style={[gStyle.fs12, gStyle.fw500, gStyle.my4]}>How much do you want to 
                <SansSerifText style={[gStyle.fw700]}> send</SansSerifText>?
              </SansSerifText>
              <FormField
                title="Amount to transfer"
                placeholder="$ 0.00"
                value={form.amount}
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
            </View>
            <View>
              <SansSerifText style={[ gStyle.fs12, gStyle.textLight, gStyle.my4 ]}>Or quick select one of the following amounts:</SansSerifText>
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
            <View style={[gStyle.mb4]}>
              <SansSerifText style={[ gStyle.fs12, gStyle.textLight, gStyle.my4 ]}>Select Funding Source:</SansSerifText>
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
           
            </View>
            <View style={[gStyle.mb4]}>
              <SansSerifText style={[ gStyle.fs12, gStyle.textLight, gStyle.my4 ]}>What’s this for?</SansSerifText>
              <TouchableOpacity activeOpacity={0.5}>
                <View style={[gStyle.darkCard, { borderRadius: 12 }]}>
                  <View style={[display.flexCenterBetween]}>
                    <SansSerifText style={[gStyle.fs14, gStyle.fw400]}>Select Category</SansSerifText>
                    <Image source={images.icon.arrowright}/>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[gStyle.mb4]}>
              <SansSerifText style={[ gStyle.fs12, gStyle.textLight, gStyle.my4 ]}>Message (optional):</SansSerifText>
              <TextAreaField placeholder="Add a note" backgroundStyles={{backgroundColor: '#3C3A3C',}} textStyles={{color: '#ffffff'}}/>
            </View>
            <View style={[gStyle.mb4]}>
              <Button title="Review Transaction" transform="normal" shape="round" customStyles={[gStyle.fs700]} expand="block" fill="solid" color="primary" centerText={true} handlePress={() =>('')} />
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16
  },
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

export default SendFunds;
