import { Platform, StyleSheet, StatusBar } from "react-native";
import { Metrics, Fonts } from "../../../Themes/";
import colors from "../../../Themes/Colors";
import metrics from "../../../Themes/Metrics";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    marginBottom:70
    // marginTop:40
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
    // flex: 1,
    width:metrics.WIDTH ,
    // alignSelf:'center'
  },

  mainRenderView: {
    borderRadius: 12,
    // paddingLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.03,
    margin: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.01,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  // FoodImg: {
  //   ...Platform.select({
  //     ios: {
  //       width: Metrics.WIDTH * 0.2,
  //       height: Metrics.HEIGHT * 0.1,
  //     },
  //     android: {
  //       width: Metrics.WIDTH * 0.23,
  //       height: Metrics.HEIGHT * 0.13,
  //     },
  //   }),
  //   borderRadius: 8,
  //   margin: Metrics.HEIGHT * 0.02,
  // },

  FoodImg: {
    // ...Platform.select({
    //   ios: {
        width: Metrics.WIDTH * 0.2,
        height: Metrics.HEIGHT * 0.1,
      // },
      // android: {
      //   width: Metrics.WIDTH * 0.23,
      //   height: Metrics.HEIGHT * 0.13
      // }
    // }),
    borderRadius: 8,
    margin: Metrics.HEIGHT * 0.02
  },

  FoodName: {
    color: "#262628",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.6,
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.6,
      },
    }),
    marginTop: Metrics.HEIGHT * 0.02,
  },

  FoodDes: {
    color: "#4a4a4a",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    width: Metrics.WIDTH * 0.6,
    marginTop: Metrics.HEIGHT * 0.01,
  },

  FoodMin: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(12),
    marginTop: Metrics.HEIGHT * 0.01,
  },

  borderHorizontal: {
    backgroundColor: "#ebeced",
    height: 1,
    width: Metrics.WIDTH,
    marginTop: Metrics.HEIGHT * 0.02,
  },
  cross:{
    width: Metrics.WIDTH * 0.6,
    alignItems:'center',
    justifyContent:'center',
    height:40
  },
  ContactMainBg: {
    justifyContent: "center",
    alignItems:'center',
    backgroundColor: colors.main,
    marginRight: Metrics.HEIGHT * 0.02,
    borderRadius: 4,
    marginTop: 10,
    flexDirection: "row",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.WIDTH * 0.3
      },
      android: {
        height: Metrics.HEIGHT * 0.055,
        width: Metrics.WIDTH * 0.35
      }
    })
  },
  MoneyText: {
    color: colors.main,
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14)
  },

  horizontalBorder: {
    // borderHorizontal: {
      backgroundColor: "#ebeced",
      width: Metrics.WIDTH * 0.9,
      height: 1
    // },
  },
  editText:{
    color:"white"
  }


});

export default styles;
