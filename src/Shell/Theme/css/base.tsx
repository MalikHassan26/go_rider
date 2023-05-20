import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {PLATFORMS} from '../../../Constants/config';
export const FONT_SCALE = PixelRatio.getFontScale();

const generateBaselineCSS = (type: any) => {
  let values: any = {};
  for (const key in BASELINE_GAPS) {
    values[`${type.short}${key}`] = {
      [type.long]: BASELINE_GAPS[key] / FONT_SCALE,
    };
    for (const dimKey in BASELINE_GAPS_DIRECTIONS) {
      values[`${type.short}${dimKey}${key}`] = {
        [`${type.long}${BASELINE_GAPS_DIRECTIONS[dimKey]}`]:
          BASELINE_GAPS[key] / FONT_SCALE,
      };
    }
  }
  return values;
};

function generateFontSizes() {
  let values: any = {};
  for (let i = 0; i < 80; i = i + 2) {
    i != 0
      ? (values[`fs${i}x`] = {fontSize: i / FONT_SCALE})
      : (values[`fx${i}`] = {fontSize: i / FONT_SCALE});
  }
  return values;
}

/////////////Sharkemm_Images//////////////
//export const MAINLOGO = require('../Image/mainlogo.png');
export const MAINLOGO = require('../../../../assets/logo.png');
export const ALIGNLET = require('../Image/alignleft.png');
export const FISH = require('../Image/bhindlogo.png');
export const HALF = require('../Image/completehalf.png');
export const HALF_QUATER = require('../Image/completehelf.png');
export const PROGRESS = require('../Image/progress.png');
export const COMEPLETE_CIRCLE = require('../Image/completecircle.png');
export const USER_DUMMY = require('../Image/userdummy.jpg')
export const VALET=require('../../../../assets/valet.png');
export const ACTIVE_VALET= require('../../../../assets/vectoractive.png');
export const SUBJECT= require('../../../../assets/subject.png');
export const ACTIVE_SUBJECT= require('../../../../assets/subjectactive.png');
export const CARDOCEAN= require('../../../../assets/cardocean.png');
export const HALF_MULTICOLOR= require('../../../../assets/halfmulticolor.png');
export const COLOR_PROGRESS_BAR= require('../../../../assets/coloredprogressbar.png');
export const VALET_TITLE= require('../../../../assets/valettitle.png');
export const EIGHTEEN_PERCENT= require('../../../../assets/eighteenpercent.png');
export const THIRTEEN_PERCENT= require('../../../../assets/thirteenpercent.png');
export const OBJECT_ONE= require('../../../../assets/objectone.png');
export const OBJECT_TWO= require('../../../../assets/objecttwo.png');
export const OBJECT_THREE= require('../../../../assets/objectthree.png');
export const GIF=require('../../../../assets/Full.gif');
export const Line= require('../../../../assets/Line.png');
export const GROUP_ICON= require('../../../../assets/Group.png');
export const PRIMERY_CARD= require('../../../../assets/primarycard.png');
export const VIDEO_ICON= require('../../../../assets/videoicon.png');
export const USER_ADD= require('../../../../assets/user-plus.png');
export const COMPONENT_ICON= require('../../../../assets/Component.png');
export const USER_ADD_NEW= require('../../../../assets/user-plus-new.png');

export const BACKGROUND= require('../../../../assets/background.png');

const BASELINE_GAPS_DIRECTIONS: any = {
  T: 'Top',
  R: 'Right',
  B: 'Bottom',
  L: 'Left',
  H: 'Horizontal',
  V: 'Vertical',
};

export const FONTS = {
  light: 'Proxima-Nova-Alt-Light',
  regular: 'ProximaNova-Regular',
  medium: 'Proxima-Nova-Alt-Thin',
  semiBold: 'Proxima-Nova-Semibold',
  bold: 'Proxima-Nova-Alt-Bold',
  black: 'Proxima-Nova-Black',
};

const BASELINE_GAPS = {
  Auto: 'auto',
  '0': 0,
  '05x': 4,
  '0_5x': 5,
  '1x': 8,
  '1_25x': 10,
  '1_5x': 12,
  '2x': 16,
  '2_5x': 20,
  '3x': 24,
  '3_5x': 30,
  '4x': 32,
  '5x': 42,
  '6x': 48,
  '7x': 56,
  '7_5x': 60,
  '8x': 64,
  '9x': 72,
  '10x': 80,
  '11x': 88,
  '12x': 96,
  '13x': 104,
  '14x': 112,
  '15x': 120,
};

export const ANDROID_FONT_MARGIN = {
  ...Platform.select({
    android: {
      marginBottom: -4 / FONT_SCALE,
    },
    ios: {
      marginBottom: 0 / FONT_SCALE,
    },
  }),
};

