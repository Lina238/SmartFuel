import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:8080/'
const token=localStorage.getItem('token')
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default axios;