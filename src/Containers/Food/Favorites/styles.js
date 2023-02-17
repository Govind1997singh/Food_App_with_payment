import { Platform, StyleSheet, StatusBar } from "react-native";
import { Metrics, Fonts } from "../../../Themes/";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    marginBottom:60
  },

  HeaderBg: {
    backgroundColor: "#f05522",
    ...Platform.select({
      android: {
        height: Metrics.HEIGHT * 0.08
      }
    }),
    
    // marginTop:60,
    // alignItems:"center",
    justifyContent:"center"
  },

  leftheader: {
    flex: 1
  },

  body: {
    flex: 3
  },

  right: {
    flex: 1
  },

  headertitle: {
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    color: "#ffffff",
    fontWeight: "normal",
    ...Platform.select({
      ios: {
        fontSize: Fonts.moderateScale(14)
      },
      android: {
        fontSize: Fonts.moderateScale(16)
      }
    }),
    fontFamily: Fonts.type.sfuiDisplaySemibold
  },

  MainListBg: {
    backgroundColor: "#f5f5f5",
    // flex: 1
  },

  mainListRenderRow: {
    backgroundColor: "#fff",
    alignSelf:"center",
    width: Metrics.WIDTH * 0.93,
    borderRadius: 2,
    marginTop: Metrics.HEIGHT * 0.02,
    shadowColor: "#f9f9f9",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.1,
    marginBottom: Metrics.HEIGHT * 0.01
  },

  Foodimg: {
    width: Metrics.WIDTH * 0.93,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.22,
        borderRadius: 2
      },
      android: {
        height: Metrics.HEIGHT * 0.3,
        borderRadius: 2
      }
    })
  },

  FoodDetailsText: {
    color: "#262628",
    fontFamily: Fonts.type.sfuiDisplaySemibold,
    fontSize: Fonts.moderateScale(16),
    marginTop: Metrics.HEIGHT * 0.02,
    marginLeft: Metrics.HEIGHT * 0.02
  },

  FoodANameText: {
    color: "#d4d6da",
    fontFamily: Fonts.type.sfuiDisplayRegular,
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
    fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.01
  },

  hearticon: {
    position: "absolute",
    top: 0,
    alignSelf: "flex-end"
  }
});

export default styles;
