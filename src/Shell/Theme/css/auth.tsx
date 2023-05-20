import {Platform, StyleSheet} from 'react-native';
import {
  ANDROID_FONT_MARGIN,
  baseStyles,
  DIMENSIONS,
  FONTS,
  FONT_SCALE,
  THEME_COLORS,
  THEME_TEXT_COLORS,
} from './base';

export const styles = StyleSheet.create({
  authFormContainer: {
    paddingVertical: 30 / FONT_SCALE,
    paddingHorizontal: 8 / FONT_SCALE,
    backgroundColor: '#fff',
    zIndex: 1,
    shadowRadius: 3 / FONT_SCALE,
    height: '100%',
    marginTop: -30 / FONT_SCALE,
    marginBottom: 4 / FONT_SCALE,
    borderTopLeftRadius: 40 / FONT_SCALE,
    borderTopRightRadius: 40 / FONT_SCALE,
  },
  heading: {
    fontFamily: FONTS.semiBold,
    color: THEME_COLORS.primary,
    fontSize: 24 / FONT_SCALE,
    ...ANDROID_FONT_MARGIN,
  },
  subHeading: {
    //marginBottom: 8 / FONT_SCALE,
    fontSize: 14 / FONT_SCALE,
    fontFamily: FONTS.regular,
    color: THEME_TEXT_COLORS.placeHolder,
  },
  mainLogoContainer: {
    backgroundColor: THEME_COLORS.primary,
    height: DIMENSIONS.fullHeight * 0.16,
    minHeight: 120 / FONT_SCALE,
    zIndex: 1,
    ...Platform.select({
      ios: {
        height: DIMENSIONS.fullHeight * 0.14,
      },
    }),
  },
  mainLogo: {
    width: 120 / FONT_SCALE,
    height: 120 / FONT_SCALE,
    marginBottom: 20 / FONT_SCALE,
    borderRadius: 200 / FONT_SCALE,
    resizeMode: 'contain',
  },
  submitBtn: {
    alignSelf: 'center',
    borderRadius: 8 / FONT_SCALE,
    backgroundColor: THEME_COLORS.primary,
    shadowColor: '#00000029',
    shadowOpacity: 1,
    width: '70%',
    maxWidth: '70%',
    shadowRadius: 2 / FONT_SCALE,
    paddingVertical: 10 / FONT_SCALE,
    ...baseStyles.mT1x,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2 / FONT_SCALE,
        paddingVertical: 9 / FONT_SCALE,
      },
    }),
  },
  submitBtnTitle: {
    fontSize: 14 / FONT_SCALE,
    fontFamily: FONTS.regular,
  },
  lowerView: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    color: THEME_TEXT_COLORS.primary,
  },
  fbButton: {
    backgroundColor: '#005cae',
    borderRadius: 100 / FONT_SCALE,
    width: 50 / FONT_SCALE,
    height: 50 / FONT_SCALE,
    marginRight: 16 / FONT_SCALE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleBtn: {
    backgroundColor: THEME_COLORS.primary,
    borderRadius: 100 / FONT_SCALE,
    width: 50 / FONT_SCALE,
    height: 50 / FONT_SCALE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonTitle: {
    fontSize: 11 / FONT_SCALE,
    letterSpacing: 1.2 / FONT_SCALE,
    fontFamily: FONTS.regular,
    color: THEME_TEXT_COLORS.primary,
  },
  skipButton: {
    zIndex: 7,
    right: 10 / FONT_SCALE,
    borderRadius: 50 / FONT_SCALE,
    paddingHorizontal: 20 / FONT_SCALE,
    paddingVertical: 5 / FONT_SCALE,
    backgroundColor: '#fff',
    //  position: "absolute",
    top: 14 / FONT_SCALE,
    alignItems: 'center',
  },
  skipBottom: {
    bottom: 14,
    top: 'auto',
    backgroundColor: 'transparent',
  },
  skipBottomTitle: {
    color: THEME_COLORS.primary,
    fontSize: 14,
    fontFamily: FONTS.medium,
  },
  backIconBtn: {
    width: 50 / FONT_SCALE,
    // marginTop: 30 / FONT_SCALE
  },
  textItem: {
    fontSize: 14 / FONT_SCALE,
    fontFamily: FONTS.medium,
    color: THEME_TEXT_COLORS.placeHolder,
    ...ANDROID_FONT_MARGIN,
  },
  bottomView: {
    paddingTop: 20 / FONT_SCALE,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    zIndex: 11,
    // marginBottom:5,
    backgroundColor: THEME_COLORS.primary,
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        backgroundColor: THEME_COLORS.primary,
        zIndex: 11,
        justifyContent: 'flex-start',
        // marginHorizontal: 5,
        paddingTop: 0,
      },
    }),
  },
  backButtonView: {
    backgroundColor: THEME_COLORS.primary,
    paddingBottom: 10,
    //  marginTop:90,
    ...Platform.select({
      ios: {
        flexDirection: 'column',
      },
    }),
  },
});
