import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {baseStyles, FONT_SCALE, FONTS, THEME_COLORS} from '../../Shell/Theme/css/base';

import AppHeader from '../../Components/Atoms/app-header/AppHeader';

const Notification = ({navigation}) => {

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