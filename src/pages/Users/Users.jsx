import React, { useEffect, useState } from 'react'
import { Badge, Breadcrumb, Button, Menu, Table } from 'antd'
import MainLayout from '../MainLayout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, setPagination, setSorter } from '../../store/usersSlice'
import { useTariffStatus } from '../../hooks/useTariffStatus'
import { useNavigate } from 'react-router-dom'

export const Users = () => {
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    const paginationConfig = useSelector((state) => state.users.pagination)
    const sort = useSelector((state) => state.users.sort)
    const dispatch = useDispatch()
    const { getStatusName, getBadgeType } = useTariffStatus()

    useEffect(() => {
        dispatch(
            fetchUsers({
                currentPage: paginationConfig.currentPage,
                perPage: paginationConfig.perPage,
                sort: sort.field,
                order: sort.order
            })
        )
    }, [paginationConfig, sort, dispatch])
    const columns = [
        {
            title: 'UID',
            dataIndex: 'uid',
            key: 'users.uid',
            align: 'center',
            sorter: true
        },
        {
            title: 'Группа',
            dataIndex: ['group', 'name'],
            key: 'groups.name',
            render: (text) => {
                if (text) {
                    return text
                }
                return ''
            },
            align: 'center',
            sorter: true
        },
        {
            title: 'Логин',
            key: 'users.id',
            dataIndex: 'login',
            render: (text, record) => {
                return (
                    <Button
                        type="link"
                        onClick={() => {
                            navigate(`/user/${record.uid}`)
                        }}
                    >
                        {text}
                    </Button>
                )
            },
            align: 'center',
            filterSearch: true,
            sorter: true
        },
        {
            key: 'tarif_plans.name',
            title: 'Тариф',
            dataIndex: ['tariff', 'name'],
            render: (text) => {
                return text ? text : ''
            },
            align: 'center',
            sorter: true
        },
        {
            key: 'dv_main.disable',
            title: 'Статус',
            dataIndex: ['tariff', 'status'],
            render: (text) => {
                return <Badge status={getBadgeType(text)} text={getStatusName(text)} />
            },
            align: 'center',
            sorter: true
        },

        {
            key: 'bills.deposit',
            title: 'Депозит',
            dataIndex: ['deposit', 'deposit'],
            render: (text) => {
                return text.toFixed(2)
            },
            align: 'center',
            sorter: true
        },
        {
            key: 'users_pi.fio',
            title: 'ФИО',
            dataIndex: ['contacts', 'fio'],
            align: 'center'
        },
        {
            ket: 'users_pi.phone',
            title: 'Телефон',
            dataIndex: ['contacts', 'phone'],
            align: 'center'
        },
        {
            key: 'users_pi.address',
            title: 'Адрес',
            dataIndex: ['contacts', 'address'],
            align: 'center'
        }
    ]
    const menu = (
        /*    {{baseUrl}}/billing/users?page=1&perpage=3&filter[contacts.fio]=иванов   */
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
            <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb>
    )
    const onChange = (pagination, filters, sorter, extra) => {
        if (Object.keys(sorter).length !== 0) {
            // onSorterChange(sorter)
            onSorterChange({ order: sorter.order, field: sorter.columnKey })
            console.log(sorter)
        }
        dispatch(setPagination(pagination))
    }
    const onSorterChange = (sorter) => {
        dispatch(setSorter(sorter))
    }
    const showTotal = (total, range) => `${range[0]}-${range[1]}  из  ${total} записей`
    return (
        <>
            <MainLayout title={title} subtitle={subTitle} breadcrumb={false} menu={menu}>
                <Table
                    tableLayout={'auto'}
                    loading={users.isLoading}
                    rowKey={(record) => record.uid}
                    columns={columns}
                    dataSource={users.data}
                    onChange={onChange}
                    pagination={{
                        showTotal,
                        showLessItems: true,
                        total: paginationConfig.total,
                        pageSize: paginationConfig.perPage,
                        responsive: true,
                        showQuickJumper: true,
                        hideOnSinglePage: false,
                        position: ['bottomRight'],
                        showSizeChanger: true,
                        pageSizeOptions: ['10', '25', '50', '100']
                    }}
                />
            </MainLayout>
        </>
    )
}
