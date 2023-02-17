import React, { Component, useState, useRef } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import * as firebase from "firebase"
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Form, Item, Input, Radio} from 'native-base';
// import { Content } from "native-base";
import styles from "./style";
import Loader from './../../../Components/Loader'
let pic = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdmM4Ea8FpoYGPLMSRb_YJrdKG19sKDivqQ&usqp=CAU',
};
export default function Signup({navigation, route}) {
  
  const [gender, setGender] = useState("Male")
  const [name, setName] = useState("")
  const [city, setCity] = useState("Indore")
  const [address, setAddress] = useState("")
  const [referral, setReferral] = useState("")
  const [landmark, setLandmark] = useState("")
  const [loading, setLoading] = useState(false)
  const [cityArray, setCityArray] = useState([])
React.useEffect(()=>{
  var array = []
  firebase.firestore().collection("City")
  // .then((res)=>{
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach(doc => {
      array.push(doc.data())

    });
    console.log(array)
    setCityArray(array)
      // var data = querySnapshot.docs[0].data()
      // console.log(data)
  })
},[])

const onSendcodebtnPressed = () =>
  {
    var randomFixedInteger = function (length) {
      return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
  }
        if (name == "") {
          alert("Please Enter Your Name")
            
    }else if(city == ""){
      alert("Please Enter City")
    }else if(address == ""){
      alert("Please Enter Address")
    }else if(landmark == ""){
      alert("Please Enter Landmark")
    }
     else {
      setLoading(true)
      const phone = navigation.state.params.mobile
      const uid = navigation.state.params.uid
      const data = {
        name:name,
        gender:gender,
        city:city,
        address:address,
        landmark:landmark,
        phoneNumber:phone,
        uid:uid,
        id:uid,
        referral:referral,
        myReferral: randomFixedInteger(6),
        balance: 10,

      }
      if(referral != ""){
        firebase.firestore().collection("allusers")
        .where("myReferral", "==", referral)
        // .then((res)=>{
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.docs.length > 0 ){
            var data = querySnapshot.docs[0].data()
            // console.log(querySnapshot.docs[0].data())
              var balance = data.balance? data.balance : 0
            firebase.firestore().collection("allusers").doc(data.uid).update({
            balance: balance  + 10,
            // balanceArray:data.balanceArray?[...data.balanceArray, {createdAt: (new Date).getDate(),balance:10}]:[{createdAt: (new Date).getTime(),balance:10}]
            })
          }
        })
      }
          
        
        const usersCollection = firebase.firestore().collection('allusers');
        usersCollection.doc(uid).set({
         ...data
        })
            .then(snapshot => {
              console.log("success")
              
              AsyncStorage.setItem('userLoginInfo', JSON.stringify(data))
              .then(() => {
                setLoading(false)
                  navigation.navigate("TabView")
              })
              .catch((e)=>{
                setLoading(false)
              })
            })
            .catch((error) => {
              setLoading(false)
                console.log('Error retrieving data ' + error)
            })
    }
}
  // render() {
    // StatusBar.setBarStyle("light-content", true);
    // if (Platform.OS === "android") {
    //   StatusBar.setBackgroundColor("#000000", true);
    //   StatusBar.setTranslucent(true);
    // }

    return (
      <ImageBackground source={pic} style={styles.screenBg} imageStyle={{resizeMode:"stretch", opacity:0.7, }}>
      <Loader loading={loading}/>
      <View style={styles.container}>
      <View style={styles.overlay}>

        <Text style={styles.headertext}>
          Connect and discovery our Food Delivery App
        </Text>
       

        <View style={styles.form}>
          <View rounded style={styles.item}>
          
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter Your Name"
              style={styles.inputemail}
              onChangeText = {(text)=>setName(text)}
              value = {name}
            />
          </View>
          {/* <Text>Gender</Text> */}
          <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={gender} onChange={nextValue => {
    setGender(nextValue);
  }}>

<Text  style={{fontSize:16, color:'black', marginTop:10 }}>Select Gender:</Text>

    <View style ={{flexDirection:"row", marginTop:3, marginBottom:5}}>
      <Radio colorScheme="orange" value="Male" my={1}>
        <Text>Male</Text>
        
      </Radio>
      <Radio colorScheme="orange" value="Female" my={1} m={1} style ={{marginLeft:5}}>
        <Text>Female</Text>
      </Radio>
      </View>
    </Radio.Group>


<Text  style={{fontSize:16, color:'black' }}>Select City:</Text>
          <View rounded style={{...styles.item, borderWidth:0.8, borderColor:"lightgray", borderRadius:5}}>
          
            {/* <Input
              placeholderTextColor="#929597"
              placeholder="Enter City"
              style={styles.inputemail}
              onChangeText = {(text)=>setCity(text)}
              value = {city}
            /> */}
            <Picker
            
              style={{...styles.inputemail,textAlign:"center"}}
              selectedValue={city}
              onValueChange={(itemValue, itemIndex) =>
                setCity(itemValue)
              }>
              {cityArray.map((item)=>
              <Picker.Item label={item.label} value={item.value} />
              )}
              {/* <Picker.Item label="Bhopal" value="Bhopal" /> */}
            </Picker>
          </View>

          <View rounded style={styles.item}>
          
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter Address"
              style={styles.inputemail}
              onChangeText = {(text)=>setAddress(text)}
              value = {address}
            />
          </View>

          <View rounded style={styles.item}>
          
            <Input
              placeholderTextColor="#929597"
              placeholder="Landmark"
              style={styles.inputemail}
              onChangeText = {(text)=>setLandmark(text)}
              value = {landmark}
            />
          </View>

          <View rounded style={styles.item}>
          
            <Input
              placeholderTextColor="#929597"
              placeholder="Referral"
              style={styles.inputemail}
              onChangeText = {(text)=>setReferral(text)}
              value = {referral}
            />
          </View>
          <TouchableOpacity
            info
            style={styles.btnget}
            onPress={() => 
            onSendcodebtnPressed()
            }>
            <Text autoCapitalize="words" style={styles.buttongettext}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
    );
  
}