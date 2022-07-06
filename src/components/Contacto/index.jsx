import React, { useEffect } from 'react'
import styles from './Contacto.module.css'
import { InformacionContacto } from '../InformacionContacto'
import { RedesSocialesContacto } from '../RedesSocialesContacto'
import { FormularioContacto } from '../FormularioContacto'

function Contacto (props) {
  const sectionContacto = {
    backgroundColor: props.sectionBackground
  }
  const divContacto = {
    order: props.orderContainer__informacionContacto
  }
  const h2 = {
    display: props.h2Display
  }
  let color = 'var(--contact-text-color)'
  return (
    <React.Fragment>
      <section className={styles.section__contacto} style={sectionContacto}>
        <div className={styles.div__contacto_title} style={h2}>
          <h2>CONTACTO</h2>
        </div>
        <div className={styles.div__contacto}>
          <div className={styles.div__container_contacto} style={divContacto}>
            <InformacionContacto textColor={color} />
            <RedesSocialesContacto svgColor={color} />
          </div>
          <FormularioContacto />
        </div>
      </section>
    </React.Fragment>
  )
}

export { Contacto }
