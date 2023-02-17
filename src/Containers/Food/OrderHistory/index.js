import React, { Component, useEffect } from "react";
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
  Animated,
  SafeAreaView
} from "react-native";
import moment from "moment";
import { Container } from "native-base";
import styles from "./styles";
import { firestore } from 'firebase'
import Loader from "../../../Components/Loader";
import { Metrics, Images } from "../../../Themes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(100);

    this.state = {
      loading: false,
      dataSource: [],
      // insets : useSafeAreaInsets()
    };
  }
  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
      var userData = JSON.parse(user);
      const { navigation } = this.props;
      this.focusListener = navigation.addListener("didFocus", () => {

        this.getOrderHistory(userData.uid)
      });
      this.getOrderHistory(userData.uid)
    })
  }
  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);

  }


  _spring() {
    this.setState({ backClickCount: 1 }, () => {
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
        this.setState({ backClickCount: 0 });
      });
    });

  }

  handleBackPress = () => {
    // this.props.navigation.navigate("FoodLogin");
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
  };
  getOrderHistory = async (uid) => {
    this.setState({ loading: true })
    const array = []
    await firestore().collection('allusers').doc(uid).collection('OrderHistory')

      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {

        querySnapshot.forEach((docUser) => {
          array.push({ ...docUser.data() })
          this.setState({ dataSource: array })

        })
        this.setState({ loading: false })

      })
      .catch((e) => {
        this.setState({ loading: false })
      })

  }


  _renderRow(rowData) {
    var that = this;
    var rowData = rowData.item;
    const date = moment(rowData.createdAt).format("DD MMM YYYY")
    const time = moment(rowData.createdAt).format("HH:mm")
    return (
      <View style={{ ...styles.mainRenderView }}>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("OrderDetails", { item: rowData })}
          activeOpacity={0.5}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={{ uri: rowData.restaurant.img }} style={styles.FoodImg} />
            <View>
              <Text style={styles.FoodName}>{rowData.restaurant.name}</Text>
              <Text style={styles.FoodAdd}>{rowData.restaurant.address}</Text>
            </View>
          </View>
          <View style={styles.borderHorizontal} />
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.DateTimeMainView}>
              <Entypo name="text-document" size={20} color="#f05522" />
              <Text style={styles.DateTimeText}>{date}  {" "}{time}</Text>
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
        </TouchableOpacity>
      </View>
    );
  }

  render() {

    StatusBar.setBarStyle("default", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>

          <View style={{ ...styles.mainView }}>
            <Container>
              <View style={styles.header}>
                <Text bold style={styles.headertitle}>
                  ORDER HISTORY
                </Text>
              </View>
              <View style={styles.MainListBg}>
                {this.state.dataSource.length > 0 ?

                  <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderRow.bind(this)}
                    enableEmptySections
                    pageSize={4}
                    showsHorizontalScrollIndicator={false}
                  />
                  : this.state.loading ? null :
                    <Text style={{ marginTop: 10, alignSelf: 'center' }}>No Order Found</Text>}

              </View>
            </Container>
            <Loader loading={this.state.loading} />
            <Animated.View style={[styles.animatedView, { transform: [{ translateY: this.springValue }] }]}>
              <Text style={styles.exitTitleText}>press back again to exit the app</Text>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => BackHandler.exitApp()}
              >
                <Text style={styles.exitText}>Exit</Text>
              </TouchableOpacity>

            </Animated.View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
