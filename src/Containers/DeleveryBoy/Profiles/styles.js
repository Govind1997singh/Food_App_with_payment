import { StyleSheet } from "react-native";
import { Metrics, Fonts } from "../../../Themes/";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  Settingicon: {
    position: "absolute",
    top: Metrics.HEIGHT * 0.05,
    alignSelf: "flex-end",
    right: Metrics.HEIGHT * 0.01,
  },

  ProfileBG: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.4,
  },

  MainProfileDetails: {
    width: Metrics.WIDTH,
    position: "absolute",
    bottom: Metrics.HEIGHT * 0.05,
    height: Metrics.HEIGHT * 0.1,
  },

  ProfileUserImg: {
    height: Metrics.HEIGHT * 0.11,
    width: Metrics.HEIGHT * 0.11,
    borderRadius: Metrics.HEIGHT * 0.05,
    marginLeft: Metrics.HEIGHT * 0.03,
  },

  ProfileUserName: {
    // fontFamily: Fonts.type.sfuiDisplaySemibold,
    color: "#FFFFFF",
    fontSize: Fonts.moderateScale(25),
    marginLeft: Metrics.HEIGHT * 0.02,
  },

  ProfileUserAdd: {
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    color: "#facab9",
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.02,
    marginTop: -Metrics.HEIGHT * 0.004,
  },

  OrderHistroyMainBg: {
    backgroundColor: "#fff",
    width: Metrics.WIDTH,

    padding: Metrics.HEIGHT * 0.02,
    alignSelf: "center",

    flexDirection: "row",
    justifyContent: "space-between",
  },

  OrderHistoryCircle: {
    height: Metrics.HEIGHT * 0.06,
    width: Metrics.HEIGHT * 0.06,
    borderRadius: Metrics.HEIGHT * 0.03,
    marginLeft: Metrics.HEIGHT * 0.02,
    justifyContent: "center",
  },

  OrderHistoryText: {
    color: "#262628",
    // fontFamily: Fonts.type.sfuiDisplayRegular,
    fontSize: Fonts.moderateScale(14),
    alignSelf: "center",
    marginLeft: Metrics.HEIGHT * 0.015,
  },

  MainProfileDetail: {
    marginTop: Metrics.HEIGHT * 0.02,
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: Metrics.WIDTH,
  },

  BorderHorizontal: {
    backgroundColor: "#ebeced",
    height: 1,
    width: Metrics.WIDTH,
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
