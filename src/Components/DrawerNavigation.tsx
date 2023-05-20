import React, {useState} from 'react';
import {Alert, StyleSheet, Text, Pressable, View,Image} from 'react-native';
import { ALIGNLET, THEME_COLORS, THEME_TEXT_COLORS, USER_DUMMY } from '../Shell/Theme/css/base';
import Modal from 'react-native-modal';

const Drawernavigation = ({modalVisible,setModalVisible,navigation}) => {
  return (
    <View>
    <View style={styles.centeredView}>
      <Modal
       isVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        style={{flex:1,width:'70%'}}
        onDismiss={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
          onBackdropPress={()=> setModalVisible(!modalVisible)}
       >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignItems:'center'}}>
            <Image
                source={USER_DUMMY}
                resizeMode={'contain'}
                style={[{height: 120, width: 130}]}
              /> 
            </View>
            <Text style={styles.modalText}>Hi, Jolliet!</Text>
            <Pressable
              style={[ styles.buttonClose]}
              >
              <Text style={styles.textStyle}>User Profile</Text>
            </Pressable>
            <Pressable
              style={[ styles.buttonClose]}
              >
              <Text style={styles.textStyle}>Email</Text>
            </Pressable>
            <Pressable onPress={()=> navigation("ResetPassword") && setModalVisible(!modalVisible)}
              style={[ styles.buttonClose]}
              >
              <Text style={styles.textStyle}>Reset Password</Text>
            </Pressable>
            <Pressable onPress={()=> navigation("ForgetPassword") &&  setModalVisible(!modalVisible)}
              style={[ styles.buttonClose]}
              >
              <Text style={styles.textStyle}>Forgot Password</Text>
            </Pressable>
            <Pressable
              style={[ styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  
    </View>
    <Pressable style={{marginHorizontal:20}}
        onPress={() => setModalVisible(true)}>
         <Image
                source={ALIGNLET}
                resizeMode={'contain'}
                style={[{height: 50, width: 30}]}
              /> 
      </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
   flex:1,
   width:'100%'

  },
  modalView: {
    backgroundColor: 'white',
   // borderRadius: 20,
    borderBottomEndRadius:20,
    borderTopRightRadius:20,
    paddingVertical: 35,
    flex:1,
    margin:-20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },


  buttonClose: {
   borderBottomColor:THEME_TEXT_COLORS.placeHolder,
   borderBottomWidth:1,
   marginBottom:10
   
  },
  textStyle: {
    color: THEME_COLORS.primary,
    fontWeight: 'bold',
    fontSize:14,
    marginHorizontal:20,
    paddingVertical:10
  },
  modalText: {
    marginBottom: 15,
    marginTop:10,
    textAlign: 'center',
    fontSize:22
  },
});

export default Drawernavigation;