import React, { useState } from 'react'
import { Breadcrumb } from 'antd'
import MainLayout from '../MainLayout/MainLayout'

function Support() {
    const [title, setTitle] = useState('Техническая поддержка')
    const [subTitle, setSubTitle] = useState('Все заявки')
    const breadcrumb = (
        <Breadcrumb style={{ marginBottom: 12 }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    )
    return (
        <MainLayout title={title} subtitle={subTitle} breadcrumb={breadcrumb}>
            user page
        </MainLayout>
    )
}

export default Support
