import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { Layout } from 'antd'
import CustomHeader from '../../components/Header/Header'

function MainLayout(props) {
  return (
    <>
      <SideBar />
      <Layout>
        <CustomHeader />
        {props.children}
      </Layout>
    </>
  )
}

export default MainLayout
