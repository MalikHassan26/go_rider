import React, {useState, createRef} from 'react';
import {StyleSheet, TextInput, View, Image, Button, Text} from 'react-native';
import {
  baseStyles,
  FONT_SCALE,
  FONTS,
  THEME_COLORS,
  logo_bird,
} from '../../Shell/Theme/css/base';

import AppHeader from '../../Components/Atoms/app-header/AppHeader';

const Notification = ({navigation}) => {
  const cardData = [1, 2, 3, 4];
  return (
    <View style={[{backgroundColor: THEME_COLORS.white}, baseStyles.flex1x]}>
      <AppHeader
        text={'Notification'}
        onBackPress={() => navigation.goBack()}
        backgroundLight
        showBack
        addPerson={false}
        addUser={false}
      />

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        {cardData.map(cardNumber => (
          <View
            key={cardNumber}
            style={{
              width: 310,
              height: 140,
              marginBottom: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              shadowOffset: {width: 0, height: 5},
              shadowOpacity: 0.9,
              shadowRadius: 1,
              elevation: 5,
            }}>
            {/* Card content */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingTop: 10,
                  gap: 15,
                }}>
                <Image source={logo_bird} style={{width: 50, height: 50}} />
                <Text style={{fontWeight: 'bold', color: '#000', fontSize: 20}}>
                  The skilled rider
                </Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                top: 90,
                width: 120,
                height: 40,
                left: 84,
                backgroundColor: THEME_COLORS.lightBlue,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 60,
              }}>
              <Text style={{color: '#FFFFFF', fontWeight: '900'}}>GO HERE</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Notification;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
});
