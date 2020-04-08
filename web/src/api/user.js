import http from './http'

const login = user => http.post('/user/login', user)
const register = user => http.post('/user/register', user)
const uploadAvatar = avatar => http.post('/user/avatar', avatar)

// 用户信息或密码
const updateProfile = (id, profile) => http.put(`/user/${id}/profile`, profile)

const fetchProfile = () => http.get('/user/profile')

const fetchSelling = id => http.get(`/user/${id}/selling`)

export { login, register, uploadAvatar, updateProfile, fetchProfile, fetchSelling }
