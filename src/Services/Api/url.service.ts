/* eslint-disable prettier/prettier */
import Config from '../../Constants/config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
interface CustomHTTPOptions {
  params?: {
    [param: string]: any;
  };
  headers?: {
    [header: string]: string | string[];
  };
}

class UrlService {
  constructor() {}
  static buildUrl(useUrl, type = '') {
    const url = Config.baseUrl + useUrl;
    console.log(`${type.toUpperCase()}: Call url -> ${url}`);
    return url;
}
  static async urlWithoutBase(useUrl) {
    const newBaseUrl = await AsyncStorage.getItem('updateBaseUrl');
    const url = newBaseUrl + useUrl;
    console.log('Call url WithoutBase -> ', url);

    return url;
  }

  static async builderHeaderHttpClient(jsonContent = true) {
    const token = await AsyncStorage.getItem('authToken');
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
        deviceId:'',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  static async builderHeaderHttpClientWithoutToken(jsonContent = true) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      deviceId:'',

    };
    return headers;
  }

  static async get(url: any = true, options?: CustomHTTPOptions): Promise<any> {
    const callUrl = await UrlService.buildUrl(url);
    console.log('CALLURL', callUrl);
    const headers = await UrlService.builderHeaderHttpClient();
    options = options || {};
    options.headers = headers;
    return axios.get(callUrl, options);
  }

  static async getWithoutToken(
    url: any = true,
    options?: CustomHTTPOptions,
  ): Promise<any> {
    const callUrl = await UrlService.urlWithoutBase(url);
    const headers = await UrlService.builderHeaderHttpClientWithoutToken();
    options = options || {};
    options.headers = headers;
    // console.log("callUrl 123456", callUrl);
    return axios.get(callUrl, options);
  }

  static async post(url, body: any = true): Promise<any> {
    const callUrl = await UrlService.buildUrl(url);
    console.log('POST', callUrl);
    const headers = await UrlService.builderHeaderHttpClient();
    const options = {headers};
    return axios.post(callUrl, body, options);
  }

  static async patch(url, body: any = true): Promise<any> {
    const callUrl = await UrlService.buildUrl(url);
    const options = {
      headers: UrlService.builderHeaderHttpClient(),
    };
    return axios.patch(callUrl, body, options);
  }

  static async put(
    url,
    body: any = true,
    options?: CustomHTTPOptions,
  ): Promise<any> {
    const callUrl = await UrlService.buildUrl(url);
    const headers = await UrlService.builderHeaderHttpClient();
    options = options || {};
    options.headers = headers;
    return axios.put(callUrl, body, options);
  }

  static async delete(
    url,
    body: any = {},
    jsonContent = true,
    params?: any,
  ): Promise<any> {
    const callUrl = await UrlService.buildUrl(url);
    const headers = await UrlService.builderHeaderHttpClient(jsonContent);
    const options = {
      headers,
      body,
      params,
    };
    return axios.delete(callUrl, options);
  }
}

export default UrlService;
