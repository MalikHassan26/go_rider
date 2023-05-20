/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
// @ts-ignore
import _ from 'lodash';
import {AUTH, LOADER, USER} from '../Actions/type';
import localStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  error: null,
  message: null,
  sessionExpired: false,
  [`${AUTH.LOGIN_PREFIX}Loading`]: false,
  [`${AUTH.REGISTER_PREFIX}Loading`]: false,
  [`${AUTH.VERIFY_EMAIL_PREFIX}Loading`]: false,

  token: localStorage.getItem('authToken'),
  isAuthenticated: localStorage.getItem('authToken') ? true : false,
};

const authReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  let data = {...state, error: null, message: null};
  data[`${AUTH.LOGIN_PREFIX}Loading`] = false;
  switch (type) {
    case AUTH.LOGIN_SUCCESS:
    case AUTH.ACTIVATE_USER_SUCCESS:
      data['user'] = {...payload, token: null};
      if (payload.token) {
        data['isAuthenticated'] = true;
        data['token'] = payload.token;
        data['sessionExpired'] = false;
      }
      data[`${AUTH.LOGIN_PREFIX}Loading`] = false;
      data[`${AUTH.VERIFY_EMAIL_PREFIX}Loading`] = false;

      break;
    case AUTH.SET_USER_TOKEN:
      if (payload.token) {
        data['isAuthenticated'] = true;
        data['token'] = payload.token;
        data['sessionExpired'] = false;
      }
      break;
    case AUTH.REGISTER_SUCCESS:
      data['token'] = null;
      data['user'] = payload;
      data['isAuthenticated'] = false;
      data[`${AUTH.REGISTER_PREFIX}Loading`] = false;
      data['sessionExpired'] = false;
      break;

    case AUTH.LOGIN_FAIL:

    case AUTH.REGISTER_FAIL:
      data['error'] = payload.ResponseMessage || payload.message;
      data[`${AUTH.LOGIN_PREFIX}Loading`] = false;
      data[`${AUTH.REGISTER_PREFIX}Loading`] = false;
      break;
    case LOADER:
      if (_.has(state, `${payload.prefix}Loading`)) {
        data[`${payload.prefix}Loading`] = true;
      } else {
        data = state;
      }
      break;
    case AUTH.USER_LOGOUT:
      try {
        _.assign(data, {
          ...initialState,
          sessionExpired: data.isAuthenticated && payload?.sessionExpired,
        });
      } catch (error) {}
      break;
    default:
      data = state;
  }
  return data;
};

export {authReducer};
