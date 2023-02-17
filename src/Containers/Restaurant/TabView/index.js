import React, { Component } from "react";
import { Text, Image } from "react-native";
// import Home fo
import WelcomeScreen from "../Home/index";
import OrderHistory from "../OrderHistory/index";
// import Favorites from "../Favorites/index";
// import Cart from "../Cart/index";
import Profiles from "../Profiles/index";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation-tabs";

const TabViewRes = createBottomTabNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
       
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="concierge-bell" size={25} color={tintColor} />
        ),
      },
    },
    OrderHistory: {
      screen: OrderHistory,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="text-document" size={25} color={tintColor} />
        ),
      },
    },
    // Favorites: {
    //   screen: Favorites,
    //   navigationOptions: {
    //     name:"Profiles",
    //     tabBarIcon: ({ tintColor }) => (
    //       <AntDesign name="heart" size={25} color={tintColor} />
    //     ),
    //   },
    // },
    // Notifications: {
    //   screen: Cart,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       // <MaterialIcons name="cart" size={25} color={tintColor} />
    //       <FontAwesome name="shopping-cart" size={25} color={tintColor} />
    //     ),
    //   },
    // },
    Profiles: {
      screen: Profiles,
      name:"Profiles",
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user-circle" size={25} color={tintColor} />
        ),
      },
    },
    
  },
  {
    // initialRouteName: 'Profiles',
    defaultNavigationOptions: ({ navigation }) => ({
      
    }),
    

    tabBarOptions: {
      
      activeTintColor: "#f05522",
      inactiveTintColor: "#c2c4ca",
      showIcon: true,
      showLabel: false,
    },
  }
  
);
export default TabViewRes;
