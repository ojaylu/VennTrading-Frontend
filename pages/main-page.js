import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { 
  Layout, 
  Menu, 
  Button,  
  PageHeader,
  Breadcrumb
} from "antd";
import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher.js";
const { Header, Sider, Content } = Layout;
const { Item } = Breadcrumb;

function Main() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
          <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            breakpoint="md"
            collapsedWidth={0}
            onBreakpoint={
              broken => {
                broken && setCollapsed(true);
              }
            }
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
            />
          </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              height: "auto"
            }}
          >
            <PageHeader
              backIcon={
                <Button
                  icon={ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                  onClick={() => setCollapsed(!collapsed)}
                  type="text"
                />
              }
              onBack={() => {}}
              title={
                <Breadcrumb>
                  <Item>a</Item>
                  <Item>b</Item>
                </Breadcrumb>
              }
              extra={
                <ThemeSwitcher />
              }
              style={{
                padding: "10px 20px"
              }}
            />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
};

export default Main;