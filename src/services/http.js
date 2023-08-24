import axios from 'axios'
import host from './host'

export const http = axios.create({
  baseURL: host
})

http.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const token = localStorage.getItem('token') || ''

    config.headers = {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : undefined
    }
    console.log(config)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
