import React, { useState, useEffect } from 'react'
import styles from './ButtonReservar.module.css'
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
  useEffect(() => {
    window.addEventListener('scroll', position)
  })
  const [stateReserva, setReserva] = useState(false)
  return (
    <React.Fragment>
      <a
        target='_blank'
        className={styles.button_reserva}
        id={styles.button_whatsapp}
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
