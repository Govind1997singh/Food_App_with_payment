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
import CurrentOrderDB from "../CurrentOrder";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Metrics } from "../../../Themes";
import Loader from "../../../Components/Loader";
import { Container } from "native-base";
import {firestore } from 'firebase'
import styles from "./styles";
import moment from "moment";

export default class HomeDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food:[],
      current:[],
      user:null,
      loading:true,
      dummy:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cocktail.jpg"
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
      this.focusListener = navigation.addListener("didFocus", () => {
        
        this.getCurrent()
      });
      await AsyncStorage.getItem('userLoginInfo').then((user) => {
        var userData = JSON.parse(user);
        this.setState({user:userData})
      })

    this.getCurrent()
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    this.focusListener.remove();
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    // this.props.navigation.navigate("");
    return true;
  };

  getCurrent = async()=>{
    this.setState({loading:true})
    await AsyncStorage.getItem('userLoginInfo').then(async(user) => {
      var userData = JSON.parse(user);
      // alert(userData.id)
    
    await firestore().collection("DB").doc(userData.uid).collection("Order")
    // .where("status", "==", "pending")

.orderBy("createdAt", "desc")
    .get()
    .then((querySnapshot) => {
      var array = []
      // alert("work")
        querySnapshot.forEach((docUser) => {
          if(docUser.data().status === "On the way"){
            array.push({...docUser.data()})
            
          }
        })
      if(array.length == 0){
        this.getFood()
      }else{
        this.setState({current:array})
        this.setState({loading:false})
      }
      })
    })
      // this.setState({loading:false})
  }



  getFood = async()=>{
    await AsyncStorage.getItem('userLoginInfo').then(async(user) => {
      var userData = JSON.parse(user);
      // alert(userData.id)
    
    await firestore().collection("Orders")
    // .where("status", "==", "pending")

.orderBy("createdAt", "desc")
    .get()
    .then((querySnapshot) => {
      var array = []
      // alert("work")
        querySnapshot.forEach((docUser) => {
          if(docUser.data().status === "pending"){
            array.push({...docUser.data(), count:0})
            
          }
        })
      
        this.setState({food:array})
      })
    })
      this.setState({loading:false})
  }

Accept = async(item) =>{
this.setState({loading:true})
  const usersCollection = await firestore().collection('allusers').doc(item.user.uid).collection("OrderHistory")
  usersCollection.doc(item.orderId).update({status:"On the way", DeliveryBoy: this.state.user}).then(async (res) => {

    const usersCollection2 = await firestore().collection('restaurent').doc(item.restaurant.id).collection("Orders")
    usersCollection2.doc(item.orderId).update({status:"On the way", DeliveryBoy: this.state.user}).then(async (res2) => {


      const usersCollection1 = await firestore().collection('Orders')
      usersCollection1.doc(item.orderId).update({status:"On the way", DeliveryBoy: this.state.user}).then(async(res3) => {
        // navigation.navigate("TabView")
        // this.setState({loading:false})
        const usersCollection = await firestore().collection('DB').doc(this.state.user.id).collection("Order")
  usersCollection.doc(item.orderId).set({...item, status:"On the way"})
  .then(async()=>{
        await this.getCurrent()
        // alert("success")
        
        this.setState({loading:false})
      })
      .catch((e)=>alert(e))
        // setLoading(false)
      })
        .catch((e) => {
          alert(e.message)
        })

    })
      .catch((e) => {
        alert(e.message)
      })

  })
    .catch((e) => {
      alert(e.message)
    })


    this.setState({loading:true})
}
  _renderRow(rowData) {
    var that = this;
    var rowData = rowData.item;

    return (
      <View style={styles.mainRenderView}>
        <View style={{ flexDirection: "row" }}>
          <Image source={{uri:rowData.FoodImg?rowData.FoodImg:this.state.dummy}} style={styles.FoodImg} />
          <View>
            <Text style={styles.FoodName}>{rowData.restaurant.name}</Text>
            <Text style={styles.FoodDes}>Payment Satus: {rowData.status}</Text>
            <Text style={styles.FoodDes}>From: {rowData.restaurant.address}</Text>
            <Text style={{...styles.FoodDes}}>To: {rowData.user.address}, {rowData.user.city},{rowData.user.landmark}</Text>
            <Text style={{...styles.FoodDes}}>User Mobile: {rowData.user.phoneNumber}</Text>

            <TouchableOpacity
                  style={styles.ContactMainBg}
                  onPress={() => this.Accept(rowData)}
                >
                  <Text style={styles.editText}>Accept</Text>
                </TouchableOpacity>
          </View>
        </View>
        <View style={styles.borderHorizontal} />
      
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={styles.DateTimeMainView}>
                  {/* <Entypo name="text-document" size={20} color="#f05522" /> */}
                  <Text style={styles.DateTimeText}> {moment(rowData.createdAt).format("yyyy-MM-DD HH:mm")}</Text>
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
                  <Text style={styles.MoneyText}>₹ {rowData.subtotal}</Text>
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
             Available Orders
           </Text>
           {/* <TouchableOpacity 
            style={{position:'absolute', right:15, width:40, alignItems:'center'}}
            onPress={()=>this.props.navigation.navigate("AddProduct")}
            >
              <Text bold style={{...styles.headertitle, fontSize:28}}>+</Text>
           </TouchableOpacity> */}
           </View>
           {this.state.current.length>0?
<View style={{...styles.MainListBg, alignItems:"center", justifyContent:'center', height:"100%", margin:0}}>
<Text style={{margin:5, textAlign:"center"}}>You have already accept an order please complete this order</Text>
<TouchableOpacity
                  style={{...styles.ContactMainBg, padding:6, width:150}}
                  onPress={() => this.props.navigation.navigate("CurrentOrderDB")}
                >
                  <Text style={styles.editText}>Go to Current Order</Text>
                </TouchableOpacity>

</View>
:
          <View style={styles.MainListBg}>
            <FlatList
              data={this.state.food}
              renderItem={this._renderRow.bind(this)}
              enableEmptySections
              pageSize={4}
              showsHorizontalScrollIndicator={false}
            />
          </View>
  }
        </Container>
  
        <Loader loading={this.state.loading}/>
        
      </View>
    );
  }
}
