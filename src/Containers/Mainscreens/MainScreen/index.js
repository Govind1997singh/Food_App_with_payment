import React, { useState } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { TextInput, View, TouchableOpacity, Text, Image, Alert, StyleSheet, Dimensions, ImageBackground } from 'react-native';;

export default class UserType  extends React.Component{

constructor(props){
    super(props)
this.state={
    
}
}
componentDidMount(){


    AsyncStorage.getItem('userLoginInfo').then((user) => {
        
      if (user !== null) {
        var userData = JSON.parse(user);
        //   console.log(user)
          if(userData.type == "Restaurant"){
            this.props.navigation.navigate("TabViewRes")
          }
          else if(userData.type == "DB"){
            this.props.navigation.navigate("TabViewDB")
          }
          else{
        this.props.navigation.navigate("TabView")
          }
      }
    
    })
  
}
render(){
    return(
        <View style={styles.mainview} >
            
            {/* <Image source={require("./../../../")} style={styles.image}/> */}
            <Image source={require("./../../../assets/images/Logo.png")} style={styles.image}/>
            <View>
                <Text style={styles.needs}>Who Needs App?</Text>
            </View>
            <TouchableOpacity style={styles.selectbtn} onPress={() => this.props.navigation.navigate('MainStackRestaurant')}>
                <Text style={styles.btntext}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectbtn} onPress={() => this.props.navigation.navigate('MainStackFood')}>
                <Text style={styles.btntext}>User</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectbtn} onPress={() => this.props.navigation.navigate('MainStackDB')}>
                <Text style={styles.btntext}>Delivery Boy</Text>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
    mainview: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        flex:1,
        paddingHorizontal:20,
        backgroundColor:"white"
        
    },
    image:{

        width:"60%",
        height:150,
        resizeMode:'contain',
        marginTop:100,
        alignSelf:'center',
    },
    needs:{
        fontSize:32,
        marginTop:50,
        color:"#f05522",
        fontWeight:'bold',
        textAlign:'center'
    },
    selectbtn:{
        backgroundColor:'#f05522',
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        borderRadius:25
    },
    btntext:{
        fontFamily: 'Poppins-SemiBold',
        fontSize:20,
        color:'white'
    }
})


