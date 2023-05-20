import {Platform, StyleSheet} from 'react-native';
import {FONT_SCALE} from '../../../Shell/Theme/css/base';

export default StyleSheet.create({
  cartView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8 / FONT_SCALE,
    elevation: 3 / FONT_SCALE,
    shadowColor: '#00000029',
    borderColor: '#1A1A1A42',
    borderWidth: 1,
    shadowRadius: 10 / FONT_SCALE,
  },
});
