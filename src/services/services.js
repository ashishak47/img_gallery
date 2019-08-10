import axios from 'axios';
import { ACCESS_KEY, API_ROOT } from './constantData';

const getData = (path, options) => {
    const url = `${API_ROOT}${path}`
    const params = {
        params: { ...options, client_id: ACCESS_KEY }
    }
    return axios.get(url, params)
};

export { getData }

