import React from 'react'
import styles from './Itinerario.module.css'

function Itinerario ({ stateItinerario, setItinerario }) {
  return (
    <>
      {stateItinerario && (
        <section>
          <p>Example</p>
        </section>
      )}
    </>
  )
}

export { Itinerario }
