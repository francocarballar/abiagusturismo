import React from 'react'
import styles from './ButtonItinerario.module.css'
import { BtnItinerario } from '@src/types'

function ButtonItinerario ({ path }: BtnItinerario) {
  return (
    <>
      <a
        target='_blank'
        rel='noreferrer'
        href={path}
        className={styles.button_itinerario}
      >
        Itinerario
      </a>
    </>
  )
}

export { ButtonItinerario }
