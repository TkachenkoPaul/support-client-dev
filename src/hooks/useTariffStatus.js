import React from 'react'
export const useTariffStatus = () => {
    const getStatusName = (statusId) => {
        const arrayOfStatusId = {
            0: 'Активно',
            1: 'Отключено',
            2: 'Не активизирован',
            3: 'Приостановлениe',
            4: 'Отключено неуплата',
            5: 'Слишком маленький депозит',
            6: 'Отключено за вирусы',
            7: 'Default item'
        }
        return arrayOfStatusId[statusId] || arrayOfStatusId[7]
    }
    const getBadgeType = (statusId) => {
        const arrayOfStatusId = {
            0: 'processing',
            1: 'error',
            2: 'default',
            3: 'warning',
            4: 'error',
            5: 'warning',
            6: 'error',
            7: 'default'
        }
        return arrayOfStatusId[statusId] || arrayOfStatusId[7]
    }
    return { getStatusName, getBadgeType }
}
