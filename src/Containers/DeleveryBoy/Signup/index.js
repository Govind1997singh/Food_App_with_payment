// import React, { Component, useState, useRef } from "react";
// import {
//   Platform,
//   StatusBar,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
// } from "react-native";
// import * as firebase from "firebase"

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Form, Item, Input, Radio} from 'native-base';
// // import { Content } from "native-base";
// import styles from "./style";
// import Loader from './../../../Components/Loader'
// let pic = {
//   uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdmM4Ea8FpoYGPLMSRb_YJrdKG19sKDivqQ&usqp=CAU',
// };
// export default function Signup({navigation, route}) {

//   const recaptchaVerifier = React.useRef(null);
//   const [phone,setPhone] = useState("")
//   const [gender, setGender] = useState("Male")
//   const [name, setName] = useState("")
//   const [city, setCity] = useState("")
//   const [address, setAddress] = useState("")
//   const [referral, setReferral] = useState("")
//   const [landmark, setLandmark] = useState("")
//   const [loading, setLoading] = useState(false)

// const onSendcodebtnPressed = () =>
//   {
//     var randomFixedInteger = function (length) {
//       return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
//   }
//         if (name == "") {
//           alert("Please Enter Your Name")

//     }else if(city == ""){
//       alert("Please Enter City")
//     }else if(address == ""){
//       alert("Please Enter Address")
//     }else if(landmark == ""){
//       alert("Please Enter Landmark")
//     }
//      else {
//       setLoading(true)
//       const phone = navigation.state.params.mobile
//       const uid = navigation.state.params.uid
//       const data = {
//         name:name,
//         gender:gender,
//         city:city,
//         address:address,
//         landmark:landmark,
//         phoneNumber:phone,
//         id:uid,
//         referral:referral,
//         myReferral: randomFixedInteger(6),
//         // balance: 10,
//         type:"Restaurant"

//       }
//       // if(referral != ""){
//       //   firebase.firestore().collection("restaurent")
//       //   .where("myReferral", "==", referral)
//       //   // .then((res)=>{
//       //   .get()
//       //   .then((querySnapshot) => {
//       //       if(querySnapshot.docs.length > 0 ){
//       //       var data = querySnapshot.docs[0].data()
//       //       // console.log(querySnapshot.docs[0].data())
//       //         var balance = data.balance? data.balance : 0
//       //       firebase.firestore().collection("restaurent").doc(data.uid).update({
//       //       balance: balance  + 10,
//       //       // balanceArray:data.balanceArray?[...data.balanceArray, {createdAt: (new Date).getDate(),balance:10}]:[{createdAt: (new Date).getTime(),balance:10}]
//       //       })
//       //     }
//       //   })
//       // }


//         const usersCollection = firebase.firestore().collection('restaurent');
//         usersCollection.doc(uid).set({
//          ...data
//         })
//             .then(snapshot => {
//               console.log("success")

//               AsyncStorage.setItem('userLoginInfo', JSON.stringify({...data, type:"Restaurant"}))
//               .then(() => {
//                 setLoading(false)
//                   navigation.navigate("TabViewRes")
//               })
//               .catch((e)=>{
//                 setLoading(false)
//               })
//             })
//             .catch((error) => {
//               setLoading(false)
//                 console.log('Error retrieving data ' + error)
//             })
//     }
// }
//   // render() {
//     // StatusBar.setBarStyle("light-content", true);
//     // if (Platform.OS === "android") {
//     //   StatusBar.setBackgroundColor("#000000", true);
//     //   StatusBar.setTranslucent(true);
//     // }

//     return (
//       <ImageBackground source={pic} style={styles.screenBg} imageStyle={{resizeMode:"stretch", opacity:0.7, }}>
//       <Loader loading={loading}/>
//       <View style={styles.container}>
//       <View style={styles.overlay}>

//         <Text style={styles.headertext}>
//           Connect and discovery our Food Delivery App
//         </Text>


//         <View style={styles.form}>
//           <View rounded style={styles.item}>

