import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;