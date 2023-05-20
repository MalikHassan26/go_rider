import {IBaseState} from './IBaseState';

export interface IAuthState extends IBaseState {
  value: any;
  timer?: any;
  interval?: any;
  showHeader?: boolean;
  disableBtn?: boolean;
  showSkipBtn?: boolean;
  enabledButton?: boolean;
  disableResendBtn?: boolean;
}
