import React, { useState } from 'react'
import logo from '../../pages/Login/logo.png'
import { AutoComplete, Input, Layout, Menu } from 'antd'
import { uuid } from 'uuidv4'
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    CloseOutlined,
    DashboardOutlined,
    LogoutOutlined,
    MailOutlined,
    PhoneOutlined,
    SettingOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    }
}

const items = [
    getItem('Клиенты', '/', <TeamOutlined />),

    getItem('Test', '/test', <MailOutlined />),
    getItem('Техническая поддержка', '/support', <MailOutlined />),
    getItem('Колл-цент', uuid(), <PhoneOutlined />, [
        getItem('Очередь', '/call-center/queue', <DashboardOutlined />),
        getItem('Входящие', '/call-center/incoming', <ArrowRightOutlined />),
        getItem('Исходщие', '/call-center/outgoing', <ArrowLeftOutlined />),
        getItem('Потерянные', '/call-center/lost', <CloseOutlined />)
    ]),
    getItem('Настройки', uuid(), <SettingOutlined />, [getItem('Пользователи', '/admins', <UserOutlined />)]),
    getItem('Выход', '/logout', <LogoutOutlined />)
]
const SideBar = (props) => {
    const navigate = useNavigate()
    const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min
    const searchResult = (query) =>
        new Array(getRandomInt(5))
            .join('.')
            .split('.')
            .map((_, idx) => {
                const category = `${query}${idx}`
                return {
                    value: category,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span>
                                Found {query} on{' '}
                                <a href={`https://s.taobao.com/search?q=${query}`} target="_blank" rel="noopener noreferrer">
                                    {category}
                                </a>
                            </span>
                            <span>{getRandomInt(200, 100)} results</span>
                        </div>
                    )
                }
            })

    const [options, setOptions] = useState([])

    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : [])
    }

    const onSelect = (value) => {
        console.log('onSelect', value)
    }
    const handleMenuClick = ({ key }) => {
        if (key === 'sign-out') {
            console.log('sign-out')
        } else {
            navigate(key, { replace: false })
        }
    }

    return (
        <Sider breakpoint="lg" collapsedWidth="0" width={240}>
            <img src={logo} className={'logo'} alt="logo" />

            <Container>
                <AutoComplete
                    dropdownMatchSelectWidth={252}
                    style={{
                        width: 192
                    }}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                >
                    <Input.Search size="large" placeholder="Поиск" />
                </AutoComplete>
            </Container>

            <Menu
                onClick={handleMenuClick}
                style={{ marginTop: 24 }}
                theme="dark"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </Sider>
    )
}

export default SideBar
