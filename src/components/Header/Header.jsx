import { Button, Dropdown, Layout, PageHeader } from 'antd'
import React from 'react'
import { MoreOutlined } from '@ant-design/icons'

function CustomHeader(props) {
    const { Header } = Layout

    const DropdownMenu = () =>
        props.menu ? (
            <Dropdown key="more" overlay={props.menu} placement="bottomRight">
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
        ) : null

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
                extra={[props.menu ? <DropdownMenu key="more" /> : null]}
            ></PageHeader>
        </Header>
    )
}

export default CustomHeader
