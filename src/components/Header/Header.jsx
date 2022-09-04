import { Button, Dropdown, Layout, Menu, PageHeader } from 'antd'
import React from 'react'

import { MoreOutlined } from '@ant-design/icons'

function CustomHeader(props) {
    const { Header } = Layout
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

    const DropdownMenu = () => (
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
    )

    return (
        <Header
            className="site-layout-sub-header-background"
            style={{
                padding: 0
            }}
        >
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={props.title}
                subTitle={props.subtitle}
                extra={[<DropdownMenu key="more" />]}
            ></PageHeader>
        </Header>
    )
}

export default CustomHeader
