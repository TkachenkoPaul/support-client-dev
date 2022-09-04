import { useLocation, useNavigate } from 'react-router-dom'
import React, { createContext, useState } from 'react'

const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250)
    })

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const AuthContext = createContext(null)
    const [token, setToken] = useState(null)

    const handleLogin = async () => {
        const token = await fakeAuth()

        setToken(token)
        const origin = location.state
        console.log(origin)
        navigate(origin.from.pathname)
    }

    const handleLogout = () => {
        setToken(null)
    }

    const value = {
        auth: { token, onLogin: handleLogin, onLogout: handleLogout }
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export default AuthProvider
