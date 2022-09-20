import { Breadcrumb, Menu, Tabs } from 'antd'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Error from '../../components/Error/Error'
import MainLayout from '../MainLayout/MainLayout'
import { NotFound } from '../NotFound/NotFound'
import { UserFees } from './UserFees'
import { UserHistory } from './UserHistory'
import { UserPayments } from './UserPayments'
import { UserProfile } from './UserProfile/UserProfile'
import { fetchUser } from '../../store/userSlice'

const User = () => {
  const error = useSelector((state) => state.user.error)
  const isProfileLoaded = useSelector((state) => state.user.isLoading)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const urlParams = useParams()
  let uid = urlParams.uid
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
  }, [dispatch, uid])
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
  const items = [
    { label: 'Профиль', key: 'item-1', children: <UserProfile isLoading={isProfileLoaded} user={user.data} /> },
    { label: 'Снятия', key: 'item-2', children: <UserFees billId={user?.data?.deposit.id} isLoading={isProfileLoaded} /> },
    { label: 'Оплаты', key: 'item-3', children: <UserPayments billId={user?.data?.deposit.id} isLoading={isProfileLoaded} /> },
    { label: 'История', key: 'item-4', children: <UserHistory isLoading={isProfileLoaded} /> }
  ]
  if (error) {
    return <Error message={error} />
  }
  return (
    <MainLayout
      statistic={{ deposit: user?.data?.deposit?.deposit, tariff: user?.data?.tariff?.name, state: user?.data?.tariff?.status }}
      isLoading={isProfileLoaded}
      title={user.data?.login}
      subtitle={user.data?.group?.name}
      breadcrumb={breadcrumb}
      menu={menu}
    >
      {error ? <Error message={error} /> : <Tabs tabPosition="right" items={items} />}
    </MainLayout>
  )
}

export default User
