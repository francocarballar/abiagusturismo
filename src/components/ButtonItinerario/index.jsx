import React from 'react'
import styles from './ButtonItinerario.module.css'

function ButtonItinerario (props) {
  const [stateItinerario, setItinerario] = useState(false)
  return (
    <React.Fragment>
      <a
        target='_blank'
        className={styles.button_reserva}
        id={styles.button_whatsapp}
        style={button}
        onClick={() => setItinerario(true)}
      >
        RESERVAR
      </a>
      <Itinerario
        stateItinerario={stateItinerario}
        setItinerario={() => setItinerario(false)}
      />
    </React.Fragment>
  )
}

export { ButtonItinerario }
