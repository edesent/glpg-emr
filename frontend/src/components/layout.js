import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Layout = ({ title, children }) => {
  // const { children, title } = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
