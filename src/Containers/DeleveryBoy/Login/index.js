import React, { Component, useState, useRef, useEffect } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import CountryPicker from 'rn-country-picker';
import * as firebase from "firebase"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import {  Input,} from 'native-base';
// import { Content } from "native-base";
import { Metrics, Images } from "../../../Themes";
import styles from "./style";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import metrics from "../../../Themes/Metrics";
let pic = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdmM4Ea8FpoYGPLMSRb_YJrdKG19sKDivqQ&usqp=CAU',
};
export default function LoginDB({navigation, route}) {
  
  const [CountryCode, setCountryCode] = React.useState("91")
  const recaptchaVerifier = React.useRef(null);
  const [phone,setPhone] = useState("")
  const validPhoneNumber = (inputtxt) => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9,16})$/
    return regexp.test(inputtxt)
} 

// useEffect(() => {

//   AsyncStorage.getItem('userLoginInfo').then((user) => {
//     if (user !== null) {
//       navigation.navigate("TabView")
//     }
  
//   })
// },[])
  
 const _selectedValue = (index) => {
  setCountryCode(index)
};
const onSendcodebtnPressed = () =>
  {
        if (!validPhoneNumber("+"+CountryCode +phone)) {
            console.log("if is running")
            if(phone == ""){
        alert('Enter Phone Number First.')
            }else{
              alert('Enter Valid Phone Number') 
            }
    } else {
        (async () => {
            const phoneProvider =  await firebase.auth().signInWithPhoneNumber("+"+CountryCode + phone, recaptchaVerifier.current)
            .then((res)=>{
              // console.log(res)
              navigation.navigate("VerifyOTPDB", {veri:res.verificationId, phone:"+"+CountryCode + phone})
            })
            .catch((e)=>{
              alert(e)
              alert(e.message)
            })
            // navigation.navigate("VerifyOTP", {veri:phoneProvider, phone:phone})
        
        })();
                       
                   
    }
}

    return (
      <ImageBackground source={pic} style={styles.screenBg} imageStyle={{resizeMode:"stretch", opacity:0.7, }}>
      
      <View style={styles.container}>
      <View style={styles.overlay}>

        <Text style={styles.headertext}>
          Connect and discovery our Food Delivery App
        </Text>
      
        <View style={styles.form}>
          {/* <View rounded style={styles.item}>
          
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter Mobile"
              style={styles.inputemail}
              onChangeText = {(text)=>setPhone(text)}
              value = {phone}
            />
          </View> */}
          <View 
              style={{
                // ...styles.inputContainer, 
                flexDirection:"row",
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: "#fff", backgroundColor: "#F5F5F5",
                    height: 50,
                    width:metrics.WIDTH * 0.8,
                  // alignSelf:"center"
                }}>
                  
              <CountryPicker
                disable={false}
                animationType={'slide'}
                containerStyle={styles.pickerStyle}
                pickerTitle={'Country Picker'}
                searchBarPlaceHolder={'Search......'}
                hideCountryFlag={true}
                countryCode={CountryCode}
                selectedValue={_selectedValue}
              />
             
              <TextInput
                keyboardType="phone-pad"
                // style={{...styles.inputemail,  borderWidth:0, width:metrics.WIDTH }}
                
                placeholderTextColor="#929597"
                placeholder="Enter Mobile"
                style={{...styles.inputemail, width:metrics.WIDTH * 0.8  - 40}}
                onChangeText = {(text)=>setPhone(text)}
                value = {phone}
              />
            </View>

          <TouchableOpacity
            info
            style={styles.btnget}
            onPress={() => 
            onSendcodebtnPressed()
            }>
            <Text autoCapitalize="words" style={styles.buttongettext}>
              Send OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
        androidHardwareAccelerationDisabled
        // appVerificationDisabledForTesting = {true}
        // firebaseConfig={/* firebase web config */}
        attemptInvisibleVerification={ true }
      />
    </View>
    </ImageBackground>
    );
  
}