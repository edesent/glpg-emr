import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { SubNav } from '../components/Nav/SubNav'

const DashboardPage = () => {
  return (
    <Layout>
      <Header title="Dashboard">
        <SubNav>
          <NavLink title="Dashboard" to="/dashboard">
            Today
          </NavLink>
          <NavLink title="Patient Notes" to="/dashboard">
            Patient Notes
          </NavLink>
          <NavLink title="Custom Tasks" to="/dashboard">
            Custom Tasks
          </NavLink>
        </SubNav>
      </Header>
    </Layout>
  )
}

export default DashboardPage
