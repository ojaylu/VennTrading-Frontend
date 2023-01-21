import Link from "next/link";
import { Layout } from "antd";
import MainHeader from "components/MainHeader.js";
import Header from "components/LayoutHeader";
import styles from "public/styles/public_page.module.scss";

const { Content, Footer } = Layout

export default function PublicPage({ children }) {
  const routes  = [
    {label: "Introduction", path: "/"},
    {label: "Contact Us",  path: "/contact-us"}
  ];

  return (
    <Layout>
      <Header>
        <MainHeader routes={routes} />
      </Header>
      <Content
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        className={styles.content}
      >
        {children}
      </Content>
      <Footer>
        <Link href="/test-loading">hi</Link>
        <Link href="/login">hi</Link>
      </Footer>
    </Layout>
  )
}