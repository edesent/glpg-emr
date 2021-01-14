import PropTypes from 'prop-types'
import styled from 'styled-components'
import IdleTimer from './IdleTimer'
import { MainNav } from './Nav/MainNav'
import { UserMenu } from './UserMenu'
import { Footer } from './Footer'

const Main = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
`

const Children = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`

const Layout = ({ children }) => {
  return (
    <Main>
      <IdleTimer />
      <MainNav />
      <main>
        <UserMenu />
        <Children>{children}</Children>
        <Footer />
      </main>
    </Main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