export const DIMENSIONS = {
  fullWidth: Dimensions.get('window').width,
  fullHeight: Dimensions.get('window').height,
  statusBarHeight: StatusBar.currentHeight,
  fullHeightSB: Dimensions.get('window').height + StatusBar.currentHeight,
};

export const THEME_COLORS = {
  primary: '#13244B',
  secondary: '#F9A01B',
  tertiary: '#5DA6A7',
  black: '#000000',
  white: '#ffffff',
  draft: '#2F5597',
  lightBlue:'#117A9B'
};

export const THEME_TEXT_COLORS = {
  primary: '#414141',
  secondary: '#666666',
  tertiary: '#5DA6A7',
  errorBG: '#cc181f',
  errorText: '#ffffff',
  placeHolder: '#909090',
  callBtn: '#44ce48',
  successBG: '#30b21a',
  successText: '#ffffff',
};

export const COLORS = {
  success: '#14df18',
  discount: 'green',
  Primery: '#FF6600',
  Secondry: 'white',
  greenoclor: 'green',
  Labelcolor: '#888585',
  backgroundScreen: '#F0F0F0',
  graycolor: '#7E7E7E',
  textcolor: '#3B3B3B',
  addresscolor: '#6F6F6F',
  cousine_backgrrod_color: '#00000029',
  profile_color_text_field: '#FCFCFC',
  profile_color_item: '#5D5D5D',
  cartsubheading: '#A21E1E',
  mainredcolor: '#C70909',
  cartsubtotallcolor: '#707070',
  bordertopcolor: '#c9c7c1',
  lightgray: '#efefef',
  mediumlightgray: '#F9F9F9',
  lightBlack: '#1A1A1A',
};

export const DEFAULT_STATUS_BAR = {
  statusBarProps: {
    // translucent: true,
    barStyle: 'light-content',
    backgroundColor: '#FF6600',
  },
};

const MARGIN = generateBaselineCSS({short: 'm', long: 'margin'});
const PADDING = generateBaselineCSS({short: 'p', long: 'padding'});
const FONT_SIZES = generateFontSizes();

