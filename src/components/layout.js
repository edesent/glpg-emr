import PropTypes from 'prop-types'
import IdleTimer from './IdleTimer'
import { MainNav } from './Nav/MainNav'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <IdleTimer />
      <MainNav />
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
