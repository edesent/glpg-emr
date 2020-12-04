import React from 'react'
import Head from 'next/head'
import { Login } from '../components/Pages/Login'

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login - GLPG EMR</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Login />
    </>
  )
}

export default LoginPage
