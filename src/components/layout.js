import PropTypes from 'prop-types'
import styled from 'styled-components'
import SyncUserProfile from './SyncUser/Sync'
import IdleTimer from './IdleTimer'
import { useSettingsApp } from '../context/AppContext'
import { MainNav } from './Nav/MainNav'
import { Footer } from './Footer'

const Main = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
`

const Layout = ({ children }) => {
  const { configurationAppsettings } = useSettingsApp()

  return (
    <Main>
      <SyncUserProfile />
      <MainNav />
      <main>
        {configurationAppsettings && (
          <IdleTimer settings={configurationAppsettings} />
        )}
        {children}
        <Footer />
      </main>
    </Main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
