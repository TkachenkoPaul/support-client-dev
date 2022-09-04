import React, { useState } from 'react'
import MainLayout from '../MainLayout/MainLayout'
import { Result } from 'antd'

export const NotFound = () => {
    const [title, setTitle] = useState(null)
    const [subTitle, setSubTitle] = useState(null)
    return (
        <MainLayout title={title} subtitle={subTitle}>
            <Result status="404" title="404" subTitle="Страница не найдена" />
        </MainLayout>
    )
}
