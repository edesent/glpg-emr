import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { SubNav } from '../components/Nav/SubNav'

const DashboardPage = () => {
  return (
    <Layout>
      <SubNav title="Dashboard">
        <NavLink title="Dashboard" to="/dashboard">
          Today
        </NavLink>
        <a href="/dashboard">Patient Notes</a>
        <a href="/dashboard">Custom Tasks</a>
      </SubNav>
    </Layout>
  )
}

export default DashboardPage
