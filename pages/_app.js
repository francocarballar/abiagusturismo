import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/DarkMode.css'
import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { ButtonWhatsApp } from '../src/components/ButtonWhatsApp'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href='/media/icon/favicon.ico'
          onload="this.rel='stylesheet'"
        />
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <ButtonWhatsApp />
      <Footer />
    </>
  )
}

export default MyApp
