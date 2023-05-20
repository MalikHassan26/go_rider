import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,Image
} from 'react-native';
import * as Progress from 'react-native-progress';
import {CARDOCEAN, COLOR_PROGRESS_BAR, DIMENSIONS, EIGHTEEN_PERCENT, FONTS, FONT_SCALE, HALF_MULTICOLOR, THEME_COLORS, THEME_TEXT_COLORS, THIRTEEN_PERCENT, VALET_TITLE} from '../Shell/Theme/css/base';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ClassCard = ({subjectName = 'Physics', percent = 10, noOfCards = 5,classofMastery,vault,total}) => {
  return (
    <View style={[styles?.cardView]}>
      <View style={[styles.heading,{backgroundColor:vault?THEME_COLORS.primary:THEME_COLORS.lightBlue,flexDirection:'row'}]}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            
            fontFamily:FONTS.bold,
            letterSpacing:1.5,
          }}>
          {subjectName}{"  "}
        </Text>
        {vault &&
        <Image source={VALET_TITLE} resizeMode='contain'
        style={{width:20,height:20}}></Image>
        }
      </View>
      <View style={styles?.centerView}>
        <ImageBackground
          source={vault && !classofMastery ?
            total ?
            THIRTEEN_PERCENT:  EIGHTEEN_PERCENT 
            :
            HALF_MULTICOLOR
            }
          resizeMode="contain"
          style={[styles?.imageView,{height:vault && !classofMastery?60:80,
          marginBottom:!classofMastery && vault?0:-15,
          }]}>
          {vault && !classofMastery ?
          <View style={{alignContent:'center',alignItems:'center'}}>
          <Text
            style={{
              height: 20,
              fontFamily:FONTS.regular,
              color:THEME_COLORS.lightBlue,fontSize:12/FONT_SCALE,fontWeight:'bold',
            }}>
              
            {percent}{classofMastery ? '%' :null}
          </Text> 
          <Text
            style={{
              height: 30,color:THEME_COLORS.lightBlue,fontSize:14,
            }}>    
            Cards
          </Text> 
          </View>:
           <Text
           style={{
             height: vault?30:50,color:THEME_COLORS.lightBlue,fontSize:18,fontWeight:'bold',top:vault?10:null,lineHeight:20
           }}>    
           {percent}%
         </Text> }
         {classofMastery &&
          <Text
            style={{
              height: 30,color:THEME_COLORS.lightBlue,fontSize:12,lineHeight:17,fontFamily:FONTS.regular
          }}>
           Class Mastery
          </Text> 
        }
        </ImageBackground>
        <View style={[styles?.bottomView,{marginTop:vault?-10:-25}]}>
          {classofMastery || !vault ?
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text
          style={{
            color: THEME_COLORS.lightBlue,fontSize:12,fontFamily:FONTS.regular
          }}>
         Cards
        </Text> 
         <Text
          style={{
            color: THEME_COLORS.lightBlue,fontSize:12,fontFamily:FONTS.regular
          }}>
         {noOfCards}/223
        </Text> 
        </View>
        :null}
       {classofMastery || !vault ?
      <Image source={COLOR_PROGRESS_BAR} resizeMode='cover'
        style={{width:'100%'}}></Image>:null}
          {((vault  && !classofMastery && !total  ) || ! vault )&&
      <View style={{flexDirection:'row',justifyContent:'space-between',top:vault?10:0}}>
      <Text
          style={{
            color: THEME_COLORS.lightBlue,fontSize:12,fontFamily:FONTS.regular
          }}>
         Ranks
        </Text> 
         <Text
          style={{
            color: THEME_COLORS.lightBlue,fontSize:12,fontFamily:FONTS.regular
          }}>
          56th
        </Text> 
        </View>
        }
        {((vault  && !classofMastery && !total  ) || ! vault )&&
         <Progress.Bar unfilledColor={'#e6e6e6'} borderRadius={50} 
         borderWidth={0} progress={0.7}  color={'#A80279'} borderColor='transparent'
          height={7} 
        
        style={{alignSelf:'center',top:vault?10:0,width:'100%'}}/>
        
      
        }
        {(vault  && !classofMastery && total) &&
          <View style={{flexDirection:'row',justifyContent:'space-around',
          alignItems:'center',
          marginTop:15,alignContent:'center'}}>
          <Text
              style={{
                color: THEME_COLORS.lightBlue,fontSize:14/FONT_SCALE,fontFamily:FONTS.regular,lineHeight:18
              }}>
                 <Ionicons name={'square'} color={'#C60237'}/>
               
            {" "}15
            </Text> 
             <Text
              style={{
                color: THEME_COLORS.lightBlue,fontSize:12,fontFamily:FONTS.regular
              }}>
                <Ionicons name={'square'} color={'#A80279'}/>
                {" "}20
            </Text> 
            </View>}
      </View>
      </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
  cardView: {
    width:DIMENSIONS.fullWidth / 2.35,
    height:DIMENSIONS.fullHeight / 5.20,
    //width: Dimensions.get('screen').width / 2.36,
   // height: Dimensions.get('screen').height / 5.30,
    // height: 186,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  heading: {
    backgroundColor: '#117A9B',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
   
    height: 37,
  },
  bottomView: {
   // width: '100%',
   // height: '20%',
   //flex:1,
   // alignItems: 'center',
   marginHorizontal:10,
   marginTop:-20
  },
  centerView: {
   width: '100%',
   height: '60%',
  paddingVertical: 10,

  },
  imageView: {
    // height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ClassCard;
