import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Alert, Button, Checkbox, Form, Input } from 'antd'
import React from 'react'
import styles from './Login.module.css'

const LoginForm = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
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

      {props.alert && <Alert message="Ошибка" description={props.alert} type="error" showIcon closable />}
    </Form>
  )
}

export default LoginForm
