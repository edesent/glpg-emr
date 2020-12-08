import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { SidebarMenu } from './SidebarMenu'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
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
  title: PropTypes.string.isRequired,
}

export default Layout
