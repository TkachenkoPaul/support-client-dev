import './App.css'
import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageTwoTone,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import {
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Col,
  Input,
  Layout,
  Menu,
  Row,
  Space,
  Tooltip
} from 'antd'
import React, { useState } from 'react'
import logo from './components/logo.png'

const { Header, Content, Footer, Sider } = Layout

const onChange = (e) => {
  console.log(e)
}

function App(props) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <Layout style={{ height: '100%', minHeight: '100vh' }}>
      <BackTop />
      <NavBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: '0 16px 0'
          }}>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32
            }}>
            <Col
              xs={{ span: 2 }}
              sm={{ span: 2 }}
              md={{ span: 2 }}
              lg={{ span: 2 }}
              xl={{ span: 2 }}>
              <Space align="center" size={24}>
                {isCollapsed ? (
                  <MenuUnfoldOutlined
                    className={'trigger'}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  />
                ) : (
                  <MenuFoldOutlined
                    className={'trigger'}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  />
                )}
              </Space>
            </Col>
            <Col
              xs={{ span: 2 }}
              sm={{ span: 2 }}
              md={{ span: 2 }}
              lg={{ span: 2 }}
              xl={{ span: 2 }}>
              <Space align="center" size={24}>
                <a href="/test">
                  <Badge count={100} overflowCount={99}>
                    <Tooltip title="Мои заявки">
                      <Button shape="circle" icon={<MessageTwoTone />} />
                    </Tooltip>
                  </Badge>
                </a>
              </Space>
            </Col>
            <Col
              xs={{ span: 12, push: 8 }}
              sm={{ span: 10, push: 10 }}
              md={{ span: 8, push: 12 }}
              lg={{ span: 6, push: 14 }}
              xl={{ span: 4, push: 16 }}>
              <Input placeholder="input with clear icon" allowClear onChange={onChange} />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '0px 16px 0'
          }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 1360
            }}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore dolores
              possimus unde vel. Animi corporis cumque est exercitationem illo incidunt ipsum
              mollitia nihil possimus quisquam repellat, sint tempore vitae?
            </div>
            <div>
              Architecto dicta hic omnis quae sit. Ad aliquid atque, dolor doloremque ducimus enim
              expedita laborum natus neque non nostrum officiis optio quaerat quam quia quis rerum
              sed sunt unde voluptate?
            </div>
            <div>
              Ab aperiam asperiores aut culpa distinctio dolore, error ipsum libero magnam magni
              modi mollitia neque nisi omnis pariatur, perspiciatis placeat quae quod soluta
              suscipit, totam voluptate voluptatem. Consequatur, perspiciatis, repellat!
            </div>
            <div>
              Aspernatur blanditiis corporis, enim esse facilis, maiores minima nobis quibusdam
              repudiandae sapiente suscipit temporibus unde? Aliquam, commodi cum cumque et iste,
              itaque obcaecati placeat porro possimus quis repellendus veritatis voluptatum?
            </div>
            <div>
              Consectetur deleniti eum facere in laudantium molestias nesciunt odio perferendis
              quaerat, ratione sequi soluta velit vero? Delectus dolorem ea ipsum necessitatibus
              qui. Ab cumque, dicta dolorem error molestiae soluta voluptate.
            </div>
            <div>
              Accusantium, deserunt dignissimos distinctio eaque eos esse in molestiae nam nihil
              nisi nostrum perspiciatis repellat repudiandae sunt tempore vitae voluptas. Amet eos
              error et eveniet ipsum officiis perferendis quas rem!
            </div>
            <div>
              Ab aliquid, architecto consectetur cumque debitis distinctio dolores earum eius
              eligendi eos fugiat illo inventore iure maiores molestias nam perspiciatis porro
              praesentium quas rem reprehenderit sed, sint temporibus vel, voluptas.
            </div>
            <div>
              Blanditiis cupiditate debitis delectus distinctio ea earum eum fuga neque nobis odit
              omnis pariatur perferendis perspiciatis praesentium quibusdam rem repellendus, sed
              totam voluptates voluptatibus. Dolore hic nihil nobis pariatur voluptates!
            </div>
            <div>
              Architecto est fuga fugit in inventore ipsa iste, nulla tempore! Ab amet, consectetur
              dicta dolores eaque eos, et ex explicabo itaque nostrum optio quaerat qui recusandae,
              repudiandae vitae voluptate voluptatum!
            </div>
            <div>
              Aliquam commodi corporis cumque deleniti distinctio error esse, fugiat fugit hic id in
              itaque iure neque odio omnis, quod quos repellendus, tempora tempore totam! Corporis
              cupiditate est quam ullam! Dolores!
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}>
          РЦК Support 2022
        </Footer>
      </Layout>
    </Layout>
  )
}

function NavBar(props) {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label
    }
  }

  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5')
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />)
  ]

  const [collapsed, setCollapsed] = useState(false)
  console.log('collapsed state:', collapsed)
  return (
    <Sider
      trigger={null}
      collapsible
      breakpoint="lg"
      collapsed={props.isCollapsed}
      onBreakpoint={(broken) => {
        console.log('broken', broken)
        props.setIsCollapsed(broken)
      }}
      onCollapse={(collapsed, type) => {
        console.log('collapsed', collapsed)
        console.log('type', type)
        if (type === 'clickTrigger') {
          props.setIsCollapsed(collapsed)
        }
      }}>
      <Row style={{ height: 64 }}>
        {props.isCollapsed ? (
          <Col span={24}>
            <Space align="center">
              <img src={logo} alt="" className="logo" style={{ padding: 15, width: 80 }} />
            </Space>
          </Col>
        ) : (
          <Col span={12} offset={6}>
            <Space align="center">
              <img src={logo} alt="" className="logo" style={{ paddingTop: 10 }} />
            </Space>
          </Col>
        )}
      </Row>
      <Menu theme="dark" mode="inline" items={items} style={{ marginTop: 0 }} />
    </Sider>
  )
}

export default App
