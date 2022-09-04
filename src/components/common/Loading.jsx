import React from 'react'
import { Col, Row, Spin } from 'antd'

function Loading() {
    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Spin size="large" />
            </Col>
        </Row>
    )
}

export default Loading
