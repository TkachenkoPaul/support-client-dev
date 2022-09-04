import React from 'react'
import { useSelector } from 'react-redux'

export const useAuth = () => {
    const isAuth = useSelector((state) => !!state.auth.token)
    const error = useSelector((state) => state.auth.error)
    const isLoading = useSelector((state) => state.auth.isLoading)
    return { isAuth, error, isLoading }
}
