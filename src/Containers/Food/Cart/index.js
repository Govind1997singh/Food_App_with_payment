import React, { Component, useState, useEffect } from "react";
import {
  // Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  Platform,
  TextInput,
  ScrollView,
  SafeAreaView
} from "react-native";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Container, Text } from "native-base";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class  Carts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid:"",
      user:[],
      product:[],
      userData:[],
      address:"",
      subtotal:0,
      Scahrge:0,
      total:0,
      focus: false,

    };
    }
  
  addProduct1 = (data, type) =>{
  var Array = this.state.product
  const indexOfObject = Array.findIndex(object => {
    return object.id === data.id
  });
  if(type == "minus"){
    var pp = this.state.subtotal
  pp = pp - data.FoodPrice
  this.setState({subtotal:pp})
  // setSubtotal(pp)
  if(data.count != 1){
    Array[indexOfObject] = {...Array[indexOfObject], count:data.count - 1}
    this.setState({product:Array})
  
}
else{

  Array.splice(indexOfObject, 1);
  this.setState({product:Array})
}
  }else{
    Array[indexOfObject].count = data.count + 1
    var pp = this.state.subtotal
  pp = parseInt(pp) + parseInt(data.FoodPrice)
  // setSubtotal(pp)
  this.setState({subtotal:pp})
  
  this.setState({product:Array})
  // setProduct(Array)
  }

}
// const { navigation } = props;
deleteProduct = (data)=>{
  var pp = this.state.subtotal
  pp = pp - data.FoodPrice * data.count
  // setSubtotal(pp)
  this.setState({subtotal:pp})
  
  var Array = product
  const indexOfObject = Array.findIndex(object => {
    return object.id === data.id
  });
  Array.splice(indexOfObject, 1);
  // setProduct(Array)
  this.setState({product:Array})

}
// useEffect(() => {
  componentDidMount(){
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    this.fetch()
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true;
  };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
      fetch = ()=>{
  (async () => {
    // const { navigation } = props;
 const item = this.props.navigation.getParam('product', {});
    console.log(item)
    // setProduct(item)
    this.setState({product:item})
    // alert("hello")
    await  AsyncStorage.getItem('userLoginInfo').then(async (user) => {
          var userData = JSON.parse(user);
        //  await setuid(userData.uid)
        this.setState({user:userData})
        this.setState({uid:userData.uid})
          this.setState({address:userData.address +", "+ userData.city})
        })
        var pp = 0
      item  && item.map((item1)=>{
        pp  = pp +( parseInt(item1.FoodPrice) * parseInt(item1.count))
      })
      this.setState({subtotal:pp})

      // setSubtotal(pp)
    
  })()
}
// },[])

   _renderRow = (rowData, index) => {
  
    return (
      <View style={styles.mainRenderView}>
        
        <View style={{ flexDirection: "row" }}>
          <Image source={{uri:rowData.FoodImg}} style={styles.FoodImg} />
          <View>
            <Text style={styles.FoodName}>{rowData.FoodName}</Text>
            {/* <Text style={styles.FoodDes}>{rowData.FoodDes}</Text> */}
            <Text style={styles.FoodMin}>₹ {rowData.FoodPrice}</Text>
            <View style = {{flexDirection:"row", marginTop:5, marginBottom:5, }}>
              <TouchableOpacity onPress={()=>{
                
                let food = [...this.state.product];
                {rowData.count == 1?
                  food.map((item, index1) =>
                      
                          {index == index1?
                          food[index] = {...food[index],add:false, count : 0}
                          :
                          food[index1] = {...food[index1]}
                          }
                      )
                      :
                      food[index] = {...food[index], count : rowData.count - 1}
                    }
                    this.setState({product:food})
                  // setProduct(food)
                  this.addProduct1(rowData, "minus")
                    
                  
              }}  style={{height:20, width:20, borderRadius:10, backgroundColor:"#f05522",}}>
            <Text style={{height:20, width:20, borderRadius:10,  textAlign:"center", fontWeight:"bold", fontSize:20, color:"white", lineHeight:21}}>-</Text>
            </TouchableOpacity>
            <Text style = {{width:25, textAlign:"center"}}>{rowData.count}</Text>
            <TouchableOpacity  onPress={()=>{
              //  alert(index)
               let food = [...this.state.product];
              //  {rowData.conter == 1?
                 food.map((item, index1) =>
                     
                         {index == index1?
                         food[index] = {...food[index], count : rowData.count + 1}
                         :
                         food[index1] = {...food[index1]}
                         }
                     )
                  //    :
                  //    food[index] = {...food[index], count : rowData.count - 1}
                  //  }
                  this.setState({product:food})
                  // setProduct(food)
                  this.addProduct1(rowData, "plus")
                //  this.setState({product: food }
                //   , () => {this.addProduct1(rowData, "plus")}
                //   );
                //  this.addProduct1(rowData)
            }}  style={{height:20, width:20, borderRadius:10, backgroundColor:"#f05522",}}>
              <Text  style={{ borderRadius:10, textAlign:"center", fontWeight:"bold", fontSize:20, color:"white", lineHeight:21}}>+</Text>
              </TouchableOpacity>
                  </View>
                
          </View>
          <TouchableOpacity style={{ marginTop:30, marginRight:30}} 
          onPress={()=>this.deleteProduct(rowData)}
          >
          <Image style = {{height:25, width:25, alignSelf:"center"}} source={require("./../../../Images/filled-trash.png")}/>
          </TouchableOpacity>
          {/* <FontAwesome name="trash" size={25} color={"red"} /> */}
        </View>
        <View style={styles.borderHorizontal} />
      </View>
    );
  }
  render() {
    StatusBar.setBarStyle("default", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
  // render(){

 const restaurant = this.props.navigation.getParam('restaurant',{});
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
      <View style={styles.mainView}>
        <ScrollView>
        <Container>
         <View style={styles.header}>
           <Text bold  style={styles.headertitle}>
             My Cart
           </Text>
           </View>
          <View style={{...styles.MainListBg}}>
            {this.state.product.map((rowData, index) => this._renderRow(rowData,index))}
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.LocationMain}>Delivery Location</Text>
            <View style={styles.locationView}>
              <Image source={require('./../../../assets/icon/ic_location_gray.png')} style={styles.locationimg}/>
              <Text>{this.state.address}</Text>
              {/* <TextInput
              
              value={this.state.address}
              style={{width:"100%"}}
              onChangeText={(text)=>this.setState({address:text})}
              /> */}
            </View>
          </View>

          <View style={{...styles.bottomView, marginTop:0, display:"none"}}>
            <Text style={styles.LocationMain}>Payment Method</Text>
            <View style={styles.locationView}>
              <Image source={require('./../../../assets/icon/visa_logo.png')} style={{...styles.locationimg, width:50, resizeMode:"contain"}}/>
              <Text>Stripe</Text>
              
            </View>
          </View>
          <View style={{...styles.bottomView, marginTop:0}}>
            <Text style={styles.LocationMain}>Order Info</Text>
            <View style={styles.totalview}>
              <Text style={styles.textleft}>Subtotal</Text>
              <Text style={styles.textright}>₹ {this.state.subtotal}</Text>
            </View>
            <View style={styles.totalview}>
              <Text style={styles.textleft}>Shiping Charge</Text>
              <Text style={styles.textright}>₹ {this.state.Scahrge}</Text>
            </View>
            <View style={styles.totalview}>
              <Text style={styles.textleft}>Total</Text>
              <Text style={{...styles.textright, fontSize:18, fontWeight:"bold"}}>₹ {this.state.subtotal + this.state.Scahrge}</Text>
            </View>
          </View>
          
        </Container>
        <TouchableOpacity
          style={styles.BookTableMainBg}
          onPress={() => this.props.navigation.navigate("PlaceOrder",{item: this.state.product, subtotal: this.state.subtotal, Scahrge:this.state.Scahrge, total: this.state.subtotal + this.state.Scahrge, address:this.state.address, user: this.state.user,restaurant:restaurant, uid:this.state.user.uid})}
        >
          <Text style={styles.BookTableText}>CHECKOUT</Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
      </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
