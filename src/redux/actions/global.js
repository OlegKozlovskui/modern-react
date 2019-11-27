import { GLOBAL_HTTP_ERROR, RESET_STATE } from '../types/global';

export const resetState = () => ({
  type: RESET_STATE,
});

export const handleHttpError = payload => ({
  type: GLOBAL_HTTP_ERROR,
  payload,
});
