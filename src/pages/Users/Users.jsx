import React, { useEffect, useState } from 'react'
import { Breadcrumb, Menu, Table } from 'antd'
import MainLayout from '../MainLayout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../store/usersSlice'

export const Users = () => {
    const users = useSelector((state) => state.users.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Chinese Score',
            dataIndex: 'chinese',
            sorter: {
                compare: (a, b) => a.chinese - b.chinese,
                multiple: 3
            }
        },
        {
            title: 'Math Score',
            dataIndex: 'math',
            sorter: {
                compare: (a, b) => a.math - b.math,
                multiple: 2
            }
        },
        {
            title: 'English Score',
            dataIndex: 'english',
            sorter: {
                compare: (a, b) => a.english - b.english,
                multiple: 1
            }
        }
    ]
    const data = [
        {
            key: '1',
            name: 'John Brown',
            chinese: 98,
            math: 60,
            english: 70
        },
        {
            key: '2',
            name: 'Jim Green',
            chinese: 98,
            math: 66,
            english: 89
        },
        {
            key: '3',
            name: 'Joe Black',
            chinese: 98,
            math: 90,
            english: 70
        },
        {
            key: '4',
            name: 'Jim Red',
            chinese: 88,
            math: 99,
            english: 89
        }
    ]
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
    const [title, setTitle] = useState('Клиенты')
    const [subTitle, setSubTitle] = useState('')
    const breadcrumb = (
        <Breadcrumb style={{ marginBottom: 12 }}>
            <Breadcrumb.Item>Клиенты</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    )
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra)
    }

    return (
        <>
            <MainLayout title={title} subtitle={subTitle} breadcrumb={breadcrumb} menu={menu}>
                <Table
                    style={{ minHeight: '100vh' }}
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                    pagination={{
                        hideOnSinglePage: true,
                        position: ['bottomRight']
                    }}
                />
            </MainLayout>
        </>
    )
}
