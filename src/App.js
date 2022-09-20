import './App.css'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AppLayout from './components/layout/AppLayout'
import { BackTop } from 'antd'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import { NotFound } from './pages/NotFound/NotFound'
import Support from './pages/Support/Support'
import Test from './pages/Test/Test'
import User from './pages/User/User'
import { Users } from './pages/Users/Users'
import Fees from './pages/Fees/Fees'
import Payments from './pages/Payments/Payments'

function App() {
  return (
    <>
      <BackTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Users />} />
          <Route path="user/:uid" element={<User />} />
          <Route path="support" element={<Support />} />
          <Route path="test" element={<Test />} />
          <Route path="fees" element={<Fees />} />
          <Route path="payments" element={<Payments />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </>
  )
}

export default App
