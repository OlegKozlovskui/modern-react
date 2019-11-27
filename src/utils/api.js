import axios from 'axios';

import { config as appConfig } from '../app.config';
import { getToken } from './helpers';

const api = axios.create({
  baseURL: `${appConfig.apiUrl}/`,
});

api.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    const token = getToken();

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => (response.data ? response.data : response),
);

export default api;
