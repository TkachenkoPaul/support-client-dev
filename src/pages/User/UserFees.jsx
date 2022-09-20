import React from 'react'
import FeesTable from '../../components/Fees/FeesTable'

export const UserFees = ({ billId }) => {
  return (
    <>
      <FeesTable billId={billId} />
    </>
  )
}
