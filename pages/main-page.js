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
import { useAuth } from "components/AuthProvider.js";
import UserOptions from "components/UserOptions.js";
import LayoutHeader from "components/LayoutHeader";
const { Sider, Content } = Layout;
const { Item } = Breadcrumb;

export default function Main() {
    const [collapsed, setCollapsed] = useState(false);
    const { logout } = useAuth();
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
                {
                  key: "4",
                  label: <Button
                    onClick={logout}
                    block
                    type="text"
                    style={{
                      color: "inherit"
                    }}
                  >
                    Logout
                  </Button>
                }
              ]}
            />
          </Sider>
        <Layout>
          <LayoutHeader>
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
                <UserOptions />
              }
            />
          </LayoutHeader>
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