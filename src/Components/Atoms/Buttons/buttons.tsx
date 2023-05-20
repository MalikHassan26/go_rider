import React from 'react';
import {TouchableOpacity} from 'react-native';
import {baseStyles} from '../../../Shell/Theme/css/base';
import styles from './styles';

const CustomButton = ({children, style, onPress, activeOpacity = 0.8}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[
        baseStyles.pV2_5x,
        baseStyles.mH2_5x,
        baseStyles.mT2_5x,
        styles.cartView,
        {...style},
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
