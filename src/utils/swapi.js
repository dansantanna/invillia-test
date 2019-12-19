import Axios from 'axios';
import { baseURL } from '@/utils/config';

Axios.defaults.baseURL = baseURL;

export default Axios;
