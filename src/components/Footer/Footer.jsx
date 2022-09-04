import React from 'react'
import { Layout } from 'antd'

const Footer = () => {
    const date = new Date()
    return <Layout.Footer style={{ textAlign: 'center' }}>2015 - {date.getFullYear()} ГУП ЛНР Республиканские Цифровые Коммуникации</Layout.Footer>
}
export default Footer
