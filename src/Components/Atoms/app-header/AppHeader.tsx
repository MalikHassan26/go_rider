import {View, Text} from 'react-native';
import React from 'react';
import {StatusBar,Image} from 'react-native';
import {COLORS, FONT_SCALE, THEME_COLORS, USER_ADD, USER_ADD_NEW, USER_DUMMY, VIDEO_ICON} from '../../../Shell/Theme/css/base';
import {ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';
import {useDispatch} from 'react-redux';

export default function AppHeader({
  backgroundLight = false,
  showBack = false,
  onBackPress,
  text,
  addPerson = true,
  addUser= true
}) {
  useFocusEffect(() => {
    if (backgroundLight) {
      StatusBar.setBarStyle('dark-content', true);
    } else {
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  });

  return backgroundLight == false ? (
    <View style={styles.topContainer}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ImageBackground
        style={styles.imageContainer}
        source={USER_DUMMY}
        resizeMode="cover">
        <View style={styles.contentContainer}>
          {showBack && (
            <Ionicons
              onPress={onBackPress}
              name="arrow-back"
              size={25 / FONT_SCALE}
              color={THEME_COLORS.black}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  ) : (
    <View style={styles.topContainer}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.innerContainer}>
        <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Ionicons
          name="chevron-back-sharp"
          onPress={onBackPress}
          size={24 / FONT_SCALE}
          color={THEME_COLORS.white}
        />
       
        <Text style={styles.headerText}>{"   "}{text}</Text>
        </View>
        
       {addPerson && <View style={{flex:1,alignContent:'flex-end'}}>
       <Image source={USER_ADD} resizeMode={'contain'} style={{height:25,width:25,alignSelf:'flex-end'}}/>
        </View>} 
        {addUser && <View style={{flex:1,alignContent:'flex-end'}}>
       <Image source={USER_ADD_NEW} resizeMode={'contain'}  style={{height:25,width:25,alignSelf:'flex-end'}}/>
        </View>}
        <View />
      </View>
    </View>
  );
}
