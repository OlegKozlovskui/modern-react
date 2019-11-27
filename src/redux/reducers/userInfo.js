import { SET_USER_INFO } from '../types/userInfo';

const initialState = {
  id: null,
  userName: null,
  email: null,
  type: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};
