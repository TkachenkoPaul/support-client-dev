import React, { useEffect, useState } from 'react'
import MainLayout from '../MainLayout/MainLayout'
import { Breadcrumb, Button, Card, Col, Menu, Row, Space, Statistic } from 'antd'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../store/userSlice'
import { NotFound } from '../NotFound/NotFound'

function User() {
    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const urlParams = useParams()
    let uid = urlParams.uid
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
    useEffect(() => {
        dispatch(fetchUser(uid))
    }, [])
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                            1st menu item
                        </a>
                    )
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                            2nd menu item
                        </a>
                    )
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                            3rd menu item
                        </a>
                    )
                }
            ]}
        />
    )
    if (!user) {
        return <NotFound />
    }
    console.log('user', user.data?.login)
    return (
        <MainLayout title={user.data?.login} subtitle={user.data?.group?.name} breadcrumb={breadcrumb} menu={menu}>
            <Row align="center" justify="center">
                <Space size="large">
                    <Col sm={24} md={12} lg={6}>
                        <Card>
                            <Statistic title="Active Users" value={112893} loading={isLoading} />
                        </Card>
                    </Col>
                    <Col sm={24} md={12} lg={6}>
                        <Card>
                            {' '}
                            <Statistic title="Active Users" value={112893} loading={isLoading} />
                        </Card>
                    </Col>
                    <Col sm={24} md={12} lg={6}>
                        <Card>
                            {' '}
                            <Statistic title="Active Users" value={112893} loading={isLoading} />
                        </Card>
                    </Col>
                    <Col sm={24} md={12} lg={6}>
                        <Card>
                            {' '}
                            <Statistic title="Active Users" value={112893} loading={isLoading} />
                        </Card>
                    </Col>
                </Space>
            </Row>
            <Button onClick={() => setIsLoading(!isLoading)}>click</Button>
        </MainLayout>
    )
}

export default User
