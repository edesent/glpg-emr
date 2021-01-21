import React from 'react'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { SubNav } from '../components/Nav/SubNav'

const MessagesPage = () => {
  return (
    <Layout>
      <Header title="Messages">
        <SubNav title="Messages" />
      </Header>
    </Layout>
  )
}

export default MessagesPage
