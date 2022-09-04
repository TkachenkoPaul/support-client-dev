import React from 'react'
import { Layout } from 'antd'
import CustomHeader from '../../components/Header/Header'

function MainLayout(props) {
    return (
        <>
            <CustomHeader title={props.title} subtitle={props.subtitle} menu={props.menu} />
            <Layout.Content
                style={{
                    margin: '24px 16px 0'
                }}
            >
                {props.breadcrumb}
                <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: '100vh'
                    }}
                >
                    {props.children}
                </div>
            </Layout.Content>
        </>
    )
}

export default MainLayout
