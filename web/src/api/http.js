import axios from 'axios'
import router from '../router'
import Notify from 'vant/lib/notify'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

instance.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
})

instance.interceptors.response.use(res => {
  if (res.data.message && res.status >= 200 && res.status < 300) {
    Notify({
      type: 'success',
      message: res.data.message
    })
  }
  return res
}, err => {
  if (err.response.data.message) {
    Notify({
      type: 'danger',
      message: err.response.data.message
    })
  }
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})
export default instance
