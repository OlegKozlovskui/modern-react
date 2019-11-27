import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  RESET_AUTH_ERROR,
} from '../types/auth';

export const login = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const resetAuthError = () => ({
  type: RESET_AUTH_ERROR,
});
