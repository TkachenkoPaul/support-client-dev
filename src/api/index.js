import axios from 'axios'

const baseURL = 'http://192.168.8.253:8050/api'
let token = null
const storageToken = JSON.parse(localStorage.getItem('persist:auth'))
if (storageToken !== null) {
  if (typeof storageToken === 'object' && storageToken.hasOwnProperty('token')) token = storageToken.token.replace(/['"]+/g, '')
}
// const token = JSON.parse(localStorage.getItem('persist:root')).token.replace(/['"]+/g, '')

const api = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000,
  headers: { Accept: 'application/json', Authorization: `Bearer ${token}` }
})
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    console.log('axios error interceptors', error)
    if (error.response.status === 401) {
      // localStorage.removeItem('persist:auth')
      // window.location.reload()
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export async function getAuth(user) {
  return api
    .post('/login', {
      id: user.username,
      password: user.password
    })
    .then((response) => response)
    .catch((error) => {
      return error
    })
}

export async function getUsers(data) {
  let sort
  if (data.order === 'descend') {
    sort = `${data.sort}`
  } else {
    sort = `-${data.sort}`
  }
  return api
    .get(`/billing/users?page=${data.currentPage}&perpage=${data.perPage}&sort=${sort}`)
    .then((response) => response)
    .catch((error) => {
      return error
    })
}

export async function getUser(uid = 1) {
  return api
    .get(`/billing/users/${uid}`)
    .then((response) => response)
    .catch((error) => {
      return error
    })
}

export async function setUserCredit(uid) {
  return api
    .post(`/billing/users/${uid}/credit`)
    .then((response) => response)
    .catch((error) => {
      return error
    })
}

export async function getFees() {
  return api
    .get(`billing/fees`)
    .then((response) => response)
    .catch((error) => {
      return error
    })
}

export async function getUserFees(data) {
  let uri = `billing/fees?page=${data.currentPage}&perpage=${data.perPage}`
  if (data.billId !== undefined) {
    uri = uri + `&billId=${data.billId}`
  }
  return api
    .get(uri)
    .then((response) => response)
    .catch((error) => {
      return error
    })
}
