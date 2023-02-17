import React, { Component, useState, useEffect } from "react";
import {
  // Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  TextInput,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Container, Text } from "native-base";
import styles from "./styles";
import { firestore } from 'firebase'
import Loader from "../../../Components/Loader";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Metrics } from "../../../Themes";
import { Picker } from '@react-native-picker/picker';

export default function PlaceOrder({ navigation }) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     uid:"",
  //     product:[],
  //     userData:[],
  //     address:"",
  //     subtotal:0,
  //     Scahrge:0,
  //     total:0,
  //     loading:false
  //   };
  // }
  // componentDidMount(){
  //   BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  //   // this.fetch()
  // }

  const handleBackPress = () => {
    navigation.goBack();
    return true;
  };
  const data = navigation.getParam('item', 'default');
  const subtotal = navigation.getParam('subtotal', 'default');
  const uid = navigation.getParam('uid', 'default');
  const user = navigation.getParam('user', 'default');
  const restaurant = navigation.getParam('restaurant', 'default');
  const address = navigation.getParam('address', 'default');
  const Scharg = navigation.getParam('Scahrge', 'default');
  const alltotal = navigation.getParam('total', 0)
  const [total, setTotal] = useState(alltotal)
  const [loading, setLoading] = useState(false)
  const [offer, setOffer] = useState([])
  const [discount, setDiscount] = useState(0)
  const [selectedOffer, setSelectedOffer] = useState()
  const [isApply, setIsApply] = useState(false)
  const [error, setError] = useState("")
  // const [selectedLanguage, setSelectedLanguage] = useState("");
  const [Code, setCode] = useState("")
  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  // }

  const generateUUID = (digits) => {
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
    let uuid = [];
    for (let i = 0; i < digits; i++) {
      uuid.push(str[Math.floor(Math.random() * str.length)]);
    }
    return uuid.join('');
  }


  const Order = async () => {
    // if(!loading){
    setLoading(true)
    const orderId = generateUUID(32)
    const code = generateUUID(6)
    const Value = {
      data,
      subtotal: total,
      // total:total,
      OrderAddress: address,
      user: user,
      restaurant: restaurant,
      createdAt: new Date().getTime(),
      orderId: orderId,
      status: "pending",
      payment: "offline",
      code:code
    }
    if (isApply) {
      const usersCollection = firestore().collection('allusers').doc(uid).collection("usedCoupon")
      usersCollection.add(selectedOffer)
    }


    const usersCollection = await firestore().collection('allusers').doc(user.uid).collection("OrderHistory")
    usersCollection.doc(orderId).set(Value).then(async (res) => {

      const usersCollection2 = await firestore().collection('restaurent').doc(restaurant.id).collection("Orders")
      usersCollection2.doc(orderId).set(Value).then(async (res2) => {


        const usersCollection1 = await firestore().collection('Orders')
        usersCollection1.doc(orderId).set(Value).then((res3) => {
          navigation.navigate("TabView")
          // this.setState({loading:false})
          setLoading(false)
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


  }

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
  const payment = () => {
    const data1 = {
      data: data,
      subtotal: total,
      OrderAddress: address,
      user: user,
      restaurant: restaurant,
      createdAt: new Date().getTime(),
      orderId: generateUUID(32),
      status: "pending",
      payment: "online"

    }
    navigation.navigate("Razor")
    // navigation.navigate("Stripe", { data: data1, selectedOffer:selectedOffer })
  }
  useEffect(() => {
    setLoading(true)
    firestore().collection("Coupon")
      .get()
      .then(snapshot => {
        var Array = []
        console.log(snapshot.docs.length, uid)
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach(doc => {
            Array.push(doc.data())

          })
          setOffer(Array)
          setSelectedOffer(Array[0] ? Array[0] : {})
          setCode(Array[0] ? Array[0].title : "")
          // console.log(Array)
          setLoading(false)

        }
      })
    setLoading(false)
  }, [])
  const checkCoupon = () => {
    // if(total>499){
    const usersCollection = firestore().collection('allusers').doc(uid).collection("usedCoupon")
    usersCollection.get()
      .then(snapshot => {
        console.log(snapshot.docs.length, uid)
        if (snapshot.docs.length > 0) {
          snapshot.docs.forEach(doc => {
            // console.log(doc.data())
            if (doc.data().id == selectedOffer.id) {
              // alert("already used")
              setError("already used")
            } else {
              if (selectedOffer.minimum < total - 1) {
                var dis = selectedOffer.off_amount + (total * selectedOffer.off_precent / 100)
                // setDiscount(dis)
                setTotal(total - dis)
                // const usersCollection = firestore().collection('allusers').doc(uid).collection("usedCoupon")
                // usersCollection.add(selectedOffer)
                setIsApply(true)
                setDiscount(dis)
                // alert("no used")
              } else {
                var ee = "Minimum order " + selectedOffer.minimum
                setError(ee)
              }
            }
            setLoading(false)
          })
        }
        else {
          if (selectedOffer.minimum < total - 1) {
            var dis = selectedOffer.off_amount + (total * selectedOffer.off_precent / 100)
            // setDiscount(dis)

            setTotal(total - dis)
            // const usersCollection = firestore().collection('allusers').doc(uid).collection("usedCoupon")
            // usersCollection.add(selectedOffer)
            setIsApply(true)
            setDiscount(dis)
            // alert("no used")
          } else {
            var ee = "Minimum order " + selectedOffer.minimum
            setError(ee)
          }
          setLoading(false)
        }
      })

    // alert(Code)
    setLoading(true)
    // }else{
    //   alert("minimum order 500")
    // }
    // console.log(selectedOffer)

    // if(selectedOffer.code === "maffin50"){
    //   var dis = selectedOffer.off_amount + (total * selectedOffer.off_precent / 100)
    //         alert(dis)
    //         setDiscount(dis)
    // }else{
    //   if(selectedOffer.minimum < total - 1 ){
    //         var dis = selectedOffer.off_amount + (total * selectedOffer.off_precent / 100)
    //         setDiscount(dis)
    //         alert(dis)
    //   }
    // }
  }

  const _renderRow = (rowData, index) => {
    // var that = this;

    // var rowData = rowData.item;
    // var index = rowData.index
    return (
      <View style={styles.mainRenderView}>

        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: rowData.FoodImg }} style={styles.FoodImg} />
          <View style={{ marginLeft: -20, marginTop: 5, marginRight: 10, backgroundColor: "lightgray", height: 16, width: 15, borderRadius: 7, justifyContent: "center" }}>
            <Text style={{ lineHeight: 15, textAlign: "center" }}>{rowData.count}</Text>
          </View>
          <View>
            <Text style={styles.FoodName}>{rowData.FoodName}</Text>
            {/* <Text style={styles.FoodDes}>{rowData.FoodDes}</Text> */}


          </View>
          <View style={{ marginTop: 30, marginRight: 100 }} >
            <Text>₹ {rowData.FoodPrice}</Text>
          </View>
          {/* <FontAwesome name="trash" size={25} color={"red"} /> */}
        </View>
        <View style={styles.borderHorizontal} />
      </View>
    );
  }
  // render() {
  // const data = this.props.navigation.getParam('item', 'default');
  // const subtotal = this.props.navigation.getParam('subtotal', 'default');
  // const Scharg = this.props.navigation.getParam('Scahrge', 'default');
  // const total = this.props.navigation.getParam('total', 'default');
  // const address = this.props.navigation.getParam('address', 'default');
  // StatusBar.setBarStyle("light-content", true);
  // if (Platform.OS === "android") {
  //   StatusBar.setBackgroundColor("#000000", true);
  //   StatusBar.setTranslucent(true);
  // }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainView}>
          <ScrollView>
            <Container>
              <View style={styles.header}>
                <Text bold style={styles.headertitle}>
                  CheckOut
                </Text>
              </View>
              <View style={{ ...styles.MainListBg }}>
                {data.map((rowData, index) => _renderRow(rowData, index))}
              </View>
              <View style={styles.bottomView}>
                <Text style={styles.LocationMain}>Delivery Location</Text>
                <View style={styles.locationView}>
                  <Image source={require('./../../../assets/icon/ic_location_gray.png')} style={styles.locationimg} />
                  <Text>{address}</Text>

                </View>
              </View>

              <View style={{ margin: 15, marginTop: 0, width: '100%' }}>
                <Text style={styles.LocationMain}>Coupon</Text>
                <View style={styles.couponView}>
                  <Picker style={{ width: "50%", paddingHorizontal: 5 }}


                    selectedValue={Code}
                    onValueChange={(itemValue, itemIndex) => {
                      setCode(itemValue)
                      setSelectedOffer(offer[itemIndex])
                      setDiscount(0)
                      setIsApply(false)
                      setError("")
                      // console.log(itemValue)
                    }
                    }>
                    {offer.map((item, index) =>
                      <Picker.Item label={item.title} value={index} />
                    )}
                    {/* <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="JavaScript" value="js" /> */}
                  </Picker>
                  {/* <TextInput
              value={Code}
              style={{width:"50%", paddingHorizontal:5}}
              onChangeText={(text)=>setCode(text)}
              /> */}
                  {/* <Text>Applied</Text> */}


                  <TouchableOpacity
                    style={{ ...styles.BookTableMainBg, marginRight: 5, width: Metrics.WIDTH * 0.4, }}
                    onPress={() => checkCoupon()}
                  >
                    <Text style={styles.BookTableText}>{isApply ? "Applied" : "Apply"}</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ color: "red" }}>{error}</Text>
              </View>

              <View style={{ ...styles.bottomView, marginTop: 0 }}>
                <Text style={styles.LocationMain}>Order Info</Text>
                <View style={styles.totalview}>
                  <Text style={styles.textleft}>Subtotal</Text>
                  <Text style={styles.textright}>₹ {subtotal}</Text>
                </View>
                <View style={styles.totalview}>
                  <Text style={styles.textleft}>Shiping Charge</Text>
                  <Text style={styles.textright}>₹ {Scharg}</Text>
                </View>
                <View style={styles.totalview}>
                  <Text style={styles.textleft}>Discount</Text>
                  <Text style={{ ...styles.textright, }}>₹ {discount}</Text>
                </View>
                <View style={styles.totalview}>
                  <Text style={styles.textleft}>Total</Text>
                  <Text style={{ ...styles.textright, fontSize: 18, fontWeight: "bold" }}>₹ {total}</Text>
                </View>
              </View>

            </Container>
            <TouchableOpacity
              style={{ ...styles.BookTableMainBg, marginBottom: 15 }}
              onPress={() =>
                //  loading?console.log("hello"):Order()
                payment()
              }
            >
              <Text style={styles.BookTableText}>PAYMENT</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.BookTableMainBg}
              onPress={() =>
                loading ? console.log("hello") : Order()
                // navigation.navigate("Stripe")
              }
            >
              <Text style={styles.BookTableText}>PLACE ORDER</Text>
            </TouchableOpacity>

          </ScrollView>
          <Loader loading={loading} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

