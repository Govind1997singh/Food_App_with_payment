import { Dimensions, Platform, StatusBar } from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const style = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  onBoardTopImage: {
    width: WIDTH,
    height: HEIGHT / 2.3,
    alignSelf: "center",
    marginTop: 40,
  },

  onbaordBottomBackground: {
    width: 355,
    height: 375,
    alignSelf: "center",
    marginTop: 35,
  },

  onboardBackTitle: {
    fontSize: 31,
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    lineHeight: 38,
    textAlign: "center",
    marginTop: 35,
  },
  onBoardBackDescription: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginTop: 15,
  },

  onBoardButtonContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    width: 250,
    height: 75,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(156, 121, 255, 0.5",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    color: "#7174FE",
    fontFamily: "PoppinsSemiBold",
  },

  arrowBackContainer: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },

  arrowBack: {
    width: 24,
    height: 24,
  },
  screenTitle: {
    fontSize: 40,
    lineHeight: 44,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    marginTop: 90,
    paddingHorizontal: 20,
  },

  textinputMainConatiner: {
    marginTop: 40,
  },

  forgotPasswordText: {
    color: "#0A0A0A",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    lineHeight: 22,
    alignSelf: "flex-end",
    paddingRight: 20,
  },
  footertext: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: "#0A0A0A",
    lineHeight: 22,
    textAlign: "center",
    marginTop: 20,
  },

  createNewPasswordDescription: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    color: "#757575",
    textAlign: "left",
    paddingHorizontal: 20,
    marginTop: 15,
  },

  emailTitle: {
    fontSize: 32,
    lineHeight: 38,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    marginTop: 100,
    textAlign: "center",
  },

  emailsentdescription: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "PoppinsRegular",
    color: "#757575",
    textAlign: "center",
    marginTop: 15,
  },
  emailSentIcon: {
    width: 162,
    height: 189,
    alignSelf: "center",
    marginTop: 48,
  },

  inputMainContainer: {
    width: WIDTH - 40,
    height: 68,
    backgroundColor: "#F0F5FE",
    borderRadius: 15,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 20,
  },

  textinputIcon: {
    width: 24,
    height: 24,
    marginLeft:Platform.OS==='android'?0:10,
  },

  input: {
    width: WIDTH - 120,
    height: 60,
    paddingHorizontal: 12,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    marginTop: 4,
  },

  verifyPasswordText: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    lineHeight: 22,
    fontWeight: "400",
    color: "#757575",
    marginLeft: 20,
    marginTop: 20,
  },

  forgotYourPasswordText: {
    marginTop: 21,
    lineHeight: 22,
    color: "#0A0A0A",
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
  },
  termsofServiceText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#000000",
    fontFamily: "PoppinsRegular",
    marginLeft: 28,
    marginTop: 30,
  },
  settingsListViewMainConatiner: {
    marginTop: 52,
  },

  modalContainer2: {
    width: WIDTH - 64,
    height: 204,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  modalLogoutText: {
    fontSize: 23,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginTop: 16,
  },

  modalLogoutDescriptiom: {
    fontSize: 16,
    color: "#757575",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginTop: 5,
  },

  logoutButton: {
    width: "45%",
    height: 54,
    backgroundColor: "#D83232",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation:3,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
  },

  logOutButtonText: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "PoppinsSemiBold",
    color: "#fff",
  },
  logoutModalButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
  arrowBackContainer: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },

  arrowBack: {
    width: 24,
    height: 24,
  },

  resetDescription: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    color: "#757575",
    textAlign: "left",
    marginTop: 15,
    alignSelf: "center",
    fontWeight: "400",
  },
  textinputMainConatiner: {
    marginTop: 40,
  },
  invitedUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    marginTop: 49,
  },
  invitedUserText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PoppinsSemiBold",
    color: "#0A0A0A",
  },
  seelAllText: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    lineHeight: 22,
    color: "#9C79FF",
  },

  termsofServiceText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#000000",
    fontFamily: "PoppinsRegular",
    marginLeft: 28,
    marginTop: 30,
  },
  newUserText: {
    color: "#0A0A0A",
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 22,
    marginLeft: 22,
    marginTop: 25,
  },
  newUserText: {
    color: "#0A0A0A",
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 22,
    marginLeft: 22,
    marginTop: 25,
  },

  SettingListViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 23,
    paddingRight: 20,
    justifyContent: "space-between",
    marginBottom: 41,
  },

  settingsListLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  settingslistTitle: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PoppinsSemiBold",
    color: "#616161",
    marginLeft: 20,
  },
  profileInfoContainer: {
    width: WIDTH - 34,
    height: 223,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 93,
  },

  personNameText: {
    fontSize: 24,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 28,
    color: "#fff",
    textAlign: "center",
    marginTop: 52,
  },

  profileDescription: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  yourRankText: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    lineHeight: 22,
    color: "#fff",
  },
  rankNumberText: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  rankInvitedConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 43,
    marginTop: 25,
  },

  verticalSeprator: {
    width: 1,
    height: 59,
    backgroundColor: "#F5F5F5",
  },

  profileImage: {
    width: 119,
    height: 119,
    borderWidth: 10,
    borderColor: "#7D8DFE",
    borderRadius: 70,
    position: "absolute",
    zIndex: 99999,
    alignSelf: "center",
    top: 14,
  },
  overViewHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 22,
    paddingRight: 27,
    paddingTop: 23,
  },

  welcometext: {
    fontSize: 16,
    lineHeight: 22,
    color: "#757575",
    fontFamily: "PoppinsRegular",
  },
  nameText: {
    fontSize: 24,
    fontFamily: "PoppinsSemiBold",
    color: "#0A0A0A",
    lineHeight: 28,
    marginTop: 2,
  },

  headerProfileImage: {
    width: 42,
    height: 42,
    borderRadius: 15,
  },

  overviewGraphContainer: {
    width: WIDTH - 41,
    height: 382,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  graphdaytimePickerContainer: {
    width: 100,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 31,
    marginLeft: 13,
    padding: 0,
  },
  imagePickerMainConatiner: {
    alignSelf: "center",
    marginTop: 46,
  },
  faqscontainer: {
    width: WIDTH - 40,
    padding: 21,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 18,
    alignSelf: "center",
    marginBottom: 20,
  },

  questionText: {
    fontSize: 13,
    color: "#0A0A0A",
    fontFamily: "PoppinsSemiBold",
    lineHeight: 21,
    marginHorizontal: 10,
  },

  faqQuestionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  faqAnswerText: {
    fontSize: 11,
    lineHeight: 18,
    color: "#757575",
    fontFamily: "PoppinsRegular",
    paddingHorizontal: 38,
    marginTop: 14,
  },

  commonHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  arrowBackContainer: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 20,
  },
  arrowBack: {
    width: 24,
    height: 24,
  },

  profileText: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    color: "#0A0A0A",
    left: 5,
  },

  userlistViewMainContainer: {
    width: WIDTH - 42,
    height: 81,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 19,
    marginBottom: 15,
  },

  userlistLeftnumberContainer: {
    width: 31,
    height: 31,
    borderRadius: 20,
    backgroundColor: "#D193DC",
    justifyContent: "center",
    alignItems: "center",
  },

  userlistLeftnumberText: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "PoppinsSemiBold",
    color: "#fff",
  },
  upgreen: {
    width: 9,
    height: 9,
    position: "absolute",
    bottom: -11,
    left: 10,
  },

  userProfilenameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 190,
  },

  newuserName: {
    fontSize: 16,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 22,
    color: "#0A0A0A",
    position: "absolute",
    left: 65,
  },

  userPriceText: {
    fontSize: 14,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 21,
    color: "#00AD4B",
  },
  myprofileInputHeading: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    color: "#757575",
    marginHorizontal: 24,
    marginBottom: 15,
  },
  promotionText: {
    fontSize: 19,
    lineHeight: 24,
    color: "#0A0A0A",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginTop: 30,
  },

  inviteFriendsDescription: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
    color: "#0A0A0A",
    marginTop: 8,
  },

  personalCodeContainer: {
    width: WIDTH - 40,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#F0F5FE",
    borderWidth: 1,
    borderColor: "#9C79FF",
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },

  personalCodeText: {
    fontSize: 19,
    color: "#0A0A0A",
    fontFamily: "PoppinsSemiBold",
    lineHeight: 24,
  },
  copyButton: {
    width: 130,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  copyText: {
    fontSize: 19,
    color: "#F0F5FE",
    fontFamily: "PoppinsSemiBold",
    lineHeight: 24,
  },

  orText: {
    fontSize: 20,
    lineHeight: 24,
    color: "#000",
    fontFamily: "PoppinsRegular",
    marginTop: 20,
    textAlign: "center",
  },

  sociaButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  statisticsText: {
    fontSize: 16,
    color: "#000",
    lineHeight: 22,
    fontFamily: "PoppinsSemiBold",
    marginHorizontal: 20,
    marginTop: 40,
  },

  statisticsContainer: {
    width: WIDTH - 40,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  friendsInvitedText: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    color: "#000",
    marginLeft: 20,
  },
  statisticsLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  invitedFriendscounterButton: {
    width: 60,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#FD7651",
    justifyContent: "center",
    alignItems: "center",
  },

  invitedfrindsNumber: {
    fontSize: 19,
    lineHeight: 24,
    fontFamily: "PoppinsSemiBold",
    color: "#fff",
  },
  pricingText: {
    fontSize: 20,
    lineHeight: 24,
    color: "#0A0A0A",
    fontFamily: "PoppinsSemiBold",
    marginTop: 30,
    textAlign: "center",
  },
  modalContainer: {
    width: WIDTH,
    height: 470,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
    position: "absolute",
    bottom: -20,
  },

  modalpackageText: {
    fontSize: 23,
    lineHeight: 28,
    fontFamily: "PoppinsSemiBold",
    color: "#0A0A0A",
  },

  modalPackageDescription: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
    color: "#757575",
  },

  changebuttonContainer: {
    width: 97,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  changebuttonText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
  },

  packageModalTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 35,
  },
  pricingCardbuttonContainer: {
    width: WIDTH - 40,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  pricingcardbuttonText: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
    fontFamily: "PoppinsSemiBold",
  },

  flatlistListContainer: {
    width: WIDTH - 40,
    height: 75,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  packagelisttitle: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: "PoppinsSemiBold",
    color: "#0A0A0A",
  },

  packagelistSubtitle: {
    fontSize: 11,
    fontFamily: "PoppinsRegular",
    lineHeight: 18,
    color: "#C2C2C2",
  },

  modalPackagePriceText: {
    fontSize: 19,
    lineHeight: 24,
    color: "#C2C2C2",
    fontFamily: "PoppinsRegular",
  },
  selectyourBank: {
    fontSize: 15,
    lineHeight: 22,
    color: "#0A0A0A",
    fontFamily: "PoppinsRegular",
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  selectBankContainer: {
    width: 170,
    height: 75,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EDEDED",
    backgroundColor: "#F5F5F5",
    marginBottom: 15,
    marginHorizontal: 6,
  },
  bankText: {
    fontSize: 38,
    lineHeight: 44,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    marginTop: 50,
    textAlign: "center",
  },

  bankAccountDetailsContainer: {
    width: WIDTH - 40,
    height: 80,
    alignSelf: "center",
    paddingTop: 20,
    paddingLeft: 22,
    backgroundColor: "#fff",
    paddingRight: 20,
    borderRadius: 20,
    marginBottom: 5,
  },

  plaidCheckingText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#0A0A0A",
    fontFamily: "PoppinsSemiBold",
  },

  accountnumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  accountNumberText: {
    fontSize: 15,
    color: "#0A0A0A",
    lineHeight: 22,
    fontFamily: "PoppinsRegular",
  },

  accountAmountText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#0A0A0A",
    fontFamily: "PoppinsRegular",
  },
  paymentSuccessMessage: {
    fontSize: 22,
    lineHeight: 28,
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    marginTop: 120,
    textAlign: "center",
  },
  checkSuccess: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 35,
  },
  linkyourBankText: {
    fontSize: 19,
    lineHeight: 24,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginTop: 90,
  },

  secureText: {
    fontSize: 16,
    lineHeight: 22,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
  },

  secureDescription: {
    fontSize: 16,
    color: "#000",
    fontFamily: "PoppinsRegular",
    lineHeight: 22,
  },
  plaidSecureContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 25,
  },
  plaidPrivacyPolicy: {
    fontSize: 11,
    color: "#757575",
    lineHeight: 18,
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginTop: 10,
  },

  bankText: {
    fontSize: 38,
    lineHeight: 44,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    marginTop: 50,
    textAlign: "center",
  },

  plaidResetPassword: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    lineHeight: 22,
    color: "#000",
    textAlign: "center",
    marginTop: 15,
  },
  plaidText: {
    fontSize: 20,
    lineHeight: 24,
    color: "#0A0A0A",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginTop: 35,
  },
  leaderBoard2Text: {
    fontSize: 20,
    color: "#000",
    lineHeight: 24,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginTop: 30,
  },
  LeaderBoardTopBackground: {
    width: WIDTH,
    height: 320,
  },

  leaderBoardText: {
    fontSize: 20,
    color: "#fff",
    lineHeight: 24,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginTop: 30,
  },

  leaderBoardRanksContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
  },

  leaderName: {
    fontSize: 16,
    lineHeight: 22,
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    marginTop: 5,
  },

  leaderPrice: {
    fontSize: 16,
    lineHeight: 22,
    color: "#fff",
    fontFamily: "PoopinsRegular",
    marginTop: 3,
    textAlign: "center",
  },

  leaderBoardFooter: {
    width: WIDTH,
    borderTopRightRadius: 38,
    borderTopLeftRadius: 38,
    backgroundColor: "#fff",
    bottom: 40,
  },
  leaderBoard2Text: {
    fontSize: 16,
    color: "tomato",
    fontFamily: "PoppinsSemiBold",
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 30,
  },
  pricingCardContainer: {
    width: WIDTH - 40,
    height: 345,
    backgroundColor: "#fff",
    borderRadius: 18,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 20,
  },

  packageText: {
    fontSize: 23,
    lineHeight: 28,
    fontFamily: "PoppinsSemiBold",
    color: "#0A0A0A",
  },

  packagePrice: {
    fontSize: 20,
    color: "#000",
    fontFamily: "PoppinsRegular",
  },

  pricingCardTopContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
  },

  packageIncludedText: {
    fontSize: 16,
    color: "#616161",
    fontFamily: "PoppinsRegular",
    marginBottom: 12,
  },

  pricingCardbuttonContainer: {
    width: WIDTH - 80,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  pricingcardbuttonText: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 24,
    fontFamily: "PoppinsSemiBold",
  },
  leaderBoardlistcardcontainer: {
    width: WIDTH - 42,
    height: 90,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    backgroundColor: "#ffff",
    borderRadius: 14,
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  rankNumbertext: {
    fontSize: 30,
    lineHeight: 38,
    color: "#404040",
    fontFamily: "PoppinsSemiBold",
  },
  leaderBoard2PriceText: {
    fontSize: 18,
    color: "#0A0A0A",
    fontFamily: "PoppinsRegular",
    lineHeight: 24,
  },
  leaderBoard2Name: {
    fontSize: 18,
    color: "#0A0A0A",
    fontFamily: "PoppinsSemiBold",
    lineHeight: 24,
    marginLeft: 12,
  },
  leaderBoardCardActivebuttonContainer: {
    width: WIDTH - 40,
    height: 100,
    borderRadius: 14,
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },
  activeRankText: {
    fontSize: 60,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 70,
    color: "#fff",
    right: 10,
  },

  activeLeaderboardname: {
    fontSize: 30,
    fontFamily: "PoppinsSemiBold",
    lineHeight: 38,
    color: "#fff",
  },
  activeLeaderboardOrice: {
    fontSize: 18,
    lineHeight: 24,
    color: "#fff",
    fontFamily: "PoppinsRegular",
  },
};

export default style;
