import { Col, Layout, Row } from 'antd'
import React from 'react'
import logo from './logo.png'
import style from './Login.module.css'
import LoginForm from './LoginForm'
import Title from '../../components/common/Title'
import { useAuth } from '../../hooks/useAuth'
import Loading from '../../components/common/Loading'

const { Content } = Layout
const Login = () => {
    const { isLoading } = useAuth()
    if (isLoading) {
        return <Loading />
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row justify="center" align="middle" style={{ height: '100vh' }}>
                <Col style={{ width: 360 }}>
                    <img src={logo} className={`${style.logo}`} alt="Responsive" />
                    <Content className={`${style.loginBox}`}>
                        <Title level={2}>РЦК Support</Title>
                        <LoginForm />
                    </Content>
                </Col>
            </Row>
        </Layout>
    )
}

export default Login
