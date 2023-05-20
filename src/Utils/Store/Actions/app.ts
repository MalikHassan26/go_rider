import Config from '../../../../src/Constants/config';

import {APP} from './type';

const ROUTES = Config.routes;

const setNavigation = (payload: any) => (dispatch:any) => {
  console.log('Payload', payload);
  dispatch({type: APP.NAVIGATION, payload});
};

export {setNavigation};
