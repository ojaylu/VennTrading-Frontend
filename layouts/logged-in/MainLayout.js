import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";
import { 
  Layout, 
  Button,
  Breadcrumb
} from "antd";
import { PageHeader } from '@ant-design/pro-layout';
import { useState } from "react";
import UserOptions from "components/UserOptions.js";
import LayoutHeader from "components/LayoutHeader";
import SideBar from "components/logged-in/SideBar";
const { Sider, Content } = Layout;
const { Item } = Breadcrumb;

export default function MainLayout({ children }) {
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
          <SideBar />
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
                    backgroundColor: 'grey',
                    padding: 0
                }}
            >
                { children }
            </Content>
        </Layout>
      </Layout>
    );
};