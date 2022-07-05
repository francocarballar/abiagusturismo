import React, { useState } from 'react'
import './ButtonReservar.css'
import { Reserva } from '../Reserva'

function ButtonReservar () {
  const [stateButton, setButton] = useState('fixed')
  const button = {
    position: stateButton
  }
  function position () {
    if (window.innerWidth < 800 && window.innerHeight <= 580) {
      const altura = window.scrollY
      if (altura > 700) {
        setButton('static')
      } else {
        setButton('fixed')
      }
    } else if (window.innerWidth < 800 && window.innerHeight <= 800) {
      const altura = window.scrollY
      if (altura > 300) {
        setButton('static')
      } else {
        setButton('fixed')
      }
    } else if (window.innerWidth < 800 && window.innerHeight <= 1000) {
      const altura = window.scrollY
      if (altura > 100) {
        setButton('static')
      } else {
        setButton('fixed')
      }
    }
    if (window.innerWidth >= 1024) {
      setButton('static')
    }
  }
  window.addEventListener('scroll', position)

  const [stateReserva, setReserva] = useState(false)
  return (
    <React.Fragment>
      <a
        target='_blank'
        className='button-reserva'
        id='button-whatsapp'
        style={button}
        onClick={() => setReserva(true)}
      >
        RESERVAR
      </a>
      <Reserva
        stateReserva={stateReserva}
        setReserva={() => setReserva(false)}
      />
    </React.Fragment>
  )
}

export { ButtonReservar }
