import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Layout } from 'antd'
import Footer from '../Footer/Footer'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

function AppLayout(props) {
    const { isAuth } = useAuth()
    const location = useLocation()
    console.log(isAuth)
    if (!isAuth) {
        return <Navigate to="login" replace state={{ from: location }} />
    }
    return (
        <>
            <SideBar />
            <Layout>
                <Outlet />
                <Footer />
            </Layout>
        </>
    )
}

export default AppLayout
