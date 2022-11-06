import Link from "next/link";
import { Layout } from "antd";
import MainHeader from "components/MainHeader.js";
import Header from "components/LayoutHeader";

const { Content, Footer } = Layout

export default function({ children, className }) {
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
        className={className}
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