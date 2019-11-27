import { SET_USER_INFO } from '../types/userInfo';

export const setUserInfo = payload => ({
  type: SET_USER_INFO,
  payload,
});
