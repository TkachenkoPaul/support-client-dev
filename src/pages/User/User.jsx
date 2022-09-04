import React, { useState } from 'react'
import MainLayout from '../MainLayout/MainLayout'
import { Breadcrumb } from 'antd'

function User() {
    const [title, setTitle] = useState('erem-4-5')
    const [subTitle, setSubTitle] = useState('РЦК')
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

export default User
