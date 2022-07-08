import React, { useState } from 'react'
import { useEventListener } from 'usehooks-ts'
import styles from './ButtonReservar.module.css'
import { Reserva } from '../Reserva'

function ButtonReservar () {
  const [stateButton, setButton] = useState('fixed')
  const button = {
    position: stateButton
  }
  function positionFixed () {
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
  }
  function positionStatic () {
    if (window.innerWidth >= 1024) {
      setButton('static')
    }
  }
  useEventListener('scroll', positionStatic)
  useEventListener('scroll', positionFixed)
  const [stateReserva, setReserva] = useState(false)
  return (
    <React.Fragment>
      <a
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
