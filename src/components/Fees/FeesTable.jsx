import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFees, setPagination } from '../../store/feesSlice'

const FeesTable = ({ billId }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const fees = useSelector((state) => state.fees)
  const paginationConfig = fees?.pagination
  const showTotal = (total, range) => `${range[0]}-${range[1]}  из  ${total} записей`
  const onChange = (pagination, filters, sorter, extra) => {
    dispatch(setPagination(pagination))
  }
  useEffect(() => {
    dispatch(
      fetchFees({
        billId: billId,
        currentPage: paginationConfig.currentPage,
        perPage: paginationConfig.perPage
      })
    )
  }, [paginationConfig, dispatch])
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      sorter: true
    },
    {
      title: 'Логин',
      dataIndex: 'login',
      key: 'login',
      align: 'center',
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
      sorter: true
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'datetime',
      align: 'center',
      sorter: true
    },
    {
      title: 'Сумма',
      dataIndex: 'sum',
      key: 'sum',
      align: 'center',
      sorter: true
    },
    {
      title: 'Депозит операции',
      key: 'last_deposit',
      dataIndex: 'last_deposit',
      align: 'center'
    },
    {
      title: 'Описание',
      key: 'inner_desc',
      dataIndex: 'inner_desc',
      align: 'center'
    },
    {
      title: 'Ответственный',
      key: 'admin_name',
      dataIndex: 'admin_name',
      align: 'center',
      sorter: true
    },
    {
      title: 'Ip',
      key: 'ip',
      dataIndex: 'ip',
      align: 'center',
      sorter: true
    }
  ]
  return (
    <Table
      size={'middle'}
      tableLayout={'auto'}
      loading={fees.isLoading}
      rowKey={(record) => record.uid}
      columns={columns}
      dataSource={fees.data}
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
  )
}

export default FeesTable
