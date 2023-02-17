import { Platform, StyleSheet, StatusBar } from "react-native";
import { Metrics, Fonts } from "../../../Themes/";

const styles = StyleSheet.create({
  mainview: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    
    backgroundColor: "#f5f5f5"
  },

  mainContentView: {
    width: Metrics.WIDTH,
    backgroundColor: "#f5f5f5",
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.93
      },
      android: {
        height: Metrics.HEIGHT * 0.9 - StatusBar.currentHeight
      }
    })
  },

  swiperMainView: {
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.35
      },
      android: {
        height: Metrics.HEIGHT * 0.43
      }
    }),
    width: Metrics.WIDTH
  },

  dot: {
    backgroundColor: "#bd8463",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },

  activeDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },

  left: {
    flex: 2
  },

  body: {
    alignItems: "center"
  },

  backArrow: {
    width: 30,
    justifyContent: "center",
    alignItems: "flex-start"
  },

  header: {
    backgroundColor: "transparent",
    height: 65,
    width: Metrics.WIDTH,
    flexDirection: "row",
    borderBottomColor: "transparent",
    marginTop: Metrics.HEIGHT * 0.02,
    elevation: 0
  },

  FoodDetailsText: {
    color: "#262628",
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(18)
      },
      android: {
        fontSize: Fonts.moderateScale(20)
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02
  },

  FoodANameText: {
    color: "#d4d6da",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.02
  },
  FoodANameText1: {
    // color: "#d4d6da",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.02
  },
  

  ratingStar: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  reviewText: {
    color: "#d4d6da",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.01
  },

  borderHorizontal: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1
  },

  OPENInText: {
    color: "#c2c4ca",
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    marginLeft: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.02
  },

  ContactMainBg: {
    justifyContent: "center",
    backgroundColor: "#c2c4ca",
    marginRight: Metrics.HEIGHT * 0.02,
    borderRadius: 4,
    marginTop: Metrics.HEIGHT * 0.03,
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

  TimeText: {
    color: "#262628",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(17),
    marginLeft: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.01
  },

  ContactText: {
    color: "#262628",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(15),
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.01
  },

  PhotoMainView: {
    width: Metrics.WIDTH,
    backgroundColor: "#fff",
    marginTop: Metrics.HEIGHT * 0.02
  },

  mainRenderView: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.25,
        height: Metrics.HEIGHT * 0.13
      },
      android: {
        width: Metrics.WIDTH * 0.33,
        height: Metrics.HEIGHT * 0.18
      }
    }),
    borderRadius: 12,
    paddingLeft: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.03
  },

  PhotoImg: {
    ...Platform.select({
      ios: {
        width: Metrics.WIDTH * 0.25,
        height: Metrics.HEIGHT * 0.13
      },
      android: {
        width: Metrics.WIDTH * 0.33,
        height: Metrics.HEIGHT * 0.18
      }
    }),
    borderRadius: 12
  },

  MapView: {
    width: Metrics.WIDTH,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.25
      },
      android: {
        height: Metrics.HEIGHT * 0.35
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02
  },

  DesMainView: {
    width: Metrics.WIDTH,
    backgroundColor: "#fff"
  },

  descTxt: {
    color: "#262628",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16)
  },

  viewmore: {
    color: "#f05522"
  },

  desc: {
    marginHorizontal: Metrics.HEIGHT * 0.02,
    marginVertical: Metrics.HEIGHT * 0.01
  },

  MenuMainView: {
    width: Metrics.WIDTH,
    backgroundColor: "#fff",
    marginTop: Metrics.HEIGHT * 0.02
  },

  SeeAllCatText: {
    color: "#f05522",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.HEIGHT * 0.02,
    marginRight: Metrics.HEIGHT * 0.02
  },

  FoodImg: {
        width: 50,
        height: 50,
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
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.7
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.6
      }
    }),
    marginTop: Metrics.HEIGHT * 0.02
  },

  MoneyText: {
    color: "#c2c4ca",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14)
  },

  horizontalBorder: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.01
  },

  Viewmore: {
    color: "#c2c4ca",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(18),
    alignSelf: "center",
    marginBottom: Metrics.HEIGHT * 0.02
  },

  ReviewsMainView: {
    width: Metrics.WIDTH,
    backgroundColor: "#fff",
    marginTop: Metrics.HEIGHT * 0.02
  },

  ReviewsImg: {
    height: Metrics.HEIGHT * 0.08,
    width: Metrics.HEIGHT * 0.08,
    borderRadius: Metrics.HEIGHT * 0.04,
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ReviewsName: {
    color: "#4a4a4a",
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    marginLeft: Metrics.HEIGHT * 0.02,
    marginTop: Metrics.HEIGHT * 0.02
  },

  ReviewsHours: {
    color: "#c2c4ca",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginTop: Metrics.HEIGHT * 0.01,
    marginLeft: Metrics.HEIGHT * 0.02
  },

  ReviewDes: {
    color: "#4a4a4a",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(16),
    marginTop: Metrics.HEIGHT * 0.01,
    marginLeft: Metrics.HEIGHT * 0.02,
    width: Metrics.WIDTH * 0.7
  },

  HorizontalLine: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1,
    marginTop: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02
  },

  BookTableMainBg: {
    width: Metrics.WIDTH,
    alignSelf: "center",
    justifyContent: "center",

    backgroundColor: "#f05522",

    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.08
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.01,
        height: Metrics.HEIGHT * 0.1
      }
    })
  },

  BookTableMainBg1: {
    width: Metrics.WIDTH/2,
    // alignSelf: "center",
    justifyContent: "center",
borderRadius:5,
    backgroundColor: "#f05522",
marginTop:10,
marginBottom:10,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.05
      },
      android: {
        marginTop: Metrics.HEIGHT * 0.01,
        height: Metrics.HEIGHT * 0.05
      }
    })
  },
  HeaderBg: {
    backgroundColor: "#F05522",
    ...Platform.select({
      ios: { height: Metrics.HEIGHT * 0.12 }
    })
  },
  BookTableText: {
    color: "#fff",
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15)
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    }),
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  mainRenderView: {
    margin: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.01,
    backgroundColor: "#fff",
    borderRadius: 3,
  },

  FoodAdd: {
    color: "#c2c4ca",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
  },

  ratingStar: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  reviewText: {
    color: "#d4d6da",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  borderHorizontal: {
    backgroundColor: "#ebeced",
    width: Metrics.WIDTH,
    height: 1,
  },

  DateTimeMainView: {
    flexDirection: "row",
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.02,
  },

  DateTimeText: {
    color: "#262628",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  MoneyText: {
    color: "#f05522",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    // fontSize: Fonts.moderateScale(17),
    alignSelf: "center",
  },


});

export default styles;
