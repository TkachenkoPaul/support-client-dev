import axios from 'axios'

const baseURL = 'http://192.168.8.253:8050/api'
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC44LjI1Mzo4MDUwL2FwaS9sb2dpbiIsImlhdCI6MTY2MjIxMzYzOSwiZXhwIjoxNjYyMzAwMDM5LCJuYmYiOjE2NjIyMTM2MzksImp0aSI6IkV6ZFZ4djZwa3FIYVd5YjciLCJzdWIiOiJ0a2FjaGVua28iLCJwcnYiOiJiYWNkYzM1Yzk3OWI0YTg3YzZjZTYxYjgyMmU0MmY4NDMzNTk0NjZmIn0.OvHSNMXPH8oUOGlsgEjwoHNU6s-8NZDMkZPa6LKia_w'

const api = axios.create({
    baseURL,
    withCredentials: true,
    // TODO добавить обработку ошибок по таймауту соединения
    timeout: 5000,
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` }
})

api.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

export async function authAdminRequest(user) {
    return api.post('/login', {
        id: user.username,
        password: user.password
    })
}

export async function usersRequest() {
    return api.get('/billing/users')
}
