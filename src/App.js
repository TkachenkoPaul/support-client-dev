import React from 'react'
import './App.css'
import User from './pages/User/User'
import { Route, Routes } from 'react-router-dom'
import { Users } from './pages/Users/Users'
import AppLayout from './components/layout/AppLayout'
import Support from './pages/Support/Support'
import { NotFound } from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import Test from './pages/Test/Test'

function App(props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Users />} />
                    <Route path="user/:uid" element={<User />} />
                    <Route path="support" element={<Support />} />
                    <Route path="test" element={<Test />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </>
    )
}

export default App
