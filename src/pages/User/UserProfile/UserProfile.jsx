import { Badge, Button, Col, Descriptions, Form, Input, Row, Select, Typography } from 'antd'
import { HighlightOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Description } from '@mui/icons-material'
import { Skeleton } from 'antd/es'
import { useTariffStatus } from '../../../hooks/useTariffStatus'
import ProfileSection from './ProfileSection'

const { Paragraph } = Typography

export const UserProfile = ({ user, isLoading }) => {
  const { getStatusName, getBadgeType } = useTariffStatus()
  const [comment, setComment] = useState(user?.contacts?.comments)
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>{isLoading ? <Skeleton /> : <ProfileSection user={user} />}</Col>
        <Col span={24}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Descriptions
              layout="vertical"
              bordered
              title="Тариф"
              column={{ xxl: 4, xl: 4, lg: 2, md: 2, sm: 2, xs: 1 }}
              extra={<Button type="primary">Изменить</Button>}
            >
              <Descriptions.Item label="Тариф">{user?.tariff.name}</Descriptions.Item>
              <Descriptions.Item label="Статус">
                <Badge status={getBadgeType(user?.tariff.status)} text={getStatusName(user?.tariff.status)} />
              </Descriptions.Item>
              <Descriptions.Item label="Статус">
                <Select
                  style={{
                    width: '100%'
                  }}
                  defaultValue={getStatusName(user?.tariff.status)}
                  showSearch
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.children.includes(input)}
                  filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
                >
                  <Select.Option value="0">Активно</Select.Option>
                  <Select.Option value="1">Отключено</Select.Option>
                  <Select.Option value="2">Не активизирован</Select.Option>
                  <Select.Option value="3">Приостановление</Select.Option>
                </Select>
              </Descriptions.Item>
              <Descriptions.Item label="От">2022-09-09 (Дни: 1)</Descriptions.Item>
              <Descriptions.Item label="Оплачено">1</Descriptions.Item>
              <Descriptions.Item label="Завершится">2022-09-09</Descriptions.Item>
              <Descriptions.Item label="Порт">14</Descriptions.Item>
              <Descriptions.Item label="Активный ip">
                <Paragraph
                  editable={{
                    icon: <HighlightOutlined />,
                    tooltip: 'click to edit text',
                    onChange: (e) => {
                      console.log(e)
                    }
                  }}
                >
                  192.168.0.1
                </Paragraph>
              </Descriptions.Item>
              <Descriptions.Item label="IP">10.0.12.182</Descriptions.Item>
              <Descriptions.Item label="Коммутатор">sw_olh_16_2 10.74.124.223</Descriptions.Item>
              <Descriptions.Item label="Vlan">621</Descriptions.Item>
            </Descriptions>
          )}
        </Col>
        <Col span={24}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Descriptions bordered title="Информация" column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}>
              <Descriptions.Item label="ФИО" span={2}>
                {user?.contacts.fio}
              </Descriptions.Item>
              <Descriptions.Item label="Телефон">{user?.contacts.phone}</Descriptions.Item>
              <Descriptions.Item label="Город">{user?.contacts.city}</Descriptions.Item>
              <Descriptions.Item label="Улица" span={2}>
                {user?.contacts.street}
              </Descriptions.Item>
              <Descriptions.Item label="Дом">{user?.contacts.build}</Descriptions.Item>
              <Descriptions.Item label="Квартира">{user?.contacts.flat}</Descriptions.Item>
            </Descriptions>
          )}
        </Col>
        <Col span={24}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Descriptions bordered title="Договор" column={{ xxl: 4, xl: 4, lg: 2, md: 2, sm: 2, xs: 1 }}>
              <Descriptions.Item label="Номер">{user?.contacts.contract_id}</Descriptions.Item>
              <Descriptions.Item label="Дата">{user?.contacts.contract_date}</Descriptions.Item>
            </Descriptions>
          )}
        </Col>
        <Col span={24}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Descriptions bordered title="Паспорт" column={{ xxl: 4, xl: 4, lg: 2, md: 2, sm: 2, xs: 1 }}>
              <Descriptions.Item label="Серия, номер">{user?.contacts.passport_num}</Descriptions.Item>
              <Descriptions.Item label="Дата">{user?.contacts.passport_date}</Descriptions.Item>
              <Descriptions.Item label="Выдан">{user?.contacts.passport_grant}</Descriptions.Item>
            </Descriptions>
          )}
        </Col>
        <Col title={'test'} span={24}>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Descriptions bordered title="Комментарий" column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
              <Description.Item labale="Комментарий">
                <Form>
                  <Form.Item>
                    <Input.TextArea rows={4} placeholder="Введите коммантарий" showCount={true} value={comment} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Добавить
                    </Button>
                  </Form.Item>
                </Form>
              </Description.Item>
            </Descriptions>
          )}
        </Col>
      </Row>
    </>
  )
}
