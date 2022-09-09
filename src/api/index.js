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
    timeout: 3000,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
})

export async function authAdminRequest(user) {
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

export async function usersRequest(data) {
    let sort = ''
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

export async function userRequest(uid = 1) {
    return api
        .get(`/billing/users/${uid}`)
        .then((response) => response)
        .catch((error) => {
            return error
        })
}
