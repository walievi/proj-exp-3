import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333'

const axiosInstance = axios.create()

export default axiosInstance