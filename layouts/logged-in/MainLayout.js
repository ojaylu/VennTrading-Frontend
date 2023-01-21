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
import styles from "public/styles/main_layout.module.scss";
import Header from "components/MainHeader";
import { useRouter } from "next/router";
const { Sider, Content } = Layout;
const { Item } = Breadcrumb;

export default function MainLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const { currentTheme } = useThemeSwitcher();
    const router = useRouter();

    const routes = [
      {label: "Home", path: "/usr/main"},
      {label: "Assets", path: "/usr/assets"},
      {label: "Trade", path: "/usr/trade"},
      {label: "History", path: "/usr/history-overview"},
    ]

    return (
      // <Layout style={{height: "100vh"}}>
      //   <Sider 
      //     trigger={ null } 
      //     collapsible 
      //     collapsed={ collapsed }
      //     breakpoint="md"
      //     collapsedWidth={0}
      //     onBreakpoint={
      //       broken => {
      //         broken && setCollapsed(true);
      //       }
      //     }
      //   >
      //     <SideBar />
      //   </Sider>
        <Layout style={{overflowY: "scroll"}}>
            <LayoutHeader>
                <Header routes={routes} />
            </LayoutHeader>
            <Content
                className={["site-layout-background", currentTheme == "light"? styles.light_content: styles.dark_content].join(" ")}
                style={{
                    margin: '24px 16px',
                    padding: 0,
                    minHeight: "auto",
                    backgroundColor: currentTheme == "light"? "rgb(255, 255, 255)": "rgb(38, 38, 38)",
                }}
            >
              { children }
            </Content>
        </Layout>
      // </Layout>
    );
};