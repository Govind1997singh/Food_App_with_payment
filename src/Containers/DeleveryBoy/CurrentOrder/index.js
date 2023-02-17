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
  Alert,
  TextInput
  
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Metrics } from "../../../Themes";
import Loader from "../../../Components/Loader";
import { Container } from "native-base";
import {firestore } from 'firebase'
import styles from "./styles";
import moment from "moment";

export default class CurrentOrderDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food:[],
      user:null,
      loading:true,
      dummy:"http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Cocktail.jpg",
      codeInput:''
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
      // this.focusListener = navigation.addListener("didFocus", () => {
        
      //   this.getFood()
      // });
      await AsyncStorage.getItem('userLoginInfo').then((user) => {
        var userData = JSON.parse(user);
        this.setState({user:userData})
      })

    this.getFood()
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack()
    return true;
  };

  getFood = async()=>{
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
      
        this.setState({food:array})
      })
    })
      this.setState({loading:false})
  }

Accept = async(item) =>{
// alert("hii")
 
var pp = item.code ? item.code : "123456"
if(this.state.codeInput === ""){
  alert("Please enter code first")
}
 else if(this.state.codeInput === pp){
this.setState({loading:true})
  const usersCollection = await firestore().collection('allusers').doc(item.user.uid).collection("OrderHistory")
  usersCollection.doc(item.orderId).update({status:"Completed"}).then(async (res) => {

    const usersCollection2 = await firestore().collection('restaurent').doc(item.restaurant.id).collection("Orders")
    usersCollection2.doc(item.orderId).update({status:"Completed"}).then(async (res2) => {


      const usersCollection1 = await firestore().collection('Orders')
      usersCollection1.doc(item.orderId).update({status:"Completed"}).then(async(res3) => {
        // navigation.navigate("TabView")
        // this.setState({loading:false})
        const usersCollection3 = await firestore().collection('DB').doc(this.state.user.uid).collection("Order")
  usersCollection3.doc(item.orderId).update({status:"Completed"})
  .then(async()=>{
        // await this.getFood()
        alert("Order Delivered Successfully")
        
        this.setState({loading:false})
        this.props.navigation.goBack()
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
  else{
    alert("Code not match")
  }
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
            <TextInput
            placeholder="Enter code here"
            style={{borderWidth:0.5,  marginTop:5, borderRadius:3, padding:5}}
            value={this.state.codeInput}
            onChangeText={(text)=>this.setState({codeInput:text})}
            />
            <TouchableOpacity
                  style={styles.ContactMainBg}
                  onPress={() => this.Accept(rowData)}
                >
                  <Text style={styles.editText}>Delivered</Text>
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
             Current Orders
           </Text>
           {/* <TouchableOpacity 
            style={{position:'absolute', right:15, width:40, alignItems:'center'}}
            onPress={()=>this.props.navigation.navigate("AddProduct")}
            >
              <Text bold style={{...styles.headertitle, fontSize:28}}>+</Text>
           </TouchableOpacity> */}
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
