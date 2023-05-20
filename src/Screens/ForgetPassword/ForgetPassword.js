import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../../Components/Atoms/Loader';
import {baseStyles, FONT_SCALE, FONTS, THEME_COLORS} from '../../Shell/Theme/css/base';
import axios from 'axios';
import { login } from '../../Utils/Store/Actions/auth';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../Utils/Store/Actions/type';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';

const ForgetPassword = ({navigation,props}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const disptach=useDispatch();

  const passwordInputRef = createRef();


  return (
    <View style={[{backgroundColor: THEME_COLORS.white}, baseStyles.flex1x]}>
       <AppHeader
          text={'Forget Password'}
          onBackPress={() => navigation.goBack()}
          backgroundLight
          showBack
          addPerson={false}
          addUser={false}
          
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
            <Image style={styles.imageView} source={require('../../../assets/forgot-password.png')}/>
          <Text style={[baseStyles.mT2_5x,{color:'#343434',fontSize:18,width:'80%',
          letterSpacing:0.5,lineHeight:24,alignSelf:'center',alignContent:'center',
          fontFamily:FONTS.regular,
          textAlign:'center',marginBottom:25}]}>
          Please enter your email address  to receive a verification code
          </Text>
            <Text style={[baseStyles.mT2_5x,styles.textSytle]}>Email</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
           
            
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>{
                userEmail && navigation.navigate('Otp')
              }}>
              <Text style={styles.buttonTextStyle}>Send</Text>
            </TouchableOpacity>
           
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 56,
   // marginTop: 20,
    // marginLeft: 35,
    // marginRight: 35,
    marginHorizontal: 20,
  },
  imageView:{
    alignSelf:'center',
    marginVertical:40
},
buttonStyle: {
  backgroundColor: THEME_COLORS.white,
  borderWidth: 2,
  color: '#FFFFFF',
  borderColor: '#117A9B',
  alignItems: 'center',
  borderRadius: 50,
  marginTop: 20,
  alignSelf:'center',
  marginBottom: 20,
  height:50,
  width:182,
  display:'flex'
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
  textSytle:{
    color:'#343434',
    fontFamily:FONTS.regular,
    letterSpacing:0.5,
    lineHeight:24,
    fontSize:16,
    marginHorizontal:25
   
  },
  buttonTextStyle: {
    color: '#117A9B',
    paddingVertical: 10,
    lineHeight:20,
    fontSize: 16 / FONT_SCALE,
    fontFamily:FONTS.bold,
    letterSpacing:0.1,
    
  },
});