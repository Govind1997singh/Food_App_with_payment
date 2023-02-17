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

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      uid: "",
      product: [],

    };
  }
  getProduct = async () => {
    const array = []
    var balance = 0
    await firestore().collection('allusers').doc(this.state.uid)
      .collection("Cart")
      .get()
      .then((querySnapshot) => {

        querySnapshot.forEach((docUser) => {
          array.push(docUser.data())
          var dd = docUser.data()
          balance = balance + dd.FoodPrice * dd.count
          // console.log(docUser.data())
        });
        this.setState({ product: array })
        // this.setState({subtotal:balance})
      })
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const item = await navigation.getParam('item', {})
    await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
      var userData = JSON.parse(user);
      this.setState({ uid: userData.uid })
    })
    // await this.getProduct()
    await this.getFood(item.id)
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("TabView");
    return true;
  };
  addProduct = (data) => {
    var array = this.state.product
    // var dd = data
    var dd = { ...data, count: 1 }
    array.push(dd)
    this.setState({ product: array })
    // const usersCollection = firestore().collection('allusers').doc(this.state.uid).collection("Cart")
    // usersCollection.doc(data.id).set({
    //  ...data,
    //  count:1
    // })
  }
  addProduct1 = (data, type) => {
    var Array = this.state.product
    const indexOfObject = Array.findIndex(object => {
      return object.id === data.id
    });
    if (type == "minus") {
      if (data.count != 1) {
        Array[indexOfObject] = { ...Array[indexOfObject], count: data.count - 1 }

      }
      else {
        Array.splice(indexOfObject, 1);
        //   const usersCollection = firestore().collection('allusers').doc(this.state.uid).collection("Cart")
        //   usersCollection.doc(data.id).delete()
      }
    } else {
      Array[indexOfObject].count = data.count + 1


      //     const usersCollection = firestore().collection('allusers').doc(this.state.uid).collection("Cart")
      //     usersCollection.doc(data.id).update({

      //      count:data.count + 1
      //     })
    }
    this.setState({ product: Array })

  }
  getFood = async (id) => {


    // alert(id)
    // var aa = item?item.id:""
    const array = []
    var cc = firestore().collection('restaurent').doc(id)
    cc.collection('Food')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((docUser) => {
          array.push({ ...docUser.data(), add: false, count: 0 })
          // alert("1")
          // console.log(docUser.data())
        })
        this.setState({ food: array })
        console.log(array)
      })

  }

  onRegionChange(region) {
    this.setState({ region });
  }
  /*PHOTO RENDER ROW END */

  /* MENU RENDER ROW START */

  /*REVIEWS RENDER ROW END */

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
        <View style={{ ...styles.mainContentView, height: this.state.product.length > 0 ? Metrics.HEIGHT * 0.9 - StatusBar.currentHeight : Metrics.HEIGHT - StatusBar.currentHeight }}>
          <ScrollView>
            <View style={styles.slide1}>
              <ImageBackground
                source={{ uri: item.img }}
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
                <TouchableOpacity style={{ height: 30, width: 30, position: "absolute", top: 30, left: 5, borderRadius: 5, backgroundColor: "white" }} onPress={() => navigation.goBack()}>
                  <Image style={{ height: 30, width: 25, }} source={require('./../../../assets/icons/arrow-left.png')} />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            <View style={{ backgroundColor: "#fff" }}>
              <Text style={styles.FoodDetailsText}>
                {item.name}
              </Text>
              <Text style={styles.FoodANameText}>{item.address}</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: Metrics.HEIGHT * 0.01,
                  marginBottom: Metrics.HEIGHT * 0.01,
                }}
              >
                {/* <Rating
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
                /> */}
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
                <Text style={styles.TimeText}>{item.openTime}</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.ContactMainBg}
                  onPress={() => Communications.phonecall(item.contact, true)}
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
            {this.state.food.map((rowData, index) =>

              <View style={styles.mainRenderView}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={{ uri: rowData.FoodImg }} style={styles.FoodImg} />
                  <View>
                    <Text style={styles.FoodName}>{rowData.FoodName}</Text>
                    <Text style={styles.FoodAdd}>{rowData.FoodDes}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      {/* <Rating
                      initial={4}
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
                    /> */}
                      {/* <Text style={styles.reviewText}>238 reviews</Text> */}
                    </View>
                    <TouchableOpacity
                      style={{ ...styles.BookTableMainBg1, width: "50%", display: !rowData.add ? "flex" : "none" }}
                      onPress={() => {
                        let food = [...this.state.food];
                        this.addProduct(rowData)
                        {
                          rowData.add == false ?
                            food.map((item, index1) => {
                              index == index1 ?
                                food[index] = { ...food[index], add: true, count: 1 }
                                :
                                food[index1] = { ...food[index1] }
                            }
                            )
                            : null
                        }
                        this.setState({ food });
                      }}
                    >
                      {/* {rowData.add? */}
                      <Text style={styles.BookTableText}>Add to Cart</Text>
                      {/* :<Text>hhh</Text>} */}
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10, display: rowData.add ? "flex" : "none" }}>
                      <TouchableOpacity onPress={() => {

                        let food = [...this.state.food];
                        {
                          rowData.count == 1 ?
                            food.map((item, index1) => {
                              index == index1 ?
                                food[index] = { ...food[index], add: false, count: 0 }
                                :
                                food[index1] = { ...food[index1] }
                            }
                            )
                            :
                            food[index] = { ...food[index], count: rowData.count - 1 }
                        }
                        this.setState({ food }, () => { this.addProduct1(rowData, "minus") });

                      }} style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "#f05522", }}>
                        <Text style={{ height: 20, width: 20, borderRadius: 10, textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white", lineHeight: 21 }}>-</Text>
                      </TouchableOpacity>
                      <Text style={{ width: 25, textAlign: "center" }}>{rowData.count}</Text>
                      <TouchableOpacity onPress={() => {

                        let food = [...this.state.food];
                        //  {rowData.conter == 1?
                        food.map((item, index1) => {
                          index == index1 ?
                            food[index] = { ...food[index], count: rowData.count + 1 }
                            :
                            food[index1] = { ...food[index1] }
                        }
                        )
                        //    :
                        //    food[index] = {...food[index], count : rowData.count - 1}
                        //  }
                        this.setState({ food }, () => { this.addProduct1(rowData, "plus") });
                        //  this.addProduct1(rowData)
                      }} style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: "#f05522", }}>
                        <Text style={{ borderRadius: 10, textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white", lineHeight: 21 }}>+</Text>
                      </TouchableOpacity>
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
                    <Text style={styles.MoneyText}>₹ {rowData.FoodPrice}</Text>
                  </View>
                </View>
              </View>


            )}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{ ...styles.BookTableMainBg, display: this.state.product.length > 0 ? "flex" : "none" }}
          onPress={() =>
            // console.log(this.state.product)
            this.props.navigation.navigate("Cart", { product: this.state.product, restaurant: item })
          }
        >
          <Text style={styles.BookTableText}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
