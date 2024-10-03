import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Button from './Button';
import { gStyle } from '../app/styles/Global';
import { display } from '../app/styles/Display';
import images from '../constants/Images';
import GradientButton from './GradientButton';
import { SansSerifText } from './SanSerifText';
import { useNavigation } from '@react-navigation/native';

interface TitleProps {
    transaction: string;
    showDate?: boolean;
}


const RecentTransactions: React.FC<TitleProps> = ({ transaction, showDate = false }) => {
    let navigation: any = useNavigation();
    
    return (
        <View style={[]}>
            <TouchableOpacity onPress={() => navigation.push('TransactionDetails')} style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, { borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1 }]}>
                <View style={[]}>
                    <Image source={images.transactions.shoppingbag} />
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Amazon</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>Online Purchase</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>Yesterday 12.54 pm</Text>
                    </View>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs3, display.alignSelfEnd]}>- $40.00</Text>
                        <SansSerifText style={[gStyle.fs12, gStyle.mt1, {}]}>{transaction}</SansSerifText>
                    </View>
                </View>
                <View>
                    <Image source={images.icon.arrowright} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, { borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1 }]}>
                <View style={[]}>
                    <Image source={images.transactions.coffeecup} />
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>The Pod</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>Coffee</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>Yesterday 10:46 am</Text>
                    </View>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs3]}>- $4.26</Text>
                    </View>
                </View>
                <View>
                    <Image source={images.icon.arrowright} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, { borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1 }]}>
                <View style={[]}>
                    <Image source={images.transactions.basket} />
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Trader Joes</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>Groceries</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>Yesterday 10:31 am</Text>
                    </View>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs3]}>- $185.93</Text>
                    </View>
                </View>
                <View>
                    <Image source={images.icon.arrowright} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, { borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1 }]}>
                <View style={[]}>
                    <Image source={images.transactions.everyday} />
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Everyday Spending</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>Account Transfer</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>July 29th</Text>
                    </View>
                    <View>
                        <Text style={[gStyle.textSuccessLight, gStyle.fw700, gStyle.fs3]}>+ $100.00</Text>
                    </View>
                </View>
                <View>
                    <Image source={images.icon.arrowright} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[display.dFlex, gStyle.py3, display.flexBetween, display.alignCenter, { borderBottomColor: '#FFFFFF1F', borderBottomWidth: 1 }]}>
                <View style={[]}>
                    <Image source={images.transactions.amazon} />
                </View>
                <View style={[display.flexBetween, display.alignCenter, gStyle.mx3]}>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw600, gStyle.fs4]}>Amazon</Text>
                        <Text style={[gStyle.textLight, gStyle.fs3]}>You paid $40</Text>
                        {showDate && (
                            <Text style={[gStyle.textLight, gStyle.fs3]}>July 29th</Text>
                        )}
                    </View>
                    <View>
                        <Text style={[gStyle.textLight, gStyle.fw700, gStyle.fs3, display.alignSelfEnd]}>$30.00</Text>
                        <SansSerifText style={[gStyle.fs12, gStyle.mt1, {}]}>{transaction}</SansSerifText>
                    </View>
                </View>
                <View>
                    <Image source={images.icon.arrowright} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default RecentTransactions;