import React from 'react'
import './App.css'
import { Header } from '../Header/'
import { Main } from '../Main/'
import { Footer } from '../Footer/'
import { ButtonWhatsApp } from '../ButtonWhatsApp'

function App () {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <ButtonWhatsApp />
      <Footer />
    </React.Fragment>
  )
}

export { App }
