import './App.css'

import { AutoComplete, Avatar, Button, Col, Layout, Row } from 'antd'
import React, { useState } from 'react'

import { AntDesignOutlined } from '@ant-design/icons'
import MainLayout from './pages/MainLayout/MainLayout'
import SideBar from './components/SideBar/SideBar'

const { Header, Content, Footer } = Layout
const { Option } = AutoComplete

const App = () => {
    return (
        <>
            <MainLayout>
                <Content
                    style={{
                        margin: '24px 16px 0'
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: '100vh'
                        }}
                    >
                        content
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </MainLayout>
        </>
    )
}

export default App
