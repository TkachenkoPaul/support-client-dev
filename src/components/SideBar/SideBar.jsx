import React from 'react'
import logo from '../logo.png'
import { Layout, Menu } from 'antd'
import { uuid } from 'uuidv4'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  DashboardOutlined,
  MailOutlined,
  PhoneOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'

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
  getItem('Клиенты', uuid(), <TeamOutlined />),

  getItem('Техническая поддержка', uuid(), <MailOutlined />),
  getItem('Колл-цент', uuid(), <PhoneOutlined />, [
    getItem('Очередь', uuid(), <DashboardOutlined />),
    getItem('Входящие', uuid(), <ArrowRightOutlined />),
    getItem('Исходщие', uuid(), <ArrowLeftOutlined />),
    getItem('Потерянные', uuid(), <CloseOutlined />)
  ]),
  getItem('Настройки', uuid(), <SettingOutlined />, [
    getItem('Пользователи', uuid(), <UserOutlined />)
  ])
]
const SideBar = (props) => (
  <Sider breakpoint="lg" collapsedWidth="0" width={240}>
    <img src={logo} className={'logo'} alt="logo" />
    <Menu
      style={{ marginTop: 24 }}
      theme="dark"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  </Sider>
)

export default SideBar
