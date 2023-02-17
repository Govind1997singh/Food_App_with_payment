import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts } from "../../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:50
    
  },

  Welcome_mainBg: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH
  },

  ProfileImg: {
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.HEIGHT * 0.08,
    borderRadius: Metrics.HEIGHT * 0.04,
    borderWidth: 2,
    borderColor: "#fff"
  },

  profileNameText: {
    alignItems: "center",
    fontSize: Fonts.moderateScale(16),
    color: "#FFFFFF",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ProfileDesText: {
    marginLeft: Metrics.HEIGHT * 0.03,
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(40),
    marginTop: Metrics.HEIGHT * 0.07,
    width: Metrics.WIDTH * 0.7
  },

  SearchBg: {
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    alignSelf: "center",
    flexDirection: "row",
    // marginTop: Metrics.HEIGHT * 0.07
  },

  RestaurantsSearch: {
    width: Metrics.WIDTH * 0.7,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  SearchMainBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.06
      },
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    width: Metrics.WIDTH * 0.9,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: Metrics.HEIGHT * 0.04,
    justifyContent: "center"
  },
  listview:{
    width:"90%",
    // height:200,
    backgroundColor:"white",
    marginTop:10,
    borderRadius:10,
    elevation:1,
    margin:5,
    paddingBottom:10,
    alignSelf:"center"
  },
  searchText: {
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(13),
    alignSelf: "center",
    alignItems: "center"
  },
  heading:{
    marginLeft:10,
    fontSize:Fonts.moderateScale(24),
    fontWeight:"bold",
    marginTop:15
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
  },
  resname:{
    fontSize: Fonts.moderateScale(15),
    marginHorizontal:10,
    fontWeight:"bold",
    
    // alignSelf: "center",
    // alignItems: "center"
  },
  resadd:{
    fontSize: Fonts.moderateScale(13),
    marginHorizontal:10,
  },
  // hearticon:{
  //   height:25,
  //   width:25
  // }
  ratingStarGrid: {
    height: Metrics.HEIGHT * 0.022,
    width: Metrics.HEIGHT * 0.022,
    marginLeft: Metrics.HEIGHT * 0.01,
  },
  animatedView: {
    width:Metrics.WIDTH,
    backgroundColor: "#0a5386",
    elevation: 2,
    position: "absolute",
    bottom: 0,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
},
exitTitleText: {
    textAlign: "center",
    color: "#ffffff",
    marginRight: 10,
},
exitText: {
    color: "#e5933a",
    paddingHorizontal: 10,
    paddingVertical: 3
}
});

export default styles;
