import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../Reducers/index';

const middlewares = [thunk];

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;
