import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../../Screens/SignIn/SignIn';
import RegisterScreen from '../../../Screens/SignUp/SignUp';
import InitialScreen from '../../../Screens/InitialScreen/InitialPage';
import ForgetPassword from '../../../Screens/ForgetPassword/ForgetPassword';

import {THEME_COLORS} from '../../Theme/css/base';
import HomeScreen from '../../../Screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View ,Image} from 'react-native';
import Otp from '../../../Screens/Otp/Otp';
import ResetPassword from '../../../Screens/ResetPassword/ResetPassword';
import MAPVIEW from '../../../Screens/Map/map'
import RiderSignUp from '../../../Screens/RiderSignUp/RiderSignUp';
import RiderSignIn from '../../../Screens/RiderSignIn.tsx/RiderSignIn';
import Notification from '../../../Screens/Notification/Notification';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigation  () {
  return (
    
    <Stack.Navigator initialRouteName="InitialScreen"   screenOptions={{ headerShown: true }}>
      
       <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{headerShown: false}}
      
      /> 
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


function Home02Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
        name="HomeScreen"
        component={Notification}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
  );
}

function Home03Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      
   <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
 
  );
}

function Home04Stack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  
  );
}

function App() {
  return (
<Tab.Navigator
  screenOptions={({route}) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      backgroundColor: '#fff',
      minHeight: 70,
      maxHeight: 70,
      borderTopRightRadius: 16,
      borderTopLeftRadius: 16,
      elevation: 3,
    },
    tabBarIcon: ({focused}) => {
      let iconName;
      let backgroundColor;
      let activeTintColor;
      if (route.name === 'Home') {
        iconName = require('../../Theme/Image/home.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      } else if (route.name === 'Award') {
        iconName = require('../../Theme/Image/award.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      } else if (route.name === 'Account') {
        iconName = require('../../Theme/Image/bar.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      } else if (route.name === 'More') {
        iconName = require('../../Theme/Image/add.png');
        backgroundColor = focused ? '#117A9B' : '#fff';
        activeTintColor = focused ? 'white' : '#117A9B';
      }
      return (
        <View
          style={{
            width: 45,
            height: 40,
            elevation: 3,
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            backgroundColor: backgroundColor,
          }}>
          <Image
            source={iconName}
            resizeMode="cover"
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              width: 20,
              top: 10,
              height: 20,
              tintColor: activeTintColor,
            }}
          />
        </View>
      );
    },
  })}>
  <Tab.Screen name="Home" component={MAPVIEW} />
  <Tab.Screen name="Award" component={Notification} />
  <Tab.Screen name="Account" component={MAPVIEW} />
  <Tab.Screen name="More" component={MAPVIEW} />
</Tab.Navigator>

  );
}

const MainRouter=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator   initialRouteName="InitialScreen"screenOptions={{ headerShown: false }}>

      <Stack.Screen name="App" component={App} />
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{headerShown: false}}
      
      />
      
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Log In', //Set Header Title
          headerStyle: {
            backgroundColor: THEME_COLORS.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
       <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          title: 'Forget Password',
          headerStyle: {
            backgroundColor: THEME_COLORS.primary,
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
         <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          title: 'Reset Password',
          headerStyle: {
            backgroundColor: THEME_COLORS.primary,
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RiderSignUp"
        component={RiderSignUp}
        options={{
          title: 'Log In', //Set Header Title
          headerStyle: {
            backgroundColor: THEME_COLORS.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="RiderSignIn"
        component={RiderSignIn}
        options={{
          title: 'Log In', //Set Header Title
          headerStyle: {
            backgroundColor: THEME_COLORS.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
        <Stack.Screen
        name="Otp"
        component={Otp}
        options={{
          title: 'OTP',
          headerStyle: {
            backgroundColor: THEME_COLORS.primary,
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Create Account', //Set Header Title
          headerStyle: {
            backgroundColor: THEME_COLORS.primary, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRouter;
