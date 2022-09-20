import React, { useState } from 'react'
import MainLayout from '../MainLayout/MainLayout'
import Error from '../../components/Error/Error'
import { Breadcrumb, Menu } from 'antd'

const Payments = () => {
  const [isLoading, setIsLoading] = useState(false)
  const error = false
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
        }
      ]}
    />
  )
  return (
    <MainLayout isLoading={isLoading} title={'Оплаты'} subtitle={'список'} breadcrumb={breadcrumb} menu={menu}>
      {error ? <Error message={error} /> : 'оплаты'}
    </MainLayout>
  )
}

export default Payments
