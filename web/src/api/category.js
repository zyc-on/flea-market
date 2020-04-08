import http from './http'

const fetchCategories = () => http.get('/category')

export {
  fetchCategories
}
