

import MapView from 'react-native-maps';
import {
    View,
    StatusBar,Text
  } from 'react-native';
  import {
   
    THEME_COLORS,
  
  } from '../../Shell/Theme/css/base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FirebaseService from '../../Utils/Services/firebase.server';


import  {CreateInformativeNotification}  from "react-native-custom-notification";
import React from 'react';
const MAPVIEW = ({}) => {
 
const customValue=()=>{

    CreateInformativeNotification('Go Rider','HY! Folks are you ready!!','IMAGE','slalallaal')
  
}

return(
    <View style={{flex:1}}>
         <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={THEME_COLORS.primary}
        />
     <MapView  
     style={{flex:1}}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
/>

<TouchableOpacity onPress={()=>  customValue()}
style={{backgroundColor:THEME_COLORS.lightBlue,paddingVertical:20}}>
  <Text style={{color:'#fff',textAlign:'center'}}>Push Notficiation</Text>
</TouchableOpacity>
    </View>

)}
export default MAPVIEW;