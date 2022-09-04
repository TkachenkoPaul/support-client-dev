import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Form, Input } from 'antd'
import React from 'react'
import styles from './Login.module.css'
import { useDispatch } from 'react-redux'
import { authAdmin } from '../../store/authSlice'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const LoginForm = () => {
    const { isAuth, error } = useAuth()
    const dispatch = useDispatch()
    const location = useLocation()
    const origin = location.state?.from?.pathname || '/'
    if (isAuth) {
        return <Navigate to={origin} />
    }
    const onFinish = (values) => {
        dispatch(authAdmin(values))
    }

    return (
        <Form
            size={'large'}
            name={'loginFrom'}
            className={'loginForm'}
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
        >
            <Form.Item
                style={{ marginBottom: 32 }}
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите свой логин!'
                    }
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" allowClear={true} />
            </Form.Item>
            <Form.Item
                style={{ marginBottom: 32 }}
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите свой пароль!'
                    }
                ]}
            >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Пароль" allowClear={true} />
            </Form.Item>

            <Form.Item style={{ marginBottom: 32 }}>
                <Button type="primary" htmlType="submit" className={`${styles.logonFormButton}`}>
                    Войти
                </Button>
            </Form.Item>

            {!!error && <Alert message="Ошибка" description={error} type="error" showIcon closable />}
        </Form>
    )
}

export default LoginForm
