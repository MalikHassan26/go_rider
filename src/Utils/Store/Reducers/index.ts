import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {appReducer} from './app';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export {rootReducer};
