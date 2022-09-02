import { AutoComplete, Avatar, Button, Col, Layout, Row } from 'antd'
import React, { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import { AntDesignOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout
const { Option } = AutoComplete

const App = () => {
  const [result, setResult] = useState([])

  const handleSearch = (value) => {
    let res = []
    if (!value || value.indexOf('@') >= 0) {
      res = []
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`)
    }
    setResult(res)
  }

  return (
    <>
      <SideBar />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0
          }}>
          <Row justify="end" style={{ paddingRight: 16, paddingLeft: 16 }}>
            {/*<Col span={{ xs: 24, sm: 24, md: 12, lg: 8 }} push={{ xs: 0, sm: 0, md: 12, lg: 14 }}>*/}
            {/*  <Row>*/}
            {/*    <Col flex={2} style={{ background: '#000' }}>*/}
            {/*      <AutoComplete*/}
            {/*        allowClear*/}
            {/*        style={{*/}
            {/*          width: 200*/}
            {/*        }}*/}
            {/*        onSearch={handleSearch}*/}
            {/*        placeholder="input here">*/}
            {/*        {result.map((email) => (*/}
            {/*          <Option key={email} value={email}>*/}
            {/*            {email}*/}
            {/*          </Option>*/}
            {/*        ))}*/}
            {/*      </AutoComplete>*/}
            {/*    </Col>*/}
            {/*    <Col flex={2} style={{ background: '#000' }}>*/}
            {/*      <Avatar*/}
            {/*        size={{ xs: 24, sm: 24, md: 32, lg: 40, xl: 40, xxl: 50 }}*/}
            {/*        icon={<AntDesignOutlined />}*/}
            {/*      />*/}
            {/*    </Col>*/}
            {/*  </Row>*/}
            {/*</Col>*/}
            <Col span={{ xs: 24, sm: 16, md: 12, lg: 8, xl: 8, xxl: 8 }}>
              <Row>
                <Col flex={3}>
                  <AutoComplete allowClear onSearch={handleSearch} placeholder="input here">
                    {result.map((email) => (
                      <Option key={email} value={email}>
                        {email}
                      </Option>
                    ))}
                  </AutoComplete>
                </Col>
                <Col flex={2} style={{ background: '#000' }}>
                  <Avatar
                    size={{ xs: 24, sm: 24, md: 32, lg: 40, xl: 40, xxl: 50 }}
                    icon={<AntDesignOutlined />}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0'
          }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360
            }}>
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  )
}

export default App
