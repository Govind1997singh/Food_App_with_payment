import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import UserType from '../Containers/Mainscreens/MainScreen'
import UserType from "../Containers/Mainscreens/MainScreen/index";
import FoodLogin from "../Containers/Food/FoodLogin/index";
import TabView from "../Containers/Food/TabView/index";
import ProductDetails from "../Containers/Food/ProductDetails/index";
import VerifyOTP from '../Containers/Food/VerifyOTP/index'
import Signup from "../Containers/Food/Signup";
import PlaceOrder from "../Containers/Food/Placeorder";
import Cart from '../Containers/Food/Cart/index'
import OrderDetails from "../Containers/Food/OrderDetail";
import EditProfile from '../Containers/Food/EditProfile'
import Stripe from '../Containers/Food/Stripe'
import Favorites from '../Containers/Food/Favorites'
import WelcomeScreenSearch from "../Containers/Food/WelcomeScreenSearch";
import Razor from "../Containers/Food/RazorPay";

//Restaurant Pages


import Login from "../Containers/Restaurant/Login";
import ResVerifyOTP from "../Containers/Restaurant/VerifyOTP/index";
import ResSignup from "../Containers/Restaurant/Signup/index"
import TabViewRes from "../Containers/Restaurant/TabView";
import AddProduct from "../Containers/Restaurant/AddProduct";
import EditProduct from '../Containers/Restaurant/EditProduct'
import OrderDetailsRes from '../Containers/Restaurant/OrderDetail'
import EditProfileRes from "../Containers/Restaurant/EditProfile";
import AddFirstProduct from "../Containers/Restaurant/AddFirstProduct";


// Delivery Boy
import LoginDB from "../Containers/DeleveryBoy/Login";
import SignupDB from "../Containers/DeleveryBoy/Signup";
import VerifyOTPDB from "../Containers/DeleveryBoy/VerifyOTP";
import TabViewDB from "../Containers/DeleveryBoy/TabView";
import CurrentOrderDB from "../Containers/DeleveryBoy/CurrentOrder";



const MainStackFood = createStackNavigator(
  {

    FoodLogin: { screen: FoodLogin },
    VerifyOTP: { screen: VerifyOTP },
    Signup: {screen:Signup},
    TabView: { screen: TabView },
    ProductDetails: { screen: ProductDetails },
    PlaceOrder: {screen: PlaceOrder},
    Cart:{screen:Cart},
    OrderDetails:{screen:OrderDetails},
    EditProfile:{screen:EditProfile},
    Stripe:{screen:Stripe},
    Favorites:{screen:Favorites},
    WelcomeScreenSearch:{screen:WelcomeScreenSearch},
    Razor:{screen:Razor}

  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const MainStackRestaurant = createStackNavigator(
  {
    ResLogin:{screen: Login},
    ResVerifyOTP: { screen: ResVerifyOTP },
    ResSignup: {screen:ResSignup},
    TabViewRes: {screen:TabViewRes},
    AddProduct:{screen:AddProduct},
    AddFirstProduct:{screen:AddFirstProduct},
    EditProduct:{screen:EditProduct},
    OrderDetailsRes:{screen:OrderDetailsRes},
    EditProfileRes:{screen:EditProfileRes},
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const MainStackDB = createStackNavigator(
  {
    LoginDB:{screen: LoginDB},
    VerifyOTPDB: { screen: VerifyOTPDB },
    SignupDB: {screen:SignupDB},
    TabViewDB: {screen:TabViewDB},
    CurrentOrderDB:{screen:CurrentOrderDB}
    // AddProduct:{screen:AddProduct},
    // AddFirstProduct:{screen:AddFirstProduct},
    // EditProduct:{screen:EditProduct},
    // OrderDetailsRes:{screen:OrderDetailsRes},
    // EditProfileRes:{screen:EditProfileRes},
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const MainStack = createStackNavigator(
  {
    FirstScreen: { screen: UserType },
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const PrimaryNav = createStackNavigator(
  {
    mainStack: { screen: MainStack },
    MainStackFood: { screen: MainStackFood },
    MainStackDB: { screen: MainStackDB },
    MainStackRestaurant:{screen:MainStackRestaurant},
  },
  {
    headerMode: "none",
    initialRouteName: "mainStack",
    gesturesEnabled: false,
  }
);

export default createAppContainer(PrimaryNav);
