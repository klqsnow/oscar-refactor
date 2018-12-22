import axios from 'axios'

const instance = axios.create({
  baseURL: '/testapi',
  timeout: 15000
})

instance.interceptors.response.use(response => {
  const res = response.data
  if (!res.errorNo) {
    return res
  }
  alert(res.errorMsg)
}, error => { alert(JSON.stringify(error)) })

export default {
  get: (url, param) => {
    return instance({
      method: 'get',
      url,
      params: param
    })
  },
  post: (url, param) => {
    return instance({
      method: 'post',
      url,
      data: param
    })
  }
}
