import React from 'react'
import styles from './MapaContacto.module.css'

function MapaContacto () {
  return (
    <>
      <section className={styles.section__maps}>
        <div>
          <h2>CONFÍA EN NUESTROS SERVICIOS.</h2>
          <h2>CONTÁCTANOS PARA CUMPLIR TUS SUEÑOS.</h2>
        </div>
        <div className={styles.div__container__maps}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.024576148925!2d-68.80095738508436!3d-32.89751847673239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0f0389e5c117%3A0x2ef63d89517c77f!2sAbiagus%20Turismo!5e0!3m2!1ses-419!2sar!4v1641932328986!5m2!1ses-419!2sar'
            width='600'
            height='450'
            loading='lazy'
          ></iframe>
        </div>
      </section>
    </>
  )
}

export { MapaContacto }
