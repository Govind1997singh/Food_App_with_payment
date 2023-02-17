// import { Platform, StyleSheet } from "react-native";
// import { Metrics, Fonts, Colors } from "../../../Themes";

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     backgroundColor: "orange",
//   },

//   mainImg: {
//     flex: 1,
//   },

//   logoImg: {
//     height: Metrics.HEIGHT * 0.15,
//     width: Metrics.WIDTH * 0.6,
//     alignSelf: "center",
//     resizeMode: "contain",
//     marginTop: Metrics.HEIGHT * 0.11,
//   },

//   middleMainView: {
//     width: Metrics.WIDTH * 0.85,
//     height: Metrics.HEIGHT * 0.55,
//     alignSelf: "center",
//     paddingTop: 30,
//   },

//   infoText: {
//     alignItems: "center",
//     fontSize: Fonts.moderateScale(16),
//     color: "#FFFFFF",
//     // fontFamily: Fonts.type.sfuiDisplayRegular,
//   },

//   firstDivider: {
//     height: 1,
//     backgroundColor: "#8C8C8C",
//     ...Platform.select({
//       ios: { marginTop: 15, marginBottom: 30 },
//       android: {
//         marginTop: 0,
//         marginBottom: 20,
//       },
//     }),
//   },

//   secondDivider: {
//     height: 1,
//     backgroundColor: "#8C8C8C",
//     ...Platform.select({
//       ios: { marginTop: 15 },
//       android: {
//         marginTop: 0,
//       },
//     }),
//   },

//   btnBg: {
//     width: Metrics.WIDTH * 0.85,
//     backgroundColor: "#f05522",
//     flexDirection: "row",
//     paddingVertical: 12,
//     borderRadius: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   btnText: {
//     // fontFamily: Fonts.type.sfuiDisplaySemibold,
//     fontSize: Fonts.moderateScale(15),
//     color: "#FFFFFF",
//   },

//   bottomMainView: {
//     alignItems: "center",
//     marginVertical: Metrics.HEIGHT * 0.03,
//   },

//   signUpText: {
//     // fontFamily: Fonts.type.sfuiDisplayRegular,
//     fontSize: Fonts.moderateScale(15),
//     color: "#FFFFFF",
//     marginTop: Metrics.HEIGHT * 0.03,
//   },
//   screenBg: {
//     flex: 1,
//     backgroundColor: 'black',
    
//   },

//   backArrow: {
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     backgroundColor: 'transparent',
//     width: 30,
//   },
//   header: {
//     backgroundColor: Colors.transparent,
//     height: Metrics.WIDTH * 0.15,
//     borderBottomWidth: 0,
//     ...Platform.select({
//       ios: {},
//       android: {
//         marginTop: Fonts.moderateScale(25),
//       },
//     }),
//     elevation: 0,
//   },
//   left: {
//     flex: 0.5,
//     backgroundColor: 'transparent',
//   },
//   right: {
//     flex: 0.5,
//     backgroundColor: 'transparent',
//   },
//   body: {
//     flex: 3,
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },

//   textTitle: {
//     color: 'white',
//     fontSize: Fonts.moderateScale(16),
//     alignSelf: 'center',
//     // fontFamily: Fonts.type.sfuiDisplaySemibold,
//     textAlign: 'center',
//     justifyContent: 'center',
//   },

//   container: {
//     alignItems: 'center',
//     justifyContent:"center",
//     flex: 1,
//   },
//   headertext: {
//     // fontFamily: Fonts.Bariol,
//     backgroundColor: 'transparent',
//     textAlign: 'center',
//     alignSelf: 'center',
//     fontSize: 20,
//     // width: Metrics.WIDTH * 0.9,
//     // color: '#ffffff',
//     color:"black"
//     // marginTop: Metrics.HEIGHT * 0.2,
//   },
//   desctext: {
//     // fontFamily: 'SFUIDisplay-Regular',
//     backgroundColor: 'transparent',
//     textAlign: 'center',
//     alignSelf: 'center',
//     fontSize: 16,
//     // width: Metrics.WIDTH * 0.9,
//     color: Colors.txtgrey,
//     marginTop: Metrics.WIDTH * 0.05,
//   },
//   form: {
//     alignSelf: 'center',
//     marginTop: Metrics.WIDTH * 0.03,
//   },
//   inputemail: {
//     textAlign: 'center',
//     // fontFamily: Fonts.SFUIDisplayRegular,
//     color: 'black',
//     borderRadius:10
//   },

