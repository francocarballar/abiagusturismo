import React from 'react'
import styles from './Contacto.module.css'
import { InformacionContacto } from '../InformacionContacto'
import { RedesSocialesContacto } from '../RedesSocialesContacto'
import { FormularioContacto } from '../FormularioContacto'
import { Contact } from '@src/types'

function Contacto ({
  sectionBackground,
  orderContainer,
  h2Display,
  textColor,
  colorSocialMedia
}: Contact) {
  const sectionContacto = {
    backgroundColor: sectionBackground
  }
  const divContacto = {
    order: orderContainer
  }
  const h2 = {
    display: h2Display
  }
  return (
    <>
      <section className={styles.section__contacto} style={sectionContacto}>
        <div className={styles.container}>
          <div className={styles.div__contacto_title} style={h2}>
            <h2>CONTACTO</h2>
          </div>
          <div className={styles.div__contacto}>
            <div className={styles.div__container_contacto} style={divContacto}>
              <InformacionContacto textColor={textColor} />
              <RedesSocialesContacto color={colorSocialMedia} />
            </div>
            <FormularioContacto textColor={textColor} />
          </div>
        </div>
      </section>
    </>
  )
}

export { Contacto }
