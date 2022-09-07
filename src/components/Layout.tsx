import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import styles from '../common/styles/Layout.module.scss'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Home' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
  </>
)

export default Layout