//   buttongettext: {
//     alignSelf: 'center',
//     // fontFamily: 'SFUIDisplay-Semibold',
//     color: 'white',
//   },
// overlay:{
//   backgroundColor:"white",
//   alignSelf:'center',
//   // margin:50,
//   borderRadius:10,
//   padding:10,
//   paddingVertical:20,
//   elevation:3,
//   marginHorizontal:10
// },
//   item: {
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: Metrics.WIDTH * 0.8,
//     marginTop: Metrics.WIDTH * 0.01,
//     height: Metrics.WIDTH * 0.12,
//   },
//   btnget: {
//     backgroundColor: '#f05522',
//     alignSelf: 'center',
//     width: Metrics.WIDTH * 0.8,
//     marginTop: Metrics.WIDTH * 0.05,
//     height: Metrics.WIDTH * 0.12,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

// });

// export default styles;
import { StyleSheet, Dimensions,StatusBar, Platform } from "react-native";
import { Metrics, Fonts, Colors } from "../../../Themes";
 const styles = StyleSheet.create ({

    emptyImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: "center",
        marginTop: 30,
      },
      background: {
        flex: 1,
        backgroundColor: "#020c12",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
      
    
      fillImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: "center",
        marginTop: 30,
      },
    
      cameraIcon: {
        width: 21,
        height: 21,
        position: "absolute",
        right: 10,
        // top: 25,
        bottom:10
      },

  mainView: {
    flex: 1,
    backgroundColor: "orange",
  },

  mainImg: {
    flex: 1,
  },

  logoImg: {
    height: Metrics.HEIGHT * 0.15,
    width: Metrics.WIDTH * 0.6,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: Metrics.HEIGHT * 0.11,
  },

  middleMainView: {
    width: Metrics.WIDTH * 0.85,
    height: Metrics.HEIGHT * 0.55,
    alignSelf: "center",
    paddingTop: 30,
  },

  infoText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
  },

  firstDivider: {
    height: 1,
    backgroundColor: "#8C8C8C",
    ...Platform.select({
      ios: { marginTop: 15, marginBottom: 30 },
      android: {
        marginTop: 0,
        marginBottom: 20,
      },
    }),
  },

  secondDivider: {
    height: 1,
    backgroundColor: "#8C8C8C",
    ...Platform.select({
      ios: { marginTop: 15 },
      android: {
        marginTop: 0,
      },
    }),
  },

  btnBg: {
    width: Metrics.WIDTH * 0.85,
    backgroundColor: "#f05522",
    flexDirection: "row",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(15),
    color: "#FFFFFF",
  },

  bottomMainView: {
    alignItems: "center",
    marginVertical: Metrics.HEIGHT * 0.03,
  },

  signUpText: {
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(15),
    color: "#FFFFFF",
    marginTop: Metrics.HEIGHT * 0.03,
  },
  screenBg: {
    flex: 1,
    backgroundColor: 'black',
    
  },

  backArrow: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    width: 30,
  },
  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.WIDTH * 0.15,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {},
      android: {
        marginTop: Fonts.moderateScale(25),
      },
    }),
    elevation: 0,
  },
  left: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },
  right: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  textTitle: {
    color: 'white',
    fontSize: Fonts.moderateScale(16),
    alignSelf: 'center',
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    textAlign: 'center',
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    justifyContent:"center",
    flex: 1,
  },
  headertext: {
    // fontFamily: Fonts.Bariol,
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    // width: Metrics.WIDTH * 0.9,
    // color: '#ffffff',
    color:"black"
    // marginTop: Metrics.HEIGHT * 0.2,
  },
  desctext: {
    // fontFamily: 'SFUIDisplay-Regular',
    backgroundColor: 'transparent',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
    // width: Metrics.WIDTH * 0.9,
    color: Colors.txtgrey,
    marginTop: Metrics.WIDTH * 0.05,
  },
  form: {
    alignSelf: 'center',
    marginTop: Metrics.WIDTH * 0.03,
  },
  inputemail: {
    // textAlign: 'center',
    // fontFamily: Fonts.SFUIDisplayRegular,
    color: 'black',
    borderRadius:10
  },

  buttongettext: {
    alignSelf: 'center',
    // fontFamily: 'SFUIDisplay-Semibold',
    color: 'white',
  },
overlay:{
  backgroundColor:"white",
  alignSelf:'center',
  // margin:50,
  borderRadius:10,
  padding:10,
  paddingVertical:20,
  elevation:3,
  marginHorizontal:10
},
  item: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.8,
    marginTop: Metrics.WIDTH * 0.01,
    // height: Metrics.WIDTH * 0.12,
  },
  
  btnget: {
    backgroundColor: '#f05522',
    alignSelf: 'center',
    width: Metrics.WIDTH * 0.8,
    marginTop: Metrics.WIDTH * 0.05,
    height: Metrics.WIDTH * 0.12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },




    
})

export default styles;