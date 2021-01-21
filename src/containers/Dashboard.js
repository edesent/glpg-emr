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
        <NavLink title="Patient Notes" to="/dashboard">
          Patient Notes
        </NavLink>
        <NavLink title="Custom Tasks" to="/dashboard">
          Custom Tasks
        </NavLink>
      </SubNav>
    </Layout>
  )
}

export default DashboardPage
