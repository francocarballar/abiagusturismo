import React from 'react'
import ReactGA from 'react-ga'
import { useDarkMode } from '@src/hooks/useDarkMode'
import '@src/styles/globals.css'
import { Provider } from '@src/context'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { ButtonWhatsApp } from '@components/ButtonWhatsApp'
import { AppProps } from 'next/app'

ReactGA.initialize('G-VFF6WRN7SM')

function MyApp ({ Component, pageProps }: AppProps) {
  useDarkMode()
  return (
    <Provider>
      <>
        <Header />
        <Component {...pageProps} />
        <ButtonWhatsApp />
        <Footer />
      </>
    </Provider>
  )
}

export default MyApp
