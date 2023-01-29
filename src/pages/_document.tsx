import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <meta
          name='google-site-verification'
          content='E-HfOz7kh6jsoypB9t256TFS-CwC32pTgRYDeLd3Sjg'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='credentials'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:wght@400;700&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
