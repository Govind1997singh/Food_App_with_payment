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
} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "./styles";
import {firestore} from 'firebase'
import { Images, Metrics } from "../../../Themes/";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AntDesign from "react-native-vector-icons/AntDesign";
import Loader from "../../../Components/Loader";

const FoodDetailsOne =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-FiletCarpetBagger.jpg";
const FoodDetailsTwo =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-LambBurger.jpg";

const FoodDetailsThree =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-Oysters.jpg";

const FoodDetailsFour =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-QuailDish.jpg";

const FoodDetailsFive =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/BBButchers-ShrimpCocktail.jpg";

var FoodDetails = [
  {
    id: 1,
    Foodimg: { uri: FoodDetailsOne },
    rating: 4,
    FoodName: "Filet CarpetBagger",
  },
  {
    id: 2,
    Foodimg: { uri: FoodDetailsTwo },
    rating: 4,
    FoodName: "Lamb Burger",
  },
  {
    id: 3,
    Foodimg: { uri: FoodDetailsThree },
    rating: 4,
    FoodName: "Oysters",
  },
  {
    id: 4,
    Foodimg: { uri: FoodDetailsFour },
    rating: 4,
    FoodName: "QuailDish",
  },
  {
    id: 5,
    Foodimg: { uri: FoodDetailsFive },
    rating: 4,
    FoodName: "Shrimp Cocktail",
  },
];

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      review: "",
      uid:""
    };
  }

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
      var userData = JSON.parse(user);
        this.setState({uid:userData.uid})
        this.getFavorites(userData.uid)
    })
  }

  getFavorites = async(uid)=>{
    this.setState({loading:true})
    const array = []
    await firestore().collection('allusers').doc(uid).collection('Favorites')
   
    .get()
    .then((querySnapshot) => {
      
        querySnapshot.forEach((docUser) => {
            array.push({...docUser.data()})
           
      
        })
        this.setState({dataSource:array})
        this.setState({loading:false})
        
      })
      .catch((e)=>{
        this.setState({loading:false})
      })
      
  }


  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack()
    // this.props.navigation.navigate("FoodLogin");
    return true;
  };

  _renderDeleteItem(index,id) {
    var newData = this.state.dataSource.slice(); //copy array
    newData.splice(index, 1); //remove element
    for (var i = 0; i < newData.length; i++) {
      newData[i].index = i;
    }
    firestore().collection('allusers').doc(this.state.uid).collection('Favorites')
    .doc(id).delete()
    // FoodDetails = newData;
    this.setState({ dataSource: newData });
  }

  _renderRow = (rowData) => {
    var that = this;
    var rowData = rowData.item;

    return (
      <View style={styles.mainListRenderRow}>
        <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate("ProductDetails", {item:rowData})}
                activeOpacity={0.5}
                >
        <View style={styles.Foodimg}>
          <Image source={{uri:rowData.img}} style={styles.Foodimg} />

          <TouchableOpacity
            onPress={() => this._renderDeleteItem(rowData.index, rowData.id)}
            style={styles.hearticon}
            underlayColor="transparent"
          >
            <AntDesign
              name="heart"
              size={25}
              color="#f05522"
              style={{ alignSelf: "flex-end", top: 5, right: 10 }}
            />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity> */}
          <Text style={styles.FoodDetailsText}>{rowData.name}</Text>
          <Text style={styles.FoodANameText}>{rowData.address}</Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: Metrics.HEIGHT * 0.01,
              marginBottom: Metrics.HEIGHT * 0.01,
            }}
          >
          </View>
        </TouchableOpacity>
        
      </View>
    );
  };

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <SafeAreaProvider>
      <View style={styles.mainView}>
          <View style={styles.HeaderBg}>
              <Text style={styles.headertitle}>FAVORITES</Text>
          </View>
          <View style={styles.MainListBg}>
            <FlatList
              contentContainerStyle={styles.listContent}
              data={this.state.dataSource}
              renderItem={this._renderRow.bind(this)}
              enableEmptySections
              pageSize={4}
            />
          </View>
          <Loader loading={this.state.loading}/>
      </View>
      </SafeAreaProvider>
    );
  }
}
