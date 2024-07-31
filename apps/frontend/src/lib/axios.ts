import axios from 'axios';
import { getCookie } from 'cookies-next';

import { BACKEND_URL } from './constants';

axios.defaults.baseURL = BACKEND_URL;

const authorizedAxios = axios.create({
  baseURL: BACKEND_URL,
});
authorizedAxios.interceptors.request.use((config) => {
  const jwt = getCookie('jwt');
  if (jwt) {
    config.headers.set('Authorization', `Bearer ${jwt}`);
  }
  return config;
});
export { authorizedAxios, axios };
