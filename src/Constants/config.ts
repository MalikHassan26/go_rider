/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

class Config {
  // PRODUCTION
  static APP_URL = 'http://20.94.68.35:5555/api';
  static baseUrl ='http://20.94.68.35:5555/api';

  static routes = {
    AUTH: {
      LOGIN: '/Auth/login',
      REGISTER: '/Auth/Register',
    },
    USER: {
      GET_PROFILE: '',
      CHANGE_PASSWORD: '',
      UPDATE_PROFILE: '',
      UPDATE_PHONE_NUMBER: '',
    },
  };

  static DEFAULT_CATEGORY_IMAGE = `/images/category-menu.png`;

  static MINIMUM_PASSWORD_LENGTH = 6;
  static TRANSACTIONAL_CHARGES = 0.5;
  static COMISSION_PERCENTAGE = 7;
  static DEFAULT_CURRENCY_SYMBOL = '£';
  static MINIMUM_MOBILE_NUMBER_LENGTH = 11;
  static MAXIMUM_MOBILE_NUMBER_LENGTH = 14;

  // PRODUCTION
  //static STRIPE_KEY = ";
}

export default Config;

export const PLATFORMS = {
  INTERNET_CONNECTION: 'Internet Connection Lost',
  SESSION_EXPIRED: 'Your session has been expired',
  FORCE_UPDATE:
    'There is a new version of this app. Please update to continue.',
  MESSAGE: 'There is a new version of this app. Please update to continue.',
};
