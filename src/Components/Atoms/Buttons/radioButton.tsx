import React from 'react';
import { useState } from "react";
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { THEME_COLORS } from '../../../Shell/Theme/css/base';


export default function RadioButton({ data, onSelect,setOnSelct,style}) {
    const [isselected,setisseleted]=useState('')
  return (
    <View style={{
        flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:10}}>        
    {data.map((item,index) => {
      return (
         <TouchableOpacity style={{flexDirection: 'row' }} 
          onPressOut={()=>setisseleted(index)}
          onPress={()=>setOnSelct(item.value)}> 
         <Ionicons name={isselected?'radio-button-on':'radio-button-off-sharp'} 
         size={22} 
         color={isselected?THEME_COLORS.primary:THEME_COLORS.black}
         />
           <Text>{item.value}</Text>

          </TouchableOpacity>

      )
    })}
  </View>
  );
}