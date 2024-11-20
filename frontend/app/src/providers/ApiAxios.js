import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:49187'
// axios.defaults.baseURL = 'http://w.alievi.com.br:3333'

const axiosInstance = axios.create()

export default axiosInstance