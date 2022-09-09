import React, { useEffect, useRef, useState } from 'react'
import MainLayout from '../MainLayout/MainLayout'
import { Breadcrumb, Button, Input, Space, Table } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTariffStatus } from '../../hooks/useTariffStatus'
import { fetchUsers } from '../../store/usersSlice'

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park'
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park'
    }
]

const Test = () => {
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    const paginationConfig = useSelector((state) => state.users.pagination)
    const sort = useSelector((state) => state.users.sort)
    const dispatch = useDispatch()

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

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const searchInput = useRef(null)

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters) => {
        clearFilters()
        setSearchText('')
    }

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block'
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false
                            })
                            setSearchText(selectedKeys[0])
                            setSearchedColumn(dataIndex)
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined
                }}
            />
        ),
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100)
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            )
    })

    const columns = [
        {
            title: 'UID',
            dataIndex: 'uid',
            key: 'users.uid',
            align: 'center',
            sorter: true,
            ...getColumnSearchProps('uid')
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
            sorter: true,
            ...getColumnSearchProps('логин')
        }
    ]

    return (
        <MainLayout title={title} subtitle={subTitle} breadcrumb={breadcrumb}>
            <Table columns={columns} dataSource={users.data} />;
        </MainLayout>
    )
}

export default Test
