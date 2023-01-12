import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";
import { 
  Layout, 
  Button,
  Breadcrumb,
  PageHeader
} from "antd";
import { useState } from "react";
import UserOptions from "components/UserOptions.js";
import LayoutHeader from "components/LayoutHeader";
import SideBar from "components/logged-in/SideBar";
import { useThemeSwitcher } from "react-css-theme-switcher";
const { Sider, Content } = Layout;
const { Item } = Breadcrumb;

export default function MainLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const { currentTheme } = useThemeSwitcher();

    return (
      <Layout>
        <Sider 
          trigger={ null } 
          collapsible 
          collapsed={ collapsed }
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
                    padding: 0,
                    height: "300px",
                    backgroundColor: currentTheme == "light"? "rgb(255, 255, 255)": "rgb(38, 38, 38)"
                }}
            >
                { children }
            </Content>
        </Layout>
      </Layout>
    );
};