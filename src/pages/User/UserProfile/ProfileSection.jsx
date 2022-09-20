import React, { useEffect } from 'react'
import { Button, DatePicker, Descriptions, Dropdown, Menu} from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import moment from 'moment'
import { setCredit } from '../../../store/userSlice'
import { useDispatch } from 'react-redux'

const ProfileSection = ({ user }) => {
  const dispatch = useDispatch()
  const handleMenuClick = (e) => {
    if (e.key === '1') {
      dispatch(setCredit(1))
    }
    console.log(e)
  }
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: '1',
          label: 'Кредит'
        }
      ]}
    />
  )
  useEffect(() => {
    setCredit(user?.credit.credit)
  }, [user?.credit.credit])

  return (
    <Descriptions
      layout="vertical"
      bordered
      title="Профиль"
      column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
      extra={
        <Dropdown key="more" overlay={menu} placement="bottomRight">
          <Button
            type="text"
            icon={
              <MoreOutlined
                style={{
                  fontSize: 20
                }}
              />
            }
          />
        </Dropdown>
      }
    >
      <Descriptions.Item label="Кредит">{user?.credit.credit}</Descriptions.Item>
      <Descriptions.Item label="Кредит дата">{user?.credit.credit_date}</Descriptions.Item>
      <Descriptions.Item label="Активация">
        {user?.activate !== '0000-00-00' ? (
          <DatePicker defaultValue={moment(user?.activate, 'YYYY-MM-DD')} format={'YYYY-MM-DD'} bordered={false} />
        ) : (
          <DatePicker format={'YYYY-MM-DD'} bordered={false} />
        )}
      </Descriptions.Item>
      <Descriptions.Item label="Регистрация">
        {user?.registration !== '0000-00-00' ? (
          <DatePicker defaultValue={moment(user?.registration, 'YYYY-MM-DD')} format={'YYYY-MM-DD'} bordered={false} />
        ) : (
          <DatePicker format={'YYYY-MM-DD'} bordered={false} />
        )}
      </Descriptions.Item>
    </Descriptions>
  )
}

export default ProfileSection
