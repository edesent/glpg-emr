import { NavLink } from 'react-router-dom'
import Layout from '../components/layout'
import { Header } from '../components/Header'
import { SubNav } from '../components/Nav/SubNav'

// TODO: prop validation
// eslint-disable-next-line react/prop-types
const DashboardPage = ({ match }) => {
  const path = 'dashboard'
  return (
    <Layout>
      <Header title="Dashboard">
        <SubNav>
          <NavLink exact title="Dashboard" to={`/${path}`}>
            Overview
          </NavLink>
          <NavLink title="Dashboard" to={`/${path}/today`}>
            Today
          </NavLink>
          <NavLink title="Patient Notes" to={`/${path}/notes`}>
            Patient Notes
          </NavLink>
          <NavLink title="Custom Tasks" to={`/${path}/tasks`}>
            Custom Tasks
          </NavLink>
        </SubNav>
      </Header>
      <main style={{ padding: `40px 80px 80px` }}>
        {/* // TODO: prop validation */}
        {/* eslint-disable-next-line react/prop-types */}
        {!match?.params?.subLink ? (
          <h2>Dashboard component</h2>
        ) : (
          <>
            {
              {
                today: <h2>Today component</h2>,
                notes: <h2>Notes component</h2>,
                tasks: <h2>Tasks component</h2>,
                // TODO: prop validation
                // eslint-disable-next-line react/prop-types
              }[match?.params?.subLink]
            }
          </>
        )}
      </main>
    </Layout>
  )
}

export default DashboardPage