//             <Input
//               placeholderTextColor="#929597"
//               placeholder="Enter Your Name"
//               style={styles.inputemail}
//               onChangeText = {(text)=>setName(text)}
//               value = {name}
//             />
//           </View>
//           {/* <Text>Gender</Text> */}
//           <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={gender} onChange={nextValue => {
//     setGender(nextValue);
//   }}>
//     <View style ={{flexDirection:"row", marginTop:10, marginBottom:5}}>
//       <Radio colorScheme="orange" value="Male" my={1}>
//         <Text>Male</Text>

//       </Radio>
//       <Radio colorScheme="orange" value="Female" my={1} m={1} style ={{marginLeft:5}}>
//         <Text>Female</Text>
//       </Radio>
//       </View>
//     </Radio.Group>
//           <View rounded style={styles.item}>

//             <Input
//               placeholderTextColor="#929597"
//               placeholder="Enter City"
//               style={styles.inputemail}
//               onChangeText = {(text)=>setCity(text)}
//               value = {city}
//             />
//           </View>

//           <View rounded style={styles.item}>

//             <Input
//               placeholderTextColor="#929597"
//               placeholder="Enter Address"
//               style={styles.inputemail}
//               onChangeText = {(text)=>setAddress(text)}
//               value = {address}
//             />
//           </View>

//           <View rounded style={styles.item}>

//             <Input
//               placeholderTextColor="#929597"
//               placeholder="Landmark"
//               style={styles.inputemail}
//               onChangeText = {(text)=>setLandmark(text)}
//               value = {landmark}
//             />
//           </View>
// <TouchableOpacity
//             info
//             style={styles.btnget}
//             onPress={() => 
//             onSendcodebtnPressed()
//             }>
//             <Text autoCapitalize="words" style={styles.buttongettext}>
//               Sign up
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//     </ImageBackground>
//     );

// }

import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  Dimensions,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Button,
  BackHandler
} from "react-native";
const WIDTH = Dimensions.get("window").width;
import * as ImagePicker from "expo-image-picker";
import styles from "./style";
import firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Metrics, Images } from "../../../Themes";
import { Form, Item, Input, Radio } from 'native-base';

