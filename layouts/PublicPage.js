import Link from "next/link";
import { Layout } from "antd";
import MainHeader from "components/MainHeader.js";
import Header from "components/LayoutHeader";
import styles from "public/styles/public_page.module.scss";

const { Content, Footer } = Layout

export default function PublicPage({ children }) {
  return (
    <Layout>
      <Header>
        <MainHeader />
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