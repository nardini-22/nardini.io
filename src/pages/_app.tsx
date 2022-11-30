import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
        <title>Nardini.io</title>
        {/* <link rel="shortcut icon" href="/img/icon-512.png" /> */}
        {/* <link rel="apple-touch-icon" href="/img/icon-512.png" /> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        {/* <meta name="theme-color" content="#06092B" /> */}
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
    </>
  )
}

export default MyApp