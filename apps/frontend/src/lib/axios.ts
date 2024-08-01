import axios from 'axios';
import { getCookie } from 'cookies-next';

import { BACKEND_URL } from './constants';

// Set the base URL for axios
axios.defaults.baseURL = BACKEND_URL;

// Create an axios instance that includes the Authorization header
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
