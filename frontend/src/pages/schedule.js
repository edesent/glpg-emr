import React from 'react'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { Submenu } from '../components/Submenu'
import { Footer } from '../components/Footer'

const SchedulePage = () => {
  return (
    <Layout title="Schedule">
      <Header />
      <Submenu title="Schedule" />
      <Footer />
    </Layout>
  )
}

export default SchedulePage
