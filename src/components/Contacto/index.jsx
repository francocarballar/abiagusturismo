import React from 'react'
import styles from './Contacto.module.css'
import { InformacionContacto } from '../InformacionContacto'
import { RedesSocialesContacto } from '../RedesSocialesContacto'
import { FormularioContacto } from '../FormularioContacto'

function Contacto (props) {
  const sectionContacto = {
    backgroundColor: props.sectionBackground
  }
  const divContacto = {
    order: props.orderContainer__informacionContacto,
    padding: props.padding
  }
  const h2 = {
    display: props.h2Display
  }
  return (
    <React.Fragment>
      <section className={styles.section__contacto} style={sectionContacto}>
        <div className={styles.div__contacto_title} style={h2}>
          <h2>CONTACTO</h2>
        </div>
        <div className={styles.div__contacto} style={divContacto}>
          <div className={styles.div__container_contacto}>
            <InformacionContacto />
            <RedesSocialesContacto />
          </div>
          <FormularioContacto />
        </div>
      </section>
    </React.Fragment>
  )
}

export { Contacto }
