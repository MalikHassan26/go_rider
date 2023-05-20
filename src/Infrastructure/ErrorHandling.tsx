/* eslint-disable prettier/prettier */

import React from 'react';

import {AUTH} from '../Utils/Store/Actions/type';

export const handleError = (error: any, defaultActionType: any) => {
  if (error && error.response && error.response.status == 401) {
    return {type: AUTH.USER_LOGOUT, payload: {sessionExpired: true}};
  }
  return {
    type: defaultActionType,
    payload: {
      status: 'Error',
      hasError: true,
      message:
        error.message ||
        error?.ResponseHeader?.ResponseMessage ||
        "We're unable to process your request. Please try again later.",
    },
  };
};
