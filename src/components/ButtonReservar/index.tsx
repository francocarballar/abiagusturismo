import React, { useState } from 'react'
import styles from './ButtonReservar.module.css'
import { Reserva } from '../Reserva'
import { usePositionButton } from '@src/hooks/usePositionButton'

function ButtonReservar () {
  const { button } = usePositionButton()
  const [stateReserva, setReserva] = useState(false)
  return (
    <>
      <button
        className={styles.button_reserva}
        ref={button}
        onClick={() => setReserva(true)}
      >
        RESERVAR
      </button>
      <Reserva
        stateReserva={stateReserva}
        setReserva={() => setReserva(false)}
      />
    </>
  )
}

export { ButtonReservar }
