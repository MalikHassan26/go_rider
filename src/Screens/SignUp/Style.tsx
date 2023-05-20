import { StyleSheet } from "react-native";
import { baseStyles, FONTS, THEME_COLORS } from "../../Shell/Theme/css/base";

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  // -----Navbar or Header----//
  containerStyle: {
    backgroundColor: THEME_COLORS.primary,
    ...baseStyles.pV3x,
    height: "7%",
    shadowColor: "transparent",
    borderBottomColor: THEME_COLORS.primary,
  },

  //--1--- background-----//
  imageBG: {
    flex: 1,
    alignSelf: "stretch",
    // resizeMode: 'stretch',
    width: null,
    height: null,
    // width: '100%',
    // height: '100%'
  },

  //---2--- Input------//
  inputContainer: {
    width: "90%",
    marginTop: "4%",
  },

  //---3--- Button----//
  buttonView: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   //width: "90%",
    marginTop:10
  },
  titleBtn: {
    color: "#ffffff",
    fontFamily: FONTS.regular,
  },
  btnTextColor: {
    color: "#ffffff",
    fontSize: 20,
  },

  buttonSkip: {
    ...baseStyles.pV2x,
    ...baseStyles.mT2x,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: "#F9A01B",
  },

  buttonLogin: {
    ...baseStyles.pV2x,
    ...baseStyles.mT2x,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    borderRadius: 5,

    backgroundColor: THEME_COLORS.primary,
  },
  disableBtn: {
    ...baseStyles.pV2x,
    ...baseStyles.mT2x,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: THEME_COLORS.primary,
    opacity: 0.7,
  },
  btnView: {
    //flex: 0.5,
    width:'90%'
  },
  backButton: {
    backgroundColor: "transparent",
    marginTop: -6,
  },

});
