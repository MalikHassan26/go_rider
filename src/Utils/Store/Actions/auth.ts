/* eslint-disable prettier/prettier */
import {IBaseResponse} from '../../../Interfaces/baseResponse';
import UrlService from '../../../Services/Api/url.service';
import Config from '../../../../src/Constants/config';
import {AUTH, LOADER, USER} from './type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {handleError} from '../../../Infrastructure/ErrorHandling';
import { Alert } from 'react-native';

const ROUTES = Config.routes;

const login = (requestBody: any) => async (dispatch: any) => {
  console.log("RESPONSE====>LOGIN",requestBody)
  try {
    dispatch({type: LOADER, payload: {prefix: AUTH.LOGIN_PREFIX}});
    const res = await UrlService.post(ROUTES.AUTH.LOGIN, requestBody);
    const response = res.data as IBaseResponse;
    console.log("RESPONSE====>LOGIN",response)
    if (response.ResponseHeader) {
      if (
        response.ResponseHeader.ResponseCode &&
        response.data &&
        response.data.is_active == 1
      ) {
        // delete response.data["token"];
        await AsyncStorage.multiSet([
          ['authToken', response.data.token],
          ['userId', response.data.id.toString()],
        ]);
        dispatch({type: AUTH.LOGIN_SUCCESS, payload: response.data});

        return;
      }
    }
    throw response;
  } catch (err) {
    dispatch(handleError(err, AUTH.LOGIN_FAIL));
  }
};

const register = (requestBody: any) => async (dispatch: any) => {
   console.log("RESPONSE====>001",requestBody)
  try {

    dispatch({type: LOADER, payload: {prefix: AUTH.REGISTER_PREFIX}});
    const res = await UrlService.post(ROUTES.AUTH.REGISTER, requestBody);
    const response = res.data as IBaseResponse;
    console.log("RESPONSE====>",response)
    if (response.ResponseHeader) {
      if (response.ResponseHeader.ResponseCode) {
        dispatch({type: AUTH.REGISTER_SUCCESS, payload: response.data});
      
      } else {
        dispatch({
          type: AUTH.REGISTER_FAIL,
          payload: response.ResponseHeader,
        });
      }
      return;
    }
    throw response;
  } catch (err) {
   //Alert.alert(err, AUTH.REGISTER_FAIL);
    dispatch(handleError(err, AUTH.REGISTER_FAIL));
  }
};

const setUserToken = () => async (dispatch: any) => {
  const token = await AsyncStorage.getItem('authToken');

  if (token) {
    console.log('it also');
    let user = await AsyncStorage.getItem('user');
    user = user ? JSON.parse(user) : '';
    dispatch({type: AUTH.SET_USER_TOKEN, payload: {token, user}});

    dispatch({type: USER.GET_PROFILE, payload: user});
  }
};
export {login, register, setUserToken};
