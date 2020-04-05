import http from './http'

const login = user => http.post('/user/login', user)
const register = user => http.post('/user/register', user)
const uploadAvatar = avatar => http.post('/user/avatar', avatar)

// 用户信息或密码
const updateUser = (id, newVal) => http.post(`/user/${id}/profile`, newVal)

export { login, register, uploadAvatar, updateUser }
