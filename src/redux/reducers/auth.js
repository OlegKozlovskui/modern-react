import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  RESET_AUTH_ERROR,
} from '../types/auth';

const initialState = {
  authenticated: false,
  loading: false,
  error: {},
};

export default (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        authenticated: true,
        loading: false,
        error: {},
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        loading: false,
        error: payload,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
      };
    case RESET_AUTH_ERROR: {
      return {
        ...state,
        error: {},
      };
    }
    default:
      return state;
  }
};
