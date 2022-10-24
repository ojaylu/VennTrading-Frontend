import Link from "next/link"
import { useRouter } from "next/router"
import { Layout, PageHeader, Typography } from "antd"
import { auth } from "../firebase-config.js"
import MainHeader from "layouts/MainHeader.js"

const { Header, Content, Footer } = Layout
console.log('@trace hahahahaha', auth.currentUser)
export default function() {
  return (
    <Layout>
      <Header
        style={{
          height: "auto",
          padding: 0
        }}
      >
        <MainHeader />
      </Header>
      <Content>
      </Content>
      <Footer>

      </Footer>
    </Layout>
  )
}