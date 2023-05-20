import React, { useState, createRef, useEffect } from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../../Components/Atoms/Loader';
import { baseStyles, THEME_COLORS } from '../../Shell/Theme/css/base';
import axios from 'axios';
import { login } from '../../Utils/Store/Actions/auth';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../Utils/Store/Actions/type';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const Otp = ({ navigation }) => {
  const CELL_COUNT = 5;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const disptach = useDispatch();


  const passwordInputRef = createRef();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [remainingSeconds, setRemainingSeconds] = useState(120);

  useEffect(() => {
    if (remainingSeconds === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingSeconds]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (

    <SafeAreaView style={styles.root}>

      <View style={[{ backgroundColor: THEME_COLORS.white }, baseStyles.flex1x]}>
        <AppHeader
          text={'OTP'}
          onBackPress={() => navigation.goBack()}
          backgroundLight
          showBack

          addPerson={false}
        />
        <Loader loading={loading} />

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flex: 1,
            //justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View>
            <KeyboardAvoidingView enabled>
              <Image resizeMode='contain' style={styles.imageView} source={require('../../../assets/password.png')} />
              <Text style={[baseStyles.mT2_5x, baseStyles.mH5x, { color: '#000', textAlign: 'center', marginBottom: 25 }]}>
                Please enter the four digit code send to your email
              </Text>

              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              <View style={styles.counterView}>

              <Text style={{ textAlign: 'center' }}>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
              </Text>
              <Text>Resend Code</Text>
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  userEmail && navigation.navigate('Otp')
                }}>
                <Text style={styles.buttonTextStyle}>Send</Text>
              </TouchableOpacity>

            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Otp;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    // marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  imageView: {
    alignSelf: 'center',

    marginVertical: 40,
    // width:'100%'
  },
  buttonStyle: {
    backgroundColor: THEME_COLORS.white,
    borderWidth: 1,
    color: '#FFFFFF',
    borderColor: '#117A9B',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 20,
    width: '50%'
  },
  buttonTextStyle: {
    color: '#117A9B',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    // flex: 1,
    width: '100%',
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: THEME_COLORS.black,
    textAlign: 'center',

    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  root: { flex: 1, },
  title: { textAlign: 'center', fontSize: 30 },
  codeFieldRoot: { marginVertical: 20, paddingHorizontal: 50, },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  counterView:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:50}
});


