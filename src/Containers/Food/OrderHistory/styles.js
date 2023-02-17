import { Platform, StyleSheet, StatusBar } from "react-native";
import { Metrics, Fonts } from "../../../Themes/";

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

  HeaderBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      android: {
        height: Metrics.HEIGHT * 0.13,
      },
    }),
  },

  MainListBg: {
    backgroundColor: "#f5f5f5",
    width:Metrics.WIDTH,
    marginBottom:110,
    // flex: 1,
  },

  mainRenderView: {
    margin: Metrics.HEIGHT * 0.02,
    marginBottom: Metrics.HEIGHT * 0.01,
    backgroundColor: "#fff",
    borderRadius: 3,
  },

  FoodImg: {
    height:60,
    width:50,
    borderRadius: 8,
    margin: Metrics.HEIGHT * 0.02,
  },

  FoodName: {
    color: "#262628",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(15),
        width: Metrics.WIDTH * 0.7,
      },
      android: {
        fontSize: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.7,
      },
    }),
    marginTop: Metrics.HEIGHT * 0.02,
  },

  FoodAdd: {
    color: "#c2c4ca",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
  },

  ratingStar: {
    height: Metrics.HEIGHT * 0.025,
    width: Metrics.HEIGHT * 0.025,
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  reviewText: {
    color: "#d4d6da",
    fontFamily: Fonts.type.sfuiDisplayRegular,
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
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.01,
  },

  MoneyText: {
    color: "#f05522",
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(17),
    alignSelf: "center",
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
