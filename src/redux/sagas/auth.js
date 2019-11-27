import { takeLatest, call, put } from 'redux-saga/effects';

import { LOGIN_REQUEST, LOGOUT } from '../types/auth';
import authHttpService from '../../services/authHttpService';
import {
  extractUserDetailsFromToken,
  removeToken,
  setToken,
} from '../../utils/helpers';
import {
  loginError,
  loginSuccess,
} from '../actions/auth';

import { setUserInfo } from '../actions/userInfo';
import { DEFAULT_ERROR_MESSAGE, errorMessageMap } from '../../utils/errorHandling';
import { resetState } from '../actions/global';

function* loginSaga({ payload }) {
  try {
    const { token } = yield call(authHttpService.login, payload);

    setToken(token);

    const { id, username, type, email } = extractUserDetailsFromToken();

    yield put(loginSuccess({ token }));
    yield put(setUserInfo({ id, userName: username, type, email }));
    // redirect
  } catch ({ response }) {
    let errorPayload = { message: DEFAULT_ERROR_MESSAGE };

    if (response && typeof response.data === 'object') {
      const { type, message } = response.data;
      errorPayload = { type, message: errorMessageMap.get(type) || message };
    }
    yield put(loginError(errorPayload));
  }
}

function* logoutSaga() {
  removeToken();
  yield put(resetState());
}

export default function authSagas() {
  return [
    takeLatest(LOGIN_REQUEST, loginSaga),
    takeLatest(LOGOUT, logoutSaga),
  ];
}
