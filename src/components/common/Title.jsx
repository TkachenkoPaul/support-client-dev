import React from 'react'
import { Space, Typography } from 'antd'
const { Title } = Typography
export default function TitleCustom(props) {
  return (
    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
      <Title level={props.level}>{props.children}</Title>
    </Space>
  )
}
