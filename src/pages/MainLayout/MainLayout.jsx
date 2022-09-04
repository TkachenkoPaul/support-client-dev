import React from 'react'
import { Layout } from 'antd'
import CustomHeader from '../../components/Header/Header'
import { NavLink } from 'react-router-dom'

function MainLayout(props) {
    return (
        <>
            <CustomHeader title={props.title} subtitle={props.subtitle} />
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
                    <NavLink to="/user">Link user</NavLink>
                    <NavLink to="/">Link users</NavLink>
                </div>
            </Layout.Content>
        </>
    )
}

export default MainLayout
