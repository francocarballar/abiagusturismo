import React from 'react'
import '../styles/globals.css'
import {Header} from '../src/components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
