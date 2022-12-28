import React, { useState } from 'react'
import { usePositionButton } from '@src/hooks/usePositionButton'
import styles from '@components/ButtonReservar/ButtonReservar.module.css'
import { CotizarServicios } from '../CotizarServicios'

function ButtonCotizarServicios () {
  const { button } = usePositionButton()
  const [stateReserva, setReserva] = useState<boolean>(false)
  return (
    <>
      <button
        className={styles.button_reserva}
        ref={button}
        onClick={() => setReserva(true)}
      >
        COTIZAR
      </button>
      <CotizarServicios
        stateReserva={stateReserva}
        setReserva={() => setReserva(false)}
      />
    </>
  )
}

export { ButtonCotizarServicios }
