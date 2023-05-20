
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
// // Example of Splash, Login and Sign Up in React Native
// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  FlatList,

} from 'react-native';
import {FONTS, FONT_SCALE, THEME_COLORS, baseStyles} from '../../Shell/Theme/css/base';
import { useDispatch } from 'react-redux';
import {register} from '../../Utils/Store/Actions/auth'
import {AUTH, LOADER, USER} from '../../Utils/Store/Actions/type';
import RadioForm from 'react-native-simple-radio-button';
import Toast from 'react-native-easy-toast';
import AppHeader from '../../Components/Atoms/app-header/AppHeader';

import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../Shell/Theme/css/base';


const RegisterScreen = props => {
  var studentstatus = [
    {label: 'Fresher', value: 'Fresher' },
    {label: 'Repeater', value: 'Repeater' },

  ];

  const data = [
    { label: 'Male',value:'Male' },
    { label: 'Female',value:'Female'},
    { label: 'Others' ,value:'Others'},
  ];

  const [userfirstName, setUserFirstName] = useState('');
  const [userlastName, setUserLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userDOB, setDOB] = useState('');
  const [userDOBMonth, setDOBMonth] = useState('');
  const [userDOBYear, setDOBYear] = useState('');
  const [userSS, setSS] = useState('');
  const [userBID, setBID] = useState('');
  const [usergender, setUsergender] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const  [isChecked,setIschecked]= useState(0);
  const [valueofAcademicstatus,setvalueofAcademicstatus]=useState('')
  

  const userfirstNameRef = createRef();
  const userlastNameRef = createRef();
  const userDOBRef = createRef();
  const userSSRef = createRef();
  const userBidRef = createRef();
  const userNameInputRef = createRef();
  const genderInputRef = createRef();
  const passwordInputRef = createRef();
  const disptach=useDispatch();

   const handleSubmitButton = async() => {
    setErrortext('');
    if (!userfirstName) {
      alert('Please Enter user first name');
      return;
    }
    if (!userlastName) {
      alert('Please Enter user last name');
      return;
    }
    if (!userDOB) {
      alert('Please Enter  date of birth day');
      return;
    }
    if (!userDOBMonth) {
      alert('Please Enter date of birth month');
      return;
    }
    if (!userDOBYear) {
      alert('Please Enter date of birth year');
      return;
    }
    if (!userName) {
      alert('Please Enter Email address/phone number');
      return;
    }

    if (!usergender) {
      alert('Please Select gender');
      return;
    }

    if (!userPassword) {
      alert('Please Enter Password');
      return;
    }
    // Show Loader
    // setLoading(true);
    let dateOfBirth = userDOB + "/" +userDOBMonth + "/" +userDOBYear;
    console.log("dateOfBirth",dateOfBirth)
    const dataToSend = {
      firstName: userfirstName,
      lastName: userlastName,
      userName: userName,
      password: userPassword,
      gender: usergender,
      dateOfBirth: dateOfBirth,
      studentStatus: userSS,
      boardId: userBID,
    };
    disptach (register(dataToSend))
   
  await AUTH.REGISTER_SUCCESS && props.navigation.navigate('RiderSignIn')
 
  };



  return (
    <View style={[baseStyles.flex1,{backgroundColor:'#fff',marginBottom:100}]}>
       
       <AppHeader
          text={'Create Account'}
          onBackPress={() => props.navigation.goBack()}
          backgroundLight
          showBack
          addPerson={null}
          addUser
        />
      
   <ScrollView
   nestedScrollEnabled={true}
      scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
         // justifyContent: 'center',
         alignContent: 'center',
        //  minHeight:'auto',
        //  marginBottom:300,
        
         //flex:1,        
          // maxHeight:'auto',
        
        }}> 
        

        <KeyboardAvoidingView enabled>

        <View style={{flexDirection:'row',marginTop:30,flex:1,
            backgroundColor: THEME_COLORS.white,}}>  
          <View style={{flex:.5,marginHorizontal:15,
            //marginBottom:5
           }}>
            <Text style={styles.textSytle}>First Name</Text>
            </View>
        <View style={{flex:.5,marginHorizontal:15}}>
           <Text style={styles.textSytle}>Last Name</Text>
           </View>
          </View>
          <View style={{flexDirection:'row'}}>  
            <View style={styles.SectionStyle}>
            <TextInput
             autoFocus={true}
              style={styles.inputStyle}
              onChangeText={userfirstName => setUserFirstName(userfirstName)}
              underlineColorAndroid="#f000"
              placeholder="Enter first name"
              placeholderTextColor="#8b9cb5"
              ref={userfirstNameRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                userlastNameRef.current && userlastNameRef.current.focus()
              }
              blurOnSubmit={false}

            />
            </View>
            <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={userlastName => setUserLastName(userlastName)}
              underlineColorAndroid="#f000"
              placeholder="Enter last name"
              placeholderTextColor="#8b9cb5"
              ref={userlastNameRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                userNameInputRef.current && userNameInputRef.current.focus()
              }
        
              blurOnSubmit={false}
            />
              {/* {!userlastName && <Text style={{color:'red',fontSize:12}}>Last Name is required *</Text>} */}
          </View>
          </View>
        


          <View style={{flexDirection:'row',marginTop:20}}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={styles.textSytle}>Email</Text>
            </View>
          </View>



          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              ref={userNameInputRef}
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              keyboardType='email-address'
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>

          <View style={{flexDirection:'row',marginTop:20}}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={styles.textSytle}>Password</Text>
            </View>
          </View>


          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Enter password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                genderInputRef.current && genderInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>


        

          <View style={[baseStyles.mT2_5x,{flexDirection:'row',}]}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={styles.textSytle}>Date of Birth</Text>
            </View>
          </View>

          {/* <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={userDOB => setDOB(userDOB)}
              underlineColorAndroid="#f000"
              placeholder="Enter date of birth"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              keyboardType='numeric'
              ref={userDOBRef}
              returnKeyType="next"
              // onSubmitEditing={Keyboard.dismiss}
              onSubmitEditing={() =>
                userSSRef.current && userSSRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View> */}
        <View style={{flexDirection:'row',flex:1}}>
         <View style={styles.SectionStyle}>
         <SelectDropdown  
         buttonStyle={[{ width: '100%',
         height: 56,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:12}}
         buttonTextStyle={{textAlign:'left',
         fontSize:16,color:'#C2C2C2',lineHeight:24,letterSpacing:0.5}}
         data={['1','2','3','4','5','6','7','8','9','10']}
         defaultButtonText={'Day'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C2C2C2'} size={18} />;
         }}
         rowStyle={{padding:12}}
         dropdownStyle=
        {{backgroundColor:'#fff'}}
         onSelect={(selectedItem1, index,userDOB) => {
             setDOB(selectedItem1);
       
            //  console.log(selectedItem, index)
         }}
         
         buttonTextAfterSelection={(selectedItem1, index) => {
           return selectedItem1
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />
       </View>
       <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 56,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:12}}
         buttonTextStyle={{textAlign:'left',
         fontSize:16,color:'#C2C2C2',lineHeight:24,letterSpacing:0.5}}
         data={['January','Feb','March','April','March','May','June','July','August','September','October','November','December']}
         defaultButtonText={'Month'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C2C2C2'} size={18} />;
         }}
         rowStyle={{padding:12}}
         dropdownStyle=
        {{backgroundColor:'#fff'}}
         onSelect={(selectedItem, index) => {
            setDOBMonth(selectedItem)
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />
       </View>
       <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 56,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:16/ FONT_SCALE ,fontFamily:FONTS.regular,letterSpacing:0.5}}
         buttonTextStyle={{textAlign:'left',
         fontSize:16,color:'#C2C2C2',lineHeight:24,letterSpacing:0.5}}
         data={['1994','1995','1996','1997','1997','1998','1999','2000','2001','2002']}
         defaultButtonText={'Year'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C2C2C2'} size={18} />;
         }}
         rowStyle={{padding:12,}}
         dropdownOverlayColor='transparent'
         dropdownStyle=
        {{backgroundColor:'#fff'}}
         onSelect={(selectedItem, index) => {
           setDOBYear(selectedItem)
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />
       </View>
         </View> 
         
         <View style={[baseStyles.mT3_5x,baseStyles.mB2_5x,{justifyContent:'space-between',marginHorizontal:20}]}>
            <RadioForm
            formHorizontal={true}
            radio_props={data}
            // initial={0}
            labelStyle={{fontSize:16/FONT_SCALE, fontFamily:FONTS.regular,letterSpacing:0.5,marginRight:60,
            color:THEME_COLORS.black,left:-5,}}
            labelHorizontal={true}
            buttonColor={'#203870'}
            buttonInnerColor={'#203870'}
            animation={true}
            onPress={(Usergender) => setUsergender(Usergender)}
            buttonSize={13 / FONT_SCALE}
      
            buttonOuterSize={25/ FONT_SCALE}
            buttonStyle={{backgroundColor:'grey'}}
            buttonWrapStyle={{marginLeft: 10}}
          />
          </View>

         {/* <View style={[baseStyles.flex1x,baseStyles.flexRow]}>  
          <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
            <Text style={styles.textSytle}>Academic Status</Text>
            </View>
          </View>

          <View style={styles.SectionStyle}>
          <SelectDropdown
          buttonStyle={[{ width: '100%',
          height: 56,
          backgroundColor: '#FFF',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#dadae8',}]}
          
          rowTextStyle={{textAlign:'left',fontSize:16/ FONT_SCALE ,fontFamily:FONTS.regular,letterSpacing:0.5}}

          buttonTextStyle={{textAlign:'left',
          fontSize:16,color:'#C2C2C2',lineHeight:24,letterSpacing:0.5,zIndex:99}}
          data={Academic_status.map((data)=>{
            return(
            data.title)
          })}
          defaultButtonText={'Select'}
          renderDropdownIcon={isOpened => {
            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C2C2C2'} size={18} />;
          }}
          rowStyle={{padding:12}}
          dropdownOverlayColor='transparent'
          dropdownStyle=
         {{backgroundColor:'#fff',flex:1,borderRadius:12,position:'absolute',marginTop:-30}}
          onSelect={(selectedItem, index,) => {
            setvalueofAcademicstatus(selectedItem)
             console.log("onSelect",selectedItem, index)
            
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />

          </View> 



          

          {/* ////////////////MDCAT Select///////////// */}


          {valueofAcademicstatus == 'MDCAT' &&
             <View>
            <View style={[baseStyles.mT2_5x,baseStyles.flex1x,baseStyles.flexRow]}>  
             <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
               <Text style={styles.textSytle}>Board of Education</Text>
               </View>
             </View>
   
             <View style={styles.SectionStyle}>
             <SelectDropdown
             buttonStyle={[{ width: '100%',
             height: 56,
             overflow:'hidden',
             backgroundColor: '#FFF',
             borderWidth: 1,
             borderRadius: 10,
             borderColor: '#dadae8',}]}
             rowTextStyle={{textAlign:'left',fontSize:16/ FONT_SCALE ,fontFamily:FONTS.regular,letterSpacing:0.5}}
             buttonTextStyle={{textAlign:'left',
             fontSize:16,color:'#C2C2C2',lineHeight:24,letterSpacing:0.5,zIndex:99}}
             data={['Lahore','Islamabad','Kasur']}
             defaultButtonText={'Select'}
             renderDropdownIcon={isOpened => {
               return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C2C2C2'} size={18} />;
             }}
             rowStyle={{width:'100%'}}

             dropdownOverlayColor='transparent'
             dropdownStyle=
            {{backgroundColor:'#fff',borderRadius:12,flex:1,marginTop:-25,position:'absolute'}}
             onSelect={(selectedItem, index) => {
               setBID(selectedItem)
               //console.log(selectedItem, index)
             }}
             buttonTextAfterSelection={(selectedItem, index) => {
               return selectedItem
             }}
             rowTextForSelection={(item, index) => {
               return item
             }}
           />
          </View> 
          <View style={[baseStyles.mT2_5x,{justifyContent:'space-between',marginHorizontal:20}]}>
           <RadioForm
            formHorizontal={true}
            radio_props={studentstatus}
            labelStyle={{fontSize:16/FONT_SCALE, fontFamily:FONTS.regular,letterSpacing:0.5,marginRight:35,
            color:THEME_COLORS.black,left:-5,}}
            labelHorizontal={true}
            buttonColor={THEME_COLORS.primary}
            buttonInnerColor={'#117A9B'}
            animation={true}
            buttonSize={13 / FONT_SCALE}
            buttonOuterSize={25/ FONT_SCALE}
           // buttonStyle={styles.SectionStyle}
            
            onPress={(userSS) => setSS(userSS)}
          /> 
          </View>
             </View>
         }

          {valueofAcademicstatus == 'MBBS' &&
        <View>
        <View style={[baseStyles.mT2_5x,baseStyles.flex1x,baseStyles.flexRow]}>  
         <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
           <Text style={styles.textSytle}>College / University</Text>
           </View>
         </View>
         <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 56,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:16/ FONT_SCALE ,fontFamily:FONTS.regular,letterSpacing:0.5}}
         buttonTextStyle={{textAlign:'left',
         fontSize:16,color:'#C2C2C2',lineHeight:24,letterSpacing:0.5,zIndex:99}}
         data={['Punjab University','Lahore College for women univerity','NUMS univeristy','NUML university','Iqra univeristy']}
         defaultButtonText={'Select'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C2C2C2'} size={18} />;
         }}
         rowStyle={{padding:12,width:'95%'}}
         dropdownOverlayColor='transparent'
         dropdownStyle=
        {{backgroundColor:'#fff',flex:1,borderRadius:12,position:'absolute'}}
         onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />

         </View>

         <View style={[baseStyles.mT2_5x,baseStyles.flex1x,baseStyles.flexRow]}>  
         <View style={{flex:.5,marginHorizontal:15,marginBottom:5}}>
           <Text style={styles.textSytle}>Year of Study</Text>
           </View>
         </View>

         <View style={styles.SectionStyle}>
         <SelectDropdown
         buttonStyle={[{ width: '100%',
         height: 56,
         backgroundColor: '#FFF',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#dadae8',}]}
         rowTextStyle={{textAlign:'left',fontSize:16/ FONT_SCALE ,fontFamily:FONTS.regular,letterSpacing:0.5}}
         buttonTextStyle={{textAlign:'left',
         fontSize:16,color:'#C2C2C2',lineHeight:24,letterSpacing:0.5,zIndex:99}}
         data={['1999','2000','2001','2002','2003','2004','2005','2006','2007']}
         defaultButtonText={'Select'}
         renderDropdownIcon={isOpened => {
           return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C2C2C2'} size={18} />;
         }}
         rowStyle={{padding:12}}
         dropdownOverlayColor='transparent'
         dropdownStyle=
        {{backgroundColor:'#fff',flex:1,borderRadius:12,position:'absolute',}}
         onSelect={(selectedItem, index) => {
           console.log(selectedItem, index)
         }}
         buttonTextAfterSelection={(selectedItem, index) => {
           return selectedItem
         }}
         rowTextForSelection={(item, index) => {
           return item
         }}
       />

         </View> 
         </View>}
            


          {/* //////////////////////End MDCAT Select///////// */}
           

          
          {/* <View style={styles.SectionStyle}>
         <TextInput
              style={styles.inputStyle}
              onChangeText={userBID => setBID(userBID)}
              underlineColorAndroid="#f000"
              placeholder="Enter userId"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              keyboardType="numeric"
              ref={userBidRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            /> 
           
          </View> */}
          {/* {errortext != '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null} */}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Sign up</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
        <View style={{flexDirection:'row',alignSelf:'center',marginBottom:30}}>
        <Text style={{textAlign:'center',color:'#000',fontFamily:FONTS.regular,
          lineHeight:16,fontSize:12/FONT_SCALE,letterSpacing:0.4}}>I am already a member.</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('LoginScreen')}>
          <Text style={{color:'#6750A4',fontFamily:FONTS.regular,
          lineHeight:16,fontSize:12/FONT_SCALE,letterSpacing:0.4}}>{" "}Sign In</Text>
        </TouchableOpacity>
        </View>
      </ScrollView> 
   

   
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    height: 65,
    flex:1,
    display:'flex',
    marginHorizontal:10,
    justifyContent:'space-between',
    backgroundColor: THEME_COLORS.white,
  
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
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    display:'flex',
    borderWidth: 1,
    height:56,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  textSytle:{
    color:'#343434',
    fontFamily:FONTS.regular,
    letterSpacing:0.5,
    lineHeight:24,
    fontSize:16
  }
});
