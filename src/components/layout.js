import PropTypes from 'prop-types'
import { SidebarMenu } from './SidebarMenu'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <SidebarMenu />
      <main>
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
