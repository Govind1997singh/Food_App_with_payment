import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Linking,
  BackHandler,
  Alert,
  Platform,
  ScrollView,
} from "react-native";
import {
  Text,
  Container,
  Body,
  Content,
  Header,
  Title,
  Left,
  Right,
  NativeBaseProvider
} from "native-base";

import styles from "./styles";
import { Images, Metrics } from "../../../Themes/";
import Modal from "react-native-modal";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      user_Back: "false",
    };
  }
  componentWillMount() {
    console.log("componentWillMount=======");

    BackHandler.addEventListener("hardwareBackPress", function () {
      Alert.alert(
        "Quit App?",
        "Are you sure you want to exit App?",
        [
          { text: "Yes", onPress: () => BackHandler.exitApp() },
          { text: "No", onPress: () => true },
        ],
        { cancelable: true }
      );
      return true;
    });

    AsyncStorage.multiGet(["user_Back"]).then((data) => {
      console.log(data[0][1]);
      if (data[0][1] != null) {
        this.setState({ user_Back: data[0][1] });
      } else {
        this.setState({ user_Back: "true" });
      }
    });

    AsyncStorage.multiSet([["ScreenName", "FirstScreen"]]);
  }

  componentDidMount() {
    this.setState({ isModalVisible: true });
  }

  _toggleModal = () => this.setState({ isModalVisible: false });

  _moveToFood() {
    this.props.navigation.navigate("MainStackFood");
  }

  render() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    return (
      // <Text>Hello</Text>
      <NativeBaseProvider>
      <Container style={styles.container}>
        <View style={styles.header}>
          {/* <StatusBar barStyle="light-content" backgroundColor="grey" />
          <Left style={styles.left} />

          <Body style={styles.body}>
            <Title>Antiqueruby</Title>
          </Body>

          <Right style={styles.right} /> */}
        </View>

        <View style={styles.mainView}>
          {/* <Content> */}
            <View style={styles.btnsec}>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => this._moveToFood()}
              >
                <Text style={styles.buttonText}>Food Material UI</Text>
              </TouchableOpacity>
            </View>
          {/* </Content> */}
        </View>

        {/* {this.state.user_Back == "true" ? (
          <Modal
            isVisible={this.state.isModalVisible}
            style={styles.successMessage}
            onBackdropPress={() => this._toggleModal()}
            onBackButtonPress={() => this._toggleModal()}
            onRequestClose={() => this._toggleModal()}
          >
            <TouchableOpacity
              style={styles.bannerView}
              onPress={() =>
                Linking.openURL(
                  "https://codecanyon.net/item/antiqueruby-react-native/21331228?s_rank=3"
                ).catch((err) => console.error("An error occurred", err))
              }
            >
              <Image source={Images.bannerHome} style={styles.banner} />
              <TouchableOpacity
                onPress={() => this._toggleModal()}
                style={{
                  position: "absolute",
                  top: Metrics.HEIGHT * 0.015,
                  left: Metrics.HEIGHT * 0.002,
                  padding: Metrics.HEIGHT * 0.01,
                }}
              >
                <AntDesign name="closecircle" size={25} />
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        ) : null} */}
      </Container>
      </NativeBaseProvider>
    );
  }
}
