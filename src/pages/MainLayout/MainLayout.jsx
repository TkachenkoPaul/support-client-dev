import React from 'react'
import { Card, Col, Layout, Row, Statistic } from 'antd'
import CustomHeader from '../../components/Header/Header'
import { useTariffStatus } from '../../hooks/useTariffStatus'

function MainLayout(props) {
    const { getStatusName } = useTariffStatus()
    const profileStatistic = (
        <div
            style={{
                margin: '24px 16px 0'
            }}
        >
            <Row
                gutter={[
                    { xs: 4, sm: 8, md: 12, lg: 16 },
                    { xs: 8, sm: 16, md: 24, lg: 32 }
                ]}
                align="center"
                justify="center"
            >
                <Col sm={24} md={12} lg={8}>
                    <Card hoverable={true}>
                        <Statistic title="Баланс" value={props?.statistic?.deposit} loading={props.isLoading} suffix="руб." />
                    </Card>
                </Col>
                <Col sm={24} md={12} lg={8}>
                    <Card hoverable={true}>
                        <Statistic title="Статус" value={getStatusName(props?.statistic?.state)} loading={props.isLoading} />
                    </Card>
                </Col>
                <Col sm={24} md={12} lg={8}>
                    <Card hoverable={true}>
                        <Statistic title="Тариф" value={props?.statistic?.tariff} loading={props.isLoading} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
    return (
        <>
            <CustomHeader title={props.title} subtitle={props.subtitle} menu={props.menu} />
            {props.statistic ? profileStatistic : ''}
            <Layout>
                <Layout.Content
                    style={{
                        margin: '24px 16px 0'
                    }}
                >
                    {props.breadcrumb && ''}
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24
                            // minHeight: '100vh'
                        }}
                    >
                        {props.children}
                    </div>
                </Layout.Content>
            </Layout>
        </>
    )
}

export default MainLayout
