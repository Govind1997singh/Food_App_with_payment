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
import { Form, Item, Input, Radio} from 'native-base';

export default function AddFirstProduct({ navigation }) {
  const [image2, setImage] = useState(null);
  const [des,setDes] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [loading, setLoading] = useState(false)
  const [uid, setUid] = useState("");
const [base64, setBase64]= useState("http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cocktail.jpg")

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

  // const getUserData = async () => {
  //   await AsyncStorage.getItem('userLoginInfo').then((user) => {
  //     var userData = JSON.parse(user);
  // if(userData.profile){
  //     setBase64(userData.profile)
  // }

  // setUid(userData.id)
  //     console.log("user data is ");
  //     console.log(userData);
  //   })
  // }
  
  const onSavePressed = async () => {
  
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
  const id = makeid(16)
  if(base64 === ''){
    alert("Please select food image")
  }
    else if (name === '') {
      alert("Kindly fill the name")
    } 
    // else if (des === '') {
    //   alert("Kindly fill the  Description")
    // }
     else if (price === "") {
        alert("Kindly fill the price.")
    }  else {
      setLoading(true)
      const LoginData = navigation.getParam('data', 'default');
      const usersCollection = firebase.firestore().collection('restaurent');
      usersCollection.doc(LoginData.uid).set({...LoginData})
      .then(()=>{
        
    const data = {
        FoodName:name,
        id:id,
        FoodDes:des,
        FoodPrice:price,
        FoodImg:base64
      

      }
      // console.log(id)
      // console.log(uid)
        
        usersCollection.doc(LoginData.uid).collection("Food").doc(id).set({...data}
         )
            .then(snapshot => {
              console.log("success")
              AsyncStorage.setItem('userLoginInfo', JSON.stringify({...LoginData, type:"Restaurant"}))
              .then(() => {
                setLoading(false)
                // setLoading(false)
                  navigation.navigate("TabViewRes")
             
              })
            })
            .catch((error) => {
              setLoading(false)
                console.log('Error retrieving data ' + error)
            })
          }) 
      console.log('new profile values');
    //   console.log(values);

    
    //   setLoading(false);
    }
  }

  const _onAddressChange = (address) => {
    setAddress(address)
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64:true
    });

    if (!result.cancelled) {
        // console.log(result.base64)
        
        setBase64("data:image/png;base64,"+result.base64)
      setImage("data:image/png;base64,"+result.base64);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            // behavior={"padding"}
            style={[
            //   styles.keyboard,
              {justifyContent: "flex-end" },
            ]}
            keyboardVerticalOffset={70}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ padding: 20, paddingBottom:90, marginTop:40 }}
            >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20}}>Add Food For your Restaurant</Text>
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
                    imageStyle={{borderRadius:75}}
                    source={{ uri: base64 && base64 !== "" ? base64 : null }}
                  >
                  <Image
                    style={styles.cameraIcon}
                    source={require("../../../assets/images/camera.png")}
                  />
                  </ImageBackground>
                  
                </TouchableOpacity>
              )}
                <View style={styles.form}>
          <View rounded style={styles.item}>
          <Text style={{marginTop:10,}}>FoodName :</Text>
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter Your Name"
              style={styles.inputemail}
              onChangeText = {(text)=>setName(text)}
              value = {name}
            />
          </View>

          <View rounded style={styles.item}>
          <Text style={{marginTop:10,}}>Description :</Text>
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter Description"
              style={styles.inputemail}
              onChangeText = {(text)=>setDes(text)}
              value = {des}
            />
          </View>
          <View rounded style={styles.item}>
          <Text style={{marginTop:10,}}>Price :</Text>
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter Price"
              style={styles.inputemail}
              onChangeText = {(text)=>setPrice(text)}
              value = {price}
              keyboardType = {"number-pad"}

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

          {/* <TouchableOpacity
            info
            style={styles.btnget}
            onPress={() => 
            onSavePressed()
            }>
            <Text autoCapitalize="words" style={styles.buttongettext}>
              Delete
            </Text>
          </TouchableOpacity> */}
        </View>
      
            </ScrollView>
          </KeyboardAvoidingView>
        
    </SafeAreaView>
  );
}
