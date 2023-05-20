import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { baseStyles, FONTS, THEME_COLORS, THEME_TEXT_COLORS } from '../../../Shell/Theme/css/base'

export default function AppInput({
    placeHolder,
    isPassword = false,
    keyboardType,
    onChangeText,
    onBlur,
    spellCheck,
    value,
    errorText,
    touched,
    enabled = true,
    isDark = false,
    label
}) {
  return (
    <View style={styles.topContainer} >
         <Text style={isDark ?styles.darkPlaceholder: styles.placeholder} >{label ? label : placeHolder}</Text>
        <TextInput
            editable={enabled}
            onBlur={onBlur}
            value={value}
            placeholder={isDark? placeHolder:''}
            secureTextEntry={isPassword ? true: false}
            style={ isDark ?styles.darkTextInput:styles.textInput}
            spellCheck={spellCheck}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholderTextColor={ THEME_TEXT_COLORS.placeHolder}  
        />
        {(touched && errorText)  &&
        <View style={styles.errorTextContainer} >
            <Text style={styles.text} >{errorText}</Text>
        </View>}

    </View>
  )
}

const styles = StyleSheet.create({
    topContainer:{
        minWidth:'100%',
        maxWidth:'100%',
        backgroundColor:'transparent',
        marginVertical:3,
    },
    textInput:{
        borderBottomWidth:1,
        borderBottomColor:THEME_COLORS.white,
        margin:0,
        color:THEME_COLORS.white,
        width:'100%',
        height:48,
        
    },
    darkTextInput:{
        borderBottomWidth:1,
        borderBottomColor:THEME_TEXT_COLORS.placeHolder,
        margin:0,
        color:THEME_COLORS.black,
        width:'100%',
        height:48,
    },
    errorTextContainer:{
        backgroundColor:THEME_TEXT_COLORS.errorBG,
        paddingVertical:2,
        paddingHorizontal:4,
    },
    text:{
        fontSize:14,
        color:THEME_COLORS.white,
        margin:0,
    },
    placeholder:{
        fontSize:16,
        color:THEME_COLORS.white,
    },
    darkPlaceholder:{
        fontSize:16,
        fontWeight:'bold',
        color:THEME_TEXT_COLORS.placeHolder,
    },
})