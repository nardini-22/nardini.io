import { AppProps } from 'next/app'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from '@/context/Theme'
import { darkTheme, lightTheme } from '@/styles/theme'
import Head from 'next/head'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<string>('light')
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
      <Theme.Provider value={{ theme, setTheme }}>
        <ThemeProvider
          theme={theme === 'dark' ? darkTheme.theme : lightTheme.theme}
        >
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </Theme.Provider>
    </>
  )
}

export default MyApp
