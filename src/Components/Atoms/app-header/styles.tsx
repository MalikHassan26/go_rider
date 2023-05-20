import {StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SCALE, THEME_COLORS} from '../../../Shell/Theme/css/base';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20 / FONT_SCALE,
  },
  headerText: {
    fontFamily: FONTS.bold,
    fontSize: 24/ FONT_SCALE,
    color: THEME_COLORS.white,
    lineHeight:24,
    letterSpacing:0.5
    // fontWeight: '900',
    
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20 / FONT_SCALE,
  
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  topContainer: {
    width: '100%',
    height: StatusBar.currentHeight + 70 / FONT_SCALE,
    backgroundColor: THEME_COLORS.primary,
    // paddingTop: StatusBar.currentHeight,
  },
});
