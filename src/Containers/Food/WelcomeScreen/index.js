import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  TextInput,
  ScrollView,
  FlatList,
  Animated
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Rating from "react-native-rating";
import { auth, firestore, storage } from 'firebase';
import { SliderBox } from "react-native-image-slider-box";
import { Metrics, Images } from "../../../Themes";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Loader from "../../../Components/Loader";
import metrics from "../../../Themes/Metrics";

const Welcome_mainBg =
  "http://antiquerubyreact.aliansoftware.net/all_live_images/Welcome_mainBg.png";

export default class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(100);

    this.state = {
      res: [],
      offer: [],
      backClickCount: 0,
      user: [],
      uid: '',
      loading: false
    };
  }
  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    this.setState({ loading: true })
    // const { navigation } = this.props;
    // this.focusListener = navigation.addListener("didFocus", () => {
    //   await this.getrestaurant()
    //   // this.getOrderHistory(userData.uid)
    // });
    const { navigation } = this.props;
    await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
      var userData = JSON.parse(user);
      //  await setuid(userData.uid)
      this.setState({ user: userData })
      this.setState({ uid: userData.uid })
    })
    this.focusListener = navigation.addListener("didFocus", async () => {
      await AsyncStorage.getItem('userLoginInfo').then(async (user) => {
        var userData = JSON.parse(user);
        //  await setuid(userData.uid)
        this.setState({ user: userData })
        this.setState({ uid: userData.uid })

        this.getrestaurant()
      });
    })
    await this.getOffer()
    await this.getrestaurant()
    
    this.setState({ loading: false })
  }

  componentWillUnmount() {
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


  favoritePostClick1(FoodId) {
    var FoodDetails = this.state.res
    for (var i = 0; i < FoodDetails.length; i++) {
      if (FoodDetails[i].id == FoodId) {
        var newArray1 = [];

        for (var i = 0; i < FoodDetails.length; i++) {
          if (FoodDetails[i].id == FoodId) {
            newArray1.push({
              ...FoodDetails[i],
              is_Favorite: !FoodDetails[i].is_Favorite,
            });
            if (FoodDetails[i].is_Favorite == false) {
              const usersCollection = firestore().collection('allusers').doc(this.state.uid).collection("Favorites")
              usersCollection.doc(FoodId).set({ ...FoodDetails[i] })
            } else {
              const usersCollection = firestore().collection('allusers').doc(this.state.uid).collection("Favorites")
              usersCollection.doc(FoodId).delete()
            }
          } else {
            newArray1.push({
              ...FoodDetails[i],
              is_Favorite: FoodDetails[i].is_Favorite,
            });
          }
        }

        FoodDetails = newArray1;
        this.setState({ res: FoodDetails });
      }
    }
  }

  handleBackPress = () => {
    // this.props.navigation.navigate("FoodLogin");
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
  };
  getrestaurant = async () => {
    const array = []
    var array1 = []
    await firestore().collection('allusers').doc(this.state.uid).collection('Favorites')

      .get()
      .then((querySnapshot) => {

        querySnapshot.forEach((docUser) => {
          array1.push(docUser.data().id)


        })
      })
    await firestore().collection('restaurent')
      .get()
      .then(async (querySnapshot) => {

        await querySnapshot.forEach(async (docUser) => {
          // console.log(docUser.data().id)
          const found = array1.filter(obj => {
            return obj === docUser.data().id
          })
          // alert(docUser.data().address.includes("gf"))
          // if(docUser.data().address.includes(this.state.user.city)){
          //   alert(docUser.data().address)
          // }else{
          //   alert("not")
          // }
          if (docUser.data().address.includes(this.state.user.city)) {

            if (found == "") {

              array.push({ ...docUser.data(), is_Favorite: false })
            } else {
              array.push({ ...docUser.data(), is_Favorite: true })
            }
          }
          // console.log(docUser.data())
          // })
          // array.push({...docUser.data(),is_Favorite : isFavorites})
        })
        this.setState({ res: array })
        // this.setState({loading:false})
      })

  }
  getOffer = async () => {
    const array = []
    await firestore().collection('offer')
      .get()
      .then((querySnapshot) => {

        querySnapshot.forEach((docUser) => {
          array.push(docUser.data().image)
          // console.log(docUser.data())
        });
        this.setState({ offer: array })
      })
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#000000", true);
      StatusBar.setTranslucent(true);
    }
    return (
      <View style={styles.mainView}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          // scrollEnabled={false}
          enableAutomaticScroll={false}
          enableAutoAutomaticScrol="true"
          enableOnAndroid={true}
        >
          <ScrollView>

            <View style={{ ...styles.SearchBg, borderWidth: 1, marginVertical: 10, borderColor: "#f05522", height: 50, display: 'flex' }}>
              <AntDesign
                name="search1"
                size={20}
                color="#c2c4ca"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.015,
                }}
              />
              {/* <TextInput
                style={styles.RestaurantsSearch}
                maxLength={40}
                placeholder="Search for address,food.."
                placeholderTextColor="#c2c4ca"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="done"
                
              /> */}
              <TouchableOpacity style={styles.RestaurantsSearch} onPress={() => this.props.navigation.navigate("WelcomeScreenSearch")}>
                <Text style={{ color: "#c2c4ca" }}>Search for address,Restaurant..</Text>
              </TouchableOpacity>
              <Entypo
                name="location-pin"
                size={25}
                color="#f05522"
                style={{
                  alignSelf: "center",
                  marginLeft: Metrics.HEIGHT * 0.01,
                }}
              />
            </View>

            <SliderBox
              dotColor="#f05522"
              images={this.state.offer}
              onCurrentImagePressed={index => alert(`offer ${index + 1} pressed`)}
              // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
              autoplay
              ImageComponentStyle={{ borderRadius: 5, width: '97%', marginTop: 5, resizeMode: "stretch" }}

              circleLoop
            />
            <Text style={styles.heading}>Featued restaurants</Text>
            {this.state.res.length>0?
            <FlatList
              nestedScrollEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{ marginTop: 20 }}
              data={this.state.res}
              extraData={this.state.res}
              renderItem={({ item, index }) =>
              // keyExtractor={(item) => item.id}
              (
                <View style={styles.listview}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ProductDetails", { item: item })}
                    activeOpacity={0.5}
                  >
                    <ImageBackground source={{ uri: item.img }} style={{ width: 148, marginTop: 1, height: 150, alignSelf: "center" }} imageStyle={{
                      resizeMode: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10
                    }}>

                      {item.is_Favorite == true ? (
                        <TouchableOpacity
                          underlayColor="transparent"
                          onPress={() => {
                            this.favoritePostClick1(item.id);
                          }}
                          style={styles.hearticon}
                        >
                          <AntDesign
                            name="heart"
                            size={23}
                            color="#f05522"
                            style={{ alignSelf: "flex-end", top: 5, right: 10 }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.hearticon}
                          underlayColor="transparent"
                          onPress={() => {
                            this.favoritePostClick1(item.id);
                          }}
                        >
                          <AntDesign
                            name="heart"
                            size={25}
                            color="#ffffff"
                            style={{ alignSelf: "flex-end", top: 5, right: 10 }}
                          />
                        </TouchableOpacity>
                      )}

                    </ImageBackground>
                    <Text style={styles.resname}>{item.name}</Text>
                    <Text style={styles.resadd}>{item.address}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: Metrics.HEIGHT * 0.01,
                        // marginLeft: Metrics.HEIGHT * 0.01,
                        marginTop: 5
                      }}
                    >
                      <Rating
                        initial={item.rating}
                        onChange={(rating) => console.log(rating)}
                        selectedStar={Images.seletedstar}
                        unselectedStar={Images.starEmpty1}
                        // config={{
                        //   easing: Easing.inOut(Easing.ease),
                        //   duration: 350,
                        // }}
                        stagger={80}
                        maxScale={2.4}
                        starStyle={styles.ratingStarGrid}
                        editable={false}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />:this.state.loading?null:
            <Text style={{textAlign:"center", marginTop:15}}>No Restaurant Found</Text>
                    }
            <Text style={styles.heading}>Recommended for you</Text>
            {this.state.res.length>0?
            <FlatList
              nestedScrollEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              // contentContainerStyle={{ marginTop: 20 }}
              data={this.state.res}
              extraData={this.state.res}
              renderItem={({ item, index }) =>
              // keyExtractor={(item) => item.id}
              (
                <View style={styles.listview}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("ProductDetails", { item: item })}
                    activeOpacity={0.5}
                  >
                    <ImageBackground source={{ uri: item.img }} style={{ width: 148, marginTop: 1, height: 150, alignSelf: "center" }} imageStyle={{
                      resizeMode: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10
                    }}>

                      {item.is_Favorite == true ? (
                        <TouchableOpacity
                          underlayColor="transparent"
                          onPress={() => {
                            this.favoritePostClick1(item.id);
                          }}
                          style={styles.hearticon}
                        >
                          <AntDesign
                            name="heart"
                            size={23}
                            color="#f05522"
                            style={{ alignSelf: "flex-end", top: 5, right: 10 }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.hearticon}
                          underlayColor="transparent"
                          onPress={() => {
                            this.favoritePostClick1(item.id);
                          }}
                        >
                          <AntDesign
                            name="heart"
                            size={25}
                            color="#ffffff"
                            style={{ alignSelf: "flex-end", top: 5, right: 10 }}
                          />
                        </TouchableOpacity>
                      )}
                    </ImageBackground>
                    <Text style={styles.resname}>{item.name}</Text>
                    <Text style={styles.resadd}>{item.address}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: Metrics.HEIGHT * 0.01,
                        // marginLeft: Metrics.HEIGHT * 0.01,
                        marginTop: 5
                      }}
                    >
                      <Rating
                        initial={item.rating}
                        onChange={(rating) => console.log(rating)}
                        selectedStar={Images.seletedstar}
                        unselectedStar={Images.starEmpty1}
                        // config={{
                        //   easing: Easing.inOut(Easing.ease),
                        //   duration: 350,
                        // }}
                        stagger={80}
                        maxScale={2.4}
                        starStyle={styles.ratingStarGrid}
                        editable={false}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
:this.state.loading?null:
<Text style={{textAlign:"center", marginTop:15}}>No Restaurant Found</Text>
}
          </ScrollView>
          {/* <TouchableOpacity
              style={styles.SearchMainBg}
              onPress={() => this.props.navigation.navigate("SearchResultOne")}
            >
              <Text style={styles.searchText}>SEARCH</Text>
            </TouchableOpacity> */}
          {/* </ImageBackground> */}
        </KeyboardAwareScrollView>
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
    );
  }
}
