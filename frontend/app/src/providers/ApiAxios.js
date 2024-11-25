import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3333'
axios.defaults.baseURL = 'http://localhost:8000/v1/dev'


const axiosInstance = axios.create()

export default axiosInstance