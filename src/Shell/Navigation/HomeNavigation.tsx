import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './AuthStack/Auth';
import MainRouter from './AuthStack/Auth';
const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    // <Stack.Navigator>
     <MainRouter/>
    // </Stack.Navigator>
 
  );
};

export default HomeNavigation;
