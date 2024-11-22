import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3333'
axios.defaults.baseURL = 'http://localhost:8102/api'
// axios.defaults.baseURL = 'http://w.alievi.com.br:3333'

const axiosInstance = axios.create()

export default axiosInstance