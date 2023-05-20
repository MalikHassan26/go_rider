// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/

// // Import React and Component
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
import FirebaseService from '../../Utils/Services/firebase.server';

const LoginScreen = ({navigation,props}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const disptach=useDispatch();

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    const  dataToSend = {
      userName: userEmail,
       password: userPassword};
      disptach (login(dataToSend));
      FirebaseService.init(this)
      AUTH.LOGIN_PREFIX?
      navigation.navigate("App","HomeScreen"):
      Alert.alert("Please Enter a valid Email or Password")
  
  };

  return (
    <View style={[{backgroundColor: THEME_COLORS.white}, baseStyles.flex1x]}>
       <AppHeader
          text={'Log In'}
          onBackPress={() => navigation.goBack()}
          addUser={null}
          backgroundLight
          showBack
        />
      <Loader loading={loading} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <Text style={[baseStyles.mT2_5x,styles.textSytle]}>{" "}Email</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                placeholder="Enter email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <Text style={[baseStyles.mT2_5x,styles.textSytle]}>{" "}Password</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserPassword => setUserPassword(UserPassword)}
                placeholder="Enter password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
             
            </View>
            <Text onPress={()=>navigation.navigate('ForgetPassword')}
             style={[{color:'#6750A4',alignSelf:'flex-end',
             fontWeight:'400',
             fontFamily:FONTS.regular,marginVertical:20,lineHeight:24,
             marginHorizontal:20,fontSize:14 / FONT_SCALE,}]}>
              Forgot Passwrod?</Text>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Sign in</Text>
            </TouchableOpacity>
            <Text style={styles.registerTextStyle}>
              Don't have an account?{' '}
              <Text
                style={[
                  styles.registerTextStyle,
                  {color: '#6750A4'},
                ]}
                onPress={() => navigation.navigate('RegisterScreen')}
                >
                Sign up
              </Text>
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

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
    marginHorizontal:20,
    margin: 10,
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
  buttonTextStyle: {
    color: '#117A9B',
    paddingVertical: 10,
    lineHeight:20,
    fontSize: 16 / FONT_SCALE,
    fontFamily:FONTS.bold,
    letterSpacing:0.1,
    
  },
  inputStyle: {
    width: '100%',
    height:56,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    fontFamily:FONTS.regular,
    borderRadius: 8,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: THEME_COLORS.black,
    textAlign: 'center',
    fontFamily:FONTS.regular,
    fontSize: 14 / FONT_SCALE,
    alignSelf: 'center',
    letterSpacing:0.4,
    padding: 10,
    lineHeight:16,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14/FONT_SCALE,
  },
  textSytle:{
    color:'#343434',
    fontFamily:FONTS.regular,
    letterSpacing:0.5,
    lineHeight:24,
    fontSize:16,
    marginHorizontal:15
  }
});










