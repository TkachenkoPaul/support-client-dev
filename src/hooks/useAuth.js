import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const useAuth = () => {
    const isAuth = useSelector((state) => !!state.auth.token)
    const error = useSelector((state) => state.auth.error)
    const isLoading = useSelector((state) => state.auth.isLoading)
    return { isAuth, error, isLoading }
}
