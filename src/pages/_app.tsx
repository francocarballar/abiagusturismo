import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import { useDarkMode } from '@src/hooks/useDarkMode'
import '@src/styles/globals.css'
import { Provider } from '@src/context'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ButtonWhatsApp } from '@components/ButtonWhatsApp'
import { AppProps } from 'next/app'

function MyApp ({ Component, pageProps }: AppProps) {
  useDarkMode()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true)
    }
  }, [])
  if (isLoaded) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  return (
    <Provider>
      <>
        <Head>
          <link rel='icon' href='/media/icon/favicon.ico' />
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='robots' content='index, follow' />
          <meta name='theme-color' content='#333367' />
        </Head>
        <Header />
        <Component {...pageProps} />
        <ButtonWhatsApp />
        <Footer />
      </>
    </Provider>
  )
}

export default MyApp
