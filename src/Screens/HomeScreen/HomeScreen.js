
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// // Example of Splash, Login and Sign Up in React Native
// // https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef, useEffect} from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

import {
  ACTIVE_SUBJECT,
  ACTIVE_VALET,
  ALIGNLET,
  baseStyles,
  CARDOCEAN,
  COMEPLETE_CIRCLE,
  COMPONENT_ICON,
  FISH,
  FONT_SCALE,
  FONTS,
  GIF,
  GROUP_ICON,
  HALF,
  HALF_MULTICOLOR,
  Line,
  OBJECT_ONE,
  OBJECT_THREE,
  OBJECT_TWO,
  PRIMERY_CARD,
  PROGRESS,
  SUBJECT,
  THEME_COLORS,
  THEME_TEXT_COLORS,
  VALET,
  VIDEO_ICON,
} from '../../Shell/Theme/css/base';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import ClassCard from '../../Components/ClassCard';
import * as Progress from 'react-native-progress';
import Drawernavigation from '../../Components/DrawerNavigation';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';
const HomeScreen = ({props,navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      let Check = AsyncStorage.getItem('userName');
      console.log('Check', Check);
    }, 5000);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: 90,
          duration: duration,
          useNativeDriver: true, 
          
        }),
  
        Animated.timing(animated, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
          delay:300
  
        }),
      
        
      ])
    ).start();
  }, []); 
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedLogo, {
          toValue: 90,
          duration: duration,
          useNativeDriver: true, 
        }),
  
        Animated.timing(animatedLogo, {
          toValue: -50,
          duration: duration,
          useNativeDriver: true,
          delay:300
  
        }),
      
        
      ])
    ).start();
  }, []); 
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedLeft, {
          toValue: -90,
          duration: duration,
          useNativeDriver: true, 
        }),
  
        Animated.timing(animatedLeft, {
          toValue: 1,
          duration: duration,
          useNativeDriver: true,
          delay:300
  
        }),
      ])
    ).start();
  }, []); 
  
  const DummyArrayForCards = [
    {name: 'Physics', percent: 20, cardQty: 0,myclass:0},
    {name: 'Chemistry', percent: 40, cardQty: 0,myclass:1},
    {name: 'English', percent: 35, cardQty: 0,myclass:1},
    {name: 'Bio', percent: 43, cardQty: 0,myclass:0},
    {name: 'Bio', percent: 43, cardQty: 0,myclass:1},
  ];
  const DummyArrayForCardsFav = [
    {name: 'Mr Reef', percent: 20, cardQty: 23,favorites:1,classMarsty:true,vault:true},
    {name: 'Gems', percent: 12, cardQty: 23,favorites:0,classMarsty:true,vault:true},
    {name: 'Flash Bites', percent: 35, cardQty: 30,favorites:0,classMarsty:false,vault:true,total:true},
    {name: 'Master Shell', percent: 22, cardQty: 18,favorites:0,classMarsty:false,vault:true,total:false},
 
  ];
  const [isActive,isSetAcitve]=useState(true);
  const [modalVisible,setModalVisible]=useState(false);
  const animated = new Animated.Value(40);
  const animatedLogo = new Animated.Value(-40);
  const animatedLeft= new Animated.Value(40)
  const duration = 1500;


  return (
    <View style={[{backgroundColor: THEME_COLORS.white}, baseStyles.flex1x]}>
       <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={THEME_COLORS.primary}
        />
      <View
        style={{maxHeight:348,
           backgroundColor: THEME_COLORS.primary,borderBottomStartRadius:12,elevation:3,
        borderBottomEndRadius:12}}>
        <View
          style={[baseStyles.mT6x,{
            
            flexDirection: 'row',
            alignItems: 'center',
          }]}>
          <Drawernavigation modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation.navigate}/>
         <View style={{flexDirection:'row', paddingHorizontal: 20,alignItems:'center',height:40,
          flex: 1, backgroundColor:'#C2C2C233',borderRadius:50,marginRight: 20,
          borderWidth:1,borderColor:'#C2C2C233'}}>
         <Ionicons name={"search"} size={22} color={THEME_COLORS.white} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={THEME_COLORS.white}
            style={{color:'#fff',marginRight:20
            
            }}
          />
          </View>
        </View>
        <View style={[baseStyles.flex1, {flexDirection: 'row',marginHorizontal:15}]}>
          <View style={{flex:0.8}}>
            <View>
                <Text
                  style={{
                    fontSize: 24 / FONT_SCALE,
                    color: '#fff',
                    fontWeight:'700',
                    fontFamily:FONTS.bold,
                    lineHeight:30,
                    top: 33,
                    left: 60,
                    letterSpacing:3
                  }}>
                  {" "}Hi, Jolliet!
                </Text>
                <Image source={FISH} style={{width:'100%', height: 50,right:2}}></Image>
                <FastImage
                 style={{ width: '100%', height: 50,top:-50,opacity:0.4}}
                 source={GIF}
                 resizeMode={'contain'}
                   />
            </View>    
              <View
                style={[
                  {
                    flexDirection: 'row',
                    top:-30,
                    //  justifyContent: 'space-around',
                    marginHorizontal: 10,
                   
                  },
                ]}>
                <View style={{ marginBottom:90,}}/>
                
                  <ImageBackground
                    source={HALF_MULTICOLOR}
                    resizeMode="contain"
                    style={{
                      //flex:1,
                      //justifyContent: 'center',
                     //paddingHorizontal: 0,
                       height: 100,
                       width:100,
                    }}>
                    <View style={{alignSelf: 'center',marginTop:30}}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16/FONT_SCALE,
                          textAlign: 'center',
                          fontFamily:FONTS.regular,
                          lineHeight:19
                        }}>
                        30
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16/FONT_SCALE,
                          top:5,
                          fontWeight: '400',
                          // letterSpacing: 1,
                          fontFamily:FONTS.regular,
                          lineHeight:19,
                        }}>
                        Card Studied
                      </Text>
                    </View>
                  </ImageBackground>
              
               <Image source={Line} style={{height:60,width:1,position:'absolute',left:105,top:5}}/> 
                <View>
                  <ImageBackground
                    source={HALF}
                    resizeMode="contain"
                    style={{
                      // flex: 0.5,
                      position:'absolute',
                      left:10,
                      // justifyContent: 'center',
                       marginHorizontal: 15,
                      //  height: 80,
                      height: 100,
                      width:100,
                    }}>
                    <View style={{alignSelf: 'center',marginTop:30}}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16/FONT_SCALE,
                          textAlign: 'center',
                          fontFamily:FONTS.regular,
                          lineHeight:19
                        }}>
                        70
                      </Text>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 16/FONT_SCALE,
                          top:5,
                          fontWeight: '400', 
                          // letterSpacing: 1,
                          fontFamily:FONTS.regular,
                          lineHeight:19,
                        }}>
                       {" "}Hours Spend
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
                <Image source={Line} style={{height:60,width:1,position:'absolute',left:248,top:5}}/>
              </View>
             </View>
           
            <View style={{flex:0.3,marginLeft:10}}>
              <ImageBackground
                source={COMEPLETE_CIRCLE}
                resizeMode="contain"
                style={{
                 // flex: 1,
                  justifyContent: 'center',
                  height: 106,
                  top:40,
                  width:106,
                  position:'absolute'
                }}>
                <View
                  style={{
                    //paddingTop: 40,
                    alignItems: 'center',
                    alignContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                      fontFamily:FONTS.regular,
                      textAlign: 'center',
                      //marginTop: 5,
                      fontWeight:'400',
                     // lineHeight:19.49
                    }}>
                    20<Text style={{fontSize:14}}>%</Text>
                  </Text>
                </View>
              
              </ImageBackground>
              <Text
                style={{
                  color: '#fff',
                
                  fontSize: 16/FONT_SCALE,
                        position:'absolute',
                          fontWeight: '400',
                          //letterSpacing:1,
                          top:160,
                          lineHeight:15,
                          fontFamily:FONTS.regular
                          
                }}>
                {'      '}
                Mastery
              </Text>
            </View>
           
        
     
        </View>
       
            <View style={{flexDirection:'row',borderRadius:8,top:-40}}>
              <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    letterSpacing: 0.3,
                    textAlign: 'center',
                    marginHorizontal:10,
                    fontFamily:FONTS.regular,
                    lineHeight:19



                  }}>
                  {' '}
                  Goals
                </Text>
              <Progress.Bar unfilledColor='#253457' borderRadius={50} borderWidth={0} 
              indeterminate={false} 
              progress={0.7} height={7} width={320} color={'#117A9B'} borderColor='transparent'
              style={{alignSelf:'flex-start',flex:0.94,top:10}}/>
             
            
               </View> 
               <View style={{flexDirection:'row',top:-40}}>
              <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    letterSpacing: 0.3,
                    textAlign: 'center',
                    marginHorizontal:10,
                    paddingVertical:0
                  }}>
                  {' '}
                  Rank{' '}
                </Text>
              <Progress.Bar unfilledColor='#253457' borderRadius={50} borderWidth={0}
              progress={0.7} width={320} height={7} color={'#A80279'} borderColor='transparent'
              style={{alignSelf:'flex-start',flex:0.94,top:10}}/>
               </View> 
      </View>
      {!isActive ?
      <View style={styles?.heading}>
        <Text
          style={{
            color: THEME_COLORS.white,
            fontWeight: 'bold',
          }}>
          CARDOCEAN
        </Text>
        <Image source={CARDOCEAN} style={{height:25,width:25}}/>
      </View>:
      <View style={[baseStyles.mH2_5x,{flexDirection:'row',justifyContent:'space-between'}]}>
        
         <TouchableOpacity style={[styles?.cardsStyle]} activeOpacity={0.8} hasTVPreferredFocus={true}>
         <Image source={VIDEO_ICON} style={{height:25,width:25}}/>
       </TouchableOpacity>
       <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
        <Image source={PRIMERY_CARD} style={{height:25,width:25}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
        <Image source={COMPONENT_ICON} style={{height:25,width:25}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles?.cardsStyle} activeOpacity={0.8}>
        <Image source={GROUP_ICON} style={{height:25,width:25}}/>
      </TouchableOpacity>
       </View>

}
      <View style={{backgroundColor:'#117A9B1A',
      flexDirection:'row',
      borderRadius:12,paddingVertical:10,
      justifyContent:'space-around',marginHorizontal:20}}>
         <View style={{marginHorizontal:20,justifyContent:'center',}}  >
        <TouchableOpacity  onPress={()=>isSetAcitve(true)} style={baseStyles.flexRow}
        >
        <Text style={{color:isActive?THEME_COLORS.primary:THEME_COLORS.lightBlue,fontFamily:FONTS.bold,lineHeight:20,fontSize:16}}>Subjects{" "}</Text>
         <Image source={isActive?ACTIVE_SUBJECT:SUBJECT}  style={{height:20,width:20}}/> 
        </TouchableOpacity>
        {isActive == true &&
      
      <View style={{borderBottomColor:isActive == true?THEME_COLORS.primary:null,borderBottomWidth:isActive == true?4 :0,top:10}}/>
      }
      </View>
      <View style={{marginHorizontal:20,justifyContent:'center'}} >
        <TouchableOpacity onPress={()=>isSetAcitve(false)} style={{flexDirection:'row'}}>
          <Text  style={{color:isActive?THEME_COLORS.lightBlue: THEME_COLORS.primary,fontFamily:FONTS.bold,lineHeight:20,fontSize:16}}>Vault{" "}
            </Text>
             <Image source={isActive?VALET:ACTIVE_VALET}  style={{height:20,width:20}}/>
        </TouchableOpacity>
        {isActive == false &&
      
      <View style={{borderBottomColor:isActive == false?THEME_COLORS.primary:null,borderBottomWidth:isActive == false?4 :0,top:10}}/>
      } 
</View>
      </View>
   
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          alignSelf: 'center',
        }}
        data={isActive?DummyArrayForCards:DummyArrayForCardsFav}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* </ScrollView> */}
    </View>
  );
};
const renderItem = ({item}) => (
  <ClassCard
    subjectName={item.name}
    percent={item.percent}
    noOfCards={item.cardQty}
    classofMastery={item.classMarsty}
    vault={item.vault}
    total={item.total}
  />
);
export default HomeScreen;

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
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: THEME_COLORS.primary,
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  heading: {
    width: '45%',
    height: 40,
    backgroundColor: '#117A9B',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: 10,
  },
  cardsStyle: {
    //width: '%',
    paddingHorizontal:24,
    height: 40,
    elevation:10,
    shadowColor: "#00000050",
    shadowOffset: {
      width: 2, height: 1
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    backgroundColor: '#203870',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 10,
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
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

