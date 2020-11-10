import React from 'react'
import Head from 'next/head'

const Layout = (props) => {
  const { children, title } = props
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
