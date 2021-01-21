import React from 'react'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { SubNav } from '../components/Nav/SubNav'

const PatientsPage = () => {
  return (
    <Layout>
      <Header title="Patients">
        <SubNav title="Patients" />
      </Header>
    </Layout>
  )
}

export default PatientsPage