export const baseStyles = StyleSheet.create({
  ...MARGIN,
  ...PADDING,
  ...FONT_SIZES,
  safeAreaContainer: {
    backgroundColor: THEME_COLORS.primary,
    color: '#FFFFFF',
  },
  themeHeader: {
    shadowColor: 'transparent',
    backgroundColor: THEME_COLORS.primary,
    borderBottomColor: THEME_COLORS.primary,
    paddingBottom: 0,
    marginBottom: 0,
    minHeight: DIMENSIONS.fullHeight * 0.07,
    alignItems: 'stretch',
    ...Platform.select({
      ios: {
        minHeight: DIMENSIONS.fullHeight * 0.06,
      },
    }),
  },

  headerWithZeroHeight: {
    height: 0,
    minHeight: 0,
  },
  themeHeaderBackButton: {
    backgroundColor: 'transparent',
  },
  plusBtnBackground: {
    backgroundColor: 'transparent',
    width: 40 / FONT_SCALE,
    height: 40 / FONT_SCALE,
    borderRadius: 30 / FONT_SCALE,
  },
  btnBackIcon: {
    color: THEME_COLORS.white,
    fontSize: 30 / FONT_SCALE,
    borderRadius: 50 / FONT_SCALE,
  },
  btnInfoIcon: {
    color: THEME_COLORS.primary,
    fontSize: 16 / FONT_SCALE,
  },
  btnPlusIcon: {
    color: THEME_COLORS.white,
    fontSize: 30 / FONT_SCALE,
  },
  themeHeaderTitle: {
    fontSize: 15.5 / FONT_SCALE,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: FONTS.medium,
    ...Platform.select({
      ios: {
        marginBottom: 6 / FONT_SCALE,
      },
    }),
  },
  themeHeaderTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  delAddressTitle: {
    fontSize: 14 / FONT_SCALE,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: FONTS.medium,
  },
  html: {
    fontFamily: FONTS.medium,
    ...ANDROID_FONT_MARGIN,
  },
  fontType: {
    fontFamily: FONTS.regualr,
    ...ANDROID_FONT_MARGIN,
  },
  fontLight: {
    fontSize: 13 / FONT_SCALE,
    fontFamily: FONTS.light,
    ...ANDROID_FONT_MARGIN,
  },
  fontRegular: {
    fontSize: 13 / FONT_SCALE,
    fontFamily: FONTS.regular,
    ...ANDROID_FONT_MARGIN,
  },
  fontMedium: {
    color: '#000',
    fontSize: 13 / FONT_SCALE,
    fontFamily: FONTS.medium,
    // ...ANDROID_FONT_MARGIN,
  },
  fontSemiBold: {
    fontSize: 16 / FONT_SCALE,
    fontFamily: FONTS.semiBold,
    // ...ANDROID_FONT_MARGIN,
  },
  fontBold: {
    fontSize: 13 / FONT_SCALE,
    fontFamily: FONTS.bold,
    ...ANDROID_FONT_MARGIN,
  },
  colorBlack: {
    color: '#000',
  },
  colorlightBlack: {
    color: COLORS.lightBlack,
  },
  colorLightGray: {
    color: '#000',
  },
  colorWhite: {
    color: '#fff',
  },
  body: {
    color: THEME_TEXT_COLORS.primary,
    backgroundColor: 'transparent',
  },
  flex: {
    display: 'flex',
  },
  screenCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexRowReverse: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  flexRowWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  flexRowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  flexRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexColumnBetween: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flex1x: {
    flex: 1,
  },
  flex2x: {
    flex: 2,
  },
  flex3x: {
    flex: 3,
  },
  flexAICenter: {
    alignItems: 'center',
  },
  flexAIStart: {
    alignItems: 'flex-start',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexVCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  logoContainer: {
    ...MARGIN.mB2x,
    ...PADDING.pT3x,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: {
    paddingVertical: 8 / FONT_SCALE,
    backgroundColor: THEME_COLORS.primary,
  },
  btnPrimaryTitle: {
    fontSize: 14 / FONT_SCALE,
    color: '#FFFFFF',
    fontFamily: FONTS.regular,
    ...ANDROID_FONT_MARGIN,
  },
  cardContainer: {
    ...MARGIN.mB2x,
    ...PADDING.p1_5x,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  themeLoader: {
    color: THEME_TEXT_COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hasError: {
    fontSize: 11 / FONT_SCALE,
    fontFamily: FONTS.regular,
    color: THEME_TEXT_COLORS.errorBG,
  },
  errorToast: {
    padding: 12 / FONT_SCALE,
    maxWidth: '90%',
    alignContent: 'center',
    backgroundColor: THEME_TEXT_COLORS.errorBG,
  },
  successToast: {
    padding: 12 / FONT_SCALE,
    maxWidth: '90%',
    alignContent: 'center',
    backgroundColor: THEME_TEXT_COLORS.successBG,
  },
  bottomToastInfo: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 14 / FONT_SCALE,
    borderRadius: 0,
    position: 'absolute',
    alignItems: 'center',
    maxWidth: DIMENSIONS.fullWidth,
    zIndex: 1001,
  },
  topToastInfo: {
    left: 0,
    right: 0,
    top: 0,
    padding: 14 / FONT_SCALE,
    borderRadius: 0,
    position: 'absolute',
    alignItems: 'center',
    maxWidth: DIMENSIONS.fullWidth,
    zIndex: 1001,
  },
  toastTextInfo: {
    fontSize: 12 / FONT_SCALE,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: FONTS.regular,
  },
  errorToastInfo: {
    backgroundColor: THEME_TEXT_COLORS.errorBG,
  },
  successToastInfo: {
    backgroundColor: THEME_TEXT_COLORS.successBG,
  },
  flexACCenter: {
    alignContent: 'center',
  },
  successMessage: {
    marginTop: 20 / FONT_SCALE,
    width: '95%',
    textAlign: 'center',
    color: '#FFF',
  },
  headingContainer: {
    ...PADDING.p3x,
    textAlign: 'center',
    backgroundColor: '#F1F1F1',
  },
  heading: {
    fontSize: 16 / FONT_SCALE,
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: THEME_TEXT_COLORS.primary,
  },
  subHeading: {
    fontSize: 14 / FONT_SCALE,
    textAlign: 'center',
    color: THEME_TEXT_COLORS.secondary,
  },
  textHeading: {
    fontSize: 16 / FONT_SCALE,
    ...PADDING.p3x,
    textAlign: 'center',
    fontFamily: FONTS.semiBold,
    backgroundColor: '#F1F1F1',
    color: THEME_TEXT_COLORS.primary,
  },
  textSubHeading: {
    fontSize: 14 / FONT_SCALE,
    textAlign: 'center',
    backgroundColor: '#FAFAFA',
    color: THEME_TEXT_COLORS.primary,
  },
  textItem: {
    fontSize: 14 / FONT_SCALE,
    fontWeight: 'bold',
    color: THEME_TEXT_COLORS.placeHolder,
  },
  disabledBtn: {
    opacity: 0.8,
    backgroundColor: THEME_COLORS.primary,
  },
  disabledBtnTitle: {
    color: '#FFFFFF',
    fontFamily: FONTS.regular,
  },
  textWhite: {
    color: '#FFFFFF',
  },
  noBG: {
    // backgroundColor: "transparent",
    backgroundColor: THEME_COLORS.primary,
  },
  noBorder: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  noRounded: {
    borderRadius: 0,
  },
  secondaryText: {
    fontFamily: FONTS.medium,
    fontSize: 12 / FONT_SCALE,
    color: THEME_TEXT_COLORS.secondary,
    ...ANDROID_FONT_MARGIN,
  },
  emptyContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: Dimensions.get('window').height - 180,
  },
  emptyContainerHeading: {
    fontSize: 16 / FONT_SCALE,
    fontFamily: FONTS.medium,
    color: THEME_TEXT_COLORS.primary,
    marginTop: 20 / FONT_SCALE,
    marginBottom: 10 / FONT_SCALE,
  },
  emptyContainerSubHeading: {
    fontSize: 14 / FONT_SCALE,
    textAlign: 'center',
    color: THEME_TEXT_COLORS.placeHolder,
  },
  boldText: {
    fontWeight: 'bold',
  },
  addonText: {
    flex: 1,
    justifyContent: 'space-between',
    color: THEME_TEXT_COLORS.secondary,
  },
  flexAIEnd: {
    alignItems: 'flex-end',
  },
  flexASEnd: {
    alignSelf: 'flex-end',
  },
  flexASCenter: {
    alignSelf: 'center',
  },
  flexJCEnd: {
    justifyContent: 'flex-end',
  },
  flexJCStart: {
    justifyContent: 'flex-start',
  },
  flexJCCenter: {
    justifyContent: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textStrike: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  disableBtnPrimary: {
    opacity: 0.7,
    backgroundColor: THEME_COLORS.primary,
  },
  textDanger: {
    color: THEME_TEXT_COLORS.errorBG,
    fontWeight: 'bold',
    fontSize: 14 / FONT_SCALE,
  },
  callButton: {
    ...PADDING.pV1_5x,
    backgroundColor: THEME_TEXT_COLORS.successBG,
  },
  closedButton: {
    ...PADDING.pV1_5x,
    backgroundColor: THEME_TEXT_COLORS.errorBG,
  },
  closeButtonTitle: {
    fontFamily: FONTS.medium,
    color: THEME_TEXT_COLORS.errorText,
  },
  textPrimary: {
    color: THEME_TEXT_COLORS.primary,
  },
  textPrimaryBold: {
    fontSize: 13 / FONT_SCALE,
    fontFamily: FONTS.semiBold,
    color: THEME_TEXT_COLORS.primary,
    ...ANDROID_FONT_MARGIN,
  },
  fullWidth: {
    width: '100%',
    maxWidth: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  loginLogo: {
    width: 140 / FONT_SCALE,
    height: 100 / FONT_SCALE,
    resizeMode: 'contain',
  },
  buttonBottomFixed: {
    borderRadius: 0,
    height: 60 / FONT_SCALE,
    backgroundColor: THEME_COLORS.primary,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16 / FONT_SCALE,
  },
  buttonBottomFixedTitle: {
    fontSize: 16 / FONT_SCALE,
    fontFamily: FONTS.medium,
    color: THEME_COLORS.white,
    ...ANDROID_FONT_MARGIN,
  },
  buttonBottomFixedWithTabs: {
    bottom: 80 / FONT_SCALE,
  },
  themeTextPrimary: {
    color: THEME_COLORS.primary,
  },
  textBold: {
    fontWeight: 'bold',
  },
  themeBg: {
    backgroundColor: THEME_COLORS.primary,
  },
  disabledText: {
    color: '#e3e3e3',
  },
  iosSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLORS.primary,
  },
  textInput: {
    fontSize: 14,
    paddingRight: 40,
    paddingLeft: 20,
    borderWidth: 1,
    zIndex: 0,
    borderColor: '#8B8B8B',
    borderRadius: 12,
    padding: 8,
    ...Platform.select({
      ios: {
        padding: 14,
      },
    }),
    backgroundColor: '#F8F8F8',
  },

  textInputPhone: {
    paddingRight: 10,
    paddingLeft: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: '100%',
  },

  flagBtn: {
    width: 60,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  horizontalLine: {
    borderBottomColor: '#00000080',
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
    marginTop: -4,
  },
});

export const bottomToastProps = {
  opacity: 0.95,
  positionValue: 0,
  position: 'bottom',
  textStyle: baseStyles.toastTextInfo,
  style: [baseStyles.bottomToastInfo, baseStyles.errorToastInfo],
};

export const topToastProps = {
  opacity: 0.95,
  positionValue: 60,
  position: 'top',
  textStyle: baseStyles.toastTextInfo,
  style: [baseStyles.topToastInfo, baseStyles.errorToastInfo],
};
