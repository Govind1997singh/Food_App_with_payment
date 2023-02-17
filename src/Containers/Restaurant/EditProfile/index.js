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

export default function EditProfile({ navigation, routes }) {
  const [image2, setImage] = useState(null);
  const [phone,setPhone] = useState("")
  // const [gender, setGender] = useState("Male")
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [referral, setReferral] = useState("")
  const [landmark, setLandmark] = useState("")
  const [loading, setLoading] = useState(false)
  const [uid, setUid] = useState("");
const [base64, setBase64]= useState("")
// vat dummy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlONPyCd754O9lB63Ofp_JPKlsb9nUjcxr9w&usqp=CAU"
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
      getUserData()
    })();
  }, []);

  const getUserData = async () => {
    await AsyncStorage.getItem('userLoginInfo').then((user) => {
      var userData = JSON.parse(user);
      setName(userData.name)
    //   setImage(userData.userInfo.avatarURL)
      setAddress(userData.address)
      setPhone(userData.phoneNumber)
      // setGender(userData.gender)
      setUid(userData.id);
      setReferral(userData.referral)
  if(userData.profile){
      setBase64(userData.profile)
  }
      console.log("user data is ");
      console.log(userData);
    })
  }

  const onSavePressed = async () => {

    if (name === '') {
      alert("Kindly fill the name")
    
    } else if (address === "") {
        alert("Kindly fill the address.")
    } else {
    //   setLoading(true);
    //   const values = {
    //     name, email, bio, date, image2, uid, website, address, phone
    //   }

    const data = {
        name:name,
        
        address:address,
        phoneNumber:phone,
        uid:uid,
        id:uid,
        profile:base64

      }
      console.log(data)
        const usersCollection = firebase.firestore().collection('restaurant');
        usersCollection.doc(uid).set({...data}
         )
            .then(snapshot => {
              console.log("success")
              
              AsyncStorage.setItem('userLoginInfo', JSON.stringify(data))
              .then(() => {
                setLoading(false)
                  navigation.navigate("TabViewRes")
              })
              .catch((e)=>{
                setLoading(false)
              })
            })
            .catch((error) => {
              setLoading(false)
                console.log('Error retrieving data ' + error)
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
      setImage(result.uri);
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
              {base64 === "" ? (
                <TouchableOpacity onPress={pickImage} activeOpacity={0.3}>
                  <Image
                    style={{ ...styles.emptyImage, marginTop: 40 }}
                    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlONPyCd754O9lB63Ofp_JPKlsb9nUjcxr9w&usqp=CAU"}}
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
          <Text style={{marginTop:10,}}>Name :</Text>
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter Your Name"
              style={styles.inputemail}
              onChangeText = {(text)=>setName(text)}
              value = {name}
            />
          </View>
          {/* <View rounded style={styles.item}>
          <Text style={{marginTop:10,}}>City :</Text>
            <Input
              placeholderTextColor="#929597"
              placeholder="Enter City"
              style={styles.inputemail}
              onChangeText = {(text)=>setCity(text)}
              value = {city}
            />
          </View> */}

          <View rounded style={styles.item}>
          <Text style={{marginTop:10,}}>Address :</Text>
            <Input
            isDisabled
              placeholderTextColor="#929597"
              placeholder="Enter Address"
              style={styles.inputemail}
              onChangeText = {(text)=>setAddress(text)}
              value = {address}
            />
          </View>

          {/* <View rounded style={styles.item}>
          <Text style={{marginTop:10,}}>Landmark:</Text>
            <Input
              placeholderTextColor="#929597"
              placeholder="Landmark"
              style={styles.inputemail}
              onChangeText = {(text)=>setLandmark(text)}
              value = {landmark}
            />
          </View> */}
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
