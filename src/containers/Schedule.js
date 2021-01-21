import React from 'react'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { SubNav } from '../components/Nav/SubNav'

const SchedulePage = () => {
  return (
    <Layout>
      <Header title="Schedule">
        <SubNav />
      </Header>
    </Layout>
  )
}

export default SchedulePage
