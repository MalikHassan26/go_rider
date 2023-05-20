/* eslint-disable dot-notation */
import {APP, AUTH, LOADER} from '../Actions/type';

const initialState = {
  error: null,
  loading: false,
  updateLink: null,
  isConnected: true,
  appNavigation: null,
  loadingMessage: null,
  updateAvailable: false,
};

const appReducer = (state = initialState, action:any) => {
  const {type, payload} = action;
  let data = {...state, error: null};

  switch (type) {
    case APP.FORCE_UPDATE:
      data['updateLink'] = payload.link || null;
      data['updateAvailable'] = payload.updateAvailable || false;
      break;

    case APP.INTERNET_CONNECTION:
      data['isConnected'] = payload.isConnected;
      break;

    case LOADER:
      data['loading'] =
        payload?.prefix == AUTH.LOGIN_PREFIX ||
        payload?.prefix == AUTH.REGISTER_PREFIX
          ? true
          : false;
      break;

    case APP.FETCH_SETTINGS:
      if (
        payload &&
        payload.generic_alert &&
        payload.generic_alert.generic_alert_message
      ) {
        payload.generic_alert.generic_alert_message =
          payload.generic_alert.generic_alert_message
            .split('font face=')
            .join('span style=');
      }
      data['settings'] = payload;
      data[`${APP.FETCH_SETTINGS_PREFIX}Loading`] = false;
      break;

    case AUTH.USER_LOGOUT:
    case AUTH.LOGIN_SUCCESS:
    case AUTH.LOGIN_FAIL:
    case AUTH.REGISTER_SUCCESS:
    case AUTH.REGISTER_FAIL:
    case APP.LOADER:
      data['loading'] = payload?.loading || false;
      data['loadingMessage'] = payload?.message || null;
      break;

    case APP.NAVIGATION:
      data['appNavigation'] = payload;
      break;

    default:
      data = state;
  }
  return data;
};

export {appReducer};
