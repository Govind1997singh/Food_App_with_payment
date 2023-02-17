import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  Platform,
  
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Metrics } from "../../../Themes";
import Loader from "../../../Components/Loader";
import { Container } from "native-base";
import {firestore } from 'firebase'
import styles from "./styles";
const NotificationDataOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-SteakSalad.jpg";

const NotificationDataTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-StuffedTrout.jpg";

const NotificationDataThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-TBone.jpg";

const NotificationDataFour =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-burger.jpg";

const NotificationDataFive =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/bg-homepage-cafeannie.jpg";

var NotificationData = [
  {
    id: 1,
    FoodImg: NotificationDataOne ,
    FoodName: "SteakSalad",
    FoodDes:
      "If you're cooking you food properly on your barbeque,you're getting delightful results every time.",
    FoodMin: "20 mins",
  },
  {
    id: 2,
    FoodImg: NotificationDataTwo ,
    FoodName: "Stuffed Trout",
    FoodDes: "Proper cookery renders good food material more digestible",
    FoodMin: "2 hours",
  },
  {
    id: 3,
    FoodImg:  NotificationDataThree ,
    FoodName: "TBone",
    FoodDes:
      "Many people understand the concept of passive solar for heating a home",
    FoodMin: "Yesterday",
  },
  {
    id: 4,
    FoodImg:  NotificationDataFour ,
    FoodName: "burger",
    FoodDes: "Fish is one of the most wholesome foods that man can eat.",
    FoodMin: "3 days",
  },
  {
    id: 5,
    FoodImg:  NotificationDataFive ,
    FoodName: "cafeannie",
    FoodDes: "Fish is one of the most wholesome foods that man can eat.",
    FoodMin: "3 days",
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: NotificationData,
      food:[],
      loading:true,
      dummy:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cocktail.jpg"
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
      this.focusListener = navigation.addListener("didFocus", () => {
        
        this.getFood()
      });

    this.getFood()
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("FoodLogin");
    return true;
  };

  getFood = async()=>{
    await AsyncStorage.getItem('userLoginInfo').then(async(user) => {
      var userData = JSON.parse(user);
      // alert(userData.id)
    const array = []
    await firestore().collection('restaurent').doc(userData.id).collection('Food')
    .get()
    .then((querySnapshot) => {
      // alert("work")
        querySnapshot.forEach((docUser) => {
            array.push({...docUser.data(), add:false, count:0})
            this.setState({food:array})
      
        })
        
      })
    })
      this.setState({loading:false})
  }


  _renderRow(rowData) {
    var that = this;
    var rowData = rowData.item;

    return (
      <View style={styles.mainRenderView}>
        <View style={{ flexDirection: "row" }}>
          <Image source={{uri:rowData.FoodImg?rowData.FoodImg:this.state.dummy}} style={styles.FoodImg} />
          <View>
            <Text style={styles.FoodName}>{rowData.FoodName}</Text>
            <Text style={styles.FoodDes}>{rowData.FoodDes}</Text>
            <TouchableOpacity
                  style={styles.ContactMainBg}
                  onPress={() => this.props.navigation.navigate("EditProduct", {item:rowData})}
                >
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
          </View>
        </View>
        <View style={styles.borderHorizontal} />
      
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={styles.DateTimeMainView}>
                  {/* <Entypo name="text-document" size={20} color="#f05522" /> */}
                  {/* <Text style={styles.DateTimeText}>{rowData.DT}</Text> */}
                </View>
      
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginRight: Metrics.HEIGHT * 0.01,
                  }}
                >
                  {/* <MaterialCommunityIcons
                    name="currency-usd"
                    color="#f05522"
                    size={25}
                  /> */}
                  <Text style={styles.MoneyText}>₹ {rowData.FoodPrice}</Text>
                </View>
              </View>
              <View style={styles.borderHorizontal} />
            {/* </View> */}
         
      </View>
    );
  }
  render() {
    
    return (
      <View style={styles.mainView}>
        <Container>
        <View style={styles.header}>
           <Text bold  style={styles.headertitle}>
             My Product
           </Text>
           <TouchableOpacity 
            style={{position:'absolute', right:15, width:40, alignItems:'center'}}
            onPress={()=>this.props.navigation.navigate("AddProduct")}
            >
              <Text bold style={{...styles.headertitle, fontSize:28}}>+</Text>
           </TouchableOpacity>
           </View>
          <View style={styles.MainListBg}>
            <FlatList
              data={this.state.food}
              renderItem={this._renderRow.bind(this)}
              enableEmptySections
              pageSize={4}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </Container>
        <Loader loading={this.state.loading}/>
      </View>
    );
  }
}
