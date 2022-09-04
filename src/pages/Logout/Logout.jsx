import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'

function Logout(props) {
    const { isAuth } = useAuth()
    const dispatch = useDispatch()
    if (!isAuth) {
        return <Navigate to="login" />
    }
    dispatch(logout())

    return <Navigate to="login" />
}

export default Logout