export default function SignupDB({ navigation, routes }) {
  const [image2, setImage] = useState(null);
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [landmark, setLandmark] = useState("")
  const [loading, setLoading] = useState(false)
  const [base64, setBase64] = useState("")
  const [base642, setBase642] = useState("")
  const [base643, setBase643] = useState("")
  const [adhar1, setAdhar1] = useState("")
  const [adhar2, setAdhar2] = useState("")

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      // getUserData()
    })();
  }, []);
  const onSavePressed = async () => {

    if (name === '') {
      alert("Kindly fill the your name")
    } else if (city === '') {
      alert("Kindly fill the  city")
    } else if (base64 === "") {
      alert("Please select profile Image ")
    } 
    else if (base642 === "") {
      alert("Please select Adhar Front Image ")
    } 
    else if (base643 === "") {
      alert("Please select Adhar Back Image ")
    } 
    else {
      //   setLoading(true);
      //   const values = {
      //     name, email, bio, date, image2, uid, website, address, phone
      //   }
      const phone = navigation.state.params.mobile
      const uid = navigation.state.params.uid
      const data = {
        name: name,
        address: address + "," + city + "," + landmark,
        phoneNumber: phone,
        uid: uid,
        id: uid,
        profile: base64,
        adhar1:base642,
        adhar2:base643

      }

      const usersCollection = firebase.firestore().collection('DB');
      usersCollection.doc(uid).set({
        ...data
      })
        .then(snapshot => {
          console.log("success")

          AsyncStorage.setItem('userLoginInfo', JSON.stringify({ ...data, type: "DB" }))
            .then(() => {
              setLoading(false)
              navigation.navigate("TabViewDB")
            })
            .catch((e) => {
              setLoading(false)
            })
        })
        .catch((error) => {
          setLoading(false)
          console.log('Error retrieving data ' + error)
        })
      console.log(data)
      // navigation.navigate("AddFirstProduct",{data:data})
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true
    });

    if (!result.cancelled) {
      // console.log(result.base64)

      setBase64("data:image/png;base64," + result.base64)
      setImage(result.uri);
    }
  };

  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true
    });

    if (!result.cancelled) {
      // console.log(result.base64)

      setBase642("data:image/png;base64," + result.base64)
      setImage(result.uri);
      setAdhar1("AdharFront.jpg")
    }
  };


  const pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true
    });

    if (!result.cancelled) {
      console.log(result)

      setBase643("data:image/png;base64," + result.base64)
      setImage(result.uri);
      setAdhar2("Adharback.jpg")
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        // behavior={"padding"}
        style={[
          //   styles.keyboard,
          { justifyContent: "flex-end" },
        ]}
        keyboardVerticalOffset={70}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 20, paddingBottom: 90, marginTop: 40 }}
        >
          {base64 === "" ? (
            <TouchableOpacity onPress={pickImage} activeOpacity={0.3}>
              <Image
                style={{ ...styles.emptyImage, marginTop: 40 }}
                source={Images.ProfileUserImg}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickImage} activeOpacity={0.3}>
              <ImageBackground
                style={{ ...styles.fillImage, marginTop: 40 }}
                imageStyle={{ borderRadius: 75 }}
                source={{ uri: base64 && base64 !== "" ? base64 : null }}
              >
                <Image
                  style={styles.cameraIcon}
                  source={require("../../../assets/images/camera.png")}
                />
              </ImageBackground>

            </TouchableOpacity>
          )}
          <View rounded style={styles.item}>
            <Text style={{ marginTop: 10, }}>Adhar Front* :</Text>
            <TouchableOpacity onPress={pickImage2} activeOpacity={0.3} style={{flexDirection:"row", justifyContent:"space-between",marginTop:5, borderWidth:1, borderColor:"lightgray", borderRadius:5, height:40, alignItems:"center", paddingHorizontal:5,}}>
              <Text style={{flex:0.7}}>{adhar1}</Text>
              <Text style={{color:"blue"}}>Select</Text>
            </TouchableOpacity>
          </View>
          <View rounded style={styles.item}>
            <Text style={{ marginTop: 10, }}>Adhar Back* :</Text>
            <TouchableOpacity onPress={pickImage3} activeOpacity={0.3} style={{flexDirection:"row", justifyContent:"space-between",marginTop:5, borderWidth:1, borderRadius:5, height:40, borderColor:"lightgray", alignItems:"center", paddingHorizontal:5}}>
              <Text style={{flex:0.7}}>{adhar2}</Text>
              <Text style={{color:"blue"}}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <View rounded style={styles.item}>
              <Text style={{ marginTop: 10, }}>Name * :</Text>
              <Input
                placeholderTextColor="#929597"
                placeholder="Enter Your Name"
                style={styles.inputemail}
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>
            <View rounded style={styles.item}>
              <Text style={{ marginTop: 10, }}>City* :</Text>
              <Input
                placeholderTextColor="#929597"
                placeholder="Enter City"
                style={styles.inputemail}
                onChangeText={(text) => setCity(text)}
                value={city}
              />
            </View>

            <View rounded style={styles.item}>
              <Text style={{ marginTop: 10, }}>Address :</Text>
              <Input
                placeholderTextColor="#929597"
                placeholder="Enter Address"
                style={styles.inputemail}
                onChangeText={(text) => setAddress(text)}
                value={address}
              />
            </View>

            <View rounded style={styles.item}>
              <Text style={{ marginTop: 10, }}>Landmark:</Text>
              <Input
                placeholderTextColor="#929597"
                placeholder="Landmark"
                style={styles.inputemail}
                onChangeText={(text) => setLandmark(text)}
                value={landmark}
              />
            </View>
            <TouchableOpacity
              info
              style={styles.btnget}
              onPress={() =>
                onSavePressed()
              }>
              <Text autoCapitalize="words" style={styles.buttongettext}>
                Save
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}
