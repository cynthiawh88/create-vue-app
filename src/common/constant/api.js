const BASE_URL = process.env.NODE_ENV !== 'production' ? 'dev' : 'product'

let api = {
  CHECK: '/api/check'
}

for (let k in api) {
  api[k] = BASE_URL + api[k]
}

export default api
