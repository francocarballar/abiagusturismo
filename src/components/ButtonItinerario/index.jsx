import React, { useState } from 'react'
import styles from './ButtonItinerario.module.css'
import { Itinerario } from '../Itinerario'

function ButtonItinerario ({ content, path }) {
  const [stateItinerario, setItinerario] = useState(false)
  return (
    <React.Fragment>
      <a
        target='_blank'
        href={path}
        className={styles.button_itinerario}
        // onClick={() => setItinerario(true)}
      >
        Itinerario
      </a>
      <Itinerario
        content={content}
        stateItinerario={stateItinerario}
        setItinerario={() => setItinerario(false)}
      />
    </React.Fragment>
  )
}

export { ButtonItinerario }
