import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as firebase from "firebase"
import { Input,} from 'native-base';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style";
import Loader from './../../../Components/Loader'
let pic = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdmM4Ea8FpoYGPLMSRb_YJrdKG19sKDivqQ&usqp=CAU',
};
export default function VerifyOTP({navigation}) {
const [loading, setLoading] = useState(false)
  const [phone,setPhone] = useState("")

const onSendcodebtnPressed = async() =>
  {
const veri = navigation.getParam('veri', 'NO-ID')
const phone1 = navigation.getParam('phone', 'NO-ID')
    try {
      setLoading(true)
      const credential = await firebase.auth.PhoneAuthProvider.credential(
        veri,
        phone
      );
      await firebase.auth().signInWithCredential(credential)
     .then((res)=>{
      const usersCollection = firebase.firestore().collection('restaurent');
        usersCollection.get()
            .then(async(snapshot) => {
              var length = await snapshot.docs.length
              if(length>0){
                    snapshot.docs.forEach(async(doc) => {
                        const data = await doc.data()
                        const number = await data.phoneNumber
                        if (number == phone1) {
                            // Alert.alert("Phone number already exists. Please try another number.")
                            AsyncStorage.setItem('userLoginInfo', JSON.stringify({...data, type:"Restaurant"}))
                    .then(() => {
                    setLoading(false)
                      navigation.navigate("TabViewRes")
                    })
                    .catch((e)=>{
                      // alert(e)
                      alert(e.message)
                      setLoading(false)
                    })
                          //  isPresent = 1
                        }else {
                          setLoading(false)
                          navigation.navigate("ResSignup", {mobile: phone1, uid:res.user.uid})
                            // alert('ovind singh csfdsf')
                        }
                    })
                  }
                  else{
                    setLoading(false)
                    navigation.navigate("ResSignup", {mobile: phone1, uid:res.user.uid})
                   
                  }
                         
                  })
                
                })
    }
     catch (err) {
      console.log(err)
      // showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
     
}
    return (
      <ImageBackground source={pic} style={styles.screenBg} imageStyle={{resizeMode:"cover", opacity:0.7}}>
      <Loader loading={loading}/>
      <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.headertext}>
          Connect and discovery our Food Delivery App
        </Text>
        {/* <Text style={styles.desctext}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </Text> */}

        <View style={styles.form}>
          <View rounded style={styles.item}>
          
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter OTP"
              style={styles.inputemail}
              onChangeText = {(text)=>setPhone(text)}
              value = {phone}
              keyboardType={"number-pad"}
            />
          </View>
          <TouchableOpacity
            info
            style={styles.btnget}
            onPress={() => 
            onSendcodebtnPressed()
            }>
            <Text autoCapitalize="words" style={styles.buttongettext}>
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
    );
  
}