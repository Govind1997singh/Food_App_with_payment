import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  Platform,
  ImageBackground,
  ScrollView,
  Share,
  Animated
} from "react-native";
import firebase from "firebase";
import * as Sharing from 'expo-sharing';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";
import { Metrics, Images } from "../../../Themes";
import AntDesign from "react-native-vector-icons/AntDesign";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

export default class ProfilesRes extends Component {
  constructor(props){
    super(props)
    this.springValue = new Animated.Value(100) ;

   
    this.state={
      user:null,
      backClickCount:0,
      profile:""
    }
  }
 async componentDidMount() {
  const { navigation } = this.props;
  
  this.focusListener = navigation.addListener("didFocus", async() => {
   
    // console.log("hello")
      await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
         var userData = JSON.parse(user);
         this.setState({user:userData})
if(userData.profile){
  this.setState({profile:userData.profile})
}else{
  this.setState({profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlONPyCd754O9lB63Ofp_JPKlsb9nUjcxr9w&usqp=CAU"})
}
       })
      })
      await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
        var userData = JSON.parse(user);
        this.setState({user:userData})
      })
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    this.focusListener.remove();
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  _spring() {
    this.setState({backClickCount: 1}, () => {
        Animated.sequence([
            Animated.spring(
                this.springValue,
                {
                    toValue: -.15 * Metrics.HEIGHT,
                    friction: 5,
                    duration: 300,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                this.springValue,
                {
                    toValue: 100,
                    duration: 300,
                    useNativeDriver: true,
                }
            ),

        ]).start(() => {
            this.setState({backClickCount: 0});
        });
    });

}

  handleBackPress = () => {
    // this.props.navigation.goBack()
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <ImageBackground source={Images.profileBgImg} style={styles.ProfileBG}>
          {/* <TouchableOpacity
            style={styles.Settingicon}
            underlayColor="transparent"
            onPress={()=>this.props.navigation.navigate("EditProfileRes")}
          >
            <Fontisto
              name="player-settings"
              size={25}
              color="#fff"
              style={{ alignSelf: "flex-end", top: 5, right: 10 }}
            />
          </TouchableOpacity> */}

          <View style={styles.MainProfileDetails}>
            <View style={{ flexDirection: "row" }}>
              {this.state.user && this.state.user.profile ?
              <Image
              source={{uri:this.state.user.profile}}
                style={styles.ProfileUserImg}
              />:
              <Image
                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlONPyCd754O9lB63Ofp_JPKlsb9nUjcxr9w&usqp=CAU"}}
                style={styles.ProfileUserImg}
              />
  }
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.ProfileUserName}>{this.state.user && this.state.user.name}</Text>
                <Text style={styles.ProfileUserAdd}>
                {this.state.user && this.state.user.address} </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

     
        <View style={styles.MainProfileDetail}>
          <ScrollView>
            
            <View style={styles.BorderHorizontal} />

            {/* <TouchableOpacity  onPress={()=>this.props.navigation.navigate("Favorites")} style={styles.OrderHistroyMainBg}>
              
              <View style={{ flexDirection: "row" }}>
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#f05522" },
                  ]}
                >
                  <FontAwesome
                    name="trophy"
                    size={20}
                    color={"#fff"}
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>Favorites</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
              
            </TouchableOpacity> */}
            {/* <View style={styles.BorderHorizontal} />
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("EditProfileRes")}>
            
            <View style={styles.OrderHistroyMainBg}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#f5a623" },
                  ]}
                >
                  <Fontisto
                    name="player-settings"
                    size={20}
                    color="#fff"
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>Settings</Text>
              </View>
              
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
              
            </View>
            </TouchableOpacity> */}
            {/* <View style={styles.BorderHorizontal} /> */}

            {/* <View style={styles.OrderHistroyMainBg}>
             
                <TouchableOpacity onPress={()=>this.onShare()}>
                <View style={{ flexDirection: "row" }}>
                   <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#50e3c2" },
                  ]}
                >
                  <FontAwesome5
                    name="user-plus"
                    size={20}
                    color={"#fff"}
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>Invite Friends</Text>
                </View>
                </TouchableOpacity>
               
              

              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
            </View> */}
            <View style={styles.BorderHorizontal} />
            <View style={styles.OrderHistroyMainBg}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => {
                  firebase.auth().signOut().then(async()=>{
                   await AsyncStorage.removeItem('userLoginInfo')
                  this.props.navigation.navigate("mainStack")
                  })
                }}
              >
                <View
                  style={[
                    styles.OrderHistoryCircle,
                    { backgroundColor: "#87bf4a" },
                  ]}
                >
                  <MaterialIcons
                    name="payment"
                    size={20}
                    color={"#fff"}
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={styles.OrderHistoryText}>Log Out</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="right"
                  size={20}
                  color="#c2c4ca"
                  style={{ alignSelf: "center" }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <Animated.View style={[styles.animatedView, {transform: [{translateY: this.springValue}]}]}>
            <Text style={styles.exitTitleText}>press back again to exit the app</Text>

            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => BackHandler.exitApp()}
            >
                <Text style={styles.exitText}>Exit</Text>
            </TouchableOpacity>

        </Animated.View>
      </View>
    );
  }
}
