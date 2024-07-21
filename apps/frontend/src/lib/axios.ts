import axios from 'axios';

import { BACKEND_URL } from './constants';

axios.defaults.baseURL = BACKEND_URL;

export default axios;
