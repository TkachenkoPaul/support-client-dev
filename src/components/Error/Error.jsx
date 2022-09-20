import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Result, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const { Paragraph, Text } = Typography

const Error = ({ message }) => {
    const navigate = useNavigate()
    return (
        <Result
            status="error"
            title="Ошибка"
            subTitle="Запрос вызвал ошибку "
            extra={[
                <Button
                    type="primary"
                    key="console"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    На главную
                </Button>
            ]}
        >
            <div className="desc">
                <Paragraph>
                    <Text
                        strong
                        style={{
                            fontSize: 16
                        }}
                    >
                        Сообщение
                    </Text>
                </Paragraph>
                <Paragraph>
                    <CloseCircleOutlined className="site-result-demo-error-icon" /> {message}
                </Paragraph>
            </div>
        </Result>
    )
}
export default Error
