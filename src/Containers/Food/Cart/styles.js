
import { Platform, StyleSheet, StatusBar } from "react-native";
import { Metrics, Fonts } from "../../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop:StatusBar.currentHeight
  },

  header: {
    backgroundColor: "#f05522",
    height: Metrics.HEIGHT * 0.08,
    width:Metrics.WIDTH,
    alignItems:"center",
    justifyContent:"center"
  },

  
  headertitle: {
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "#ffffff",
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14),
      },
      android: {
        fontSize: Fonts.moderateScale(16),
      },
    }),
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
  },

  MainListBg: {
    backgroundColor: "#f5f5f5",
    width: Metrics.WIDTH ,
    // flex: 1,
  },

  mainRenderView: {
    paddingTop: Metrics.HEIGHT * 0.01,
    // paddingHorizontal: Metrics.HEIGHT * 0.01,
    backgroundColor: "#fff",
    
  },

  FoodImg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.HEIGHT * 0.1,
      },
      android: {
        width: Metrics.WIDTH * 0.17,
        height: Metrics.HEIGHT * 0.1,
      },
    }),
    borderRadius: 8,
    margin: Metrics.HEIGHT * 0.02,
  },

  FoodName: {
    color: "#262628",
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.6,
      },
      android: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.6,
      },
    }),
    marginTop: Metrics.HEIGHT * 0.02,
  },

  FoodDes: {
    color: "#4a4a4a",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(12),
    width: Metrics.WIDTH * 0.6,
    // marginTop: Metrics.HEIGHT * 0.01,
  },

  FoodMin: {
    color: "#c2c4ca",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(12),
    // marginTop: Metrics.HEIGHT * 0.01,
  },
  LocationMain:{
    color: "black",
    fontWeight:"bold",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.HEIGHT * 0.01,
  },

  borderHorizontal: {
    backgroundColor: "#ebeced",
    height: 1,
    width: Metrics.WIDTH,
    marginTop: Metrics.HEIGHT * 0.02,
  },
  bottomView:{
    margin:15,

  },
  locationView:{
    height:50,
    backgroundColor:"white",
    width:Metrics.WIDTH * 0.9,
    alignSelf:"center",
    borderRadius:5,
    alignItems:"center",
    flexDirection:"row",
    marginTop:10
  },
  locationimg:{
    height:25,
    width:25,
    marginRight:5
  },
  totalview:{
    flexDirection:"row",
    width:Metrics.WIDTH * 0.9,
    justifyContent:"space-between",
    marginTop:5 
  },
  textleft:{
    color:"gray"
  },

  BookTableMainBg: {
    width: Metrics.WIDTH * 0.9,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius:10,
    backgroundColor: "#f05522",
    
    
        height: Metrics.HEIGHT * 0.06
     
  },
  BookTableText: {
    color: "#fff",
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14)
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    }),
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
});

export default styles;
