import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  StatusBar,
  FlatList,
  Easing,
  Platform,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { auth, firestore, storage } from 'firebase';
import { Images, Metrics } from "../../../Themes/";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Rating from "react-native-rating";
import Communications from "react-native-communications";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food:[],
      uid:"",
      product:[],
      
    };
  }
  async componentDidMount() {
    
     await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
        var userData = JSON.parse(user);
        this.setState({uid:userData.uid})
      })
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack()
    return true;
  };
  
  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("black", true);
      StatusBar.setTranslucent(true);
    }
// const item = this.props.route.param.item
const { navigation } = this.props;
const item = navigation.getParam('item', 'NO-ID')
    return (
      <View style={styles.mainview}>
        <View style={{...styles.mainContentView, height:this.state.product.length>0? Metrics.HEIGHT * 0.9 - StatusBar.currentHeight:Metrics.HEIGHT- StatusBar.currentHeight}}>
          <ScrollView>
            <View style={styles.slide1}>
                  <ImageBackground
                    source={{ uri: item.restaurant.img}}
                    style={{
                      ...Platform.select({
                        ios: {
                          height: Metrics.HEIGHT * 0.35,
                        },
                        android: {
                          height: Metrics.HEIGHT * 0.43,
                        },
                      }),
                      width: Metrics.WIDTH,
                    }}
                  >
                    <TouchableOpacity style={{height:30, width:30, position:"absolute", top:30,left:5,borderRadius:5, backgroundColor:"white"}} onPress={()=>navigation.goBack()}>
                    <Image style={{height:30, width:25,}}  source={require('./../../../assets/icons/arrow-left.png')}/>
                    </TouchableOpacity>
                   </ImageBackground>
                </View>
            <View style={{ backgroundColor: "#fff" }}>
              <Text style={styles.FoodDetailsText}>
                {item.restaurant.name}
              </Text>
              <Text style={styles.FoodANameText}>{item.restaurant.address}</Text>
              <Text style={styles.FoodANameText1}>Order Status: {item.status?item.status:""}</Text>
            
              <Text style={styles.FoodANameText1}>Payment Mode: {item.payment}</Text>
              <Text style={styles.FoodANameText1}>Code : {item.code? item.code:"123456"}</Text>
            
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: Metrics.HEIGHT * 0.01,
                  marginBottom: Metrics.HEIGHT * 0.01,
                }}
              >
                <Rating
                  initial={3}
                  onChange={(rating) => console.log(rating)}
                  selectedStar={Images.seletedstar}
                  unselectedStar={Images.starEmpty1}
                  config={{
                    easing: Easing.inOut(Easing.ease),
                    duration: 350,
                  }}
                  stagger={80}
                  maxScale={2.4}
                  starStyle={styles.ratingStar}
                  editable={false}
                />
                {/* <Text style={styles.reviewText}>238 reviews</Text> */}
              </View>
            </View>
            <View style={styles.borderHorizontal} />
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#fff",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  marginBottom: Metrics.HEIGHT * 0.02,
                }}
              >
                <Text style={styles.OPENInText}>OPEN IN</Text>
                <Text style={styles.TimeText}>{item.restaurant.openTime}</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.ContactMainBg}
                  onPress={() => Communications.phonecall(item.restaurant.contact, true)}
                >
                  <FontAwesome
                    name="phone"
                    size={20}
                    color="#000000"
                    style={{ alignSelf: "center" }}
                  />
                  <Text style={styles.ContactText}>Contact</Text>
                </TouchableOpacity>
              </View>
            </View>
            {item.data.map((rowData, index) =>
            
              <View style={styles.mainRenderView}>
              <View style={{ flexDirection: "row" }}>
                <Image source={{uri:rowData.FoodImg}} style={styles.FoodImg} />
                <View style={{marginLeft:-20,marginTop:5, marginRight:10, backgroundColor:"lightgray", height:16, width:15, borderRadius:7, justifyContent:"center"}}>
          <Text style={{lineHeight:15,textAlign:"center"}}>{rowData.count}</Text>
          </View>
                <View>
                  <Text style={styles.FoodName}>{rowData.FoodName}</Text>
                  <Text style={styles.FoodAdd}>{rowData.FoodDes}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                   </View>
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
                  <Text style={styles.MoneyText}>₹{rowData.FoodPrice}</Text>
                </View>
              </View>
            </View>
         
            
            )}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{...styles.BookTableMainBg, display: this.state.product.length>0 ?"flex":"none"}}
          onPress={() => 
            // console.log(this.state.product)
            this.props.navigation.navigate("Cart", {product: this.state.product, restaurant:item})
         }
        >
          <Text style={styles.BookTableText}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
